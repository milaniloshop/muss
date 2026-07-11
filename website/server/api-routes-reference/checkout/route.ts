import { NextResponse } from 'next/server';
import type Stripe from 'stripe';
import { getBaseUrl, getStripe, isStripeEnabled, loadStripePriceIds } from '@/lib/stripe';
import { CATALOG_PRICES } from '@/lib/products';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json(
      {
        error:
          'Stripe not configured. Add STRIPE_SECRET_KEY to environment variables.',
      },
      { status: 503 },
    );
  }

  const body = (await req.json()) as {
    items?: { id: string; qty?: number; size?: string; color?: string }[];
  };
  const items = body?.items;
  if (!Array.isArray(items) || !items.length) {
    return NextResponse.json({ error: 'Cart is empty' }, { status: 400 });
  }

  const stripePrices = loadStripePriceIds();
  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
  let subtotalCents = 0;
  const baseUrl = getBaseUrl();

  for (const item of items) {
    const catalog = CATALOG_PRICES[item.id];
    if (!catalog) {
      return NextResponse.json({ error: `Unknown product: ${item.id}` }, { status: 400 });
    }
    const qty = Math.min(Math.max(Number(item.qty) || 1, 1), 10);
    const size = String(item.size || 'M').slice(0, 10);
    subtotalCents += catalog.price * 100 * qty;

    if (stripePrices?.[item.id]?.priceId) {
      lineItems.push({ price: stripePrices[item.id].priceId!, quantity: qty });
    } else {
      lineItems.push({
        price_data: {
          currency: 'usd',
          unit_amount: Math.round(catalog.price * 100),
          product_data: {
            name: `${catalog.title} — Size ${size}`,
            description: "Men's chest + core compression tank — Milan Hype CoreFit.",
            images: [`${baseUrl}/assets/images/products/${item.id}.jpg`],
          },
        },
        quantity: qty,
      });
    }
  }

  const shippingOptions: Stripe.Checkout.SessionCreateParams.ShippingOption[] =
    subtotalCents >= 7500
      ? [
          {
            shipping_rate_data: {
              type: 'fixed_amount',
              fixed_amount: { amount: 0, currency: 'usd' },
              display_name: 'Complimentary US shipping (orders $75+)',
            },
          },
        ]
      : [
          {
            shipping_rate_data: {
              type: 'fixed_amount',
              fixed_amount: { amount: 695, currency: 'usd' },
              display_name: 'US Standard Shipping (5–7 business days)',
            },
          },
        ];

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: lineItems,
      shipping_options: shippingOptions,
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cancel`,
      shipping_address_collection: { allowed_countries: ['US'] },
      phone_number_collection: { enabled: true },
      billing_address_collection: 'required',
      allow_promotion_codes: true,
      metadata: {
        brand: 'milan-hype-corefit',
        sizes: items.map((i) => `${i.id}:${i.size}`).join(','),
      },
    });
    return NextResponse.json({ url: session.url });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Checkout failed' },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({ stripeEnabled: isStripeEnabled() });
}
