'use client';

import Image from 'next/image';
import { SITE } from '@/lib/site';
import { asset } from '@/lib/asset';
import { Reveal, Parallax } from './motion';

export function Experience() {
  return (
    <section id="experience" className="paper-grain relative overflow-hidden bg-cream py-24 md:py-36">
      <div className="relative z-[2] mx-auto grid max-w-[1300px] items-center gap-12 px-5 md:grid-cols-[1fr_0.85fr] md:gap-20 md:px-8">
        <div>
          <Reveal>
            <p className="micro text-coral">The Sugar Nail Bar Experience</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-serif text-[clamp(2.2rem,5.5vw,4.2rem)] leading-[1.05] text-ink">
              Every appointment is a
              <span className="italic text-coral"> little celebration.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-8 max-w-xl text-[1.02rem] leading-relaxed text-ink-soft">
              Pour something bubbly. Sink into a warm chair. Every mani, pedi, and set
              comes with a complimentary <strong className="font-semibold text-ink">mimosa,
              wine, or coffee</strong> — and finishes with our <strong className="font-semibold text-ink">
              homemade sugar scrub</strong> in the scent you choose. It&apos;s the smallest
              luxury, done on purpose.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href={SITE.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost mt-8 text-merlot"
            >
              <span className="underline-grow">Reserve your escape</span>
              <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="relative">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[26px] float-shadow">
            <Parallax speed={0.06} className="absolute inset-0 scale-110">
              <Image
                src={asset('/images/experience.jpg')}
                alt="A jar of homemade sugar scrub with lavender and citrus"
                fill
                sizes="(max-width:768px) 100vw, 40vw"
                loading="lazy"
                className="warm-grade object-cover"
              />
            </Parallax>
          </div>
          <div className="absolute -bottom-5 -left-4 rounded-2xl bg-ivory px-5 py-3 float-shadow md:-left-8">
            <p className="micro text-merlot">Homemade</p>
            <p className="font-serif text-lg text-ink">Sugar Scrub Ritual</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
