'use client';

import Image from 'next/image';
import { SITE } from '@/lib/site';
import { Reveal, Parallax, MaskReveal } from './motion';

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5.5" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14.5 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V3.1C16.6 3 15.8 3 14.9 3c-2 0-3.3 1.2-3.3 3.4v2.1H9.5V11h2.1v8h2.6v-8h2.1l.4-2.5h-2.5Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function VisitUs() {
  return (
    <section
      id="visit"
      data-section
      data-section-index="06"
      data-section-label="Visit"
      className="linen-grain relative overflow-hidden bg-sand-deep py-24 md:py-32"
    >
      <div className="relative z-[2] mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* Editorial column */}
          <div className="flex flex-col justify-center">
            <Reveal>
              <p className="section-label">
                <span className="num">06</span>
                <span className="name">Visit Fountain Square</span>
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-serif text-[clamp(2.2rem,6vw,4rem)] leading-[1.02] text-umber">
                Find us in the<span className="italic text-clay"> square.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-lg text-[0.98rem] leading-relaxed text-umber-soft">
                {SITE.nameFull} keeps a sunlit corner of {SITE.place} on East Granada
                Boulevard — a walkable pocket of Ormond Beach where the coast&apos;s slower pace
                meets an afternoon of browsing. Come for the linen and the Spartina; stay for the
                unhurried welcome.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <Reveal delay={0.18}>
                <div>
                  <p className="micro mb-3">Address</p>
                  <a
                    href={SITE.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-thin font-serif text-xl leading-snug text-umber"
                  >
                    142 E Granada Blvd, Ste 4<br />
                    {SITE.city}, {SITE.state} {SITE.zip}
                  </a>
                  <a
                    href={SITE.phoneHref}
                    className="link-thin mt-3 block text-[0.95rem]"
                  >
                    {SITE.phone}
                  </a>
                </div>
              </Reveal>
              <Reveal delay={0.24}>
                <div>
                  <p className="micro mb-3">Hours</p>
                  <ul className="space-y-1.5">
                    {SITE.hours.map((h) => (
                      <li
                        key={h.days}
                        className="flex items-baseline justify-between gap-4 text-[0.9rem] text-umber-soft"
                      >
                        <span>{h.days}</span>
                        <span className="numeral tracking-wide text-umber">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-gold">
                  Get Directions
                </a>
                <div className="flex items-center gap-5">
                  <a
                    href={SITE.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="link-thin"
                  >
                    <InstagramIcon className="h-6 w-6" />
                  </a>
                  <a
                    href={SITE.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="link-thin"
                  >
                    <FacebookIcon className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Map + storefront column */}
          <div className="flex flex-col gap-6">
            {/* Mask-reveal section flourish — image blooms in through a circle */}
            <MaskReveal
              variant="circle"
              className="relative aspect-[4/3] overflow-hidden rounded-[24px] float-shadow"
            >
              <Parallax speed={0.08} className="absolute inset-0 scale-110">
                <Image
                  src="/images/storefront.jpg"
                  alt="Joyologie Boutique storefront in Fountain Square, Ormond Beach"
                  fill
                  sizes="(max-width:1024px) 100vw, 45vw"
                  loading="lazy"
                  className="warm-grade object-cover"
                />
              </Parallax>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-umber/60 to-transparent p-6">
                <p className="numeral text-[0.62rem] font-medium uppercase tracking-[0.3em] text-ivory/90">
                  {SITE.place}
                </p>
              </div>
            </MaskReveal>
            <Reveal delay={0.12} className="relative aspect-[16/10] overflow-hidden rounded-[24px] border border-umber/8 float-shadow">
              <iframe
                title={`Map to ${SITE.nameFull}`}
                src={SITE.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale-[0.15]"
                style={{ border: 0, filter: 'sepia(0.12) saturate(0.9)' }}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
