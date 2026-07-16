'use client';

import { SITE } from '@/lib/site';
import { Reveal } from '@/components/motion';

export function Visit() {
  return (
    <section id="visit" className="bg-cloud px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="micro text-muted">Visit / Contact</p>
          <h2 className="mt-3 text-[clamp(1.85rem,4vw,2.65rem)] font-semibold tracking-[-0.03em] text-ink">
            Come see the bench.
          </h2>
          <p className="mt-4 max-w-md text-base text-ink/65">
            Walk in for devices, diagnostics, or a trade-in quote. Placeholder details —
            update with final store info before launch.
          </p>

          <dl className="mt-10 space-y-6">
            <div>
              <dt className="micro text-muted">Address</dt>
              <dd className="mt-2 text-ink">
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer transition-colors hover:text-blue"
                >
                  {SITE.fullAddress}
                </a>
              </dd>
            </div>
            <div>
              <dt className="micro text-muted">Hours</dt>
              <dd className="mt-2 space-y-1 text-ink">
                {SITE.hours.map((h) => (
                  <div key={h.days} className="flex flex-wrap gap-x-3">
                    <span className="min-w-[10rem] text-ink/70">{h.days}</span>
                    <span className="font-mono-spec text-sm">{h.time}</span>
                  </div>
                ))}
              </dd>
            </div>
            <div>
              <dt className="micro text-muted">Phone</dt>
              <dd className="mt-2">
                <a
                  href={SITE.phoneHref}
                  className="font-mono-spec cursor-pointer text-ink transition-colors hover:text-blue"
                >
                  {SITE.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="micro text-muted">Social</dt>
              <dd className="mt-2 flex flex-wrap gap-4 text-sm">
                <a
                  href={SITE.instagram}
                  className="cursor-pointer text-ink/70 transition-colors hover:text-blue"
                >
                  {SITE.instagramHandle}
                </a>
                <a
                  href={SITE.facebook}
                  className="cursor-pointer text-ink/70 transition-colors hover:text-blue"
                >
                  Facebook
                </a>
                <a
                  href={SITE.whatsapp}
                  className="cursor-pointer text-ink/70 transition-colors hover:text-blue"
                >
                  WhatsApp
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href={SITE.phoneHref} className="btn-primary cursor-pointer">
              Call the Store
            </a>
            <a
              href={SITE.emailHref}
              className="btn-secondary btn-secondary-dark cursor-pointer"
            >
              Email Us
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="overflow-hidden rounded-[20px] border border-[var(--line)] bg-white shadow-[var(--shadow-cool)]">
            <iframe
              title="Alexandre Store map"
              src={SITE.mapsEmbed}
              className="h-[340px] w-full border-0 md:h-[440px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
