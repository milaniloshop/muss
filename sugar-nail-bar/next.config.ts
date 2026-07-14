import type { NextConfig } from 'next';

// When deployed as a subpath of the shared GitHub Pages site
// (e.g. milanhype.com/sugar/) the CI sets PAGES_BASE_PATH=/sugar.
// Left empty for local dev and root-hosted static exports.
const basePath = process.env.PAGES_BASE_PATH || '';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
