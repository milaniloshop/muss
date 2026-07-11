'use client';

import { CartProvider } from '@/lib/cart';
import { SmoothScrollProvider } from '@/components/motion/ScrollStory';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/layout/CartDrawer';
import { PerformanceMonitor } from '@/components/layout/PerformanceMonitor';
import type { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <SmoothScrollProvider>
        <PerformanceMonitor />
        <Header />
        <CartDrawer />
        <main id="main">{children}</main>
        <Footer />
      </SmoothScrollProvider>
    </CartProvider>
  );
}

