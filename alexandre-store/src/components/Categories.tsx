'use client';

import Image from 'next/image';
import { CATEGORIES } from '@/lib/site';
import { Parallax, Reveal } from '@/components/motion';

export function Categories() {
  return (
    <section id="categories" className="bg-cloud px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="micro text-muted">Shop by Category</p>
          <h2 className="mt-3 max-w-xl text-[clamp(1.85rem,4vw,2.75rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-ink">
            Choose your path — new, certified, or repaired.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.title} delay={0.08 * i}>
              <a
                href={cat.href}
                className="group relative block aspect-[4/5] overflow-hidden device-radius focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
              >
                <Parallax speed={0.1} className="absolute inset-0">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                </Parallax>
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/90 via-graphite/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <span className="micro text-white/65">{cat.label}</span>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-white">
                    {cat.title}
                  </h3>
                  <p className="mt-2 max-w-[18rem] text-sm leading-relaxed text-white/72">
                    {cat.copy}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
