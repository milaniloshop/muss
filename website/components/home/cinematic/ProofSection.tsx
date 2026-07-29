'use client';

import Link from 'next/link';
import { ApertureSection } from './ApertureSection';
import { RackFocusHeading } from './RackFocusHeading';
import { INSTAGRAM_REVIEWS } from '@/lib/reviews';
import { BRAND } from '@/lib/products';

export function ProofSection() {
  return (
    <ApertureSection id="proof" className="border-y border-bone/10 bg-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 max-w-lg">
          <p className="text-[10px] uppercase tracking-[0.32em] text-gunmetal">05 — Instagram</p>
          <RackFocusHeading className="mt-4 text-4xl md:text-5xl">From {BRAND.instagramHandle}</RackFocusHeading>
          <p className="mt-4 text-sm text-gunmetal">
            Community notes from Instagram. Paste real comment screenshots anytime — we swap them in
            verbatim. (IG blocks automated scraping.)
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          {INSTAGRAM_REVIEWS.map((item) => (
            <figure
              key={item.id}
              className="border border-bone/10 bg-obsidian/40 p-6 transition hover:border-ember/40 md:p-8"
            >
              <p className="text-ember" aria-label={`${item.stars} stars`}>
                {'★'.repeat(item.stars)}
              </p>
              <blockquote className="mt-4 text-sm leading-relaxed text-bone/85 md:text-[15px]">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-8 border-t border-bone/10 pt-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-ember">{item.author}</p>
                <p className="mt-1 text-[11px] text-gunmetal">
                  <Link href={item.source} target="_blank" rel="noopener noreferrer" className="hover:text-ember">
                    {item.handle}
                  </Link>
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-gunmetal">
          Read more on{' '}
          <Link href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="text-ember underline-offset-4 hover:underline">
            instagram.com/milanhype_
          </Link>
        </p>
      </div>
    </ApertureSection>
  );
}
