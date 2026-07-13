'use client';

import { ApertureSection } from './ApertureSection';
import { RackFocusHeading } from './RackFocusHeading';

const CALLOUTS = [
  {
    title: 'Pectoral plane',
    copy: 'Targeted flattening across the chest contour — cleaner drape under fitted shirts.',
  },
  {
    title: 'Midsection hold',
    copy: 'Mapped core compression. Smooths without bulk or line telegraph.',
  },
  {
    title: 'Seamless flanks',
    copy: 'Side architecture engineered to vanish under dress shirts.',
  },
  {
    title: 'Anchor hem',
    copy: 'Extended length stays tucked — no ride-up under load.',
  },
];

export function FitPhilosophy() {
  return (
    <ApertureSection id="fit" className="overflow-hidden border-y border-bone/10 bg-charcoal py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:items-center md:gap-16 md:px-8">
        <div>
          <p className="text-[10px] uppercase tracking-[0.32em] text-gunmetal">02 — The Fit Philosophy</p>
          <RackFocusHeading className="mt-4 text-4xl md:text-6xl">
            Muscle-mapped
            <br />
            compression.
          </RackFocusHeading>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-gunmetal">
            Blueprint logic. Thin linework. Callouts like an Apple product page — every zone has a
            job. No pads. No costume. Real hold.
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

        <div className="relative mx-auto aspect-[3/4] w-full max-w-md border border-bone/15 bg-obsidian">
          <svg viewBox="0 0 320 420" className="absolute inset-0 h-full w-full" role="img" aria-label="Compression zone blueprint">
            <defs>
              <pattern id="mh-grid" width="16" height="16" patternUnits="userSpaceOnUse">
                <path d="M 16 0 L 0 0 0 16" fill="none" stroke="rgba(235,230,220,0.06)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="320" height="420" fill="url(#mh-grid)" />
            <path
              d="M110 48 L160 62 L210 48 L236 92 L248 160 L240 300 L210 380 L160 392 L110 380 L80 300 L72 160 L84 92 Z"
              fill="rgba(235,230,220,0.03)"
              stroke="rgba(235,230,220,0.55)"
              strokeWidth="1"
            />
            <ellipse cx="160" cy="118" rx="42" ry="28" fill="none" stroke="rgba(224,69,26,0.65)" strokeWidth="1" />
            <ellipse cx="160" cy="218" rx="36" ry="40" fill="none" stroke="rgba(224,69,26,0.55)" strokeWidth="1" />
            <path d="M84 150 Q160 170 236 150" fill="none" stroke="rgba(235,230,220,0.25)" strokeWidth="1" strokeDasharray="2 3" />
            <circle cx="160" cy="118" r="2.5" fill="#e0451a" />
            <circle cx="160" cy="218" r="2.5" fill="#e0451a" />
            <circle cx="232" cy="176" r="2.5" fill="#e0451a" />
            <circle cx="160" cy="328" r="2.5" fill="#e0451a" />
            <text x="210" y="100" fill="#ebe6dc" fontSize="9" letterSpacing="1.5" opacity="0.7">
              CHEST
            </text>
            <text x="188" y="230" fill="#ebe6dc" fontSize="9" letterSpacing="1.5" opacity="0.7">
              CORE
            </text>
            <text x="242" y="180" fill="#ebe6dc" fontSize="9" letterSpacing="1.5" opacity="0.7">
              FLANK
            </text>
            <text x="178" y="340" fill="#ebe6dc" fontSize="9" letterSpacing="1.5" opacity="0.7">
              HEM
            </text>
          </svg>
          <p className="absolute bottom-3 left-3 text-[9px] uppercase tracking-[0.22em] text-bone/40">
            Technical schematic · CoreFit
          </p>
        </div>
      </div>
    </ApertureSection>
  );
}
