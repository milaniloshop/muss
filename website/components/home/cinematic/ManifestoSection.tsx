'use client';

import { ApertureSection } from './ApertureSection';
import { RackFocusHeading } from './RackFocusHeading';
import { BRAND } from '@/lib/products';

export function ManifestoSection() {
  return (
    <ApertureSection id="standard" className="bg-obsidian py-28 md:py-40">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <p className="text-[10px] uppercase tracking-[0.32em] text-gunmetal">06 — The Standard</p>
        <RackFocusHeading className="mt-6 text-4xl md:text-6xl lg:text-7xl">
          We don&apos;t make the brands.
          <br />
          We plug the hits.
        </RackFocusHeading>
        <p className="mx-auto mt-10 max-w-2xl text-sm leading-[1.85] text-gunmetal md:text-base">
          Milan Hype is a hype clothing and sneakers reseller — not a personal brand. Designer
          denim, collabs, leather, and street essentials with black-and-red MH energy. Shop the
          catalog or DM {BRAND.instagramHandle} before sizes disappear.
        </p>
        <div className="mx-auto mt-10 h-px w-24 bg-ember" aria-hidden />
        <p className="mt-6 text-[11px] uppercase tracking-[0.28em] text-ember">
          Real pieces. Limited sizes. Move fast.
        </p>
      </div>
    </ApertureSection>
  );
}
