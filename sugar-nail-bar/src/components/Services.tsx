'use client';

import Image from 'next/image';
import { SERVICES, SITE } from '@/lib/site';
import { asset } from '@/lib/asset';
import { Reveal } from './motion';

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-cream-deep py-24 md:py-32">
      <div className="mx-auto max-w-[1300px] px-5 md:px-8">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <p className="micro text-coral">Services</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-serif text-[clamp(2.2rem,5.5vw,4rem)] leading-[1.04] text-ink">
                Sit back. We&apos;ll take it <span className="italic text-coral">from here.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <a href={SITE.services} target="_blank" rel="noopener noreferrer" className="btn-ghost text-merlot">
              <span className="underline-grow">Full menu & pricing</span>
              <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.name} delay={0.06 * i}>
              <a
                href={SITE.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-hover group block h-full overflow-hidden rounded-[24px] bg-ivory float-shadow"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={asset(s.image)}
                    alt={s.alt}
                    fill
                    sizes="(max-width:640px) 100vw, 25vw"
                    loading="lazy"
                    className="warm-grade object-cover transition duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-[1.5rem] leading-tight text-ink">{s.name}</h3>
                  <p className="mt-3 text-[0.92rem] leading-relaxed text-ink-soft">{s.copy}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
