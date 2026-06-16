function resolveImage(sources) {
  return sources[0];
}

function productCardHTML(product) {
  const img = resolveImage(product.images);
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
               onerror="this.onerror=null;this.src='${product.images[product.images.length - 1]}'">
        </div>
        <h3 class="product-title">${product.title}</h3>
        <p class="product-price">${formatPrice(product.price)}${compareHTML}</p>
      </a>
    </article>`;
}

function renderProductGrid(container, products) {
  if (!container) return;
  container.innerHTML = products.map(productCardHTML).join('');
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
      showToast('Welcome to Milan Hype — check your inbox soon.');
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
    el.style.display = count ? 'inline' : 'none';
  });
}

function addToCart(product, size) {
  const existing = cart.find((i) => i.id === product.id && i.size === size);
  if (existing) existing.qty++;
  else cart.push({ id: product.id, title: product.title, price: product.price, size, qty: 1, image: resolveImage(product.images) });
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
    if (total >= 75) shippingNote.textContent = 'You qualify for free shipping!';
    else shippingNote.textContent = `Add ${formatPrice(75 - total)} more for free shipping`;
  }

  container.querySelectorAll('[data-remove]').forEach((btn) => {
    btn.addEventListener('click', () => {
      cart.splice(Number(btn.dataset.remove), 1);
      saveCart();
    });
  });
}

function initCart() {
  document.querySelector('.cart-open')?.addEventListener('click', openCart);
  document.querySelector('.cart-close')?.addEventListener('click', closeCart);
  document.querySelector('.cart-overlay')?.addEventListener('click', closeCart);
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
  setTimeout(() => toast.classList.remove('show'), 2800);
}

/* Homepage */
function initHomepage() {
  const best = document.getElementById('best-sellers-grid');
  if (best) {
    const products = PRODUCTS.filter((p) => p.collections.includes('best-sellers')).slice(0, 4);
    renderProductGrid(best, products.length ? products : PRODUCTS.slice(0, 4));
  }

  const newArr = document.getElementById('new-arrivals-grid');
  if (newArr) {
    renderProductGrid(newArr, getCollectionProducts('new-arrivals').slice(0, 4));
  }
}

/* Collection page */
function initCollectionPage() {
  const params = new URLSearchParams(location.search);
  const slug = params.get('c') || 'new-arrivals';
  const meta = COLLECTIONS[slug];
  if (!meta) {
    document.getElementById('collection-title').textContent = 'Collection Not Found';
    return;
  }
  document.title = `${meta.title} | Milan Hype`;
  document.getElementById('collection-title').textContent = meta.title;
  document.getElementById('collection-subtitle').textContent = meta.subtitle;
  document.getElementById('collection-desc').textContent = meta.description;
  renderProductGrid(document.getElementById('collection-grid'), getCollectionProducts(slug));
}

/* Product page */
function initProductPage() {
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const product = getProduct(id);
  if (!product) {
    document.getElementById('product-root').innerHTML = '<p style="padding:4rem;text-align:center;">Product not found. <a href="index.html">Back to shop</a></p>';
    return;
  }

  document.title = `${product.title} | Milan Hype`;

  let images = (product.imageSlots || []).map((s) => `assets/images/products/${s.filename}`);
  if (!images.length) images = product.images.filter((s) => !s.endsWith('.svg'));
  const baseSlug = product.id;
  const fallback = `assets/images/products/${baseSlug}.svg`;
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

  document.getElementById('product-title').textContent = product.title;
  document.getElementById('product-short').textContent = product.shortDescription;

  const compareHTML = product.compareAt
    ? `<span class="compare">${formatPrice(product.compareAt)}</span>` : '';
  document.getElementById('product-price').innerHTML = `${formatPrice(product.price)}${compareHTML}`;

  document.getElementById('fit-note').textContent = `Fit: ${product.fit}`;

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

  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);
  renderProductGrid(document.getElementById('related-grid'), related);

  const sticky = document.getElementById('sticky-atc');
  if (sticky) {
    document.getElementById('sticky-title').textContent = product.title;
    document.getElementById('sticky-price').textContent = formatPrice(product.price);
    window.addEventListener('scroll', () => {
      sticky.classList.toggle('visible', window.scrollY > 400);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initNewsletter();
  initContactForm();
  initCart();
  initFAQ();

  if (document.body.dataset.page === 'home') initHomepage();
  if (document.body.dataset.page === 'collection') initCollectionPage();
  if (document.body.dataset.page === 'product') initProductPage();
  renderSocialBar(document.getElementById('footer-social'));
  if (document.body.dataset.page === 'home') {
    updatePageMeta({
      title: 'Milan Hype | Premium Contemporary Fashion — Dress the Moment',
      description: 'Shop premium fashion at Milan Hype. Free shipping over $75. Follow @Milanhype_',
      image: 'assets/images/hero-bg.svg'
    });
  }
});
