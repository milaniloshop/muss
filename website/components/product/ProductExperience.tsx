'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Product } from '@/types';
import { ProductViewer } from '@/components/3d/ProductViewer';
import { Button } from '@/components/ui/Button';
import { formatPrice } from '@/lib/cn';
import { useCart } from '@/lib/cart';
import { Reveal } from '@/components/motion/Reveal';
import { cn } from '@/lib/cn';

export function ProductExperience({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [colorId, setColorId] = useState(product.colorOptions[0]?.id ?? 'black');
  const [size, setSize] = useState(product.sizes[1] ?? product.sizes[0]);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const color = useMemo(
    () => product.colorOptions.find((c) => c.id === colorId) ?? product.colorOptions[0],
    [colorId, product.colorOptions],
  );

  const gallery = useMemo(() => {
    const imgs = [color?.image, ...product.images.filter((i) => i !== color?.image)];
    return imgs.filter(Boolean) as string[];
  }, [color, product.images]);

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-28 md:px-8">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <ProductViewer product={product} />
          <div className="grid grid-cols-4 gap-2">
            {gallery.slice(0, 4).map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setGalleryIndex(i)}
                className={cn(
                  'relative aspect-square overflow-hidden rounded-xl border transition',
                  galleryIndex === i ? 'border-white/50' : 'border-white/10 hover:border-white/25',
                )}
              >
                <Image src={src} alt="" fill className="object-cover" sizes="120px" />
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={gallery[galleryIndex]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative hidden aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 md:block"
            >
              <Image
                src={gallery[galleryIndex] ?? product.heroImage}
                alt={product.title}
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div>
          {product.badge && (
            <p className="text-xs uppercase tracking-[0.2em] text-blue-glow/90">{product.badge}</p>
          )}
          <h1 className="mt-2 font-display text-4xl text-white md:text-5xl">
            CoreFit {product.tier}
          </h1>
          <p className="mt-3 text-silver/75">{product.shortDescription}</p>
          <div className="mt-5 flex items-baseline gap-3">
            <span className="text-2xl text-white">{formatPrice(product.price)}</span>
            <span className="text-silver/45 line-through">{formatPrice(product.compareAt)}</span>
          </div>

          <div className="mt-8">
            <p className="text-xs uppercase tracking-[0.16em] text-silver/60">Color</p>
            <div className="mt-3 flex gap-2">
              {product.colorOptions.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  aria-label={c.name}
                  onClick={() => setColorId(c.id)}
                  className={cn(
                    'h-9 w-9 rounded-full border-2 transition',
                    colorId === c.id ? 'border-white' : 'border-transparent',
                  )}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xs uppercase tracking-[0.16em] text-silver/60">Size</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  className={cn(
                    'min-w-12 rounded-full border px-4 py-2 text-sm transition',
                    size === s
                      ? 'border-white bg-white text-black'
                      : 'border-white/15 text-silver hover:border-white/35',
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <Button
            className="mt-8 w-full sm:w-auto"
            magnetic
            onClick={() =>
              addItem({
                id: product.id,
                title: `CoreFit ${product.tier}`,
                price: product.price,
                size,
                color: color?.name ?? 'Black',
                image: color?.image ?? product.heroImage,
              })
            }
          >
            Add to bag — {formatPrice(product.price)}
          </Button>

          <Reveal className="mt-10 space-y-3 border-t border-white/10 pt-8">
            {product.benefits.map((b) => (
              <p key={b} className="flex gap-3 text-sm text-silver/85">
                <span className="text-blue-glow">◆</span>
                {b}
              </p>
            ))}
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {product.highlights.map((h) => (
              <div key={h.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm text-white">{h.title}</p>
                <p className="mt-1 text-sm text-silver/65">{h.desc}</p>
              </div>
            ))}
          </div>

          <dl className="mt-10 space-y-3 border-t border-white/10 pt-8">
            {Object.entries(product.details).map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 text-sm">
                <dt className="text-silver/55">{k}</dt>
                <dd className="text-right text-silver/90">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm text-silver/80">{product.expertVerdict}</p>
            <p className="mt-3 text-xs text-silver/45">{product.expertBy}</p>
          </div>

          <div className="mt-8 space-y-3">
            {product.faqs.map((faq) => (
              <details key={faq.q} className="group rounded-2xl border border-white/10 px-4 py-3">
                <summary className="cursor-pointer list-none text-sm text-white">
                  {faq.q}
                </summary>
                <p className="mt-2 text-sm text-silver/75">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
