const uploadedImages = new Map();
let paymentLinks = {};

function getSiteBase() {
  const parts = window.location.pathname.split('/').filter(Boolean);
  if (parts.length && !parts[0].includes('.')) return '/' + parts[0];
  return '';
}

async function loadPaymentLinks() {
  if (typeof PAYMENT_LINKS !== 'undefined') {
    paymentLinks = { ...PAYMENT_LINKS };
  }
  try {
    const base = getSiteBase();
    const res = await fetch(`${base}/stripe-payment-links.json`);
    if (res.ok) paymentLinks = { ...paymentLinks, ...(await res.json()) };
  } catch (_) {}
}

function checkoutWithPaymentLink(productId) {
  const url = paymentLinks[productId];
  if (url) {
    window.location.href = url;
    return true;
  }
  return false;
}

async function loadUploadedImages() {
  try {
    const res = await fetch('/api/images');
    if (!res.ok) return;
    const files = await res.json();
    files.forEach((f) => uploadedImages.set(f.filename, f.exists));
  } catch (_) {}
}

function resolveImage(sources, product) {
  const slots = product?.imageSlots || [];
  for (const slot of slots) {
    if (uploadedImages.get(slot.filename)) {
      return `assets/images/products/${slot.filename}`;
    }
  }
  for (const src of sources) {
    const name = src.split('/').pop();
    if (uploadedImages.get(name)) return src;
  }
  return sources.find((s) => s.endsWith('.svg')) || sources[sources.length - 1];
}

function productCardHTML(product) {
  const img = resolveImage(product.images, product);
  const badgeClass = product.badge === 'Sale' ? 'sale' : '';
  const compareHTML = product.compareAt
    ? `<span class="compare">${formatPrice(product.compareAt)}</span>`
    : '';
  return `
    <article class="product-card">
      <a href="product.html?id=${product.id}" class="product-card-link">
        <div class="product-image-wrap">
          ${product.badge ? `<span class="product-badge ${badgeClass}">${product.badge}</span>` : ''}
          <img src="${img}" alt="${product.title}" loading="lazy"
               onerror="this.onerror=null;this.src='${product.images.find((s) => s.endsWith('.svg'))}'">
        </div>
        <h3 class="product-title">${product.title}</h3>
        <p class="product-price">${formatPrice(product.price)}${compareHTML}</p>
      </a>
    </article>`;
}

function tierCardHTML(product) {
  const img = resolveImage(product.images, product);
  const featured = product.badge === 'Best Seller' ? ' tier-card--featured' : '';
  const compareHTML = product.compareAt
    ? `<span class="compare">${formatPrice(product.compareAt)}</span>`
    : '';
  return `
    <article class="tier-card${featured}">
      <a href="product.html?id=${product.id}" class="tier-card-link">
        <div class="tier-card-image">
          ${product.badge ? `<span class="tier-card-badge">${product.badge}</span>` : ''}
          <img src="${img}" alt="${product.title}" loading="lazy"
               onerror="this.onerror=null;this.src='${product.images.find((s) => s.endsWith('.svg'))}'">
        </div>
        <div class="tier-card-body">
          <p class="tier-card-tier">${product.tier} · Chest + Core Tank</p>
          <h3>${product.title.replace('CoreFit ', 'CoreFit ')}</h3>
          <p class="tier-card-fabric">${product.fabric}</p>
          <p class="tier-card-desc">${product.shortDescription}</p>
          <p class="tier-card-price">${formatPrice(product.price)}${compareHTML}</p>
          <span class="btn btn-primary btn-block">View Details</span>
        </div>
      </a>
    </article>`;
}

function renderProductGrid(container, products) {
  if (!container) return;
  container.innerHTML = products.map(productCardHTML).join('');
}

function renderTierGrid(container, products) {
  if (!container) return;
  const list = products || getTierProducts();
  container.innerHTML = list.map(tierCardHTML).join('');
}

function initMobileNav() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-mobile');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => nav.classList.remove('open'));
  });
}

function initFAQ() {
  document.querySelectorAll('.faq-question').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

function initNewsletter() {
  document.querySelectorAll('.newsletter-form').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Welcome to Milan Hype CoreFit.');
      form.reset();
    });
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Message sent. We\'ll reply within 24 hours.');
    form.reset();
  });
}

/* Cart */
let cart = JSON.parse(localStorage.getItem('milanhype-cart') || '[]');

function saveCart() {
  localStorage.setItem('milanhype-cart', JSON.stringify(cart));
  updateCartCount();
  renderCart();
}

function updateCartCount() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('.cart-count').forEach((el) => {
    el.textContent = count;
  });
}

function addToCart(product, size) {
  const existing = cart.find((i) => i.id === product.id && i.size === size);
  if (existing) existing.qty++;
  else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      size,
      qty: 1,
      image: resolveImage(product.images, product)
    });
  }
  saveCart();
  openCart();
  showToast('Added to bag');
}

