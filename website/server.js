require('dotenv').config();
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

let stripe = null;
if (process.env.STRIPE_SECRET_KEY) {
  stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
}

const app = express();
const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
const UPLOAD_DIR = path.join(ROOT, 'assets/images/products');
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

const CATALOG = {
  'corefit-essential': { title: 'CoreFit Essential — Chest + Core Compression Tank', price: 49 },
  'corefit-pro': { title: 'CoreFit Pro — Chest + Core Compression Tank', price: 89 },
  'corefit-elite': { title: 'CoreFit Elite — Chest + Core Compression Tank', price: 149 },
  'corefit-signature': { title: 'CoreFit Signature — Chest + Core Compression Tank', price: 229 }
};

const ALLOWED_FILES = new Set([
  'corefit-essential.jpg',
  'corefit-essential-2.jpg',
  'corefit-pro.jpg',
  'corefit-pro-2.jpg',
  'corefit-elite.jpg',
  'corefit-elite-2.jpg',
  'corefit-signature.jpg',
  'corefit-signature-2.jpg'
]);

if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

const storage = multer.diskStorage({
  destination: UPLOAD_DIR,
  filename: (req, file, cb) => {
    const name = req.params.filename;
    if (!ALLOWED_FILES.has(name)) {
      return cb(new Error('Filename not allowed'));
    }
    const ext = path.extname(file.originalname).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
      return cb(new Error('Only JPG, PNG, WebP allowed'));
    }
    cb(null, name);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }
});

app.use(express.json());
app.use(express.static(ROOT));

app.get('/api/config', (req, res) => {
  res.json({
    stripeEnabled: Boolean(stripe),
    brand: 'Milan Hype CoreFit',
    shippingFreeOver: 75
  });
});

app.get('/api/images', (req, res) => {
  const files = [...ALLOWED_FILES].map((filename) => {
    const full = path.join(UPLOAD_DIR, filename);
    return {
      filename,
      exists: fs.existsSync(full),
      url: `assets/images/products/${filename}`
    };
  });
  res.json(files);
});

app.post('/api/checkout', async (req, res) => {
  if (!stripe) {
    return res.status(503).json({
      error: 'Stripe not configured. Add STRIPE_SECRET_KEY to website/.env — see .env.example'
    });
  }

  const items = req.body?.items;
  if (!Array.isArray(items) || !items.length) {
    return res.status(400).json({ error: 'Cart is empty' });
  }

  const lineItems = [];
  for (const item of items) {
    const catalog = CATALOG[item.id];
    if (!catalog) return res.status(400).json({ error: `Unknown product: ${item.id}` });
    const qty = Math.min(Math.max(parseInt(item.qty, 10) || 1, 1), 10);
    const size = String(item.size || 'M').slice(0, 10);
    lineItems.push({
      price_data: {
        currency: 'usd',
        unit_amount: Math.round(catalog.price * 100),
        product_data: {
          name: `${catalog.title} — Size ${size}`,
          description: "Men's chest + core compression tank — Milan Hype CoreFit. Not padded. Not fake muscle.",
          images: [`${BASE_URL}/assets/images/products/${item.id}.svg`]
        }
      },
      quantity: qty
    });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: lineItems,
      success_url: `${BASE_URL}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${BASE_URL}/cancel.html`,
      shipping_address_collection: { allowed_countries: ['US'] },
      phone_number_collection: { enabled: true },
      billing_address_collection: 'required',
      metadata: { brand: 'milan-hype-corefit' }
    });
    res.json({ url: session.url });
  } catch (err) {
    console.error('Stripe error:', err.message);
    res.status(500).json({ error: 'Checkout failed. Check Stripe keys and try again.' });
  }
});

app.post('/api/upload/:filename', upload.single('photo'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  res.json({
    ok: true,
    filename: req.file.filename,
    url: `assets/images/products/${req.file.filename}?v=${Date.now()}`
  });
});

app.delete('/api/upload/:filename', (req, res) => {
  const name = req.params.filename;
  if (!ALLOWED_FILES.has(name)) return res.status(400).json({ error: 'Not allowed' });
  const full = path.join(UPLOAD_DIR, name);
  if (fs.existsSync(full)) fs.unlinkSync(full);
  res.json({ ok: true });
});

app.use((err, req, res, next) => {
  res.status(400).json({ error: err.message || 'Upload failed' });
});

app.listen(PORT, () => {
  console.log(`\n  Milan Hype CoreFit — http://localhost:${PORT}`);
  console.log(`  Stripe: ${stripe ? 'enabled' : 'DISABLED — add STRIPE_SECRET_KEY to .env'}`);
  console.log(`  Photos: http://localhost:${PORT}/admin.html\n`);
});
