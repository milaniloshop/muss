import type { Product } from '@/types';

const EMPTY_ZONES: Product['compressionZones'] = [];

export const BRAND = {
  name: 'Milan Hype',
  productLine: 'Hype Streetwear & Sneakers',
  productType: 'Curated hype clothing and sneakers reseller',
  tagline: 'Your plug for hype hits.',
  shippingFreeOver: 75,
  url: 'https://milanhype.com',
  instagram: 'https://www.instagram.com/milanhype_/',
  instagramHandle: '@Milanhype_',
} as const;

export const COLLECTIONS = {
  all: {
    title: 'Shop Milan Hype',
    subtitle: 'Hype clothing · Hits · Limited sizes',
    description:
      'We resell curated hype streetwear and sneakers — not a personal clothing brand. Real pieces, real photos, limited sizes. Follow @Milanhype_ to DM and shop.',
  },
  apparel: {
    title: 'Apparel',
    subtitle: 'Denim · Outerwear · Collabs · Essentials',
    description:
      'Designer and hype apparel drops. One-size-left pieces move fast — grab what is listed.',
  },
  sneakers: {
    title: 'Sneakers',
    subtitle: 'Heat pairs · Limited runs',
    description: 'Sneaker hits as they land. DM @Milanhype_ for the current size run.',
  },
} as const;

type LiveInput = {
  id: string;
  title: string;
  brand: string;
  shortDescription: string;
  description: string;
  price: number;
  compareAt?: number;
  badge: string | null;
  tierRank: number;
  fit: string;
  fabric: string;
  sizes: string[];
  images: string[];
  imageLabels: string[];
  benefits: string[];
  details: Record<string, string>;
  styleIt: string;
  faqs: Product['faqs'];
  highlights: Product['highlights'];
  pros: string[];
  cons: string[];
  expertVerdict: string;
};

function live(p: LiveInput): Product {
  const hero = p.images[0];
  return {
    id: p.id,
    tier: 'Apparel',
    category: 'apparel',
    title: p.title,
    shortDescription: p.shortDescription,
    price: p.price,
    compareAt: p.compareAt ?? p.price,
    collections: ['apparel', 'all'],
    badge: p.badge,
    tierRank: p.tierRank,
    comingSoon: false,
    fit: p.fit,
    fabric: p.fabric,
    colorOptions: [
      {
        id: 'as-shown',
        name: 'As shown',
        hex: '#1a1a1a',
        image: hero,
        imageAlt: p.images[1] ?? hero,
      },
    ],
    heroImage: hero,
    lifestyleImages: p.images,
    images: p.images,
    imageSlots: p.images.map((src, i) => ({
      filename: src.split('/').pop() || `${p.id}-${i}.svg`,
      label: p.imageLabels[i] || `View ${i + 1}`,
    })),
    benefits: p.benefits,
    details: { Brand: p.brand, ...p.details, SoldBy: 'Milan Hype · Hype reseller' },
    description: p.description,
    styleIt: p.styleIt,
    sizes: p.sizes,
    faqs: p.faqs,
    highlights: p.highlights,
    pros: p.pros,
    cons: p.cons,
    expertVerdict: p.expertVerdict,
    expertBy: 'Milan Hype · Street plug',
    compressionZones: EMPTY_ZONES,
  };
}