function openCart() {
  document.querySelector('.cart-overlay')?.classList.add('open');
  document.querySelector('.cart-drawer')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.querySelector('.cart-overlay')?.classList.remove('open');
  document.querySelector('.cart-drawer')?.classList.remove('open');
  document.body.style.overflow = '';
}

function renderCart() {
  const container = document.querySelector('.cart-items');
  const totalEl = document.querySelector('.cart-total-amount');
  if (!container) return;

  if (!cart.length) {
    container.innerHTML = '<p class="cart-empty">Your bag is empty.</p>';
    if (totalEl) totalEl.textContent = '$0.00';
    return;
  }

  let total = 0;
  container.innerHTML = cart.map((item, idx) => {
    total += item.price * item.qty;
    return `
      <div class="cart-item">
        <div class="cart-item-img"><img src="${item.image}" alt="" onerror="this.style.display='none'"></div>
        <div class="cart-item-info">
          <h4>${item.title}</h4>
          <p>Size ${item.size} · Qty ${item.qty} · ${formatPrice(item.price)}</p>
          <button type="button" data-remove="${idx}" style="font-size:0.75rem;margin-top:0.25rem;text-decoration:underline;">Remove</button>
        </div>
      </div>`;
  }).join('');

  if (totalEl) totalEl.textContent = formatPrice(total);

  const shippingNote = document.querySelector('.cart-shipping-note');
  if (shippingNote) {
    if (total >= BRAND.shippingFreeOver) {
      shippingNote.textContent = 'Complimentary shipping applied.';
    } else {
      shippingNote.textContent = `Add ${formatPrice(BRAND.shippingFreeOver - total)} for complimentary shipping`;
    }
  }

  container.querySelectorAll('[data-remove]').forEach((btn) => {
    btn.addEventListener('click', () => {
      cart.splice(Number(btn.dataset.remove), 1);
      saveCart();
    });
  });
}

async function startCheckout(items) {
  const checkoutItems = items || cart;
  if (!checkoutItems.length) {
    showToast('Your bag is empty');
    return;
  }

  if (checkoutItems.length === 1 && checkoutWithPaymentLink(checkoutItems[0].id)) {
    return;
  }

  const btn = document.getElementById('checkout-btn');
  if (btn) {
    btn.disabled = true;
    btn.textContent = 'Processing…';
  }

  try {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: checkoutItems })
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
      return;
    }
    if (checkoutItems.length === 1 && checkoutWithPaymentLink(checkoutItems[0].id)) return;
    showToast(data.error || 'Checkout one item at a time via Buy Now');
  } catch (_) {
    if (checkoutItems.length === 1 && checkoutWithPaymentLink(checkoutItems[0].id)) return;
    showToast('Checkout failed. Use Buy Now on product page.');
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.textContent = 'Secure Checkout';
    }
  }
}

function initCart() {
  document.querySelectorAll('.cart-open').forEach((el) => el.addEventListener('click', openCart));
  document.querySelector('.cart-close')?.addEventListener('click', closeCart);
  document.querySelector('.cart-overlay')?.addEventListener('click', closeCart);
  document.getElementById('checkout-btn')?.addEventListener('click', () => startCheckout());
  document.querySelectorAll('.cart-checkout-btn').forEach((btn) => {
    btn.addEventListener('click', () => startCheckout());
  });
  updateCartCount();
  renderCart();
}

function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3200);
}

function initHomepage() {
  renderTierGrid(document.getElementById('tier-grid'));
}

function initCollectionPage() {
  const params = new URLSearchParams(location.search);
  const slug = params.get('c') || 'corefit';
  const meta = COLLECTIONS.corefit;
  document.title = `${meta.title} | Milan Hype CoreFit`;
  const titleEl = document.getElementById('collection-title');
  const subEl = document.getElementById('collection-subtitle');
  const descEl = document.getElementById('collection-desc');
  if (titleEl) titleEl.textContent = meta.title;
  if (subEl) subEl.textContent = meta.subtitle;
  if (descEl) descEl.textContent = meta.description;
  renderTierGrid(document.getElementById('collection-grid'));
}

