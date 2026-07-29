'use client';

import Image from 'next/image';
import { DEVICES } from '@/lib/site';
import { Reveal } from '@/components/motion';
import { cn } from '@/lib/cn';

export function FeaturedDevices() {
  return (
    <section id="devices" className="bg-offwhite px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="micro text-muted">Featured Devices</p>
              <h2 className="mt-3 max-w-xl text-[clamp(1.85rem,4vw,2.75rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-ink">
                Curated SKUs — not a catalog dump.
              </h2>
            </div>
            <a
              href="#visit"
              className="text-sm font-medium text-blue transition-opacity hover:opacity-80"
            >
              Ask about availability →
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DEVICES.map((device, i) => (
            <Reveal key={device.name} delay={0.06 * i}>
              <article className="product-card group cursor-pointer overflow-hidden rounded-[20px] bg-white">
                <div className="relative aspect-square overflow-hidden bg-cloud">
                  <Image
                    src={device.image}
                    alt={device.name}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <span
                    className={cn(
                      'micro inline-flex rounded-md px-2 py-1',
                      device.tag === 'certified'
                        ? 'bg-[var(--orange-soft)] text-orange'
                        : 'bg-[var(--blue-soft)] text-blue',
                    )}
                  >
                    {device.condition}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em] text-ink">
                    {device.name}
                  </h3>
                  <p className="font-mono-spec mt-1.5 text-[0.78rem] text-muted">
                    {device.specs}
                  </p>
                  <p className="font-mono-spec mt-4 text-base font-medium text-ink">
                    {device.price}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
