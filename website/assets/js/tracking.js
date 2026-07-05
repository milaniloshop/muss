/**
 * Milan Hype — deferred Meta / GA4 / Google Ads / TikTok tracking (Hamza-style)
 */
(function () {
  const cfg = window.MH_TRACKING || {};
  if (document.body?.dataset?.page === 'success' || /success\.html/i.test(location.pathname)) {
    cfg.deferPixels = false;
  }
  let pixelsLoaded = false;
  let pendingEvents = [];

  function hasAnyPixel() {
    return cfg.metaPixelId || cfg.ga4MeasurementId || (cfg.googleAdsId && cfg.googleAdsConversionLabel) || cfg.tiktokPixelId;
  }

  function eventId() {
    return 'mh_' + Date.now() + '_' + Math.random().toString(36).slice(2, 9);
  }

  function loadScript(src, async) {
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.async = async !== false;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  function loadPixels() {
    if (pixelsLoaded || !hasAnyPixel()) return Promise.resolve();
    pixelsLoaded = true;

    const jobs = [];

    if (cfg.metaPixelId) {
      jobs.push(
        loadScript('https://connect.facebook.net/en_US/fbevents.js').then(() => {
          window.fbq = window.fbq || function () {
            window.fbq.callMethod ? window.fbq.callMethod.apply(window.fbq, arguments) : window.fbq.queue.push(arguments);
          };
          if (!window._fbq) window._fbq = window.fbq;
          window.fbq.push = window.fbq;
          window.fbq.loaded = true;
          window.fbq.version = '2.0';
          window.fbq.queue = [];
          window.fbq('init', cfg.metaPixelId);
          window.fbq('track', 'PageView');
        })
      );
    }

    if (cfg.ga4MeasurementId || cfg.googleAdsId) {
      const gtagId = cfg.ga4MeasurementId || cfg.googleAdsId;
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag('js', new Date());
      if (cfg.ga4MeasurementId) window.gtag('config', cfg.ga4MeasurementId, { send_page_view: true });
      if (cfg.googleAdsId) window.gtag('config', cfg.googleAdsId);
      jobs.push(loadScript('https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(gtagId)));
    }

    if (cfg.tiktokPixelId) {
      jobs.push(
        loadScript('https://analytics.tiktok.com/i18n/pixel/events.js').then(() => {
          window.TiktokAnalyticsObject = 'ttq';
          const ttq = window.ttq = window.ttq || [];
          ttq.methods = ['page', 'track', 'identify', 'instances', 'debug', 'on', 'off', 'once', 'ready', 'alias', 'group', 'enableCookie', 'disableCookie'];
          ttq.setAndDefer = function (t, ev) { t[ev] = function () { t.push([ev].concat(Array.prototype.slice.call(arguments, 0))); }; };
          for (let i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
          ttq.instance = function (id) {
            const inst = ttq._i[id] || [];
            for (let n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(inst, ttq.methods[n]);
            return inst;
          };
          ttq.load = function (id) {
            ttq._i = ttq._i || {};
            ttq._i[id] = [];
            ttq._i[id]._u = 'https://analytics.tiktok.com/i18n/pixel/events.js';
            ttq._t = ttq._t || {};
            ttq._t[id] = +new Date();
            ttq._o = ttq._o || {};
            ttq._o[id] = {};
          };
          ttq.load(cfg.tiktokPixelId);
          ttq.page();
        })
      );
    }

    return Promise.all(jobs).then(flushPending).catch(() => {});
  }

  function flushPending() {
    const q = pendingEvents.splice(0);
    q.forEach((fn) => { try { fn(); } catch (_) {} });
  }

  function ensurePixels() {
    if (pixelsLoaded) return Promise.resolve();
    return loadPixels();
  }

  function scheduleDeferredLoad() {
    if (!hasAnyPixel() || !cfg.deferPixels) {
      ensurePixels();
      return;
    }
    let fired = false;
    const fire = () => {
      if (fired) return;
      fired = true;
      ensurePixels();
    };
    window.addEventListener('scroll', () => {
      if (window.scrollY >= (cfg.deferScrollPx || 120)) fire();
    }, { passive: true, once: true });
    setTimeout(fire, cfg.deferMs || 2000);
  }

  window.MH = {
    eventId,

    track(eventName, params) {
      params = params || {};
      const id = params.event_id || eventId();
      const payload = { ...params, event_id: id };

      const run = () => {
        const currency = params.currency || cfg.currency || 'USD';
        const value = params.value != null ? Number(params.value) : undefined;

        if (cfg.metaPixelId && window.fbq) {
          const metaParams = {};
          if (value != null) {
            metaParams.value = value;
            metaParams.currency = currency;
          }
          if (params.content_ids) metaParams.content_ids = params.content_ids;
          if (params.content_type) metaParams.content_type = params.content_type;
          window.fbq('track', eventName, metaParams, { eventID: id });
        }

        if (window.gtag) {
          if (eventName === 'Purchase' && cfg.googleAdsId && cfg.googleAdsConversionLabel) {
            window.gtag('event', 'conversion', {
              send_to: cfg.googleAdsId + '/' + cfg.googleAdsConversionLabel,
              value: value,
              currency: currency,
              transaction_id: params.transaction_id || id
            });
          }
          if (cfg.ga4MeasurementId) {
            const gaMap = {
              ViewContent: 'view_item',
              AddToCart: 'add_to_cart',
              InitiateCheckout: 'begin_checkout',
              Purchase: 'purchase'
            };
            const gaEvent = gaMap[eventName] || eventName.toLowerCase();
            window.gtag('event', gaEvent, {
              currency,
              value,
              items: params.items,
              transaction_id: params.transaction_id
            });
          }
        }

        if (cfg.tiktokPixelId && window.ttq) {
          const ttMap = {
            ViewContent: 'ViewContent',
            AddToCart: 'AddToCart',
            InitiateCheckout: 'InitiateCheckout',
            Purchase: 'CompletePayment'
          };
          const ttEvent = ttMap[eventName] || eventName;
          window.ttq.track(ttEvent, {
            content_id: params.content_ids?.[0],
            content_type: params.content_type || 'product',
            value,
            currency
          });
        }
      };

      if (pixelsLoaded) run();
      else pendingEvents.push(run);
    },

    viewProduct(product) {
      if (!product) return;
      this.track('ViewContent', {
        content_ids: [product.id],
        content_type: 'product',
        value: product.price,
        items: [{ item_id: product.id, item_name: product.title, price: product.price }]
      });
    },

    addToCart(product, qty) {
      if (!product) return;
      this.track('AddToCart', {
        content_ids: [product.id],
        content_type: 'product',
        value: product.price * (qty || 1),
        items: [{ item_id: product.id, item_name: product.title, price: product.price, quantity: qty || 1 }]
      });
    },

    beginCheckout(items) {
      const value = items.reduce((s, i) => s + i.price * (i.qty || 1), 0);
      this.track('InitiateCheckout', {
        content_ids: items.map((i) => i.id),
        content_type: 'product',
        value,
        items: items.map((i) => ({
          item_id: i.id,
          item_name: i.title,
          price: i.price,
          quantity: i.qty || 1
        }))
      });
    },

    savePendingPurchase(data) {
      try {
        sessionStorage.setItem('mh_pending_purchase', JSON.stringify({ ...data, ts: Date.now() }));
      } catch (_) {}
    },

    firePurchaseFromSession(extra) {
      extra = extra || {};
      let pending = null;
      try {
        pending = JSON.parse(sessionStorage.getItem('mh_pending_purchase') || 'null');
        sessionStorage.removeItem('mh_pending_purchase');
      } catch (_) {}

      const value = extra.value != null ? extra.value : pending?.value;
      const transaction_id = extra.transaction_id || pending?.transaction_id || this.eventId();

      if (sessionStorage.getItem('mh_purchase_fired_' + transaction_id)) return;
      sessionStorage.setItem('mh_purchase_fired_' + transaction_id, '1');

      this.track('Purchase', {
        transaction_id,
        value: value || 89,
        content_ids: pending?.content_ids || ['corefit-pro'],
        content_type: 'product',
        items: pending?.items
      });
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scheduleDeferredLoad);
  } else {
    scheduleDeferredLoad();
  }
})();