function initProductPage() {
  const params = new URLSearchParams(location.search);
  const id = params.get('id') || 'corefit-pro';
  const product = getProduct(id);
  if (!product) {
    document.getElementById('product-root').innerHTML =
      '<p style="padding:4rem;text-align:center;">Product not found. <a href="collection.html">View collection</a></p>';
    return;
  }

  document.title = `${product.title} | Milan Hype CoreFit`;

  let images = (product.imageSlots || []).map((s) => `assets/images/products/${s.filename}`);
  images = images.filter((src) => uploadedImages.get(src.split('/').pop()));
  if (!images.length) images = product.images.filter((s) => s.endsWith('.svg'));
  const fallback = product.images.find((s) => s.endsWith('.svg'));
  const displayImages = images.length ? images : [fallback];

  let selectedSize = product.sizes[Math.floor(product.sizes.length / 2)];

  const mainImg = document.getElementById('product-main-img');
  const thumbs = document.getElementById('product-thumbs');

  function setMain(src) {
    mainImg.src = src;
    mainImg.onerror = () => { mainImg.src = fallback; };
  }

  setMain(displayImages[0]);

  thumbs.innerHTML = displayImages.map((src, i) => `
    <button type="button" class="product-thumb ${i === 0 ? 'active' : ''}" data-src="${src}">
      <img src="${src}" alt="" onerror="this.src='${fallback}'">
    </button>`).join('');

  thumbs.querySelectorAll('.product-thumb').forEach((btn) => {
    btn.addEventListener('click', () => {
      thumbs.querySelectorAll('.product-thumb').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      setMain(btn.dataset.src);
    });
  });

  const tierLabel = document.getElementById('product-tier-label');
  if (tierLabel) tierLabel.textContent = `${product.tier} Collection`;

  document.getElementById('product-title').textContent = product.title;
  document.getElementById('product-short').textContent = product.shortDescription;

  const compareHTML = product.compareAt
    ? `<span class="compare">${formatPrice(product.compareAt)}</span>` : '';
  document.getElementById('product-price').innerHTML = `${formatPrice(product.price)}${compareHTML}`;

  document.getElementById('fit-note').textContent = `Fit: ${product.fit}`;

  const tierSwitcher = document.getElementById('tier-switcher');
  if (tierSwitcher) {
    tierSwitcher.innerHTML = getTierProducts().map((p) => {
      const active = p.id === product.id;
      const cls = active
        ? `tier-switch-btn active${p.badge === 'Best Seller' ? ' active--gold' : ''}`
        : 'tier-switch-btn';
      return `<a href="product.html?id=${p.id}" class="${cls}">${p.tier} · ${formatPrice(p.price)}</a>`;
    }).join('');
  }

  const sizeGrid = document.getElementById('size-grid');
  sizeGrid.innerHTML = product.sizes.map((s) =>
    `<button type="button" class="size-btn ${s === selectedSize ? 'selected' : ''}" data-size="${s}">${s}</button>`
  ).join('');

  sizeGrid.querySelectorAll('.size-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      selectedSize = btn.dataset.size;
      sizeGrid.querySelectorAll('.size-btn').forEach((b) => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });

  document.getElementById('add-to-cart').addEventListener('click', () => addToCart(product, selectedSize));
  document.getElementById('buy-now')?.addEventListener('click', () => {
    if (checkoutWithPaymentLink(product.id)) return;
    const item = {
      id: product.id,
      title: product.title,
      price: product.price,
      size: selectedSize,
      qty: 1,
      image: resolveImage(product.images, product)
    };
    startCheckout([item]);
  });
  document.getElementById('sticky-add')?.addEventListener('click', () => addToCart(product, selectedSize));

  document.getElementById('product-description').textContent = product.description;
  document.getElementById('product-style').textContent = product.styleIt;

  const benefits = document.getElementById('product-benefits');
  benefits.innerHTML = product.benefits.map((b) => `<li>${b}</li>`).join('');

  const specs = document.getElementById('product-specs');
  specs.innerHTML = Object.entries(product.details).map(([k, v]) =>
    `<tr><td>${k}</td><td>${v}</td></tr>`).join('');

  const faqs = document.getElementById('product-faqs');
  faqs.innerHTML = product.faqs.map((f) => `
    <div class="faq-item">
      <button type="button" class="faq-question">${f.q}</button>
      <div class="faq-answer">${f.a}</div>
    </div>`).join('');
  initFAQ();

  if (typeof initProductShare === 'function') initProductShare(product);

  const related = PRODUCTS.filter((p) => p.id !== product.id);
  const relatedGrid = document.getElementById('related-grid');
  if (relatedGrid) renderTierGrid(relatedGrid, related);

  const sticky = document.getElementById('sticky-atc');
  if (sticky) {
    document.getElementById('sticky-title').textContent = product.title;
    document.getElementById('sticky-price').textContent = formatPrice(product.price);
    window.addEventListener('scroll', () => {
      sticky.classList.toggle('visible', window.scrollY > 400);
    });
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  initMobileNav();
  initNewsletter();
  initContactForm();
  initCart();
  initFAQ();

  await loadUploadedImages();
  await loadPaymentLinks();

  if (document.body.dataset.page === 'home') initHomepage();
  if (document.body.dataset.page === 'collection') initCollectionPage();
  if (document.body.dataset.page === 'product') initProductPage();
  if (typeof renderSocialBar === 'function') {
    renderSocialBar(document.getElementById('footer-social'));
  }
});
