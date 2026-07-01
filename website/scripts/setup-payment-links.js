#!/usr/bin/env node
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });
const fs = require('fs');
const path = require('path');

const key = process.env.STRIPE_SECRET_KEY;
if (!key) {
  console.error('Missing STRIPE_SECRET_KEY');
  process.exit(1);
}

const stripe = require('stripe')(key);
const products = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'stripe-products.json'), 'utf8'));
const BASE = process.env.BASE_URL || 'https://milanhype.com';

const NAMES = {
  'corefit-essential': 'CoreFit Essential — Chest + Core Compression Tank',
  'corefit-pro': 'CoreFit Pro — Chest + Core Compression Tank',
  'corefit-elite': 'CoreFit Elite — Chest + Core Compression Tank',
  'corefit-signature': 'CoreFit Signature — Chest + Core Compression Tank'
};

async function main() {
  const links = {};
  for (const [id, data] of Object.entries(products)) {
    const link = await stripe.paymentLinks.create({
      line_items: [{ price: data.priceId, quantity: 1 }],
      shipping_address_collection: { allowed_countries: ['US'] },
      phone_number_collection: { enabled: true },
      custom_fields: [
        {
          key: 'size',
          label: { type: 'custom', custom: 'Size (S M L XL XXL)' },
          type: 'text'
        }
      ],
      after_completion: {
        type: 'redirect',
        redirect: { url: `${BASE}/success.html` }
      },
      metadata: { milan_hype_id: id }
    });
    links[id] = link.url;
    console.log(`✓ ${NAMES[id]}\n  ${link.url}\n`);
  }
  const out = path.join(__dirname, '..', 'stripe-payment-links.json');
  fs.writeFileSync(out, JSON.stringify(links, null, 2));
  console.log('Saved stripe-payment-links.json');
}

main().catch((e) => { console.error(e.message); process.exit(1); });
