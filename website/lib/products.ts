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
  category?: 'apparel' | 'sneakers';
};

function live(p: LiveInput): Product {
  const hero = p.images[0];
  const category = p.category ?? 'apparel';
  return {
    id: p.id,
    tier: category === 'sneakers' ? 'Sneakers' : 'Apparel',
    category,
    title: p.title,
    shortDescription: p.shortDescription,
    price: p.price,
    compareAt: p.compareAt ?? p.price,
    collections: [category, 'all'],
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
    id: 'bape-faze-hoodie',
    brand: 'BAPE × FaZe Clan',
    title: 'BAPE × FaZe Clan Full Zip Hoodie Red',
    shortDescription: 'Red/black camo BAPE × FaZe Clan full-zip hoodie. Size XL. $350.',
    description:
      'BAPE × FaZe Clan full-zip hoodie in red/black camo with FaZe + Ape Head hits, sleeve text, and solid red rib cuffs/hem. Men’s US size XL. Price $350.',
    price: 350,
    badge: 'XL',
    tierRank: 0,
    fit: 'Size XL only',
    fabric: 'Cotton fleece · red/black camo print',
    sizes: ['XL'],
    images: [
      '/assets/images/products/bape-faze-hoodie.jpg',
      '/assets/images/products/bape-faze-hoodie-2.jpg',
      '/assets/images/products/bape-faze-hoodie-3.jpg',
      '/assets/images/products/bape-faze-hoodie-4.jpg',
      '/assets/images/products/bape-faze-hoodie-5.jpg',
    ],
    imageLabels: ['Front', 'Front zip detail', 'Back', 'Front + back', 'Back graphic close-up'],
    benefits: ['BAPE × FaZe Clan collab', 'Full-zip hood', 'Size XL · $350'],
    details: { Size: 'XL', Price: '$350' },
    styleIt: 'Black pants, clean sneakers. Let the red camo talk.',
    faqs: [{ q: 'What size?', a: 'Size XL only.' }],
    highlights: [
      { icon: '◆', title: 'BAPE', desc: '× FaZe Clan' },
      { icon: '◆', title: 'Red camo', desc: 'Full zip' },
      { icon: '◆', title: 'XL', desc: 'One size' },
      { icon: '◆', title: '$350', desc: 'Listed price' },
    ],
    pros: ['Major collab branding', 'Front + back studio shots'],
    cons: ['Size XL only'],
    expertVerdict: 'BAPE × FaZe red camo zip in XL at $350 — loud hype outer.',
  }),
  live({
    id: 'sp5der-black-set',
    brand: 'Sp5der',
    title: 'Sp5der Black Hoodie + Sweatpants Set',
    shortDescription: 'Black Sp5der hoodie and sweatpants with arched logo. Size L. $180.',
    description:
      'Sp5der black matching set — hoodie with arched sp5der chest logo and sweatpants with arched rear logo. Size L. Price $180.',
    price: 180,
    badge: 'L',
    tierRank: 1,
    fit: 'Size L only',
    fabric: 'Black fleece / jersey',
    sizes: ['L'],
    images: ['/assets/images/products/sp5der-black-set.jpg'],
    imageLabels: ['Hoodie + pants'],
    benefits: ['Matching Sp5der set', 'Arched logo hits', 'Size L · $180'],
    details: { Size: 'L', Price: '$180' },
    styleIt: 'Wear as a full tracksuit. Clean white or black sneakers.',
    faqs: [{ q: 'What size?', a: 'Size L only.' }],
    highlights: [
      { icon: '◆', title: 'Sp5der', desc: 'Matching set' },
      { icon: '◆', title: 'Black', desc: 'Hoodie + pants' },
      { icon: '◆', title: 'L', desc: 'One size' },
      { icon: '◆', title: '$180', desc: 'Listed price' },
    ],
    pros: ['Full set listing', 'Instant street recognition'],
    cons: ['Size L only', 'Single gallery photo'],
    expertVerdict: 'Sp5der black set in L at $180 — easy full-fit drop.',
  }),
  live({
    id: 'matty-boy-yellow-tank',
    brand: 'Chrome Hearts × Matty Boy',
    title: 'Matty Boy Yellow Ribbed Tank',
    shortDescription: 'Chrome Hearts × Matty Boy yellow ribbed tank. Size M. $150.',
    description:
      'Chrome Hearts × Matty Boy yellow ribbed tank with light-blue CHROME HEARTS graphics and lettuce hem. Size M. Price $150.',
    price: 150,
    badge: 'M',
    tierRank: 2,
    fit: 'Size M only',
    fabric: 'Yellow rib-knit',
    sizes: ['M'],
    images: [
      '/assets/images/products/matty-boy-yellow-tank.jpg',
      '/assets/images/products/matty-boy-yellow-tank-2.jpg',
      '/assets/images/products/matty-boy-yellow-tank-3.jpg',
    ],
    imageLabels: ['Front', 'Alt angle', 'Hem / logo detail'],
    benefits: ['Matty Boy × Chrome Hearts energy', 'Yellow rib tank', 'Size M · $150'],
    details: { Size: 'M', Price: '$150' },
    styleIt: 'Under an open flannel or alone in summer heat.',
    faqs: [{ q: 'What size?', a: 'Size M only.' }],
    highlights: [
      { icon: '◆', title: 'Matty Boy', desc: 'Chrome Hearts collab vibe' },
      { icon: '◆', title: 'Yellow', desc: 'Ribbed tank' },
      { icon: '◆', title: 'M', desc: 'One size' },
      { icon: '◆', title: '$150', desc: 'Listed price' },
    ],
    pros: ['Loud colorway', 'Detail shots included'],
    cons: ['Size M only'],
    expertVerdict: 'Matty Boy yellow tank in M at $150 — bright street essential.',
  }),
  live({
    id: 'chrome-hearts-trucker-hat',
    brand: 'Chrome Hearts',
    title: 'Chrome Hearts Matty Boy Trucker Hat',
    shortDescription: 'Chrome Hearts trucker hat with Matty Boy I ❤️ NY graphic. $150.',
    description:
      'Chrome Hearts trucker hat — white front, blue brim, orange mesh, Matty Boy–style I ❤️ NY graphic, Chrome Hearts back patch, silver CH button. Price $150.',
    price: 150,
    badge: 'Hat',
    tierRank: 3,
    fit: 'Adjustable snapback',
    fabric: 'Mesh trucker · structured front',
    sizes: ['OS'],
    images: [
      '/assets/images/products/chrome-hearts-trucker-hat.jpg',
      '/assets/images/products/chrome-hearts-trucker-hat-2.jpg',
    ],
    imageLabels: ['Front', 'Back'],
    benefits: ['Chrome Hearts branding', 'Matty Boy graphic', 'Adjustable · $150'],
    details: { Size: 'One size / adjustable', Price: '$150' },
    styleIt: 'With any black tee or the yellow Matty Boy tank.',
    faqs: [{ q: 'What size?', a: 'One size — adjustable snapback.' }],
    highlights: [
      { icon: '◆', title: 'Chrome Hearts', desc: 'Trucker' },
      { icon: '◆', title: 'Matty Boy', desc: 'I ❤️ NY graphic' },
      { icon: '◆', title: 'OS', desc: 'Adjustable' },
      { icon: '◆', title: '$150', desc: 'Listed price' },
    ],
    pros: ['Front + back photos', 'Instant CH recognition'],
    cons: ['One size only'],
    expertVerdict: 'Chrome Hearts trucker at $150 — easy accessory heat.',
  }),
  live({
    id: 'supreme-leopard-balaclava',
    brand: 'Supreme',
    title: 'Supreme Leopard Balaclava',
    shortDescription: 'Supreme olive leopard balaclava with white Supreme wordmark. $100.',
    description:
      'Supreme leopard / cheetah print balaclava in olive with white Supreme forehead print and red box logo tab. Price $100.',
    price: 100,
    badge: 'Accessories',
    tierRank: 4,
    fit: 'One size',
    fabric: 'Knit balaclava',
    sizes: ['OS'],
    images: [
      '/assets/images/products/supreme-leopard-balaclava.jpg',
      '/assets/images/products/supreme-leopard-balaclava-2.jpg',
    ],
    imageLabels: ['Side', 'Front'],
    benefits: ['Supreme wordmark', 'Olive leopard print', '$100'],
    details: { Size: 'One size', Price: '$100' },
    styleIt: 'With black outerwear. Night heat.',
    faqs: [{ q: 'What size?', a: 'One size.' }],
    highlights: [
      { icon: '◆', title: 'Supreme', desc: 'Balaclava' },
      { icon: '◆', title: 'Leopard', desc: 'Olive print' },
      { icon: '◆', title: 'OS', desc: 'One size' },
      { icon: '◆', title: '$100', desc: 'Listed price' },
    ],
    pros: ['Two angles', 'Classic Supreme accessory'],
    cons: ['One size'],
    expertVerdict: 'Supreme leopard balaclava at $100 — small piece, loud brand.',
  }),
  live({
    id: 'jordan-3-desert-camo',
    brand: 'Jordan',
    title: 'Air Jordan 3 Desert Camo',
    shortDescription: 'Air Jordan 3 desert camo / patchwork. Size 8.5. $120.',
    description:
      'Air Jordan 3 in desert camo / patchwork textile upper with white midsole and gum outsole. Men’s US size 8.5. Price $120.',
    price: 120,
    badge: '8.5',
    tierRank: 5,
    category: 'sneakers',
    fit: 'Men’s US 8.5',
    fabric: 'Textile camo upper · gum outsole',
    sizes: ['8.5'],
    images: [
      '/assets/images/products/jordan-3-desert-camo.jpg',
      '/assets/images/products/jordan-3-desert-camo-2.jpg',
      '/assets/images/products/jordan-3-desert-camo-3.jpg',
    ],
    imageLabels: ['Lateral', 'Medial', 'Heel pair'],
    benefits: ['Jordan 3 silhouette', 'Desert camo upper', 'Size 8.5 · $120'],
    details: { Size: '8.5 US', Price: '$120' },
    styleIt: 'Neutral fits, washed denim, black sweats.',
    faqs: [{ q: 'What size?', a: 'Men’s US 8.5 only.' }],
    highlights: [
      { icon: '◆', title: 'AJ3', desc: 'Desert camo' },
      { icon: '◆', title: '8.5', desc: 'US size' },
      { icon: '◆', title: 'Gum', desc: 'Outsole' },
      { icon: '◆', title: '$120', desc: 'Listed price' },
    ],
    pros: ['Multiple angles', 'Clear size callout'],
    cons: ['Size 8.5 only'],
    expertVerdict: 'Jordan 3 desert camo in 8.5 at $120 — clean sneaker hit.',
  }),
  live({
    id: 'jordan-4-olive',
    brand: 'Jordan',
    title: 'Air Jordan 4 Olive',
    shortDescription: 'Air Jordan 4 olive / black / orange. Size 8.5. $150.',
    description:
      'Air Jordan 4 in olive suede with black wings, orange tongue lining, and cream/black midsole. Men’s US size 8.5. Price $150.',
    price: 150,
    badge: '8.5',
    tierRank: 6,
    category: 'sneakers',
    fit: 'Men’s US 8.5',
    fabric: 'Olive suede / nubuck · mesh netting',
    sizes: ['8.5'],
    images: [
      '/assets/images/products/jordan-4-olive.jpg',
      '/assets/images/products/jordan-4-olive-2.jpg',
      '/assets/images/products/jordan-4-olive-3.jpg',
    ],
    imageLabels: ['Lateral', 'Medial', 'Heel pair'],
    benefits: ['Jordan 4 silhouette', 'Olive colorway', 'Size 8.5 · $150'],
    details: { Size: '8.5 US', Price: '$150' },
    styleIt: 'Earth tones, black denim, cargo pants.',
    faqs: [{ q: 'What size?', a: 'Men’s US 8.5 only.' }],
    highlights: [
      { icon: '◆', title: 'AJ4', desc: 'Olive' },
      { icon: '◆', title: '8.5', desc: 'US size' },
      { icon: '◆', title: 'Orange', desc: 'Tongue pop' },
      { icon: '◆', title: '$150', desc: 'Listed price' },
    ],
    pros: ['Full pair heel shot', 'Strong colorway'],
    cons: ['Size 8.5 only'],
    expertVerdict: 'Jordan 4 olive in 8.5 at $150 — military heat for the rotation.',
  }),
  live({
    id: 'margiela-paint-drop',
    brand: 'Maison Margiela',
    title: 'Maison Margiela Paint Drop Replica',
    shortDescription: 'Maison Margiela Replica paint-drop sneaker. Size 10. $220.',
    description:
      'Maison Margiela Replica low-top with multi-color paint-drop splatters, white leather/suede upper, gum sole, and numeric tongue tag. Size 10. Price $220.',
    price: 220,
    badge: '10',
    tierRank: 7,
    category: 'sneakers',
    fit: 'Size 10',
    fabric: 'Leather / suede · paint-drop finish',
    sizes: ['10'],
    images: ['/assets/images/products/margiela-paint-drop.jpg'],
    imageLabels: ['Pair / angle'],
    benefits: ['Margiela Replica silhouette', 'Paint-drop treatment', 'Size 10 · $220'],
    details: { Size: '10', Price: '$220' },
    styleIt: 'Black pants, oversized tee. Designer street finish.',
    faqs: [{ q: 'What size?', a: 'Size 10 only.' }],
    highlights: [
      { icon: '◆', title: 'Margiela', desc: 'Replica' },
      { icon: '◆', title: 'Paint drop', desc: 'Multi-color' },
      { icon: '◆', title: '10', desc: 'One size' },
      { icon: '◆', title: '$220', desc: 'Listed price' },
    ],
    pros: ['Designer sneaker listing', 'Distinct paint treatment'],
    cons: ['Size 10 only', 'Single gallery photo'],
    expertVerdict: 'Margiela paint-drop Replica in 10 at $220 — designer sneaker plug piece.',
  }),
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
    tierRank: 10,
    fit: 'Size L only — sold out in other sizes',
    fabric: 'Denim · trompe l\'oeil construction',
    sizes: ['L'],
    images: [
      '/assets/images/products/yproject-jpg-trompe-denim.jpg',
      '/assets/images/products/yproject-jpg-trompe-denim-2.jpg',
      '/assets/images/products/yproject-jpg-trompe-denim-3.jpg',
    ],
    imageLabels: [
      'Front flat',
      'On mannequin',
      'Back',
    ],
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
    tierRank: 11,
    fit: 'Size 34 / L only',
    fabric: 'Denim · trompe-l\'œil finish',
    sizes: ['34 / L'],
    images: [
      '/assets/images/products/acne-1981-trompe-jeans.jpg',
      '/assets/images/products/acne-1981-trompe-jeans-2.jpg',
    ],
    imageLabels: [
      'Front',
      'Back',
    ],
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
    title: 'Supreme × MM6 Maison Margiela Box Logo Zip Hoodie',
    shortDescription: 'Navy Supreme × MM6 zip hoodie — red box logo, white paint splatters. Size M only. $150.',
    description:
      'Supreme × MM6 Maison Margiela navy zip-up box logo hoodie with white paint splatters and MM6 sleeve embroidery. Size M only. Price $150.',
    price: 150,
    badge: 'M only',
    tierRank: 12,
    fit: 'Size M only',
    fabric: 'As photographed',
    sizes: ['M'],
    images: [
      '/assets/images/products/supreme-mm6-box-logo.jpg',
      '/assets/images/products/supreme-mm6-box-logo-2.jpg',
      '/assets/images/products/supreme-mm6-box-logo-3.jpg',
    ],
    imageLabels: [
      'Front',
      'Front alt',
      'Sleeve / MM6 detail',
    ],
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
    tierRank: 13,
    fit: 'Size 32 only',
    fabric: 'Denim · trompe l\'œil',
    sizes: ['32'],
    images: [
      '/assets/images/products/acne-2010m-trompe-jeans.jpg',
      '/assets/images/products/acne-2010m-trompe-jeans-2.jpg',
    ],
    imageLabels: [
      'Front western trompe',
      'Detail / boots print',
    ],
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
    shortDescription: 'Acne Studios 1981 painter-print decorator set energy. Size L only. $200.',
    description:
      'Acne Studios 1981 Painter Printed Decorator — cream base with multi-color paint splatters. Size L only. Price $200.',
    price: 200,
    badge: 'L only',
    tierRank: 14,
    fit: 'Size L only',
    fabric: 'Painter-print denim / decorator finish',
    sizes: ['L'],
    images: [
      '/assets/images/products/acne-1981-painter-decorator-3.jpg',
      '/assets/images/products/acne-1981-painter-decorator-4.jpg',
      '/assets/images/products/acne-1981-painter-decorator.jpg',
      '/assets/images/products/acne-1981-painter-decorator-2.jpg',
    ],
    imageLabels: [
      'Full look',
      'Jacket + pants hang',
      'On body lower',
      'Side',
    ],
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
      'Blue/white plaid flannel with fang tongue embroidery and FALSE PERCEPTION text. Size M only. $150.',
    description:
      'The Rolling Stones blue and white plaid flannel with embroidered tongue-and-lips (fangs) logo, FALSE PERCEPTION back text, and distressed hem. Size M only. Price $150.',
    price: 150,
    badge: 'M only',
    tierRank: 15,
    fit: 'Size M only',
    fabric: 'Plaid flannel · embroidered logo',
    sizes: ['M'],
    images: [
      '/assets/images/products/rolling-stones-plaid-flannel.jpg',
      '/assets/images/products/rolling-stones-plaid-flannel-2.jpg',
      '/assets/images/products/rolling-stones-plaid-flannel-3.jpg',
      '/assets/images/products/rolling-stones-plaid-flannel-4.jpg',
    ],
    imageLabels: [
      'Front',
      'Back logo',
      'Logo detail',
      'Back plaid',
    ],
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
    tierRank: 16,
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
    tierRank: 17,
    fit: 'Size M only · cropped boxy leather',
    fabric: 'Black leather',
    sizes: ['M'],
    images: [
      '/assets/images/products/polizei-leather-jacket.jpg',
      '/assets/images/products/polizei-leather-jacket-2.jpg',
      '/assets/images/products/polizei-leather-jacket-3.jpg',
    ],
    imageLabels: [
      'Front',
      'Chest / sleeve',
      'Back',
    ],
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
    shortDescription: 'Vale Forever SKYFALL rhinestone plaid flannel. Size M. $150.',
    description: 'Vale Forever SKYFALL — beige/blue plaid flannel with rhinestone columns, VALE USA medium tag. Size M. Price $150.',
    price: 150,
    badge: 'Size M',
    tierRank: 18,
    fit: 'Size M',
    fabric: 'As photographed',
    sizes: ['M'],
    images: [
      '/assets/images/products/vale-forever-skyfall.jpg',
      '/assets/images/products/vale-forever-skyfall-2.jpg',
      '/assets/images/products/vale-forever-skyfall-3.jpg',
    ],
    imageLabels: [
      'Front',
      'Tag / rhinestones',
      'Cuff detail',
    ],
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
    tierRank: 19,
    fit: 'Sizes M and L available · layered waist',
    fabric: 'Heather grey fleece / jersey · layered waistbands',
    sizes: ['M', 'L'],
    images: [
      '/assets/images/products/project-gr-layered-sweatpants.jpg',
      '/assets/images/products/project-gr-layered-sweatpants-2.jpg',
    ],
    imageLabels: [
      'Front',
      'Back',
    ],
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
    tierRank: 20,
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
