'use client';

import Image from 'next/image';
import { GALLERY, SITE } from '@/lib/site';
import { Reveal } from './motion';
import { cn } from '@/lib/cn';

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5.5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="17.4" cy="6.6" r="1.05" fill="currentColor" />
    </svg>
  );
}

export function ShopTheLook() {
  return (
    <section
      id="look"
      data-section
      data-section-index="04"
      data-section-label="Shop the Look"
      className="linen-grain relative bg-sand py-24 md:py-32"
    >
      <div className="relative z-[2] mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <p className="section-label">
                <span className="num">04</span>
                <span className="name">Shop the Look</span>
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-serif text-[clamp(2.2rem,6vw,4rem)] leading-[1.02] text-umber">
                Straight from <span className="italic text-clay">{SITE.instagramHandle}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-umber-soft">
                An art-directed window into the shop — warm Florida light, real racks, and pieces
                worth trying on in person. Tap any frame to open its post.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.18}>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-umber"
            >
              <InstagramIcon className="h-4 w-4" />
              <span className="underline-grow">Follow {SITE.instagramHandle}</span>
            </a>
          </Reveal>
        </div>

        {/* Asymmetric masonry */}
        <div className="columns-2 gap-4 md:columns-3 md:gap-6">
          {GALLERY.map((item, i) => (
            <Reveal key={item.src} delay={0.04 * i} className="mb-4 break-inside-avoid md:mb-6">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View on Instagram — ${item.alt}`}
                className={cn(
                  'group relative block overflow-hidden rounded-[20px] bg-sand-deep transition duration-700 hover:-translate-y-1',
                  'float-shadow',
                  item.toss && 'photo-toss hover:rotate-0',
                )}
                style={{ transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)' }}
              >
                <div className={cn('relative', item.span === 'tall' ? 'aspect-[3/4]' : 'aspect-square')}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width:768px) 50vw, 30vw"
                    loading="lazy"
                    className="warm-grade object-cover transition duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-umber/55 via-transparent to-transparent p-4 opacity-0 transition duration-500 group-hover:opacity-100">
                    <span className="numeral text-[0.6rem] font-medium uppercase tracking-[0.26em] text-ivory/90">
                      {SITE.instagramHandle}
                    </span>
                    <InstagramIcon className="h-5 w-5 text-ivory/90" />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Live-feed slot — re-skinned to match the site's treatment */}
        <Reveal>
          <div className="mt-16 flex flex-col items-center gap-5 rounded-[24px] border border-umber/8 bg-ivory/60 p-8 text-center md:p-10">
            <p className="section-label">
              <span className="num">◦</span>
              <span className="name">Live feed ready</span>
            </p>
            <p className="max-w-lg text-[0.92rem] leading-relaxed text-umber-soft">
              The grid above uses curated shop-mood photography, each frame linked to Instagram.
              To wire a live {SITE.instagramHandle} feed, drop a Behold, SnapWidget, or Elfsight
              embed into this slot — the container already carries the site&apos;s rounded corners,
              long-throw shadow, and warm color grade, so it won&apos;t read as a bolted-on plugin.
            </p>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-1"
            >
              <InstagramIcon className="h-4 w-4" />
              Open Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
