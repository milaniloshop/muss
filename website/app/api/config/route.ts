import { NextResponse } from 'next/server';
import { BRAND } from '@/lib/products';
import { isStripeEnabled, loadStripePriceIds } from '@/lib/stripe';

export async function GET() {
  const priceIds = loadStripePriceIds();
  return NextResponse.json({
    stripeEnabled: isStripeEnabled(),
    stripeProductsReady: Boolean(priceIds),
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY || null,
    brand: `${BRAND.name} ${BRAND.productLine}`,
    shippingFreeOver: BRAND.shippingFreeOver,
  });
}
