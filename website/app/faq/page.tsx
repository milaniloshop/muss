import type { Metadata } from 'next';
import { PRODUCTS } from '@/lib/products';

export const metadata: Metadata = { title: 'FAQ' };

export default function FaqPage() {
  const faqs = PRODUCTS.flatMap((p) => p.faqs.map((f) => ({ ...f, tier: p.tier })));
  return (
    <div className="mx-auto max-w-3xl px-5 pb-24 pt-28 md:px-8">
      <h1 className="font-display text-4xl text-white md:text-5xl">FAQ</h1>
      <div className="mt-10 space-y-3">
        {faqs.map((faq) => (
          <details key={`${faq.tier}-${faq.q}`} className="rounded-2xl border border-white/10 px-4 py-3">
            <summary className="cursor-pointer text-sm text-white">
              <span className="text-silver/50">[{faq.tier}]</span> {faq.q}
            </summary>
            <p className="mt-2 text-sm text-silver/75">{faq.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
