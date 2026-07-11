'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useCart } from '@/lib/cart';
import { formatPrice } from '@/lib/cn';
import { Button } from '@/components/ui/Button';

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQty, removeItem, subtotal, checkout } = useCart();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onCheckout = async () => {
    setError(null);
    setLoading(true);
    try {
      await checkout();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Checkout failed');
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Close bag"
            className="fixed inset-0 z-[60] bg-black/55 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 34 }}
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col border-l border-white/10 bg-black"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping bag"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
              <h2 className="font-display text-2xl text-white">Bag</h2>
              <button type="button" onClick={closeCart} className="text-silver hover:text-white">
                Close
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              {!items.length && (
                <p className="text-silver/70">Your bag is empty. Start with CoreFit Pro.</p>
              )}
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={`${item.id}-${item.size}-${item.color}`} className="flex gap-3">
                    <div className="relative h-24 w-20 overflow-hidden rounded-xl bg-charcoal">
                      <Image src={item.image} alt="" fill className="object-cover" sizes="80px" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-white">{item.title}</p>
                      <p className="mt-1 text-xs text-silver/70">
                        {item.color} · Size {item.size}
                      </p>
                      <div className="mt-2 flex items-center gap-3">
                        <button
                          type="button"
                          className="text-silver"
                          onClick={() => updateQty(item.id, item.size, item.color, item.qty - 1)}
                        >
                          −
                        </button>
                        <span className="text-sm text-white">{item.qty}</span>
                        <button
                          type="button"
                          className="text-silver"
                          onClick={() => updateQty(item.id, item.size, item.color, item.qty + 1)}
                        >
                          +
                        </button>
                        <button
                          type="button"
                          className="ml-auto text-xs text-silver/60 hover:text-white"
                          onClick={() => removeItem(item.id, item.size, item.color)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-white">{formatPrice(item.price * item.qty)}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-white/10 px-5 py-5">
              <div className="mb-4 flex justify-between text-sm">
                <span className="text-silver">Subtotal</span>
                <span className="text-white">{formatPrice(subtotal)}</span>
              </div>
              {error && <p className="mb-3 text-sm text-red-300">{error}</p>}
              <Button
                className="w-full"
                magnetic
                disabled={!items.length || loading}
                onClick={onCheckout}
              >
                {loading ? 'Redirecting…' : 'Checkout'}
              </Button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
