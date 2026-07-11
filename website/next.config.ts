import type { NextConfig } from 'next';

/**
 * milanhype.com is hosted on GitHub Pages (static).
 * API routes (Stripe/Nano Banana) live in `server/` for optional Node hosts (Render).
 */
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['framer-motion', '@react-three/drei', 'gsap'],
  },
  poweredByHeader: false,
};

export default nextConfig;
