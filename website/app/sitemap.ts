import type { MetadataRoute } from 'next';
import { PRODUCTS } from '@/lib/products';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.BASE_URL || 'https://milanhype.com';
  const staticRoutes = ['', '/collection', '/about', '/contact', '/faq', '/shipping', '/returns'].map(
    (path) => ({
      url: path === '' ? `${base}/` : `${base}${path}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1 : 0.7,
    }),
  );
  const products = PRODUCTS.map((p) => ({
    url: `${base}/product/${p.id}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));
  return [...staticRoutes, ...products];
}
