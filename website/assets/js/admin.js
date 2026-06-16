function imgUrl(filename) {
  return `assets/images/products/${filename}`;
}

function renderAdmin() {
  const grid = document.getElementById('admin-grid');
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map((product) => `
    <div class="admin-product-card">
      <h3>${product.title}</h3>
      <p class="admin-product-price">${formatPrice(product.price)} · <a href="product.html?id=${product.id}">View product</a></p>
      <div class="admin-slots">
        ${(product.imageSlots || []).map((slot) => `
          <div class="admin-slot" data-filename="${slot.filename}">
            <div class="admin-slot-preview" id="preview-${slot.filename.replace(/\./g, '-')}">
              <img src="${imgUrl(slot.filename)}" alt=""
                   onerror="this.src='assets/images/products/${product.id}.svg'">
            </div>
            <p class="admin-slot-label">${slot.label}</p>
            <p class="admin-slot-file">${slot.filename}</p>
            <label class="admin-upload-btn">
              Upload Photo
              <input type="file" accept="image/jpeg,image/png,image/webp" hidden data-filename="${slot.filename}">
            </label>
            <span class="admin-status" id="status-${slot.filename.replace(/\./g, '-')}"></span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('input[type="file"]').forEach((input) => {
    input.addEventListener('change', () => uploadFile(input));
  });

  grid.querySelectorAll('.admin-slot').forEach((slot) => {
    slot.addEventListener('dragover', (e) => { e.preventDefault(); slot.classList.add('dragover'); });
    slot.addEventListener('dragleave', () => slot.classList.remove('dragover'));
    slot.addEventListener('drop', (e) => {
      e.preventDefault();
      slot.classList.remove('dragover');
      const file = e.dataTransfer.files[0];
      if (file) uploadFileDirect(slot.dataset.filename, file);
    });
  });
}

async function uploadFile(input) {
  const file = input.files[0];
  if (!file) return;
  await uploadFileDirect(input.dataset.filename, file);
}

async function uploadFileDirect(filename, file) {
  const statusId = `status-${filename.replace(/\./g, '-')}`;
  const previewId = `preview-${filename.replace(/\./g, '-')}`;
  const status = document.getElementById(statusId);
  const preview = document.querySelector(`#${previewId} img`);

  if (status) status.textContent = 'Uploading...';

  const form = new FormData();
  form.append('photo', file);

  try {
    const res = await fetch(`/api/upload/${filename}`, { method: 'POST', body: form });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Upload failed');
    if (preview) preview.src = data.url;
    if (status) status.textContent = '✓ Live on store';
    if (status) status.style.color = '#2d6a4f';
  } catch (err) {
    if (status) {
      status.textContent = '✗ ' + err.message + ' — run npm start';
      status.style.color = '#9b2226';
    }
  }
}

document.addEventListener('DOMContentLoaded', renderAdmin);
