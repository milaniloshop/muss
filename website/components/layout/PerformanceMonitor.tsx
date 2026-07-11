'use client';

import { useEffect } from 'react';

/**
 * Lightweight performance monitoring — logs Web Vitals in development
 * and can forward to analytics when NEXT_PUBLIC_ANALYTICS_ENDPOINT is set.
 */
export function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined' || typeof PerformanceObserver === 'undefined') return;

    const endpoint = process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT;

    const report = (name: string, value: number) => {
      if (process.env.NODE_ENV === 'development') {
        console.info(`[perf] ${name}: ${Math.round(value)}`);
      }
      if (endpoint) {
        navigator.sendBeacon?.(
          endpoint,
          JSON.stringify({ name, value, path: window.location.pathname, ts: Date.now() }),
        );
      }
    };

    try {
      const paint = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          report(entry.name, entry.startTime);
        }
      });
      paint.observe({ type: 'paint', buffered: true });

      const lcp = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const last = entries[entries.length - 1];
        if (last) report('largest-contentful-paint', last.startTime);
      });
      lcp.observe({ type: 'largest-contentful-paint', buffered: true });

      return () => {
        paint.disconnect();
        lcp.disconnect();
      };
    } catch {
      return undefined;
    }
  }, []);

  return null;
}
