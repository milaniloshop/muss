'use client';

import Image from 'next/image';
import { GALLERY, SITE } from '@/lib/site';
import { asset } from '@/lib/asset';
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

export function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1300px] px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <p className="micro text-coral">Our Work</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-serif text-[clamp(2.2rem,5.5vw,4rem)] leading-[1.04] text-ink">
                Real sets, <span className="italic text-coral">real hands.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-md text-[0.98rem] leading-relaxed text-ink-soft">
                From clean minimal lines to full hand-painted art — a peek at what our techs create.
                Tap through to more on Instagram.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.18}>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="btn-ghost text-merlot">
              <InstagramIcon className="h-4 w-4" />
              <span className="underline-grow">Follow {SITE.instagramHandle}</span>
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {GALLERY.map((item, i) => (
            <Reveal
              key={item.src}
              delay={0.06 * i}
              className={cn(item.span === 'tall' ? 'row-span-2' : 'md:col-span-2')}
            >
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`See more on Instagram — ${item.alt}`}
                className="glow-hover group block h-full overflow-hidden rounded-[24px] bg-ivory float-shadow"
              >
                <div className={cn('relative h-full', item.span === 'tall' ? 'aspect-[3/4]' : 'aspect-[4/3]')}>
                  <Image
                    src={asset(item.src)}
                    alt={item.alt}
                    fill
                    sizes="(max-width:768px) 50vw, 30vw"
                    loading="lazy"
                    className="warm-grade object-cover transition duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-ink/45 via-transparent to-transparent p-4 opacity-0 transition duration-500 group-hover:opacity-100">
                    <InstagramIcon className="h-5 w-5 text-ivory" />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
