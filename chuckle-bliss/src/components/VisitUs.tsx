'use client';

import { SITE } from '@/lib/site';
import { Reveal } from './motion';

function IconInstagram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.2l.8-3H14V9z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function VisitUs() {
  return (
    <section id="visit" className="linen-grain relative bg-linen py-24 md:py-32">
      <div className="relative z-[2] mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:items-center md:gap-16 md:px-8">
        <div>
          <Reveal>
            <p className="micro text-sage-deep">Visit Us</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-serif text-4xl text-espresso md:text-5xl">
              Come say hello on Granada.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 max-w-md text-[15px] text-espresso-soft">
              We&apos;re inside the {SITE.place} — a calm little stop for locals, weekenders, and
              anyone chasing that golden-hour boutique feeling.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <address className="mt-10 not-italic">
              <p className="font-serif text-2xl text-espresso">{SITE.name}</p>
              <p className="mt-2 text-espresso-soft">{SITE.address}</p>
              <p className="text-espresso-soft">
                {SITE.city}, {SITE.state} {SITE.zip}
              </p>
              <a
                href={`tel:${SITE.phone.replace(/[^\d+]/g, '')}`}
                className="mt-3 inline-block text-espresso-soft transition hover:text-terracotta"
              >
                {SITE.phone}
              </a>
            </address>
          </Reveal>

          <Reveal delay={0.26}>
            <ul className="mt-8 space-y-2 border-t border-espresso/10 pt-6">
              {SITE.hours.map((row) => (
                <li key={row.days} className="flex justify-between gap-6 text-sm text-espresso-soft">
                  <span>{row.days}</span>
                  <span className="text-espresso">{row.time}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-terracotta">
                Get Directions
              </a>
              <div className="flex items-center gap-3">
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-espresso-soft transition hover:text-terracotta"
                  aria-label="Instagram"
                >
                  <IconInstagram />
                </a>
                <a
                  href={SITE.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-espresso-soft transition hover:text-terracotta"
                  aria-label="Facebook"
                >
                  <IconFacebook />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12} y={28}>
          <div className="overflow-hidden rounded-[22px] shadow-[0_30px_60px_-34px_rgba(47,38,31,0.45)]">
            <iframe
              title="Map to Chuckle & Bliss"
              src={SITE.mapsEmbed}
              className="h-[360px] w-full border-0 md:h-[460px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
