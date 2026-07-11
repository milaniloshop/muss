'use client';

import Image from 'next/image';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';
import { ButtonLink } from '@/components/ui/Button';

const TRUST = [
  { title: '30-Day Guarantee', desc: 'Try at home. Full refund if not satisfied.' },
  { title: 'Discreet Shipping', desc: 'Plain packaging. No product branding outside.' },
  { title: 'Ships in 24h', desc: 'Orders processed same business day.' },
  { title: '4.9 Verified', desc: 'Real reviews from real customers.' },
];

export function TrustStrip() {
  return (
    <section className="border-y border-white/8 bg-black/40 py-10">
      <Stagger className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-2 md:grid-cols-4 md:px-8">
        {TRUST.map((item) => (
          <StaggerItem key={item.title}>
            <p className="text-sm font-medium text-white">{item.title}</p>
            <p className="mt-1 text-sm text-silver/65">{item.desc}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

export function ResultsSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-blue-glow/80">Real results</p>
          <h2 className="mt-3 font-display text-4xl text-white md:text-5xl">
            Same body. Sharper silhouette.
          </h2>
          <p className="mt-4 max-w-xl text-silver/75">
            Compression that flattens and smoothes — not padded fake muscle.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            '/assets/images/social/before-after-chest-core.jpg',
            '/assets/images/social/in-action-dress-shirt.jpg',
            '/assets/images/social/review-mirror-front.jpg',
          ].map((src, i) => (
            <Reveal key={src} delay={i * 0.08} className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image src={src} alt="CoreFit result" fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(58,111,247,0.16),transparent_55%)]" />
      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <h2 className="font-display text-4xl text-white md:text-5xl">
            Look leaner. Feel sharper.
          </h2>
          <p className="mt-4 text-silver/75">
            Start with Pro — the tier most men choose for daily confidence.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <ButtonLink href="/product/corefit-pro" magnetic>
              Shop CoreFit Pro
            </ButtonLink>
            <ButtonLink href="/about" variant="outline">
              Our story
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
