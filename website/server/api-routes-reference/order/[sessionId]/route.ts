import { NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';

export const runtime = 'nodejs';

export async function GET(
  _req: Request,
  context: { params: Promise<{ sessionId: string }> },
) {
  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json({ error: 'Stripe not configured' }, { status: 503 });
  }
  const { sessionId } = await context.params;
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status !== 'paid') {
      return NextResponse.json({ error: 'Payment not completed' }, { status: 400 });
    }
    return NextResponse.json({
      email: session.customer_details?.email,
      amount: (session.amount_total || 0) / 100,
      status: session.payment_status,
    });
  } catch {
    return NextResponse.json({ error: 'Order not found' }, { status: 404 });
  }
}
