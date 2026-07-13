'use client';

import { ApertureSection } from './ApertureSection';
import { RackFocusHeading } from './RackFocusHeading';

const QUOTES = [
  {
    quote: 'It disappears under a dress shirt. That was the whole point.',
    by: 'Marcus R.',
    role: 'Competitive powerlifting',
  },
  {
    quote: 'No gimmick. Just hold where I need it — chest and core.',
    by: 'Jonah K.',
    role: 'HYROX athlete',
  },
  {
    quote: 'Feels like armor you forgot you put on.',
    by: 'Eli V.',
    role: 'Strength coach',
  },
];

export function ProofSection() {
  return (
    <ApertureSection id="proof" className="border-y border-bone/10 bg-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 max-w-lg">
          <p className="text-[10px] uppercase tracking-[0.32em] text-gunmetal">05 — Proof</p>
          <RackFocusHeading className="mt-4 text-4xl md:text-5xl">Field notes.</RackFocusHeading>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          {QUOTES.map((item) => (
            <figure
              key={item.by}
              className="border border-bone/10 bg-obsidian/40 p-6 md:p-8"
            >
              <blockquote className="text-sm leading-relaxed text-bone/85 md:text-[15px]">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-8 border-t border-bone/10 pt-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-ember">{item.by}</p>
                <p className="mt-1 text-[11px] text-gunmetal">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </ApertureSection>
  );
}
