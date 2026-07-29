'use client';

import { ApertureSection } from './ApertureSection';
import { RackFocusHeading } from './RackFocusHeading';
import { BRAND } from '@/lib/products';

const SPECS = [
  { label: 'Model', value: 'Hype reseller — not our brand' },
  { label: 'Stock', value: 'Limited sizes · often 1 left' },
  { label: 'Shop', value: 'Site + Instagram DMs' },
  { label: 'Support', value: `${BRAND.instagramHandle}` },
  { label: 'Fulfill', value: 'Ship + local meetups' },
  { label: 'Mark', value: 'MH · black & red' },
];

export function MaterialSection() {
  return (
    <ApertureSection id="categories" className="bg-obsidian py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 max-w-xl">
          <p className="text-[10px] uppercase tracking-[0.32em] text-gunmetal">01 — The Store</p>
          <RackFocusHeading className="mt-4 text-4xl md:text-6xl">
            Hype clothes.
            <br />
            Real hits.
          </RackFocusHeading>
          <p className="mt-5 text-sm leading-relaxed text-gunmetal">
            Apparel on the site now — denim, collabs, leather, flannels, sweats. Sneakers as they
            land. Photos stay as the seller shot them.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <a
            href="/collection?c=apparel"
            className="group relative min-h-[280px] overflow-hidden border border-bone/10 bg-charcoal p-8 transition hover:border-ember/50"
          >
            <p className="text-[10px] uppercase tracking-[0.28em] text-ember">Apparel</p>
            <h3 className="mt-4 font-display text-4xl text-bone">Denim · Collabs · Outerwear</h3>
            <p className="mt-3 max-w-sm text-sm text-gunmetal">Live listings with sizes and prices.</p>
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
