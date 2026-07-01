#!/usr/bin/env node
/**
 * Creates Milan Hype CoreFit products + prices in your Stripe account.
 * Run from website/:  node scripts/setup-stripe.js
 * Requires STRIPE_SECRET_KEY in .env or environment.
 */
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });
const fs = require('fs');
const path = require('path');

const key = process.env.STRIPE_SECRET_KEY;
if (!key || key.includes('your_key_here')) {
  console.error('\n  Missing STRIPE_SECRET_KEY.');
  console.error('  1. Copy .env.example to .env');
  console.error('  2. Add your key from https://dashboard.stripe.com/test/apikeys');
  console.error('  3. Run: node scripts/setup-stripe.js\n');
  process.exit(1);
}

const stripe = require('stripe')(key);

const PRODUCTS = [
  { id: 'corefit-essential', name: 'CoreFit Essential — Chest + Core Compression Tank', price: 4900 },
  { id: 'corefit-pro', name: 'CoreFit Pro — Chest + Core Compression Tank', price: 8900 },
  { id: 'corefit-elite', name: 'CoreFit Elite — Chest + Core Compression Tank', price: 14900 },
  { id: 'corefit-signature', name: 'CoreFit Signature — Chest + Core Compression Tank', price: 22900 }
];

async function main() {
  const out = {};
  console.log('\n  Setting up Milan Hype CoreFit in Stripe...\n');

  for (const p of PRODUCTS) {
    const product = await stripe.products.create({
      name: p.name,
      description: "Men's chest + core compression tank. Not padded. Not fake muscle.",
      metadata: { milan_hype_id: p.id }
    });

    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: p.price,
      currency: 'usd'
    });

    out[p.id] = { productId: product.id, priceId: price.id };
    console.log(`  ✓ ${p.name}`);
    console.log(`    price_id: ${price.id}\n`);
  }

  const outPath = path.join(__dirname, '..', 'stripe-products.json');
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
  console.log(`  Saved → stripe-products.json`);
  console.log('  Restart server: npm start\n');
}

main().catch((err) => {
  console.error('  Stripe setup failed:', err.message);
  process.exit(1);
});
