'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ApertureSection } from './ApertureSection';
import { RackFocusHeading } from './RackFocusHeading';
import { BRAND } from '@/lib/products';

const FRAMES = [
  '/assets/images/products/placeholder-apparel.svg',
  '/assets/images/products/placeholder-sneakers.svg',
  '/assets/images/logo-mh.svg',
  '/assets/images/products/placeholder-apparel.svg',
];

export function InMotion() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      setFrame((f) => (f + 1) % FRAMES.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <ApertureSection id="motion" className="overflow-hidden bg-obsidian py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-gunmetal">03 — Lookbook</p>
            <RackFocusHeading className="mt-4 text-4xl md:text-6xl">
              The vibe.
            </RackFocusHeading>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-gunmetal">
            Black and red. Street polish. Real product photography replaces these frames when you
            send the drops — follow {BRAND.instagramHandle} meanwhile.
          </p>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden border border-bone/10 bg-black md:aspect-[21/9]">
          {FRAMES.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="absolute inset-0 transition-opacity duration-[1200ms] ease-out"
              style={{ opacity: i === frame ? 1 : 0 }}
            >
              <Image
                src={src}
                alt="Milan Hype apparel and sneakers mood"
                fill
                sizes="100vw"
                className={`object-contain p-12 md:p-20 ${i === frame ? 'ken-burns' : ''}`}
                priority={i === 0}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/40" />
          <div className="absolute left-4 top-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-bone/60">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_8px_rgba(227,6,19,0.8)]" />
            Loop · muted
          </div>
          <p className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.22em] text-bone/45 md:bottom-6 md:left-6">
            Product lookbook frames — awaiting your photos
          </p>
        </div>
      </div>
    </ApertureSection>
  );
}
