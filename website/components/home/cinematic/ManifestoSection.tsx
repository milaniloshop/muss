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
          We don&apos;t sell noise.
          <br />
          We sell heat.
        </RackFocusHeading>
        <p className="mx-auto mt-10 max-w-2xl text-sm leading-[1.85] text-gunmetal md:text-base">
          Milan Hype is clothing and sneakers — curated drops, black-and-red identity, Instagram-first
          culture on {BRAND.instagramHandle}. No compression tanks. No padded gimmicks. Just fits and
          pairs that look expensive when you walk out the door.
        </p>
        <div className="mx-auto mt-10 h-px w-24 bg-ember" aria-hidden />
        <p className="mt-6 text-[11px] uppercase tracking-[0.28em] text-ember">
          The standard is non-negotiable.
        </p>
      </div>
    </ApertureSection>
  );
}
