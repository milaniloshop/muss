'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getTierProducts } from '@/lib/products';
import { formatPrice } from '@/lib/cn';
import { ApertureSection } from './ApertureSection';
import { RackFocusHeading } from './RackFocusHeading';

let registered = false;

export function CinematicCollection() {
  const products = getTierProducts();
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }
    const root = gridRef.current;
    if (!root) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile = window.matchMedia('(max-width: 768px)').matches;
    if (reduce || mobile) return;

    const ctx = gsap.context(() => {
      const cards = root.querySelectorAll('[data-inspect]');
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { rotateZ: -1.2, y: 24 },
          {
            rotateZ: 1.4,
            y: -8,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'bottom 25%',
              scrub: true,
            },
          },
        );
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <ApertureSection id="collection" className="bg-obsidian py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 max-w-xl">
          <p className="text-[10px] uppercase tracking-[0.32em] text-gunmetal">04 — The Collection</p>
          <RackFocusHeading className="mt-4 text-4xl md:text-6xl">
            Four tiers.
            <br />
            One doctrine.
          </RackFocusHeading>
          <p className="mt-5 text-sm leading-relaxed text-gunmetal">
            Price and fit reveal on hover — the garment leads. Inspect under the loupe as you scroll.
          </p>
        </div>

        <div ref={gridRef} className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              data-inspect
              className="group relative block will-change-transform"
            >
              <div className="relative aspect-[3/4] overflow-hidden border border-bone/10 bg-charcoal transition duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_24px_60px_-20px_rgba(224,69,26,0.35)]">
                <Image
                  src={product.heroImage}
                  alt={product.title}
                  fill
                  sizes="(max-width:768px) 100vw, 25vw"
                  className="grade-skin object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-transparent opacity-80" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-bone/55">CoreFit</p>
                  <h3 className="mt-1 font-display text-2xl tracking-tight text-bone normal-case">
                    {product.tier}
                  </h3>
                  <div className="mt-3 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                    <p className="text-sm text-bone">{formatPrice(product.price)}</p>
                    <p className="mt-1 text-[11px] leading-snug text-gunmetal">{product.fit}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a href="/collection" className="btn-ghost-ember">
            View Full Collection
          </a>
        </div>
      </div>
    </ApertureSection>
  );
}
