'use client';

import { ProductCard } from '@/components/ui/ProductCard';
import { Reveal } from '@/components/motion/Reveal';
import { getTierProducts } from '@/lib/products';
import { ButtonLink } from '@/components/ui/Button';

export function CollectionPreview() {
  const products = getTierProducts();
  return (
    <section id="collection" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-blue-glow/80">The Collection</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl text-white md:text-5xl">
            One product. Four tiers of hold.
          </h2>
          <p className="mt-4 max-w-xl text-silver/75">
            Same purpose — flatter chest, tighter core — different materials and compression levels.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink href="/collection" variant="secondary">
            View full collection
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
