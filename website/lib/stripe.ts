import Stripe from 'stripe';
import { existsSync, readFileSync } from 'fs';
import path from 'path';

let stripeClient: Stripe | null = null;

export function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key || key.includes('your_key_here')) return null;
  if (!stripeClient) {
    stripeClient = new Stripe(key);
  }
  return stripeClient;
}

export function isStripeEnabled() {
  return Boolean(getStripe());
}

export function loadStripePriceIds(): Record<string, { priceId?: string }> | null {
  const file = path.join(process.cwd(), 'stripe-products.json');
  try {
    if (existsSync(file)) {
      return JSON.parse(readFileSync(file, 'utf8')) as Record<string, { priceId?: string }>;
    }
  } catch {
    return null;
  }
  return null;
}

export function getBaseUrl() {
  return process.env.BASE_URL || process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
}
