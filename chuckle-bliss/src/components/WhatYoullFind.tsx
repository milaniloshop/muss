'use client';

import Image from 'next/image';
import { CATEGORIES } from '@/lib/site';
import { Reveal } from './motion';

export function WhatYoullFind() {
  return (
    <section id="find" className="linen-grain relative bg-linen py-24 md:py-32">
      <div className="relative z-[2] mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="micro text-sage-deep">The Collection</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 max-w-xl font-serif text-4xl text-espresso md:text-5xl">
            What you&apos;ll find
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-4 max-w-lg text-[15px] text-espresso-soft">
            Clothing, accessories, and gifts curated for locals and visitors who want something
            personal — never noisy, never generic.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.title} delay={0.08 * i}>
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] shadow-[0_24px_50px_-32px_rgba(47,38,31,0.45)]">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(max-width:768px) 100vw, 30vw"
                    className="warm-grade object-cover transition duration-[400ms] ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-espresso md:text-3xl">{cat.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-espresso-soft">{cat.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
