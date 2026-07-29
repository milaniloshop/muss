import type { Metadata } from 'next';
import { Reveal } from '@/components/motion/Reveal';
import { ButtonLink } from '@/components/ui/Button';
import { BRAND } from '@/lib/products';

export const metadata: Metadata = {
  title: 'About',
  description: 'Milan Hype — your plug for hype streetwear and sneakers. Not a personal brand.',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 pb-24 pt-28 md:px-8">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.22em] text-ember">Who we are</p>
        <h1 className="mt-3 font-display text-4xl text-white md:text-6xl">
          The plug. Not the brand.
        </h1>
      </Reveal>
      <Reveal delay={0.1} className="mt-8 space-y-5 text-lg leading-relaxed text-silver/80">
        <p>
          Milan Hype sells hype clothes and hits — designer denim, collabs, leather, and streetwear
          essentials. We are a reseller storefront, not a personal clothing brand. Pieces come from
          the market; we photograph them, price them, and move them.
        </p>
        <p>
          Based around Ormond Beach with shipping and meetups. Black and red MH mark, AC Milan
          energy, Instagram-first shopping on{' '}
          <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="text-ember">
            {BRAND.instagramHandle}
          </a>
          .
        </p>
        <p>
          Most listings are one size left. When it is gone, it is gone. DM to shop today.
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
