// Prefix a public asset path (e.g. /images/hero.jpg) with the deploy base path.
// next/image does not auto-prepend basePath to string src values in static
// export, so image sources must be routed through this helper.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function asset(path: string): string {
  if (!path.startsWith('/')) return path;
  return `${BASE}${path}`;
}
