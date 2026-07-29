'use client';

import { ApertureSection } from './ApertureSection';
import { RackFocusHeading } from './RackFocusHeading';
import { BRAND } from '@/lib/products';

const SPECS = [
  { label: 'Focus', value: 'Apparel + sneakers only' },
  { label: 'Drops', value: 'Instagram-first releases' },
  { label: 'Standard', value: 'Curated — no filler SKUs' },
  { label: 'Support', value: `${BRAND.instagramHandle} DMs` },
  { label: 'Ship', value: 'U.S. · discreet packaging' },
  { label: 'Mark', value: 'MH · black & red' },
];

export function MaterialSection() {
  return (
    <ApertureSection id="categories" className="bg-obsidian py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 max-w-xl">
          <p className="text-[10px] uppercase tracking-[0.32em] text-gunmetal">01 — The Store</p>
          <RackFocusHeading className="mt-4 text-4xl md:text-6xl">
            Two lanes.
            <br />
            One brand.
          </RackFocusHeading>
          <p className="mt-5 text-sm leading-relaxed text-gunmetal">
            Clothing for the fit. Sneakers for the statement. Catalog slots are live — real photos land when you send them.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <a
            href="/collection?c=apparel"
            className="group relative min-h-[280px] overflow-hidden border border-bone/10 bg-charcoal p-8 transition hover:border-ember/50"
          >
            <p className="text-[10px] uppercase tracking-[0.28em] text-ember">Apparel</p>
            <h3 className="mt-4 font-display text-4xl text-bone">Tees · Hoodies · Outerwear</h3>
            <p className="mt-3 max-w-sm text-sm text-gunmetal">Elevated essentials. Coming soon.</p>
            <span className="mt-8 inline-block text-[11px] uppercase tracking-[0.2em] text-bone/70 group-hover:text-ember">
              Browse →
            </span>
          </a>
          <a
            href="/collection?c=sneakers"
            className="group relative min-h-[280px] overflow-hidden border border-bone/10 bg-charcoal p-8 transition hover:border-ember/50"
          >
            <p className="text-[10px] uppercase tracking-[0.28em] text-ember">Sneakers</p>
            <h3 className="mt-4 font-display text-4xl text-bone">Drops · Classics · Heat</h3>
            <p className="mt-3 max-w-sm text-sm text-gunmetal">Clean pairs. Limited runs. Coming soon.</p>
            <span className="mt-8 inline-block text-[11px] uppercase tracking-[0.2em] text-bone/70 group-hover:text-ember">
              Browse →
            </span>
          </a>
        </div>

        <dl className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SPECS.map((s) => (
            <div key={s.label} className="border border-bone/10 bg-obsidian/50 px-5 py-4">
              <dt className="text-[10px] uppercase tracking-[0.22em] text-gunmetal">{s.label}</dt>
              <dd className="mt-2 text-sm text-bone/85">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </ApertureSection>
  );
}
