'use client';

import { ApertureSection } from './ApertureSection';
import { RackFocusHeading } from './RackFocusHeading';

const CALLOUTS = [
  {
    title: 'Curated drops',
    copy: 'Only pieces that match the Milan Hype standard — no random reseller grid.',
  },
  {
    title: 'Instagram-first',
    copy: 'First looks and sizing help live on @Milanhype_ before the full catalog hits.',
  },
  {
    title: 'Street polish',
    copy: 'Fits and pairs built for how you actually walk out the door.',
  },
  {
    title: 'Black + red',
    copy: 'MH mark in AC Milan energy — clean, bold, unmistakable.',
  },
];

export function FitPhilosophy() {
  return (
    <ApertureSection id="fit" className="overflow-hidden border-y border-bone/10 bg-charcoal py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:items-center md:gap-16 md:px-8">
        <div>
          <p className="text-[10px] uppercase tracking-[0.32em] text-gunmetal">02 — The Philosophy</p>
          <RackFocusHeading className="mt-4 text-4xl md:text-6xl">
            Quiet luxury.
            <br />
            Downtown heat.
          </RackFocusHeading>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-gunmetal">
            Not compression tanks. Not padded gimmicks. A clothing and sneakers store with Milan
            attitude and premium presentation.
          </p>

          <ul className="mt-10 space-y-5">
            {CALLOUTS.map((item) => (
              <li key={item.title} className="border-l border-ember/70 pl-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-bone">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-gunmetal">{item.copy}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto flex aspect-[3/4] w-full max-w-md items-center justify-center border border-bone/15 bg-obsidian">
          <div className="text-center">
            <p className="font-display text-[7rem] leading-none tracking-tight text-bone/10">MH</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.35em] text-ember">Milan Hype</p>
            <p className="mt-4 text-xs text-gunmetal">Apparel · Sneakers</p>
          </div>
          <div className="absolute inset-x-0 top-0 h-1 bg-ember" aria-hidden />
          <div className="absolute inset-x-0 bottom-0 h-1 bg-ember" aria-hidden />
        </div>
      </div>
    </ApertureSection>
  );
}
