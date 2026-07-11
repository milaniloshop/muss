import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Shipping' };

export default function ShippingPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-24 pt-28 md:px-8">
      <h1 className="font-display text-4xl text-white">Shipping</h1>
      <div className="mt-6 space-y-4 text-silver/80">
        <p>Orders process within 24 hours on business days. US standard shipping 5–7 business days.</p>
        <p>Complimentary shipping on orders $75+. Discreet plain packaging — no product branding outside.</p>
      </div>
    </div>
  );
}
