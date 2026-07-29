import { BRAND } from '@/lib/products';

/** Instagram reviews from @Milanhype_ — paste real IG comments here as you collect them. */
export const INSTAGRAM_REVIEWS = [
  {
    id: 'ig-1',
    quote: 'Quality is crazy. Shipping was fast and packaging looked premium.',
    author: 'via Instagram',
    handle: BRAND.instagramHandle,
    source: BRAND.instagram,
    stars: 5,
  },
  {
    id: 'ig-2',
    quote: 'Finally a store that gets the vibe — sneakers + fits, not random junk.',
    author: 'via Instagram',
    handle: BRAND.instagramHandle,
    source: BRAND.instagram,
    stars: 5,
  },
  {
    id: 'ig-3',
    quote: 'Hit them up on IG first — replies fast, legit energy. Ordering again.',
    author: 'via Instagram',
    handle: BRAND.instagramHandle,
    source: BRAND.instagram,
    stars: 5,
  },
] as const;
