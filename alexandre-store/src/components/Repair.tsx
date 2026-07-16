'use client';

import Image from 'next/image';
import { REPAIR_SERVICES } from '@/lib/site';
import { Parallax, Reveal } from '@/components/motion';

function ServiceIcon({ index }: { index: number }) {
  const d = [
    'M4 8h16v10H4V8zm4-3h8v3H8V5z',
    'M8 17V7h3a3 3 0 010 6H8m6 4V7h2',
    'M8 12h8m-4-8v3m0 10v3M6 8l-2 4 2 4m12-8l2 4-2 4',
    'M12 4v4m0 8v4M4 12h4m8 0h4M7 7l2.5 2.5M14.5 14.5L17 17M17 7l-2.5 2.5M9.5 14.5L7 17',
    'M4 7h16v11H4V7zm2 0V5h12v2',
  ];
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d={d[index] ?? d[0]}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Repair() {
  return (
    <section id="repair" className="bg-cloud">
      <div className="mx-auto grid max-w-6xl gap-0 lg:grid-cols-2">
        <div className="relative min-h-[320px] overflow-hidden lg:min-h-full">
          <Parallax speed={0.12} className="absolute inset-0">
            <Image
              src="/images/repair-bench.jpg"
              alt="Precision repair bench with tools and an iPhone mid-service"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Parallax>
          <div className="absolute inset-0 bg-gradient-to-t from-graphite/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-cloud/20" />
        </div>

        <div className="px-5 py-16 md:px-10 md:py-24 lg:py-28">
          <Reveal>
            <p className="micro text-muted">In-House Repair</p>
            <h2 className="mt-3 text-[clamp(1.85rem,3.5vw,2.65rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-ink">
              Repair, Done Right
            </h2>
            <p className="mt-4 max-w-md text-base text-ink/65">
              Expert surgery — not a back-alley fix. Same cool studio standard as our
              sales floor, measured and guaranteed.
            </p>
          </Reveal>

          <ul className="mt-10 space-y-4">
            {REPAIR_SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={0.05 * i}>
                <li className="flex gap-4 border-b border-[var(--line)] pb-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue shadow-[var(--shadow-cool)]">
                    <ServiceIcon index={i} />
                  </span>
                  <div>
                    <h3 className="font-semibold tracking-[-0.015em] text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink/60">{service.copy}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.2}>
            <a href="#visit" className="btn-primary mt-10 cursor-pointer">
              Get a Repair Quote
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
