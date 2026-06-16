// Milan Hype — Social accounts (update with your real profile URLs)
const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/Milanhype_',
  facebook: 'https://www.facebook.com/sharer/sharer.php', // Page URL set below
  facebookPage: 'https://facebook.com/MilanHype',
  tiktok: 'https://www.tiktok.com/@milanhype_',
  snapchat: 'https://www.snapchat.com/add/milanhype',
  siteUrl: typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000'
};

const SHARE_HASHTAGS = '#MilanHype #DressTheMoment #Streetwear #NewDrop';

function getShareUrl(path) {
  const base = window.location.origin + window.location.pathname.replace(/[^/]*$/, '');
  return base + path;
}

function getProductShareCaption(product) {
  return `One pair. Zero apologies. ✦\n\n${product.title} — ${formatPrice(product.price)}\n\n${product.shortDescription}\n\nShop now 👇\n${getShareUrl('product.html?id=' + product.id)}\n\n${SHARE_HASHTAGS}`;
}

function shareToFacebook(url, quote) {
  const u = encodeURIComponent(url || window.location.href);
  const q = quote ? `&quote=${encodeURIComponent(quote)}` : '';
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${u}${q}`, '_blank', 'width=600,height=500');
}

function shareToTwitter(text, url) {
  const u = encodeURIComponent(url || window.location.href);
  const t = encodeURIComponent(text || 'Shop Milan Hype — Dress the Moment.');
  window.open(`https://twitter.com/intent/tweet?text=${t}&url=${u}`, '_blank', 'width=600,height=500');
}

function shareToPinterest(url, image, description) {
  const params = new URLSearchParams({
    url: url || window.location.href,
    media: image || '',
    description: description || 'Milan Hype'
  });
  window.open(`https://pinterest.com/pin/create/button/?${params}`, '_blank', 'width=600,height=500');
}

function shareToWhatsApp(text) {
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
}

function copyToClipboard(text) {
  return navigator.clipboard.writeText(text).then(() => {
    showToast('Copied to clipboard ✦');
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('Copied to clipboard ✦');
  });
}

function shareNative(title, text, url) {
  if (navigator.share) {
    navigator.share({ title, text, url }).catch(() => {});
  } else {
    copyToClipboard(`${text}\n\n${url}`);
  }
}

function shareToTikTok(caption, url) {
  copyToClipboard(`${caption}\n\n${url}`);
  showToast('Caption copied — open TikTok and paste in your post');
  setTimeout(() => window.open(SOCIAL_LINKS.tiktok, '_blank'), 800);
}

function shareToSnapchat(url) {
  copyToClipboard(url);
  showToast('Link copied — open Snapchat and paste in Add Link');
  setTimeout(() => window.open(SOCIAL_LINKS.snapchat, '_blank'), 800);
}

function updatePageMeta({ title, description, image, url }) {
  const setMeta = (prop, content, isProperty = true) => {
    const attr = isProperty ? 'property' : 'name';
    let el = document.querySelector(`meta[${attr}="${prop}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, prop);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };
  if (title) {
    document.title = title;
    setMeta('og:title', title);
    setMeta('twitter:title', title, false);
  }
  if (description) {
    setMeta('description', description, false);
    setMeta('og:description', description);
    setMeta('twitter:description', description, false);
  }
  if (image) {
    const fullImage = image.startsWith('http') ? image : getShareUrl(image);
    setMeta('og:image', fullImage);
    setMeta('twitter:image', fullImage, false);
  }
  if (url) {
    setMeta('og:url', url);
  }
  setMeta('og:type', 'website');
  setMeta('twitter:card', 'summary_large_image', false);
}

function renderSocialBar(container) {
  if (!container) return;
  container.innerHTML = `
    <div class="social-bar">
      <a href="${SOCIAL_LINKS.instagram}" target="_blank" rel="noopener" class="social-icon" title="Instagram">IG</a>
      <a href="${SOCIAL_LINKS.facebookPage}" target="_blank" rel="noopener" class="social-icon" title="Facebook">FB</a>
      <a href="${SOCIAL_LINKS.tiktok}" target="_blank" rel="noopener" class="social-icon" title="TikTok">TT</a>
      <a href="${SOCIAL_LINKS.snapchat}" target="_blank" rel="noopener" class="social-icon" title="Snapchat">SC</a>
      <a href="share.html" class="social-icon social-icon-share" title="Share a Drop">Share</a>
    </div>`;
}

function initProductShare(product) {
  const bar = document.getElementById('product-share-bar');
  if (!bar || !product) return;
  const url = getShareUrl(`product.html?id=${product.id}`);
  const img = resolveImage(product.images);
  const caption = getProductShareCaption(product);
  const fullImg = img.startsWith('http') ? img : getShareUrl(img);

  updatePageMeta({
    title: `${product.title} | Milan Hype`,
    description: product.shortDescription,
    image: img,
    url
  });

  bar.innerHTML = `
    <p class="share-label">Share this drop</p>
    <div class="share-btns">
      <button type="button" class="share-btn" data-action="native">Share</button>
      <button type="button" class="share-btn" data-action="instagram">IG Caption</button>
      <button type="button" class="share-btn" data-action="facebook">Facebook</button>
      <button type="button" class="share-btn" data-action="tiktok">TikTok</button>
      <button type="button" class="share-btn" data-action="snapchat">Snapchat</button>
      <button type="button" class="share-btn" data-action="whatsapp">WhatsApp</button>
      <button type="button" class="share-btn" data-action="copy">Copy All</button>
    </div>`;

  bar.querySelector('[data-action="native"]').addEventListener('click', () =>
    shareNative(product.title, caption, url));
  bar.querySelector('[data-action="instagram"]').addEventListener('click', () =>
    copyToClipboard(caption));
  bar.querySelector('[data-action="facebook"]').addEventListener('click', () =>
    shareToFacebook(url, product.title));
  bar.querySelector('[data-action="tiktok"]').addEventListener('click', () =>
    shareToTikTok(caption, url));
  bar.querySelector('[data-action="snapchat"]').addEventListener('click', () =>
    shareToSnapchat(url));
  bar.querySelector('[data-action="whatsapp"]').addEventListener('click', () =>
    shareToWhatsApp(`${caption}`));
  bar.querySelector('[data-action="copy"]').addEventListener('click', () =>
    copyToClipboard(caption));
}
