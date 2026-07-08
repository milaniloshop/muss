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

const TIER_IMG = 'assets/images/products/tiers/';

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
      { id: 'black', name: 'Black', hex: '#1a1a1a', image: `${TIER_IMG}tier-essential-black-model.jpg`, imageAlt: `${TIER_IMG}tier-essential-white-model.jpg` },
      { id: 'white', name: 'White', hex: '#f4f4f0', image: `${TIER_IMG}tier-essential-white-model.jpg`, imageAlt: `${TIER_IMG}tier-essential-black-model.jpg` }
    ],
    heroImage: `${TIER_IMG}tier-essential-black-model.jpg`,
    lifestyleImages: [
      'assets/images/social/review-before-after-side.jpg',
      'assets/images/social/review-mirror-front.jpg',
      'assets/images/social/review-mirror-side.jpg'
    ],
    images: [
      `${TIER_IMG}tier-essential-black-model.jpg`,
      `${TIER_IMG}tier-essential-white-model.jpg`,
      'assets/images/products/corefit-essential.svg'
    ],
    imageSlots: [
      { filename: 'corefit-essential.jpg', label: 'On body — black' },
      { filename: 'corefit-essential-2.jpg', label: 'On body — white' }
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
      { q: 'Does it help with chest insecurity?', a: 'Yes — that is exactly what it is built for. The chest zone compresses for a flatter look under shirts. The core zone streamlines your midsection.' },
      { q: 'How does it compare to Pro?', a: 'Essential uses our standard nylon-spandex blend. Pro upgrades to Italian microfiber with silver-ion odor control and a reinforced dual-layer chest compression panel.' }
    ],
    highlights: [
      { icon: '◆', title: 'Daily Wear', desc: 'Moderate compression for all-day comfort' },
      { icon: '◆', title: 'Dual Zones', desc: 'Separate chest + core panels' },
      { icon: '◆', title: 'Two Colors', desc: 'Black under dark · white under light' },
      { icon: '◆', title: '30-Day Trial', desc: 'Try at home risk-free' }
    ],
    pros: [
      'Best entry price at $49 — lowest risk to try compression',
      'Reliable nylon-spandex holds shape through daily wear',
      'Invisible tank cut under polos, tees, and dress shirts',
      'Discreet matte-black packaging — no embarrassing labels'
    ],
    cons: [
      'Moderate hold — men wanting maximum compression should choose Pro or above',
      'No odor-control treatment (upgrade to Pro for silver-ion)',
      'Standard fabric vs premium microfiber on higher tiers'
    ],
    expertVerdict: 'Essential is the smart first purchase for men who have never worn compression. It proves the concept without overspending — and most men who love it upgrade to Pro within 60 days.',
    expertBy: 'Milan Hype Product Team · Last reviewed July 2026'
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
    fit: 'Firm compression — true to size for maximum hold',
    fabric: 'Italian Microfiber · Silver-Ion Blend',
    colorOptions: [
      { id: 'black', name: 'Black', hex: '#1a1a1a', image: `${TIER_IMG}tier-pro-black-model.jpg`, imageAlt: `${TIER_IMG}tier-pro-white-model.jpg` },
      { id: 'white', name: 'White', hex: '#f4f4f0', image: `${TIER_IMG}tier-pro-white-model.jpg`, imageAlt: `${TIER_IMG}tier-pro-black-model.jpg` }
    ],
    heroImage: `${TIER_IMG}tier-pro-black-model.jpg`,
    lifestyleImages: [
      'assets/images/social/review-before-after-side.jpg',
      'assets/images/social/review-mirror-front.jpg',
      'assets/images/social/review-mirror-side.jpg'
    ],
    images: [
      `${TIER_IMG}tier-pro-black-model.jpg`,
      `${TIER_IMG}tier-pro-white-model.jpg`,
      'assets/images/products/corefit-pro.svg'
    ],
    imageSlots: [
      { filename: 'corefit-pro.jpg', label: 'On body — black' },
      { filename: 'corefit-pro-2.jpg', label: 'On body — white' }
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
      'Colors': 'Black · White',
      'Care': 'Machine wash cold · lay flat to dry'
    },
    description: "Our #1 men's chest + core compression tank. CoreFit Pro combines a reinforced dual-layer chest panel with a firm core compression zone — built for men who wear a dress shirt five days a week and refuse to look soft in a tee.",
    styleIt: 'The executive uniform underneath. Pair with tailored shirts and premium knits.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    faqs: [
      { q: 'Why is Pro the best seller?', a: 'It is the sweet spot — firm chest + core compression, premium Italian microfiber, and all-day comfort. Most men buy this tier first.' },
      { q: 'Will it flatten my chest under a t-shirt?', a: 'Yes. The reinforced chest panel is specifically engineered to reduce visible chest contour under fitted shirts.' },
      { q: 'Is the silver-ion treatment permanent?', a: 'Yes — woven into the fiber, not a surface coating. Effective for the life of the garment.' }
    ],
    highlights: [
      { icon: '◆', title: 'Best Seller', desc: 'Most-chosen tier nationwide' },
      { icon: '◆', title: 'Italian Fabric', desc: 'Microfiber with silver-ion odor control' },
      { icon: '◆', title: 'Firm Hold', desc: 'Reinforced dual-layer chest panel' },
      { icon: '◆', title: '12+ Hours', desc: 'Moisture-wicking for long workdays' }
    ],
    pros: [
      'Sweet spot of compression, comfort, and price at $89',
      'Reinforced chest panel visibly flattens contour under fitted shirts',
      'Italian microfiber feels premium — not like cheap Amazon tubes',
      'Silver-ion odor control for long wear days and travel',
      'Seamless sides — no visible lines under dress shirts'
    ],
    cons: [
      'Firm compression — size up if you prefer a lighter hold',
      'Not the cooling yarn of Elite or maximum hold of Signature',
      'Higher price than Essential (worth it for daily wearers)'
    ],
    expertVerdict: 'If you only buy one CoreFit tank, make it Pro. It is the tier we recommend to 80% of first-time buyers — firm enough to matter, comfortable enough to wear every morning.',
    expertBy: 'Milan Hype Product Team · Last reviewed July 2026'
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
      { id: 'black', name: 'Black', hex: '#1a1a1a', image: `${TIER_IMG}tier-elite-black-model.jpg`, imageAlt: `${TIER_IMG}tier-elite-white-model.jpg` },
      { id: 'white', name: 'White', hex: '#f4f4f0', image: `${TIER_IMG}tier-elite-white-model.jpg`, imageAlt: `${TIER_IMG}tier-elite-black-model.jpg` }
    ],
    heroImage: `${TIER_IMG}tier-elite-black-model.jpg`,
    lifestyleImages: [
      'assets/images/social/review-before-after-side.jpg',
      'assets/images/social/review-mirror-side.jpg'
    ],
    images: [
      `${TIER_IMG}tier-elite-black-model.jpg`,
      `${TIER_IMG}tier-elite-white-model.jpg`,
      'assets/images/products/corefit-elite.svg'
    ],
    imageSlots: [
      { filename: 'corefit-elite.jpg', label: 'On body — black' },
      { filename: 'corefit-elite-2.jpg', label: 'On body — white' }
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
      'Colors': 'Black · White',
      'Care': 'Hand wash or delicate cycle · hang dry'
    },
    description: 'For men who notice the difference. CoreFit Elite uses Japanese cooling yarn and hand-finished construction — the tier chosen by clients who refuse to compromise on how they look in a fitted shirt.',
    styleIt: 'Weddings, galas, date nights, and any moment the fit must be flawless.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    faqs: [
      { q: 'What makes Elite worth $149?', a: 'Japanese cooling yarn, hand-finished seams, and precision compression mapping — materials and construction you can feel immediately.' },
      { q: 'Is Elite suitable for hot weather?', a: 'Yes. The cooling yarn is specifically engineered for thermoregulation — popular with clients in Florida, Texas, and California.' }
    ],
    highlights: [
      { icon: '◆', title: 'Cooling Yarn', desc: 'Japanese thermoregulating fiber' },
      { icon: '◆', title: 'Precision Map', desc: '360° chest + core zones' },
      { icon: '◆', title: 'Flatlock Seams', desc: 'Hand-finished, zero lines' },
      { icon: '◆', title: 'Gift Sleeve', desc: 'Embossed presentation packaging' }
    ],
    pros: [
      'Japanese cooling yarn — ideal for warm climates and travel',
      'Precision-mapped compression zones vs one-size-fits-all squeeze',
      'Hand-finished flatlock seams invisible under the thinnest dress shirts',
      'Extended length stays tucked through full workdays',
      'Premium gift sleeve packaging — event-ready presentation'
    ],
    cons: [
      'Premium price at $149 — overkill for casual-only wearers',
      'Hand-wash or delicate cycle recommended',
      'Precision fit — consult size guide carefully'
    ],
    expertVerdict: 'Elite is for men who notice fabric quality immediately — weddings, client dinners, and 90° summers. The cooling yarn alone justifies the upgrade if you live in the South or Southwest.',
    expertBy: 'Milan Hype Product Team · Last reviewed July 2026'
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
      { id: 'black', name: 'Black', hex: '#0a0a0a', image: `${TIER_IMG}tier-signature-black-model.jpg`, imageAlt: `${TIER_IMG}tier-signature-white-model.jpg` },
      { id: 'white', name: 'White', hex: '#f4f4f0', image: `${TIER_IMG}tier-signature-white-model.jpg`, imageAlt: `${TIER_IMG}tier-signature-black-model.jpg` }
    ],
    heroImage: `${TIER_IMG}tier-signature-black-model.jpg`,
    lifestyleImages: [
      'assets/images/social/review-mirror-front.jpg',
      'assets/images/social/review-mirror-side.jpg'
    ],
    images: [
      `${TIER_IMG}tier-signature-black-model.jpg`,
      `${TIER_IMG}tier-signature-white-model.jpg`,
      'assets/images/products/corefit-signature.svg'
    ],
    imageSlots: [
      { filename: 'corefit-signature.jpg', label: 'On body — black' },
      { filename: 'corefit-signature-2.jpg', label: 'On body — white' }
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
      'Colors': 'Black · White',
      'Care': 'Dry clean recommended · hand wash alternative'
    },
    description: 'The pinnacle of Milan Hype. CoreFit Signature is produced in limited runs with Swiss compression weave and 24K gold-thread detailing. For men who treat confidence as non-negotiable.',
    styleIt: 'Black-tie. Milestone events. The shirt underneath when everything must be perfect.',
    sizes: ['S', 'M', 'L', 'XL'],
    faqs: [
      { q: 'How limited is Signature?', a: 'Each production run is capped. Once a size sells out, restock takes 6–8 weeks.' },
      { q: 'What is the lifetime seam guarantee?', a: 'If flatlock seams fail under normal wear, we repair or replace at no charge for the life of the garment.' },
      { q: 'Is the gold thread visible?', a: 'No — it runs along the interior seam as a signature detail. Invisible when worn.' }
    ],
    highlights: [
      { icon: '◆', title: 'Swiss Weave', desc: 'Maximum hold, zero restriction' },
      { icon: '◆', title: 'Limited Run', desc: 'Numbered authenticity card' },
      { icon: '◆', title: 'Luxury Box', desc: 'Magnetic-close presentation' },
      { icon: '◆', title: 'Lifetime Seams', desc: 'Repair guarantee included' }
    ],
    pros: [
      'Maximum compression hold for milestone events and black-tie',
      'Swiss-engineered weave — the firmest hold in the CoreFit line',
      'Luxury magnetic-close box with numbered authenticity card',
      'Lifetime seam repair guarantee — buy once, wear for years',
      'White-glove sizing consultation via email included'
    ],
    cons: [
      'Highest price at $229 — investment-tier purchase',
      'Limited production — sizes can sell out between runs',
      'Maximum compression may feel too firm for first-time compression wearers'
    ],
    expertVerdict: 'Signature is not for everyone — and that is the point. For black-tie, your wedding, or any moment when the fit must be flawless, this is the tank you reach for once and keep forever.',
    expertBy: 'Milan Hype Product Team · Last reviewed July 2026'
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

const PAYMENT_LINKS = {
  'corefit-essential': 'https://buy.stripe.com/test_8x214f40o9yq9dw9MP3AY00',
  'corefit-pro': 'https://buy.stripe.com/test_00w00b7cAcKCcpIf793AY01',
  'corefit-elite': 'https://buy.stripe.com/test_cNieV57cA5ia9dwbUX3AY02',
  'corefit-signature': 'https://buy.stripe.com/test_bJe00baoMh0SgFYe353AY03'
};
