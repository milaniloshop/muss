'use client';

import Image from 'next/image';
import { SITE } from '@/lib/site';
import { asset } from '@/lib/asset';
import { Reveal, Parallax } from './motion';

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5.5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="17.4" cy="6.6" r="1.05" fill="currentColor" />
    </svg>
  );
}
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14.5 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V3.1C16.6 3 15.8 3 14.9 3c-2 0-3.3 1.2-3.3 3.4v2.1H9.5V11h2.1v8h2.6v-8h2.1l.4-2.5h-2.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Visit() {
  return (
    <section id="visit" className="paper-grain relative overflow-hidden bg-cream-deep py-24 md:py-32">
      <div className="relative z-[2] mx-auto max-w-[1300px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div className="flex flex-col justify-center">
            <Reveal>
              <p className="micro text-coral">Visit Us</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-serif text-[clamp(2.2rem,5.5vw,4rem)] leading-[1.04] text-ink">
                Find your little <span className="italic text-coral">escape.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-lg text-[1rem] leading-relaxed text-ink-soft">
                Tucked along US-1 in Ormond Beach — a cozy, candy-lit corner made for slowing down.
                We see guests by appointment, so every visit stays unhurried and just for you.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <Reveal delay={0.18}>
                <div>
                  <p className="micro mb-3 text-ink-soft">Find us</p>
                  <a
                    href={SITE.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-thin font-serif text-xl leading-snug text-ink"
                  >
                    409 US-1
                    <br />
                    {SITE.city}, {SITE.state} {SITE.zip}
                  </a>
                </div>
              </Reveal>
              <Reveal delay={0.24}>
                <div>
                  <p className="micro mb-3 text-ink-soft">Hours</p>
                  <p className="font-serif text-xl text-ink">{SITE.hoursNote}</p>
                  <p className="mt-2 text-[0.9rem] text-ink-soft">{SITE.hoursDetail}</p>
                  <a href={SITE.phoneHref} className="link-thin mt-3 block text-[0.95rem]">
                    {SITE.phone}
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a href={SITE.booking} target="_blank" rel="noopener noreferrer" className="btn-merlot">
                  Book Your Appointment
                </a>
                <div className="flex items-center gap-5 text-ink">
                  <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="link-thin">
                    <InstagramIcon className="h-6 w-6" />
                  </a>
                  <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="link-thin">
                    <FacebookIcon className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="flex flex-col gap-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[26px] float-shadow">
              <Parallax speed={0.06} className="absolute inset-0 scale-110">
                <Image
                  src={asset('/images/interior.jpg')}
                  alt="Warm, candy-lit interior of Sugar Nail Bar with massaging pedicure chairs"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  loading="lazy"
                  className="warm-grade object-cover"
                />
              </Parallax>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[26px] float-shadow">
              <iframe
                title={`Map to ${SITE.name}`}
                src={SITE.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
                style={{ border: 0, filter: 'sepia(0.1) saturate(0.95)' }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
