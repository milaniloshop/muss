import type { Metadata } from 'next';
import { ProductCard } from '@/components/ui/ProductCard';
import { COLLECTIONS, getTierProducts } from '@/lib/products';
import { Reveal } from '@/components/motion/Reveal';

export const metadata: Metadata = {
  title: 'CoreFit Collection',
  description: COLLECTIONS.corefit.description,
};

export default function CollectionPage() {
  const products = getTierProducts();
  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-28 md:px-8">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.22em] text-blue-glow/80">CoreFit</p>
        <h1 className="mt-3 font-display text-4xl text-white md:text-6xl">
          {COLLECTIONS.corefit.title}
        </h1>
        <p className="mt-4 max-w-2xl text-silver/75">{COLLECTIONS.corefit.subtitle}</p>
        <p className="mt-3 max-w-2xl text-sm text-silver/60">{COLLECTIONS.corefit.description}</p>
      </Reveal>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  );
}
