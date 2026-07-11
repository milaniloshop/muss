import { NextResponse } from 'next/server';
import { createHash } from 'crypto';
import { getStripe } from '@/lib/stripe';

export const runtime = 'nodejs';

function sha256(value: string) {
  return createHash('sha256').update(String(value).trim().toLowerCase()).digest('hex');
}

async function sendMetaPurchaseEvent(session: {
  id: string;
  amount_total?: number | null;
  customer_details?: { email?: string | null } | null;
  metadata?: Record<string, string> | null;
}) {
  const pixelId = process.env.META_PIXEL_ID;
  const token = process.env.META_CAPI_ACCESS_TOKEN;
  if (!pixelId || !token) return;

  const email = session.customer_details?.email;
  const value = (session.amount_total || 0) / 100;
  const eventId = session.metadata?.mh_event_id || session.id;

  await fetch(`https://graph.facebook.com/v19.0/${pixelId}/events`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      data: [
        {
          event_name: 'Purchase',
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          action_source: 'website',
          user_data: email ? { em: [sha256(email)] } : {},
          custom_data: { currency: 'usd', value },
        },
      ],
      access_token: token,
    }),
  });
}

export async function POST(req: Request) {
  const stripe = getStripe();
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!stripe || !secret) {
    return NextResponse.json({ error: 'Webhooks not configured' }, { status: 503 });
  }

  const sig = req.headers.get('stripe-signature');
  if (!sig) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
  }

  const body = await req.text();
  try {
    const event = stripe.webhooks.constructEvent(body, sig, secret);
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      await sendMetaPurchaseEvent(session);
    }
    return NextResponse.json({ received: true });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Webhook error' },
      { status: 400 },
    );
  }
}
