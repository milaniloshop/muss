'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { GALLERY, SITE } from '@/lib/site';
import { Reveal } from './motion';
import { cn } from '@/lib/cn';

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

export function ShopTheLook() {
  const pinRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile = window.matchMedia('(max-width: 900px)').matches;
    if (reduce || mobile) return;

    const pin = pinRef.current;
    const sticky = stickyRef.current;
    if (!pin || !sticky) return;

    const onScroll = () => {
      const rect = pin.getBoundingClientRect();
      const start = rect.top <= 96;
      const end = rect.bottom <= window.innerHeight * 0.7;
      sticky.style.position = start && !end ? 'fixed' : 'relative';
      sticky.style.top = start && !end ? '96px' : '0';
      sticky.style.width = start && !end ? `${pin.clientWidth}px` : '100%';
      sticky.style.opacity = end ? '0.35' : '1';
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section id="look" className="linen-grain relative bg-linen-deep py-24 md:py-32">
      <div className="relative z-[2] mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <p className="micro text-sage-deep">Instagram · Live from the shop</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-serif text-4xl text-espresso md:text-5xl">Shop the Look</h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-4 text-[15px] text-espresso-soft">
                A curated window into {SITE.instagramHandle} — warm Florida light, real racks, pieces
                you’ll want to try on in person.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.18}>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <InstagramIcon className="h-4 w-4" />
              Follow {SITE.instagramHandle}
            </a>
          </Reveal>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          <div ref={pinRef} className="relative hidden min-h-[120vh] lg:col-span-5 lg:block">
            <div ref={stickyRef} className="overflow-hidden rounded-[22px] transition-opacity duration-500">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/storefront.jpg"
                  alt="Boutique storefront atmosphere"
                  fill
                  sizes="40vw"
                  className="warm-grade object-cover"
                />
              </div>
              <p className="mt-4 micro">Pinned look · Gaslamp light</p>
            </div>
          </div>

          <div className="columns-1 gap-5 sm:columns-2 lg:col-span-7 lg:columns-2">
            {GALLERY.map((item, i) => (
              <Reveal key={item.src} delay={0.05 * i} className="mb-5 break-inside-avoid">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'group relative block overflow-hidden rounded-[20px] bg-linen shadow-[0_18px_40px_-28px_rgba(47,38,31,0.4)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_50px_-24px_rgba(47,38,31,0.45)]',
                    item.toss && 'photo-toss',
                  )}
                >
                  <div className={cn('relative', item.tall ? 'aspect-[3/4]' : 'aspect-[4/5]')}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width:768px) 100vw, 30vw"
                      className="warm-grade object-cover transition duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-espresso/45 via-transparent to-transparent p-4 opacity-0 transition duration-500 group-hover:opacity-100">
                      <span className="micro text-white/90">{SITE.instagramHandle}</span>
                      <InstagramIcon className="h-5 w-5 text-white/90" />
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Optional live embed slot — drop SnapWidget / Behold / Elfsight iframe here */}
        <div className="mt-14 rounded-[22px] bg-linen/70 p-6 text-center shadow-[0_18px_40px_-30px_rgba(47,38,31,0.35)] md:p-8">
          <p className="micro text-sage-deep">Live feed ready</p>
          <p className="mx-auto mt-3 max-w-lg text-sm text-espresso-soft">
            Gallery above uses curated shop-mood photography linked to Instagram. To swap in a live
            @chuckleandbliss feed, paste your SnapWidget, Behold, or Elfsight embed into this slot —
            container already matches the site&apos;s rounded linen treatment.
          </p>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-terracotta mt-6"
          >
            Open Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
