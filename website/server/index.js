/**
 * Optional API server for Stripe + Nano Banana when not on GitHub Pages.
 * Start: `node server/index.js` from website/ (after npm install).
 */
require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api/config', (_req, res) => {
  res.json({
    stripeEnabled: Boolean(process.env.STRIPE_SECRET_KEY && !String(process.env.STRIPE_SECRET_KEY).includes('your_key')),
    brand: 'Milan Hype CoreFit',
    note: 'Full checkout/image APIs: restore Next route handlers under app/api or expand this server.',
  });
});

app.get('/health', (_req, res) => res.json({ ok: true }));

app.use(express.static(path.join(__dirname, '..', 'out')));

app.listen(PORT, () => {
  console.log(`Milan Hype API listening on ${PORT}`);
});
