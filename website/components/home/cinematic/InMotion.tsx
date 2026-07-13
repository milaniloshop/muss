'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ApertureSection } from './ApertureSection';
import { RackFocusHeading } from './RackFocusHeading';

const FRAMES = [
  '/assets/images/products/tiers/tier-pro-black-model.jpg',
  '/assets/images/products/tiers/tier-elite-black-model.jpg',
  '/assets/images/products/tiers/tier-signature-black-model.jpg',
  '/assets/images/products/tiers/tier-pro-back-model.jpg',
];

/** Cinematic looping block — image sequence graded like muted autoplay video (no heavy mp4). */
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
            <p className="text-[10px] uppercase tracking-[0.32em] text-gunmetal">03 — In Motion</p>
            <RackFocusHeading className="mt-4 text-4xl md:text-6xl">
              Under load.
            </RackFocusHeading>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-gunmetal">
            Sweat, tension, fabric response — graded in the same obsidian / ember language as the
            hero. Training stress is the proof.
          </p>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden border border-bone/10 bg-black md:aspect-[21/9]">
          {FRAMES.map((src, i) => (
            <div
              key={src}
              className="absolute inset-0 transition-opacity duration-[1200ms] ease-out"
              style={{ opacity: i === frame ? 1 : 0 }}
            >
              <Image
                src={src}
                alt="Compression tank under training stress"
                fill
                sizes="100vw"
                className={`grade-skin object-cover object-top ${i === frame ? 'ken-burns' : ''}`}
                priority={i === 0}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.55)_100%)]" />
          <div className="absolute left-4 top-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-bone/60">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_8px_rgba(224,69,26,0.8)]" />
            Loop · muted
          </div>
          <p className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.22em] text-bone/45 md:bottom-6 md:left-6">
            Fabric response under real training stress
          </p>
        </div>
      </div>
    </ApertureSection>
  );
}
