'use client';

import Image from 'next/image';
import { Reveal, Parallax } from './motion';
import { SITE } from '@/lib/site';

export function Welcome() {
  return (
    <section id="welcome" className="linen-grain relative overflow-hidden bg-linen py-24 md:py-32">
      <div className="relative z-[2] mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-12 md:items-center md:gap-16 md:px-8">
        <div className="md:col-span-6">
          <Reveal>
            <p className="micro text-sage-deep">Welcome</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-serif text-4xl text-espresso md:text-5xl lg:text-6xl">
              A boutique built on joy, style, and a little bliss.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <blockquote className="mt-8 border-l border-terracotta/50 pl-5 font-serif text-2xl leading-snug text-espresso-soft md:text-3xl">
              “Forget the rules — if you like it, wear it.”
            </blockquote>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-8 max-w-lg text-[15px] leading-relaxed text-espresso-soft">
              Owner {SITE.owner} dreamed of a warm, welcoming shop where women of every age could find
              something that feels like them — everyday ease, special-night polish, and gifts chosen
              with care. Named for her sons Carter and Bryson, Chuckle &amp; Bliss lives inside the{' '}
              {SITE.place} on Granada: sunlight, linen calm, and clothes that make you smile.
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-6">
          <Reveal delay={0.12} y={32}>
            <Parallax speed={0.12} className="overflow-hidden rounded-[22px] shadow-[0_30px_60px_-36px_rgba(47,38,31,0.45)]">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/interior.jpg"
                  alt="Warm boutique interior at Chuckle & Bliss"
                  fill
                  sizes="(max-width:768px) 100vw, 45vw"
                  className="warm-grade object-cover"
                />
              </div>
            </Parallax>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
