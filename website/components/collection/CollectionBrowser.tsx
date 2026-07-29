'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { ProductCard } from '@/components/ui/ProductCard';
import { BRAND, COLLECTIONS, getCollectionProducts } from '@/lib/products';
import { Reveal } from '@/components/motion/Reveal';
import { Suspense } from 'react';

function CollectionInner() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('c') || 'all';
  const meta =
    slug === 'apparel'
      ? COLLECTIONS.apparel
      : slug === 'sneakers'
        ? COLLECTIONS.sneakers
        : COLLECTIONS.all;
  const products = useMemo(
    () => getCollectionProducts(slug === 'all' ? undefined : slug),
    [slug],
  );

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-28 md:px-8">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.22em] text-ember">Milan Hype</p>
        <h1 className="mt-3 font-display text-4xl text-white md:text-6xl">{meta.title}</h1>
        <p className="mt-4 max-w-2xl text-silver/75">{meta.subtitle}</p>
        <p className="mt-3 max-w-2xl text-sm text-silver/60">{meta.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Link href="/collection" className="btn-ghost-ember !min-h-10 !px-4 !py-2 !text-[10px]">
            All
          </Link>
          <Link href="/collection?c=apparel" className="btn-ghost-ember !min-h-10 !px-4 !py-2 !text-[10px]">
            Apparel
          </Link>
          <Link href="/collection?c=sneakers" className="btn-ghost-ember !min-h-10 !px-4 !py-2 !text-[10px]">
            Sneakers
          </Link>
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-ember !min-h-10 !px-4 !py-2 !text-[10px]"
          >
            {BRAND.instagramHandle}
          </a>
        </div>
      </Reveal>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  );
}

export function CollectionBrowser() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-7xl px-5 pb-24 pt-28 text-silver/60 md:px-8">Loading shop…</div>
      }
    >
      <CollectionInner />
    </Suspense>
  );
}
