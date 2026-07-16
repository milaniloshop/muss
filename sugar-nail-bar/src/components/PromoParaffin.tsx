'use client';

import Image from 'next/image';
import { SITE } from '@/lib/site';
import { asset } from '@/lib/asset';
import { Reveal } from './motion';

const BENEFITS = [
  {
    title: 'Deeply moisturizes & hydrates',
    icon: (
      <path d="M12 3s6 6.5 6 11a6 6 0 1 1-12 0c0-4.5 6-11 6-11z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    ),
  },
  {
    title: 'Softens dry, rough skin',
    icon: (
      <path d="M4 14c2.5-2 4-2 6 0s3.5 2 6 0 3.5-2 4-1M4 18c2.5-2 4-2 6 0s3.5 2 6 0 3.5-2 4-1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    ),
  },
  {
    title: 'Soothing warmth for relaxation',
    icon: (
      <>
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'Leaves feet feeling silky smooth',
    icon: (
      <path d="M12 3l1.8 4.7L18.5 9l-4.7 1.3L12 15l-1.8-4.7L5.5 9l4.7-1.3L12 3z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    ),
  },
];

export function PromoParaffin() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-[1300px] px-5 md:px-8">
        <Reveal>
          <div className="grid items-stretch overflow-hidden rounded-[32px] bg-ivory shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] md:grid-cols-2">
            <div className="relative min-h-[280px] overflow-hidden">
              <Image
                src={asset('/images/service-pedicure.jpg')}
                alt="Warm paraffin wax pedicure treatment"
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                loading="lazy"
                className="warm-grade object-cover"
              />
              <span className="absolute left-5 top-5 rounded-full bg-merlot px-4 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-ivory">
                Limited Time
              </span>
            </div>

            <div className="flex flex-col justify-center p-7 md:p-12">
              <p className="micro text-coral">Complimentary</p>
              <h2 className="mt-3 font-serif text-[clamp(2rem,5vw,3.4rem)] leading-[1.02] text-ink">
                Paraffin Wax <span className="italic text-coral">Treatment</span>
              </h2>
              <p className="mt-4 text-[0.95rem] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                Deep hydration. Soft, smooth, renewed.
              </p>

              <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                {BENEFITS.map((b) => (
                  <li key={b.title} className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blush-soft text-merlot">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                        {b.icon}
                      </svg>
                    </span>
                    <span className="text-[0.9rem] leading-snug text-ink-soft">{b.title}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl bg-blush-soft/60 p-5">
                <p className="text-[0.95rem] leading-relaxed text-ink">
                  Add <strong className="font-semibold">Gel Polish</strong> to any pedicure service and
                  receive a <strong className="font-semibold text-merlot">Complimentary Paraffin Wax
                  Treatment</strong>. <span aria-hidden>❤</span>
                </p>
              </div>

              <a href={SITE.bookingAnchor} className="btn-merlot mt-7 self-start">
                Claim This Offer
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