export const PRODUCTS: Product[] = [
  live({
    id: 'yproject-jpg-trompe-denim',
    brand: 'Y/PROJECT × Jean Paul Gaultier',
    title: "Y/PROJECT × Jean Paul Gaultier 22AW Trompe L'Oeil Denim Jacket",
    shortDescription:
      "22AW trompe l'oeil denim jacket — collab heat. Size L only. Other sizes sold.",
    description:
      "Y/PROJECT × Jean Paul Gaultier 22AW trompe l'oeil denim jacket. Size L is the only size left — all other sizes sold. Listed at $170 via Milan Hype.",
    price: 170,
    badge: 'L only',
    tierRank: 1,
    fit: 'Size L only — sold out in other sizes',
    fabric: 'Denim · trompe l\'oeil construction',
    sizes: ['L'],
    images: [
      '/assets/images/products/yproject-jpg-trompe-denim.svg',
      '/assets/images/products/yproject-jpg-trompe-denim-2.svg',
    ],
    imageLabels: ['Front', 'Detail / back'],
    benefits: [
      'Y/PROJECT × Jean Paul Gaultier collab',
      "22AW trompe l'oeil denim",
      'Size L only — other sizes sold',
      'Hype reseller listing via Milan Hype',
    ],
    details: {
      Season: '22AW',
      Size: 'L only',
      Condition: 'As photographed',
      Price: '$170',
    },
    styleIt: 'Black tee underneath. Clean sneakers. Statement outer layer.',
    faqs: [
      { q: 'What sizes are left?', a: 'Size L only. Other sizes are sold.' },
      { q: 'Is this authentic?', a: 'Listed as a curated hype reseller piece. DM @Milanhype_ with questions before checkout.' },
    ],
    highlights: [
      { icon: '◆', title: 'Collab', desc: 'Y/PROJECT × JPG' },
      { icon: '◆', title: '22AW', desc: "Trompe l'oeil denim" },
      { icon: '◆', title: 'L only', desc: 'Other sizes sold' },
      { icon: '◆', title: '$170', desc: 'Listed price' },
    ],
    pros: ['Rare collab piece', 'Only L left — scarce', 'Studio product photos when uploaded'],
    cons: ['One size only (L)'],
    expertVerdict: 'If you wear L, this is the Y/PROJECT × JPG trompe jacket before it disappears.',
  }),
  live({
    id: 'acne-1981-trompe-jeans',
    brand: 'Acne Studios',
    title: "Acne Studios Trompe-l'œil 1981 Jeans",
    shortDescription: "Acne Studios trompe-l'œil 1981 jeans. Size 34 / L only. $150.",
    description:
      "Acne Studios trompe-l'œil 1981 jeans. Size 34 / L is the only size available. Price $150.",
    price: 150,
    badge: '34 / L',
    tierRank: 2,
    fit: 'Size 34 / L only',
    fabric: 'Denim · trompe-l\'œil finish',
    sizes: ['34 / L'],
    images: [
      '/assets/images/products/acne-1981-trompe-jeans.svg',
      '/assets/images/products/acne-1981-trompe-jeans-2.svg',
    ],
    imageLabels: ['Front', 'Detail'],
    benefits: [
      "Acne Studios trompe-l'œil 1981",
      'Size 34 / L only',
      'Listed at $150',
    ],
    details: { Size: '34 / L only', Price: '$150' },
    styleIt: 'Boxy tee or cropped jacket. Chunky sneakers.',
    faqs: [
      { q: 'What size is available?', a: 'Size 34 / L only.' },
    ],
    highlights: [
      { icon: '◆', title: 'Acne', desc: '1981 trompe-l\'œil' },
      { icon: '◆', title: '34 / L', desc: 'Only size left' },
      { icon: '◆', title: '$150', desc: 'Listed price' },
      { icon: '◆', title: 'Hit', desc: 'Designer denim' },
    ],
    pros: ['Acne Studios heat', 'Clear size callout'],
    cons: ['One size only'],
    expertVerdict: '34 / L Acne 1981 trompe jeans at $150 — grab if that is your size.',
  }),
  live({
    id: 'supreme-mm6-box-logo',
    brand: 'Supreme × MM6 Maison Margiela',
    title: 'Supreme × MM6 Maison Margiela Box Logo',
    shortDescription: 'Supreme × MM6 Maison Margiela Box Logo. Size M only. $150.',
    description:
      'Supreme × MM6 Maison Margiela Box Logo. Size M is the only size available. Price $150.',
    price: 150,
    badge: 'M only',
    tierRank: 3,
    fit: 'Size M only',
    fabric: 'As photographed',
    sizes: ['M'],
    images: [
      '/assets/images/products/supreme-mm6-box-logo.svg',
      '/assets/images/products/supreme-mm6-box-logo-2.svg',
    ],
    imageLabels: ['Front', 'Detail'],
    benefits: [
      'Supreme × MM6 Maison Margiela',
      'Box Logo collab',
      'Size M only · $150',
    ],
    details: { Size: 'M only', Price: '$150' },
    styleIt: 'Keep the rest quiet — let the box logo speak.',
    faqs: [{ q: 'What size?', a: 'Size M only.' }],
    highlights: [
      { icon: '◆', title: 'Supreme', desc: '× MM6 Margiela' },
      { icon: '◆', title: 'Box Logo', desc: 'Collab hit' },
      { icon: '◆', title: 'M only', desc: 'One size left' },
      { icon: '◆', title: '$150', desc: 'Listed price' },
    ],
    pros: ['Major collab name recognition', 'M-size scarcity'],
    cons: ['Size M only'],
    expertVerdict: 'Supreme × MM6 box logo in M at $150 — classic hype plug piece.',
  }),
  live({
    id: 'acne-2010m-trompe-jeans',
    brand: 'Acne Studios',
    title: "Acne Studios 2010M Trompe L'Oeil Jeans",
    shortDescription: "Acne Studios 2010M trompe l'œil jeans. Size 32 only. $180.",
    description:
      "Acne Studios 2010M Trompe L'Oeil jeans. Size 32 is the only size available. Price $180.",
    price: 180,
    badge: '32 only',
    tierRank: 4,
    fit: 'Size 32 only',
    fabric: 'Denim · trompe l\'œil',
    sizes: ['32'],
    images: [
      '/assets/images/products/acne-2010m-trompe-jeans.svg',
      '/assets/images/products/acne-2010m-trompe-jeans-2.svg',
    ],
    imageLabels: ['Front', 'Detail'],
    benefits: [
      'Acne Studios 2010M',
      "Trompe l'œil denim",
      'Size 32 only · $180',
    ],
    details: { Size: '32 only', Price: '$180' },
    styleIt: 'Minimal top. Statement denim. Clean shoes.',
    faqs: [{ q: 'What size?', a: 'Size 32 only.' }],
    highlights: [
      { icon: '◆', title: '2010M', desc: 'Acne Studios' },
      { icon: '◆', title: 'Trompe', desc: "L'œil denim" },
      { icon: '◆', title: '32', desc: 'Only size' },
      { icon: '◆', title: '$180', desc: 'Listed price' },
    ],
    pros: ['Designer Acne cut', 'Clear waist size'],
    cons: ['Size 32 only'],
    expertVerdict: 'Acne 2010M trompe in 32 at $180 — sized for the list, not a full run.',
  }),
  live({
    id: 'acne-1981-painter-decorator',
    brand: 'Acne Studios',
    title: 'Acne Studios 1981 Painter Printed Decorator',
    shortDescription: 'Acne Studios 1981 Painter Printed Decorator. Size L only. $200.',
    description:
      'Acne Studios 1981 Painter Printed Decorator. Size L is the only size available. Price $200.',
    price: 200,
    badge: 'L only',
    tierRank: 5,
    fit: 'Size L only',
    fabric: 'Painter-print denim / decorator finish',
    sizes: ['L'],
    images: [
      '/assets/images/products/acne-1981-painter-decorator.svg',
      '/assets/images/products/acne-1981-painter-decorator-2.svg',
    ],
    imageLabels: ['On body / front', 'Detail'],
    benefits: [
      'Acne Studios 1981 Painter print',
      'Decorator splatters — statement piece',
      'Size L only · $200',
    ],
    details: { Size: 'L only', Price: '$200' },
    styleIt: 'Matching paint energy on top, or solid black to contrast the print.',
    faqs: [{ q: 'What size?', a: 'Size L only.' }],
    highlights: [
      { icon: '◆', title: 'Painter', desc: '1981 Decorator print' },
      { icon: '◆', title: 'Acne', desc: 'Studios hit' },
      { icon: '◆', title: 'L only', desc: 'One size' },
      { icon: '◆', title: '$200', desc: 'Listed price' },
    ],
    pros: ['Loud painter print', 'Premium Acne listing'],
    cons: ['Size L only'],
    expertVerdict: 'Painter Decorator in L at $200 — the loudest Acne sit on the rack.',
  }),
  live({
    id: 'rolling-stones-plaid-flannel',
    brand: 'The Rolling Stones',
    title: 'The Rolling Stones Blue & White Plaid Flannel',
    shortDescription:
      'Blue and white plaid flannel with embroidered Rolling Stones logo. Size M only. $150.',
    description:
      'The Rolling Stones blue and white plaid flannel shirt with embroidered logo. Size M only. Price $150.',
    price: 150,
    badge: 'M only',
    tierRank: 6,
    fit: 'Size M only',
    fabric: 'Plaid flannel · embroidered logo',
    sizes: ['M'],
    images: [
      '/assets/images/products/rolling-stones-plaid-flannel.svg',
      '/assets/images/products/rolling-stones-plaid-flannel-2.svg',
      '/assets/images/products/rolling-stones-plaid-flannel-3.svg',
    ],
    imageLabels: ['Front', 'Back / logo', 'Detail'],
    benefits: [
      'Rolling Stones embroidered logo',
      'Blue / white plaid flannel',
      'Size M only · $150',
    ],
    details: { Size: 'M only', Price: '$150' },
    styleIt: 'Over a tee, open. Or alone with black pants.',
    faqs: [{ q: 'What size?', a: 'Size M only.' }],
    highlights: [
      { icon: '◆', title: 'Stones', desc: 'Embroidered logo' },
      { icon: '◆', title: 'Plaid', desc: 'Blue & white' },
      { icon: '◆', title: 'M only', desc: 'One size' },
      { icon: '◆', title: '$150', desc: 'Listed price' },
    ],
    pros: ['Iconic logo embroidery', 'Street flannel silhouette'],
    cons: ['Size M only'],
    expertVerdict: 'Stones plaid in M at $150 — rock-heritage streetwear that still reads hype.',
  }),
  live({
    id: 'skeleton-denim-jacket',
    brand: 'Vintage',
    title: 'Vintage Blue Denim Jacket — Beige Skeleton Graphic',
    shortDescription:
      'Vintage blue denim jacket with beige skeleton graphic. Size L only. $200.',
    description:
      'Vintage blue denim jacket with beige skeleton graphic across front and back. Size L only. Price $200.',
    price: 200,
    badge: 'L only',
    tierRank: 7,
    fit: 'Size L only · boxy vintage cut',
    fabric: 'Washed denim · beige skeleton appliqué / graphic',
    sizes: ['L'],
    images: [
      '/assets/images/products/skeleton-denim-jacket.svg',
      '/assets/images/products/skeleton-denim-jacket-2.svg',
    ],
    imageLabels: ['Front', 'Back'],
    benefits: [
      'Full skeleton graphic front + back',
      'Vintage washed blue denim',
      'Size L only · $200',
    ],
    details: { Size: 'L only', Price: '$200' },
    styleIt: 'Black pants, heavy boots. Let the bones do the talking.',
    faqs: [{ q: 'What size?', a: 'Size L only.' }],
    highlights: [
      { icon: '◆', title: 'Skeleton', desc: 'Beige graphic' },
      { icon: '◆', title: 'Vintage', desc: 'Blue denim' },
      { icon: '◆', title: 'L only', desc: 'One size' },
      { icon: '◆', title: '$200', desc: 'Listed price' },
    ],
    pros: ['Statement skeleton motif', 'Front and back graphic'],
    cons: ['Size L only'],
    expertVerdict: 'Skeleton denim in L at $200 — pure street graphic heat.',
  }),
  live({
    id: 'polizei-leather-jacket',
    brand: 'POLIZEI / Vetements-style',
    title: 'POLIZEI Leather Jacket',
    shortDescription: 'POLIZEI leather jacket. Size M only. $180.',
    description:
      'POLIZEI leather jacket — black leather with POLIZEI branding. Size M only. Price $180.',
    price: 180,
    badge: 'M only',
    tierRank: 8,
    fit: 'Size M only · cropped boxy leather',
    fabric: 'Black leather',
    sizes: ['M'],
    images: [
      '/assets/images/products/polizei-leather-jacket.svg',
      '/assets/images/products/polizei-leather-jacket-2.svg',
      '/assets/images/products/polizei-leather-jacket-3.svg',
    ],
    imageLabels: ['Front', 'Back', 'Detail'],
    benefits: [
      'POLIZEI branded leather',
      'Black motorcycle / utility cut',
      'Size M only · $180',
    ],
    details: { Size: 'M only', Price: '$180' },
    styleIt: 'Black everything underneath. Industrial night-out energy.',
    faqs: [{ q: 'What size?', a: 'Size M only.' }],
    highlights: [
      { icon: '◆', title: 'POLIZEI', desc: 'Leather mark' },
      { icon: '◆', title: 'Black', desc: 'Heavy leather' },
      { icon: '◆', title: 'M only', desc: 'One size' },
      { icon: '◆', title: '$180', desc: 'Listed price' },
    ],
    pros: ['Industrial hype silhouette', 'Strong back branding'],
    cons: ['Size M only'],
    expertVerdict: 'POLIZEI leather in M at $180 — dark, loud, and scarce.',
  }),
  live({
    id: 'vale-forever-skyfall',
    brand: 'Vale Forever',
    title: 'Vale Forever SKYFALL',
    shortDescription: 'Vale Forever SKYFALL. Size M. $150.',
    description: 'Vale Forever SKYFALL. Size M available. Price $150.',
    price: 150,
    badge: 'Size M',
    tierRank: 9,
    fit: 'Size M',
    fabric: 'As photographed',
    sizes: ['M'],
    images: [
      '/assets/images/products/vale-forever-skyfall.svg',
      '/assets/images/products/vale-forever-skyfall-2.svg',
    ],
    imageLabels: ['Front', 'Alt'],
    benefits: ['Vale Forever SKYFALL', 'Size M · $150', 'Hype bottoms / apparel hit'],
    details: { Size: 'M', Price: '$150' },
    styleIt: 'Pair with a clean black tee and the Skittle sweats energy from the same house.',
    faqs: [{ q: 'What size?', a: 'Size M.' }],
    highlights: [
      { icon: '◆', title: 'Vale', desc: 'Forever' },
      { icon: '◆', title: 'SKYFALL', desc: 'Drop name' },
      { icon: '◆', title: 'M', desc: 'Available' },
      { icon: '◆', title: '$150', desc: 'Listed price' },
    ],
    pros: ['Vale Forever name recognition', 'Accessible $150 entry'],
    cons: ['Size M listing only as provided'],
    expertVerdict: 'SKYFALL in M at $150 — Vale Forever for the feed and the street.',
  }),
  live({
    id: 'project-gr-layered-sweatpants',
    brand: 'PROJECT G/R',
    title: 'PROJECT G/R 3 Layered Sweatpants',
    shortDescription: 'PROJECT G/R 3 Layered Sweatpants. Sizes M and L. $150.',
    description:
      'PROJECT G/R 3 Layered Sweatpants — triple waistband construction with USA / 3 graphics. Sizes M and L available. Price $150.',
    price: 150,
    badge: 'M · L',
    tierRank: 10,
    fit: 'Sizes M and L available · layered waist',
    fabric: 'Heather grey fleece / jersey · layered waistbands',
    sizes: ['M', 'L'],
    images: [
      '/assets/images/products/project-gr-layered-sweatpants.svg',
      '/assets/images/products/project-gr-layered-sweatpants-2.svg',
    ],
    imageLabels: ['Front', 'Back'],
    benefits: [
      'Triple layered waistband look',
      'Sizes M and L in stock',
      '$150 listed',
    ],
    details: { Sizes: 'M and L', Price: '$150' },
    styleIt: 'Cropped hoodie or tee. Chunky sneakers. Baggy street fit.',
    faqs: [
      { q: 'What sizes?', a: 'M and L are both available.' },
    ],
    highlights: [
      { icon: '◆', title: '3 Layer', desc: 'Signature waist' },
      { icon: '◆', title: 'G/R', desc: 'PROJECT hit' },
      { icon: '◆', title: 'M · L', desc: 'Two sizes' },
      { icon: '◆', title: '$150', desc: 'Listed price' },
    ],
    pros: ['Two sizes available', 'Instantly recognizable layered waist'],
    cons: ['Wide/baggy fit — check photos'],
    expertVerdict: 'PROJECT G/R layered sweats in M or L at $150 — one of the few multi-size hits on the list.',
  }),
  {
    id: 'vale-forever-skittle-sweats',
    tier: 'Apparel',
    category: 'apparel',
    title: "Vale Forever Skittle Sweats 'Jeweled/Black'",
    shortDescription:
      'Heavyweight wide-leg skittle sweats in jeweled black — acid-wash charcoal, silver stud side seams, Valley script rhinestone graphic.',
    price: 300,
    compareAt: 420,
    collections: ['apparel', 'all'],
    badge: 'Sale',
    tierRank: 11,
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
      SoldBy: 'Milan Hype · Hype reseller',
    },
    description:
      "Vale Forever Skittle Sweats in Jeweled/Black — heavyweight acid-wash fleece with a baggy wide-leg cut. Silver studs run the full outer seams and hem. Front Valley script is rhinestone-set. Back has dual patch pockets and a raw mid-thigh seam. Price $300 ($120 off — was $420).",
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
        a: 'Yes — $300 with $120 off (compare at $420). Limited drop via Milan Hype.',
      },
    ],
    highlights: [
      { icon: '◆', title: 'Jeweled', desc: 'Silver stud seams + rhinestone Valley script' },
      { icon: '◆', title: 'Wide leg', desc: 'Oversized skittle silhouette' },
      { icon: '◆', title: 'Acid wash', desc: 'Charcoal fade, not flat black' },
      { icon: '◆', title: 'Sale', desc: '$300 · $120 off · was $420' },
    ],
    pros: [
      'Statement jeweled detailing that photographs expensive',
      'Heavyweight fleece holds the baggy shape',
      'Front + back studio shots so you see the full piece',
      'Sale price at $300 — $120 off $420',
    ],
    cons: [
      'Oversized fit — check size notes if you prefer slim',
      'Jeweled graphics need gentle wash care',
    ],
    expertVerdict:
      'If you want one loud bottoms piece for the feed and the street, Jeweled/Black is the drop. Heavy, studded, and priced to move at $300.',
    expertBy: 'Milan Hype · Street plug',
    compressionZones: EMPTY_ZONES,
  },
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
