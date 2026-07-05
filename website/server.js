require('dotenv').config();
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

let stripe = null;
if (process.env.STRIPE_SECRET_KEY && !process.env.STRIPE_SECRET_KEY.includes('your_key_here')) {
  stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
}

const app = express();
const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
const UPLOAD_DIR = path.join(ROOT, 'assets/images/products');
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;
const STRIPE_PRODUCTS_PATH = path.join(ROOT, 'stripe-products.json');

const CATALOG = {
  'corefit-essential': { title: 'CoreFit Essential — Chest + Core Compression Tank', price: 49 },
  'corefit-pro': { title: 'CoreFit Pro — Chest + Core Compression Tank', price: 89 },
  'corefit-elite': { title: 'CoreFit Elite — Chest + Core Compression Tank', price: 149 },
  'corefit-signature': { title: 'CoreFit Signature — Chest + Core Compression Tank', price: 229 }
};

function loadStripePriceIds() {
  try {
    if (fs.existsSync(STRIPE_PRODUCTS_PATH)) {
      return JSON.parse(fs.readFileSync(STRIPE_PRODUCTS_PATH, 'utf8'));
    }
  } catch (_) {}
  return null;
}

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
    if (!ALLOWED_FILES.has(name)) return cb(new Error('Filename not allowed'));
    const ext = path.extname(file.originalname).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
      return cb(new Error('Only JPG, PNG, WebP allowed'));
    }
    cb(null, name);
  }
});

const upload = multer({ storage, limits: { fileSize: 10 * 1024 * 1024 } });

function sha256(value) {
  return crypto.createHash('sha256').update(String(value).trim().toLowerCase()).digest('hex');
}

async function sendMetaPurchaseEvent(session) {
  const pixelId = process.env.META_PIXEL_ID;
  const token = process.env.META_CAPI_ACCESS_TOKEN;
  if (!pixelId || !token) return;

  const email = session.customer_details?.email;
  const value = (session.amount_total || 0) / 100;
  const eventId = session.metadata?.mh_event_id || session.id;

  try {
    await fetch(`https://graph.facebook.com/v19.0/${pixelId}/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: [{
          event_name: 'Purchase',
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          action_source: 'website',
          user_data: email ? { em: [sha256(email)] } : {},
          custom_data: { currency: 'usd', value }
        }],
        access_token: token
      })
    });
  } catch (err) {
    console.warn('Meta CAPI error:', err.message);
  }
}

app.post('/api/stripe-webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  if (!stripe || !process.env.STRIPE_WEBHOOK_SECRET) {
    return res.status(503).send('Webhooks not configured');
  }
  const sig = req.headers['stripe-signature'];
  try {
    const event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      console.log('Order paid:', session.id, session.customer_details?.email);
      await sendMetaPurchaseEvent(session);
    }
    res.json({ received: true });
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
});

app.use(express.json());
app.use(express.static(ROOT));

app.get('/api/config', (req, res) => {
  const priceIds = loadStripePriceIds();
  res.json({
    stripeEnabled: Boolean(stripe),
    stripeProductsReady: Boolean(priceIds),
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY || null,
    brand: 'Milan Hype CoreFit',
    shippingFreeOver: 75
  });
});

app.get('/api/order/:sessionId', async (req, res) => {
  if (!stripe) return res.status(503).json({ error: 'Stripe not configured' });
  try {
    const session = await stripe.checkout.sessions.retrieve(req.params.sessionId);
    if (session.payment_status !== 'paid') {
      return res.status(400).json({ error: 'Payment not completed' });
    }
    res.json({
      email: session.customer_details?.email,
      amount: (session.amount_total || 0) / 100,
      status: session.payment_status
    });
  } catch (_) {
    res.status(404).json({ error: 'Order not found' });
  }
});

app.get('/api/images', (req, res) => {
  const files = [...ALLOWED_FILES].map((filename) => {
    const full = path.join(UPLOAD_DIR, filename);
    return { filename, exists: fs.existsSync(full), url: `assets/images/products/${filename}` };
  });
  res.json(files);
});

app.post('/api/checkout', async (req, res) => {
  if (!stripe) {
    return res.status(503).json({
      error: 'Stripe not configured. Add STRIPE_SECRET_KEY to website/.env then run: node scripts/setup-stripe.js'
    });
  }

  const items = req.body?.items;
  if (!Array.isArray(items) || !items.length) {
    return res.status(400).json({ error: 'Cart is empty' });
  }

  const stripePrices = loadStripePriceIds();
  const lineItems = [];
  let subtotalCents = 0;

  for (const item of items) {
    const catalog = CATALOG[item.id];
    if (!catalog) return res.status(400).json({ error: `Unknown product: ${item.id}` });
    const qty = Math.min(Math.max(parseInt(item.qty, 10) || 1, 1), 10);
    const size = String(item.size || 'M').slice(0, 10);
    subtotalCents += catalog.price * 100 * qty;

    if (stripePrices?.[item.id]?.priceId) {
      lineItems.push({
        price: stripePrices[item.id].priceId,
        quantity: qty
      });
    } else {
      lineItems.push({
        price_data: {
          currency: 'usd',
          unit_amount: Math.round(catalog.price * 100),
          product_data: {
            name: `${catalog.title} — Size ${size}`,
            description: "Men's chest + core compression tank — Milan Hype CoreFit.",
            images: [`${BASE_URL}/assets/images/products/${item.id}.svg`]
          }
        },
        quantity: qty
      });
    }
  }

  const shippingOptions = [];
  if (subtotalCents >= 7500) {
    shippingOptions.push({
      shipping_rate_data: {
        type: 'fixed_amount',
        fixed_amount: { amount: 0, currency: 'usd' },
        display_name: 'Complimentary US shipping (orders $75+)'
      }
    });
  } else {
    shippingOptions.push({
      shipping_rate_data: {
        type: 'fixed_amount',
        fixed_amount: { amount: 695, currency: 'usd' },
        display_name: 'US Standard Shipping (5–7 business days)'
      }
    });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: lineItems,
      shipping_options: shippingOptions,
      success_url: `${BASE_URL}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${BASE_URL}/cancel.html`,
      shipping_address_collection: { allowed_countries: ['US'] },
      phone_number_collection: { enabled: true },
      billing_address_collection: 'required',
      allow_promotion_codes: true,
      metadata: {
        brand: 'milan-hype-corefit',
        sizes: items.map((i) => `${i.id}:${i.size}`).join(',')
      }
    });
    res.json({ url: session.url });
  } catch (err) {
    console.error('Stripe error:', err.message);
    res.status(500).json({ error: err.message || 'Checkout failed' });
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
  const prices = loadStripePriceIds();
  console.log(`\n  Milan Hype CoreFit — ${BASE_URL}`);
  console.log(`  Stripe: ${stripe ? 'enabled' : 'DISABLED — add STRIPE_SECRET_KEY to .env'}`);
  console.log(`  Products: ${prices ? 'synced to Stripe' : 'run node scripts/setup-stripe.js'}`);
  console.log(`  Photos: ${BASE_URL}/admin.html\n`);
});
