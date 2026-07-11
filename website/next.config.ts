import type { NextConfig } from 'next';

const htmlRedirects = [
  { source: '/index.html', destination: '/', permanent: true },
  { source: '/collection.html', destination: '/collection', permanent: true },
  { source: '/about.html', destination: '/about', permanent: true },
  { source: '/contact.html', destination: '/contact', permanent: true },
  { source: '/faq.html', destination: '/faq', permanent: true },
  { source: '/shipping.html', destination: '/shipping', permanent: true },
  { source: '/returns.html', destination: '/returns', permanent: true },
  { source: '/admin.html', destination: '/admin', permanent: true },
  { source: '/success.html', destination: '/success', permanent: true },
  { source: '/cancel.html', destination: '/cancel', permanent: true },
  // /product.html?id=… handled in middleware.ts
];

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ['framer-motion', '@react-three/drei', 'gsap'],
  },
  poweredByHeader: false,
  async redirects() {
    return htmlRedirects;
  },
};

export default nextConfig;
