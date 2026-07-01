const BRAND = {
  name: 'Milan Hype',
  productLine: 'CoreFit',
  tagline: 'The Art of Invisible Confidence',
  shippingFreeOver: 75
};

const COLLECTIONS = {
  corefit: {
    title: 'The CoreFit Collection',
    subtitle: 'Four tiers. One standard of excellence.',
    description: 'Engineered compression undershirts for men who demand a sharper silhouette — from everyday essentials to our limited Signature edition.'
  }
};

const PRODUCTS = [
  {
    id: 'corefit-essential',
    tier: 'Essential',
    title: 'CoreFit Essential',
    shortDescription: 'Daily chest and core compression. Clean lines, invisible under every shirt.',
    price: 49,
    compareAt: 68,
    collections: ['corefit'],
    badge: null,
    tierRank: 1,
    fit: 'Compression fit — size up if between sizes',
    fabric: '82% Nylon · 18% Spandex',
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
      'Collection': 'CoreFit Essential',
      'Fabric': '82% Nylon / 18% Spandex',
      'Compression': 'Moderate — daily wear',
      'Colors': 'Black · White',
      'Care': 'Machine wash cold · hang dry'
    },
    description: 'The entry to Milan Hype CoreFit. Engineered for men who want a sharper look under everyday shirts — office, errands, nights out. No gimmicks. Just clean, confident compression.',
    styleIt: 'Your daily foundation layer. Black under dark shirts. White under light fabrics.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    faqs: [
      { q: 'Who is Essential for?', a: 'Men who want reliable daily compression at an accessible price point — first-time buyers and everyday wear.' },
      { q: 'How does it compare to Pro?', a: 'Essential uses our standard nylon-spandex blend. Pro upgrades to Italian microfiber with silver-ion odor control and reinforced chest mapping.' }
    ]
  },
  {
    id: 'corefit-pro',
    tier: 'Pro',
    title: 'CoreFit Pro',
    shortDescription: 'Italian microfiber with silver-ion technology. Reinforced chest panel. Our best-selling tier.',
    price: 89,
    compareAt: 118,
    collections: ['corefit'],
    badge: 'Best Seller',
    tierRank: 2,
    fit: 'Athletic compression — true to size for firm hold',
    fabric: 'Italian Microfiber · Silver-Ion Blend',
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
      'Collection': 'CoreFit Pro',
      'Fabric': 'Italian Microfiber / Silver-Ion',
      'Compression': 'Firm — professional & events',
      'Colors': 'Black · Charcoal',
      'Care': 'Machine wash cold · lay flat to dry'
    },
    description: 'Where most men stop browsing. CoreFit Pro is our most-requested tier — Italian microfiber, reinforced chest compression, and silver-ion odor control for men who wear it from boardroom to dinner.',
    styleIt: 'The executive uniform underneath. Pair with tailored shirts and premium knits.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    faqs: [
      { q: 'Why is Pro our best seller?', a: 'The balance of premium materials and everyday durability. Firm compression without sacrificing comfort.' },
      { q: 'Is the silver-ion treatment permanent?', a: 'Yes — woven into the fiber, not a surface coating. Effective for the life of the garment.' }
    ]
  },
  {
    id: 'corefit-elite',
    tier: 'Elite',
    title: 'CoreFit Elite',
    shortDescription: 'Japanese cooling yarn. 360° muscle-mapping compression. Hand-finished seams.',
    price: 149,
    compareAt: 198,
    collections: ['corefit'],
    badge: 'Premium',
    tierRank: 3,
    fit: 'Precision compression — consult size guide',
    fabric: 'Japanese Cooling Yarn · 4-Way Stretch',
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
      '360° muscle-mapping compression zones',
      'Hand-finished flatlock seams — zero visible lines',
      'Extended length stays tucked all day',
      'Anti-pill, anti-fade premium construction',
      'Delivered in embossed Milan Hype gift sleeve'
    ],
    details: {
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
    title: 'CoreFit Signature',
    shortDescription: 'Swiss compression weave. 24K gold-thread accent. Limited production runs. The pinnacle.',
    price: 229,
    compareAt: 295,
    collections: ['corefit'],
    badge: 'Limited',
    tierRank: 4,
    fit: 'Bespoke-grade compression — white-glove sizing support',
    fabric: 'Swiss Compression Weave · 24K Gold Thread',
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
