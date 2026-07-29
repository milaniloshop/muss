import type { Metadata } from 'next';
import { Reveal } from '@/components/motion/Reveal';
import { ButtonLink } from '@/components/ui/Button';
import { BRAND } from '@/lib/products';

export const metadata: Metadata = {
  title: 'About',
  description: 'Milan Hype — premium clothing and sneakers. Street polish. Milan heat.',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 pb-24 pt-28 md:px-8">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.22em] text-ember">Our story</p>
        <h1 className="mt-3 font-display text-4xl text-white md:text-6xl">
          Black. Red. Heat.
        </h1>
      </Reveal>
      <Reveal delay={0.1} className="mt-8 space-y-5 text-lg leading-relaxed text-silver/80">
        <p>
          Milan Hype is a clothing and sneakers brand — downtown attitude with premium presentation.
          We curate apparel and pairs for people who care how they look when they walk out the door.
        </p>
        <p>
          No compression tanks. No padded gimmicks. Just fits and heat that match the MH standard —
          black and red, AC Milan energy, Instagram-first culture on{' '}
          <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="text-ember">
            {BRAND.instagramHandle}
          </a>
          .
        </p>
        <p>
          Products land as inventory arrives. Follow the drop. Look sharp.
        </p>
      </Reveal>
      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/collection">Shop the store</ButtonLink>
        <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="btn-ghost-ember">
          {BRAND.instagramHandle}
        </a>
      </div>
    </div>
  );
}
