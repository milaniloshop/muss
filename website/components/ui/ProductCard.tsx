'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Product } from '@/types';
import { formatPrice } from '@/lib/cn';
import { cn } from '@/lib/cn';

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <Link href={`/product/${product.id}`} className="block focus-visible:outline-none">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-charcoal">
          <Image
            src={product.heroImage}
            alt={product.title}
            fill
            sizes="(max-width:768px) 100vw, 25vw"
            className="object-cover transition duration-700 group-hover:scale-[1.04]"
            priority={index < 2}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
          {product.badge && (
            <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-silver backdrop-blur-md">
              {product.badge}
            </span>
          )}
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="text-[11px] uppercase tracking-[0.2em] text-silver/80">CoreFit {product.tier}</p>
            <h3 className="mt-1 font-display text-2xl text-white">{product.tier}</h3>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-white">{formatPrice(product.price)}</span>
              <span className="text-sm text-silver/50 line-through">{formatPrice(product.compareAt)}</span>
            </div>
          </div>
        </div>
        <p className={cn('mt-3 line-clamp-2 text-sm text-silver/80')}>{product.shortDescription}</p>
      </Link>
    </motion.article>
  );
}
