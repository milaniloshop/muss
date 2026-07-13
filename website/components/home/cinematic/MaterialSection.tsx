'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ApertureSection } from './ApertureSection';
import { RackFocusHeading } from './RackFocusHeading';

let registered = false;

const SPECS = [
  { label: 'Architecture', value: '4-way compression weave' },
  { label: 'Seam system', value: 'Zero-slip seam architecture' },
  { label: 'Hand-feel', value: 'Second-skin recovery modulus' },
  { label: 'Visibility', value: 'Invisible under fitted shirts' },
  { label: 'Zones', value: 'Mapped chest + core hold' },
  { label: 'Finish', value: 'Hard-light ribbing, no foam' },
];

export function MaterialSection() {
  const fabricRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }
    const root = fabricRef.current;
    if (!root) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile = window.matchMedia('(max-width: 768px)').matches;

    const ctx = gsap.context(() => {
      const layers = root.querySelectorAll('[data-fabric-layer]');
      layers.forEach((layer, i) => {
        if (mobile || reduce) {
          gsap.fromTo(
            layer,
            { autoAlpha: 0.7 },
            {
              autoAlpha: 1,
              scrollTrigger: { trigger: root, start: 'top 80%', end: 'bottom 20%', scrub: true },
            },
          );
          return;
        }
        gsap.to(layer, {
          yPercent: (i % 2 === 0 ? -1 : 1) * (8 + i * 4),
          scale: 1 + i * 0.02,
          ease: 'none',
          scrollTrigger: {
            trigger: root,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });
    }, fabricRef);

    return () => ctx.revert();
  }, []);

  return (
    <ApertureSection id="material" className="overflow-hidden bg-obsidian py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-12 md:gap-10 md:px-8">
        <div className="md:col-span-5">
          <p className="text-[10px] uppercase tracking-[0.32em] text-gunmetal">01 — The Material</p>
          <RackFocusHeading className="mt-4 text-4xl md:text-6xl">
            Engineered
            <br />
            fiber.
          </RackFocusHeading>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-gunmetal md:text-[15px]">
            Spec sheet, not sales pitch. Compression that reads as second skin under hard light —
            weave tension, ribbing, and seams designed to disappear on the body.
          </p>

          <dl className="mt-10 space-y-0 border-t border-bone/10">
            {SPECS.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-bone/10 py-4 text-sm"
              >
                <dt className="text-[11px] uppercase tracking-[0.18em] text-gunmetal">{row.label}</dt>
                <dd className="text-bone/90">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div ref={fabricRef} className="relative md:col-span-7">
          <div className="relative aspect-[4/5] overflow-hidden border border-bone/10 bg-charcoal md:aspect-[5/4]">
            <div data-fabric-layer className="absolute inset-0">
              <Image
                src="/assets/images/products/premium-hero-tank.jpg"
                alt="Macro compression fabric under directional light"
                fill
                sizes="(max-width:768px) 100vw, 55vw"
                className="grade-skin object-cover object-center opacity-90"
              />
            </div>
            <div
              data-fabric-layer
              className="absolute -right-[8%] bottom-[-6%] h-[55%] w-[55%] overflow-hidden border border-bone/15"
            >
              <Image
                src="/assets/images/products/signature-hero-tank.jpg"
                alt="Compression ribbing close-up"
                fill
                sizes="40vw"
                className="grade-skin object-cover"
              />
            </div>
            <div className="vignette" />
            <p className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.24em] text-bone/50">
              Weave · stitch · tension
            </p>
          </div>
        </div>
      </div>
    </ApertureSection>
  );
}
