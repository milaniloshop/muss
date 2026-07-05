const BRAND = {
  name: 'Milan Hype',
  productLine: 'CoreFit',
  productType: "Men's Chest + Core Compression Tank",
  tagline: 'Flatter chest. Tighter core. Invisible under every shirt.',
  shippingFreeOver: 75
};

const COLLECTIONS = {
  corefit: {
    title: "Men's Chest + Core Compression Tanks",
    subtitle: 'Four tiers · one purpose · confidence under every shirt',
    description: 'Engineered men\'s compression tanks with targeted chest and core zones — flatter silhouette, zero bulk, invisible under tees and dress shirts. Not padded. Not fake muscle. Real compression.'
  }
};

const PRODUCTS = [
  {
    id: 'corefit-essential',
    tier: 'Essential',
    title: 'CoreFit Essential — Chest + Core Compression Tank',
    shortDescription: "Men's compression tank — targeted chest flattening and core support. Wear daily under any shirt.",
    price: 49,
    compareAt: 68,
    collections: ['corefit'],
    badge: null,
    tierRank: 1,
    fit: 'Compression fit — size up if between sizes',
    fabric: '82% Nylon · 18% Spandex',
    colorOptions: [
      { id: 'black', name: 'Black', hex: '#1a1a1a', image: 'assets/images/products/corefit-essential.jpg' },
      { id: 'white', name: 'White', hex: '#f4f4f0', image: 'assets/images/products/corefit-essential-white.jpg' }
    ],
    images: [
      'assets/images/products/corefit-essential.jpg',
      'assets/images/products/corefit-essential.svg'
    ],
    imageSlots: [
      { filename: 'corefit-essential.jpg', label: 'Front flat lay' },
      { filename: 'corefit-essential-2.jpg', label: 'Under dress shirt' }
    ],
    benefits: [
      'Targeted chest compression for a flatter silhouette',
      'Core smoothing without bulk or visible lines',
      'Breathable nylon-spandex for all-day wear',
      'Low neckline stays hidden under polos and tees',
      'Discreet matte black packaging'
    ],
    details: {
      'Product': "Men's chest + core compression tank",
      'Collection': 'CoreFit Essential',
      'Fabric': '82% Nylon / 18% Spandex',
      'Compression': 'Moderate — daily wear',
      'Colors': 'Black · White',
      'Care': 'Machine wash cold · hang dry'
    },
    description: "The entry to Milan Hype CoreFit. A men's chest + core compression tank built for daily wear — flattens chest contour, smooths the midsection, stays invisible under polos, tees, and dress shirts. No fake muscle pads. No gimmicks. Real compression you put on every morning.",
    styleIt: 'Your daily foundation layer. Black under dark shirts. White under light fabrics.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    faqs: [
      { q: 'Is this a padded fake-muscle shirt?', a: 'No. CoreFit is a compression tank — it flattens and smooths your natural silhouette. No foam pads, no fake abs, no gimmicks.' },
      { q: 'Who is Essential for?', a: 'Men who want reliable daily chest + core compression — first-time buyers, everyday office wear, and anyone who hates how they look in a fitted tee.' },
      { q: 'Does it help with chest insecurity?', a: 'Yes — that is exactly what it is built for. The chest zone compresses for a flatter look under shirts. The core zone streamlines your midsection. Most men wear it because they need to, not because they want a fashion item.' },
      { q: 'How does it compare to Pro?', a: 'Essential uses our standard nylon-spandex blend. Pro upgrades to Italian microfiber with silver-ion odor control and a reinforced dual-layer chest compression panel.' }
    ]
  },
  {
    id: 'corefit-pro',
    tier: 'Pro',
    title: 'CoreFit Pro — Chest + Core Compression Tank',
    shortDescription: "Men's best-selling compression tank. Reinforced chest panel + core zone. Italian microfiber, silver-ion odor control.",
    price: 89,
    compareAt: 118,
    collections: ['corefit'],
    badge: 'Best Seller',
    tierRank: 2,
    fit: 'Athletic compression — true to size for firm hold',
    fabric: 'Italian Microfiber · Silver-Ion Blend',
    colorOptions: [
      { id: 'black', name: 'Black', hex: '#1a1a1a', image: 'assets/images/products/corefit-pro.jpg' },
      { id: 'charcoal', name: 'Charcoal', hex: '#3d3d3d', image: 'assets/images/products/corefit-pro-charcoal.jpg' }
    ],
    lifestyleImage: 'assets/images/products/corefit-pro-lifestyle.jpg',
    images: [
      'assets/images/products/corefit-pro.jpg',
      'assets/images/products/corefit-pro.svg'
    ],
    imageSlots: [
      { filename: 'corefit-pro.jpg', label: 'Front flat lay' },
      { filename: 'corefit-pro-2.jpg', label: 'Detail — chest panel' }
    ],
    benefits: [
      'Italian microfiber — softer hand-feel, superior stretch recovery',
      'Silver-ion threads reduce odor during long wear',
      'Reinforced dual-layer chest compression zone',
      'Seamless side construction — invisible under fitted shirts',
      'Moisture-wicking for 12+ hour days',
      'Signature Milan Hype woven label'
    ],
    details: {
      'Product': "Men's chest + core compression tank",
      'Collection': 'CoreFit Pro',
      'Fabric': 'Italian Microfiber / Silver-Ion',
      'Compression': 'Firm — professional & events',
      'Colors': 'Black · Charcoal',
      'Care': 'Machine wash cold · lay flat to dry'
    },
    description: "Our #1 men's chest + core compression tank. CoreFit Pro combines a reinforced dual-layer chest panel with a firm core compression zone — built for men who wear a dress shirt five days a week and refuse to look soft in a tee. Italian microfiber. Silver-ion odor control. Not padded. Not viral gimmickwear. Real daily compression.",
    styleIt: 'The executive uniform underneath. Pair with tailored shirts and premium knits.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    faqs: [
      { q: 'Why is Pro the best seller?', a: 'It is the sweet spot — firm chest + core compression, premium Italian microfiber, and all-day comfort. Most men buy this tier first.' },
      { q: 'Will it flatten my chest under a t-shirt?', a: 'Yes. The reinforced chest panel is specifically engineered to reduce visible chest contour under fitted shirts.' },
      { q: 'Is the silver-ion treatment permanent?', a: 'Yes — woven into the fiber, not a surface coating. Effective for the life of the garment.' }
    ]
  },
  {
    id: 'corefit-elite',
    tier: 'Elite',
    title: 'CoreFit Elite — Chest + Core Compression Tank',
    shortDescription: "Premium men's compression tank. Japanese cooling yarn. Precision chest + core mapping. Hand-finished seams.",
    price: 149,
    compareAt: 198,
    collections: ['corefit'],
    badge: 'Premium',
    tierRank: 3,
    fit: 'Precision compression — consult size guide',
    fabric: 'Japanese Cooling Yarn · 4-Way Stretch',
    colorOptions: [
      { id: 'black', name: 'Black', hex: '#1a1a1a', image: 'assets/images/products/corefit-elite.jpg' },
      { id: 'navy', name: 'Midnight Navy', hex: '#1a2744', image: 'assets/images/products/corefit-elite-2.jpg' }
    ],
    images: [
      'assets/images/products/corefit-elite.jpg',
      'assets/images/products/corefit-elite.svg'
    ],
    imageSlots: [
      { filename: 'corefit-elite.jpg', label: 'Front flat lay' },
      { filename: 'corefit-elite-2.jpg', label: 'Hand-finished seam detail' }
    ],
    benefits: [
      'Japanese cooling yarn — thermoregulating for warm climates',
      '360° chest + core compression mapping — precision zones, not padding',
      'Hand-finished flatlock seams — zero visible lines',
      'Extended length stays tucked all day',
      'Anti-pill, anti-fade premium construction',
      'Delivered in embossed Milan Hype gift sleeve'
    ],
    details: {
      'Product': "Men's chest + core compression tank",
      'Collection': 'CoreFit Elite',
      'Fabric': 'Japanese Cooling Yarn / Elastane',
      'Compression': 'Precision — events & travel',
      'Colors': 'Black · Midnight Navy',
      'Care': 'Hand wash or delicate cycle · hang dry'
    },
    description: 'For men who notice the difference. CoreFit Elite uses Japanese cooling yarn and hand-finished construction — the tier chosen by clients who refuse to compromise on how they look in a fitted shirt.',
    styleIt: 'Weddings, galas, date nights, and any moment the fit must be flawless.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    faqs: [
      { q: 'What makes Elite worth $149?', a: 'Japanese cooling yarn, hand-finished seams, and precision compression mapping — materials and construction you can feel immediately.' },
      { q: 'Is Elite suitable for hot weather?', a: 'Yes. The cooling yarn is specifically engineered for thermoregulation — popular with clients in Florida, Texas, and California.' }
    ]
  },
  {
    id: 'corefit-signature',
    tier: 'Signature',
    title: 'CoreFit Signature — Chest + Core Compression Tank',
    shortDescription: "Limited men's compression tank. Swiss weave. Maximum chest + core hold. Luxury presentation.",
    price: 229,
    compareAt: 295,
    collections: ['corefit'],
    badge: 'Limited',
    tierRank: 4,
    fit: 'Bespoke-grade compression — white-glove sizing support',
    fabric: 'Swiss Compression Weave · 24K Gold Thread',
    colorOptions: [
      { id: 'onyx', name: 'Onyx Black', hex: '#0a0a0a', image: 'assets/images/products/corefit-signature.jpg' }
    ],
    images: [
      'assets/images/products/corefit-signature.jpg',
      'assets/images/products/corefit-signature.svg'
    ],
    imageSlots: [
      { filename: 'corefit-signature.jpg', label: 'Front flat lay' },
      { filename: 'corefit-signature-2.jpg', label: 'Gold-thread accent detail' }
    ],
    benefits: [
      'Swiss-engineered compression weave — maximum hold, zero restriction',
      '24K gold-thread accent line along interior seam',
      'Limited production — numbered authenticity card included',
      'Magnetic-close luxury presentation box',
      'Complimentary white-glove sizing consultation via email',
      'Priority 24-hour fulfillment',
      'Lifetime seam repair guarantee'
    ],
    details: {
      'Product': "Men's chest + core compression tank",
      'Collection': 'CoreFit Signature',
      'Fabric': 'Swiss Compression Weave / Gold Thread',
      'Compression': 'Maximum — black-tie & milestone events',
      'Colors': 'Onyx Black (limited)',
      'Care': 'Dry clean recommended · hand wash alternative'
    },
    description: 'The pinnacle of Milan Hype. CoreFit Signature is produced in limited runs with Swiss compression weave and 24K gold-thread detailing. For men who treat confidence as non-negotiable — and expect their wardrobe to reflect it.',
    styleIt: 'Black-tie. Milestone events. The shirt underneath when everything must be perfect.',
    sizes: ['S', 'M', 'L', 'XL'],
    faqs: [
      { q: 'How limited is Signature?', a: 'Each production run is capped. Once a size sells out, restock takes 6–8 weeks.' },
      { q: 'What is the lifetime seam guarantee?', a: 'If flatlock seams fail under normal wear, we repair or replace at no charge for the life of the garment.' },
      { q: 'Is the gold thread visible?', a: 'No — it runs along the interior seam as a signature detail. Invisible when worn.' }
    ]
  }
];

function getProduct(id) {
  return PRODUCTS.find((p) => p.id === id);
}

function getCollectionProducts(slug) {
  if (slug === 'corefit' || !slug) return PRODUCTS;
  return PRODUCTS.filter((p) => p.collections.includes(slug));
}

function formatPrice(amount) {
  return '$' + amount.toFixed(2);
}

function getTierProducts() {
  return [...PRODUCTS].sort((a, b) => a.tierRank - b.tierRank);
}

// Stripe Payment Links (test mode) — used on static GitHub Pages checkout
const PAYMENT_LINKS = {
  'corefit-essential': 'https://buy.stripe.com/test_8x214f40o9yq9dw9MP3AY00',
  'corefit-pro': 'https://buy.stripe.com/test_00w00b7cAcKCcpIf793AY01',
  'corefit-elite': 'https://buy.stripe.com/test_cNieV57cA5ia9dwbUX3AY02',
  'corefit-signature': 'https://buy.stripe.com/test_bJe00baoMh0SgFYe353AY03'
};
