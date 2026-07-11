import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Returns' };

export default function ReturnsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-24 pt-28 md:px-8">
      <h1 className="font-display text-4xl text-white">30-Day Guarantee</h1>
      <div className="mt-6 space-y-4 text-silver/80">
        <p>Try CoreFit at home for 30 days. If it&apos;s not for you, return for a full refund.</p>
        <p>Items must be unworn and unwashed with tags attached. Contact support to start a return.</p>
      </div>
    </div>
  );
}
