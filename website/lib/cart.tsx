'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { CartItem } from '@/types';

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (item: Omit<CartItem, 'qty'> & { qty?: number }) => void;
  updateQty: (id: string, size: string, color: string, qty: number) => void;
  removeItem: (id: string, size: string, color: string) => void;
  clear: () => void;
  checkout: () => Promise<void>;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = 'mh-corefit-cart';

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as CartItem[]);
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const addItem = useCallback((item: Omit<CartItem, 'qty'> & { qty?: number }) => {
    setItems((prev) => {
      const idx = prev.findIndex(
        (p) => p.id === item.id && p.size === item.size && p.color === item.color,
      );
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: Math.min(10, next[idx].qty + (item.qty ?? 1)) };
        return next;
      }
      return [...prev, { ...item, qty: item.qty ?? 1 }];
    });
    setIsOpen(true);
  }, []);

  const updateQty = useCallback((id: string, size: string, color: string, qty: number) => {
    setItems((prev) =>
      prev
        .map((p) =>
          p.id === id && p.size === size && p.color === color
            ? { ...p, qty: Math.max(0, Math.min(10, qty)) }
            : p,
        )
        .filter((p) => p.qty > 0),
    );
  }, []);

  const removeItem = useCallback((id: string, size: string, color: string) => {
    setItems((prev) => prev.filter((p) => !(p.id === id && p.size === size && p.color === color)));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const checkout = useCallback(async () => {
    if (!items.length) return;
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: items.map((i) => ({ id: i.id, qty: i.qty, size: i.size, color: i.color })),
      }),
    });
    const data = (await res.json()) as { url?: string; error?: string };
    if (!res.ok || !data.url) {
      throw new Error(data.error || 'Checkout unavailable');
    }
    window.location.href = data.url;
  }, [items]);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      count: items.reduce((n, i) => n + i.qty, 0),
      subtotal: items.reduce((n, i) => n + i.price * i.qty, 0),
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      toggleCart: () => setIsOpen((v) => !v),
      addItem,
      updateQty,
      removeItem,
      clear,
      checkout,
    }),
    [items, isOpen, addItem, updateQty, removeItem, clear, checkout],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
