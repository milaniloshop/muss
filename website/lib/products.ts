import type { Product } from '@/types';

const APPAREL = '/assets/images/products/placeholder-apparel.svg';
const SNEAKERS = '/assets/images/products/placeholder-sneakers.svg';

export const BRAND = {
  name: 'Milan Hype',
  productLine: 'Apparel & Sneakers',
  productType: 'Premium clothing and sneakers',
  tagline: 'Street polish. Milan heat.',
  shippingFreeOver: 75,
  url: 'https://milanhype.com',
  instagram: 'https://www.instagram.com/milanhype_/',
  instagramHandle: '@Milanhype_',
} as const;

export const COLLECTIONS = {
  all: {
    title: 'Shop Milan Hype',
    subtitle: 'Clothing + sneakers · Curated drops',
    description:
      'Premium streetwear and sneakers. Product photos and SKUs go live as inventory lands. Follow @Milanhype_ for first access.',
  },
  apparel: {
    title: 'Apparel',
    subtitle: 'Tees · Hoodies · Outerwear · Essentials',
    description: 'Elevated streetwear curated for everyday heat. Drops announced on Instagram first.',
  },
  sneakers: {
    title: 'Sneakers',
    subtitle: 'Iconic pairs · Limited drops · Clean heat',
    description: 'Sneaker culture with Milan attitude. DM @Milanhype_ or join the drop list.',
  },
} as const;

const EMPTY_ZONES: Product['compressionZones'] = [];

function placeholder(
  partial: Omit<Product, 'compressionZones' | 'colorOptions' | 'lifestyleImages' | 'highlights' | 'pros' | 'cons' | 'expertVerdict' | 'expertBy'> & {
    category: 'apparel' | 'sneakers';
  },
): Product {
  const img = partial.category === 'sneakers' ? SNEAKERS : APPAREL;
  return {
    ...partial,
    colorOptions: [
      { id: 'black', name: 'Black', hex: '#0a0a0a', image: img, imageAlt: img },
    ],
    lifestyleImages: [img],
    highlights: [
      { icon: '◆', title: 'Drop soon', desc: 'Follow @Milanhype_ for release' },
      { icon: '◆', title: 'Curated', desc: 'Only pieces that match MH' },
      { icon: '◆', title: 'U.S. ship', desc: 'Discreet packaging' },
      { icon: '◆', title: 'IG support', desc: 'Fast replies on Instagram' },
    ],
    pros: [
      'Instagram-first drops via @Milanhype_',
      'Curated clothing and sneakers — no filler',
      'Premium presentation when inventory lands',
    ],
    cons: ['Photos and final pricing pending — placeholder slot'],
    expertVerdict: 'Slot reserved. Send product photos and pricing to go live.',
    expertBy: 'Milan Hype · Awaiting inventory',
    compressionZones: EMPTY_ZONES,
    comingSoon: true,
  };
}

