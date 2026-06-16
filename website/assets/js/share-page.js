let currentProduct = null;

function renderSharePage() {
  const select = document.getElementById('share-product-select');
  if (!select) return;

  select.innerHTML = PRODUCTS.map((p) =>
    `<option value="${p.id}">${p.title}</option>`).join('');

  select.addEventListener('change', () => loadProduct(select.value));
  loadProduct(select.value);
}

function loadProduct(id) {
  currentProduct = getProduct(id);
  if (!currentProduct) return;

  const img = resolveImage(currentProduct.images);
  const url = getShareUrl(`product.html?id=${currentProduct.id}`);
  const caption = getProductShareCaption(currentProduct);

  document.getElementById('share-preview-img').src = img;
  document.getElementById('share-preview-img').onerror = function () {
    this.src = `assets/images/products/${currentProduct.id}.svg`;
  };
  document.getElementById('share-preview-title').textContent = currentProduct.title;
  document.getElementById('share-preview-price').textContent = formatPrice(currentProduct.price);
  document.getElementById('share-preview-caption').textContent = caption;

  const actions = document.getElementById('share-actions');
  actions.innerHTML = `
    <button type="button" class="share-btn share-btn-lg" data-action="native">📱 Share (Phone)</button>
    <button type="button" class="share-btn share-btn-lg" data-action="instagram">Instagram Caption</button>
    <button type="button" class="share-btn share-btn-lg" data-action="facebook">Facebook</button>
    <button type="button" class="share-btn share-btn-lg" data-action="tiktok">TikTok</button>
    <button type="button" class="share-btn share-btn-lg" data-action="snapchat">Snapchat</button>
    <button type="button" class="share-btn share-btn-lg" data-action="whatsapp">WhatsApp</button>
    <button type="button" class="share-btn share-btn-lg" data-action="twitter">X / Twitter</button>
    <button type="button" class="share-btn share-btn-lg" data-action="copy">Copy Caption + Link</button>
  `;

  actions.querySelector('[data-action="native"]').addEventListener('click', () =>
    shareNative(currentProduct.title, caption, url));
  actions.querySelector('[data-action="instagram"]').addEventListener('click', () =>
    copyToClipboard(caption));
  actions.querySelector('[data-action="facebook"]').addEventListener('click', () =>
    shareToFacebook(url, currentProduct.title));
  actions.querySelector('[data-action="tiktok"]').addEventListener('click', () =>
    shareToTikTok(caption, url));
  actions.querySelector('[data-action="snapchat"]').addEventListener('click', () =>
    shareToSnapchat(url));
  actions.querySelector('[data-action="whatsapp"]').addEventListener('click', () =>
    shareToWhatsApp(caption));
  actions.querySelector('[data-action="twitter"]').addEventListener('click', () =>
    shareToTwitter(caption, url));
  actions.querySelector('[data-action="copy"]').addEventListener('click', () =>
    copyToClipboard(caption));
}

function resolveImage(sources) {
  if (currentProduct?.imageSlots?.[0]) {
    return `assets/images/products/${currentProduct.imageSlots[0].filename}`;
  }
  return sources[0];
}

document.addEventListener('DOMContentLoaded', renderSharePage);