export const PRODUCTS: Product[] = [
  {
    id: 'vale-forever-skittle-sweats',
    tier: 'Apparel',
    category: 'apparel',
    title: "Vale Forever Skittle Sweats 'Jeweled/Black'",
    shortDescription:
      'Heavyweight wide-leg skittle sweats in jeweled black — acid-wash charcoal, silver stud side seams, Valley script rhinestone graphic.',
    price: 300,
    compareAt: 380,
    collections: ['apparel', 'all'],
    badge: 'Sale',
    tierRank: 0,
    comingSoon: false,
    fit: 'Oversized wide-leg — size down for a cleaner drape',
    fabric: 'Heavyweight cotton fleece · acid-wash finish',
    colorOptions: [
      {
        id: 'jeweled-black',
        name: 'Jeweled/Black',
        hex: '#1a1a1a',
        image: '/assets/images/products/vale-forever-skittle-sweats.jpg',
        imageAlt: '/assets/images/products/vale-forever-skittle-sweats-2.jpg',
      },
    ],
    heroImage: '/assets/images/products/vale-forever-skittle-sweats.jpg',
    lifestyleImages: [
      '/assets/images/products/vale-forever-skittle-sweats.jpg',
      '/assets/images/products/vale-forever-skittle-sweats-2.jpg',
    ],
    images: [
      '/assets/images/products/vale-forever-skittle-sweats.jpg',
      '/assets/images/products/vale-forever-skittle-sweats-2.jpg',
    ],
    imageSlots: [
      { filename: 'vale-forever-skittle-sweats.jpg', label: 'Front — Jeweled/Black' },
      { filename: 'vale-forever-skittle-sweats-2.jpg', label: 'Back — Jeweled/Black' },
    ],
    benefits: [
      'Jeweled silver studs down both outer seams + hem',
      'Valley cursive rhinestone graphic across the front',
      'Acid-wash charcoal fade — premium streetwear texture',
      'Oversized baggy wide-leg silhouette with elastic waist',
      'Raw-edge horizontal seam detail at mid-thigh',
    ],
    details: {
      Brand: 'Vale Forever',
      Product: "Skittle Sweats 'Jeweled/Black'",
      Color: 'Jeweled / Black',
      Fit: 'Oversized · wide leg',
      Fabric: 'Heavyweight cotton fleece',
      Care: 'Cold wash inside-out · hang dry',
    },
    description:
      "Vale Forever Skittle Sweats in Jeweled/Black — heavyweight acid-wash fleece with a baggy wide-leg cut. Silver studs run the full outer seams and hem. Front Valley script is rhinestone-set. Back has dual patch pockets and a raw mid-thigh seam. Price $300 (was $380).",
    styleIt: 'Black tee or cropped hoodie. Clean sneakers. Downtown nights.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    faqs: [
      {
        q: 'How do these fit?',
        a: 'Oversized and baggy by design. If you want less volume, size down one.',
      },
      {
        q: 'Will the studs fall off?',
        a: 'They are set into the seams and graphic. Wash inside-out cold and hang dry to protect the jewelry finish.',
      },
      {
        q: 'Is this on sale?',
        a: 'Yes — $300 (compare at $380). Limited drop via Milan Hype.',
      },
    ],
    highlights: [
      { icon: '◆', title: 'Jeweled', desc: 'Silver stud seams + rhinestone Valley script' },
      { icon: '◆', title: 'Wide leg', desc: 'Oversized skittle silhouette' },
      { icon: '◆', title: 'Acid wash', desc: 'Charcoal fade, not flat black' },
      { icon: '◆', title: 'Sale', desc: '$300 · was $380' },
    ],
    pros: [
      'Statement jeweled detailing that photographs expensive',
      'Heavyweight fleece holds the baggy shape',
      'Front + back studio shots so you see the full piece',
      'Sale price at $300 under $380 compare',
    ],
    cons: [
      'Oversized fit — check size notes if you prefer slim',
      'Jeweled graphics need gentle wash care',
    ],
    expertVerdict:
      'If you want one loud bottoms piece for the feed and the street, Jeweled/Black is the drop. Heavy, studded, and priced to move at $300.',
    expertBy: 'Milan Hype · Street edit',
    compressionZones: EMPTY_ZONES,
  },
  placeholder({
    id: 'apparel-tee',
    tier: 'Apparel',
    category: 'apparel',
    title: 'Essential Tee — Coming Soon',
    shortDescription: 'Premium tee slot. Photo + price update when inventory arrives.',
    price: 0,
    compareAt: 0,
    collections: ['apparel', 'all'],
    badge: 'Coming Soon',
    tierRank: 1,
    fit: 'True to size',
    fabric: 'Premium cotton — TBD',
    heroImage: APPAREL,
    images: [APPAREL],
    imageSlots: [{ filename: 'apparel-tee.jpg', label: 'Front' }],
    benefits: ['Drop alerts on @Milanhype_', 'U.S. shipping', 'Easy returns'],
    details: { Category: 'Apparel', Status: 'Placeholder' },
    description: 'Placeholder for the Essential Tee. Send product photos and pricing to publish.',
    styleIt: 'Pair with sneakers from the Milan Hype drop list.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    faqs: [{ q: 'When does this drop?', a: 'Follow @Milanhype_ on Instagram for release dates.' }],
  }),
  placeholder({
    id: 'apparel-hoodie',
    tier: 'Apparel',
    category: 'apparel',
    title: 'Heavy Hoodie — Coming Soon',
    shortDescription: 'Heavyweight hoodie slot ready for your photos.',
    price: 0,
    compareAt: 0,
    collections: ['apparel', 'all'],
    badge: 'Coming Soon',
    tierRank: 2,
    fit: 'Relaxed',
    fabric: 'Fleece — TBD',
    heroImage: APPAREL,
    images: [APPAREL],
    imageSlots: [{ filename: 'apparel-hoodie.jpg', label: 'Front' }],
    benefits: ['Instagram-first drops', 'Curated street fits'],
    details: { Category: 'Apparel', Status: 'Placeholder' },
    description: 'Placeholder hoodie. Replace with real product when ready.',
    styleIt: 'Layer over tees. Pair with clean sneakers.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    faqs: [{ q: 'How do I get notified?', a: 'Follow @Milanhype_ and turn on post notifications.' }],
  }),
  placeholder({
    id: 'sneakers-signature',
    tier: 'Sneakers',
    category: 'sneakers',
    title: 'Signature Drop — Coming Soon',
    shortDescription: 'Sneaker drop slot. Send pair photos, size run, and price.',
    price: 0,
    compareAt: 0,
    collections: ['sneakers', 'all'],
    badge: 'Coming Soon',
    tierRank: 3,
    fit: 'See size chart when live',
    fabric: '—',
    heroImage: SNEAKERS,
    images: [SNEAKERS],
    imageSlots: [{ filename: 'sneakers-1.jpg', label: 'Pair' }],
    benefits: ['Authenticated sourcing standards', 'Discreet packaging', 'IG support'],
    details: { Category: 'Sneakers', Status: 'Placeholder' },
    description: 'Placeholder for the next sneaker drop.',
    styleIt: 'Clean soles. Downtown nights.',
    sizes: ['8', '9', '10', '11', '12'],
    faqs: [{ q: 'Are pairs authentic?', a: 'Full authenticity details publish with each drop.' }],
  }),
  placeholder({
    id: 'sneakers-classic',
    tier: 'Sneakers',
    category: 'sneakers',
    title: 'Classic Heat — Coming Soon',
    shortDescription: 'Everyday classic sneaker slot awaiting your photos.',
    price: 0,
    compareAt: 0,
    collections: ['sneakers', 'all'],
    badge: 'Coming Soon',
    tierRank: 4,
    fit: 'True to size',
    fabric: '—',
    heroImage: SNEAKERS,
    images: [SNEAKERS],
    imageSlots: [{ filename: 'sneakers-2.jpg', label: 'Pair' }],
    benefits: ['Drop list first', 'U.S. shipping'],
    details: { Category: 'Sneakers', Status: 'Placeholder' },
    description: 'Placeholder classic pair.',
    styleIt: 'With black pants or washed denim.',
    sizes: ['8', '9', '10', '11', '12'],
    faqs: [{ q: 'Can I reserve a size?', a: 'DM @Milanhype_ to ask about the next size run.' }],
  }),
];

export function getProduct(id: string) {
  return PRODUCTS.find((p) => p.id === id);
}

export function getTierProducts() {
  return [...PRODUCTS].sort((a, b) => a.tierRank - b.tierRank);
}

export function getCollectionProducts(slug?: string) {
  if (!slug || slug === 'all') return getTierProducts();
  return getTierProducts().filter(
    (p) => p.collections.includes(slug) || p.category === slug,
  );
}

export const PAYMENT_LINKS: Record<string, string> = {};

export const CATALOG_PRICES: Record<string, { title: string; price: number }> = Object.fromEntries(
  PRODUCTS.filter((p) => p.price > 0).map((p) => [p.id, { title: p.title, price: p.price }]),
);
