const COLLECTIONS = {
  'new-arrivals': {
    title: 'New Arrivals',
    subtitle: 'Fresh styles. Just dropped.',
    description: 'Discover the latest pieces from Milan Hype. Premium streetwear drops updated weekly.'
  },
  women: {
    title: 'Women',
    subtitle: 'Elevated style. Effortless confidence.',
    description: 'Shop Milan Hype women\'s streetwear — premium fits designed to move with you.'
  },
  men: {
    title: 'Men',
    subtitle: 'Clean lines. Modern energy.',
    description: 'The Milan Hype men\'s collection — contemporary streetwear built for style and confidence.'
  },
  'best-sellers': {
    title: 'Best Sellers',
    subtitle: 'The pieces our customers love most.',
    description: 'Our most-loved styles — tried, tested, and rated by the Milan Hype community.'
  },
  sale: {
    title: 'Sale',
    subtitle: 'Premium style. Limited-time pricing.',
    description: 'Shop select Milan Hype styles at reduced prices. Same quality. Same easy returns.'
  }
};

const PRODUCTS = [
  {
    id: 'vale-forever-skittle-sweats',
    title: 'Vale Forever Skittle Sweats',
    shortDescription: 'Wide-leg acid-wash sweats with the signature Valley script logo and multicolor skittle stud detailing.',
    price: 100,
    compareAt: null,
    collections: ['new-arrivals', 'best-sellers', 'men', 'women'],
    gender: 'unisex',
    type: 'bottoms',
    badge: 'New',
    fit: 'Relaxed wide-leg fit — true to size',
    images: [
      'assets/images/products/vale-forever-skittle-sweats.jpg',
      'assets/images/products/vale-forever-skittle-sweats.svg'
    ],
    imageSlots: [
      { filename: 'vale-forever-skittle-sweats.jpg', label: 'Front view' },
      { filename: 'vale-forever-skittle-sweats-2.jpg', label: 'Back view' }
    ],
    benefits: [
      'Faded charcoal acid-wash finish with vintage character',
      'Oversized Valley script logo appliqué across upper thigh',
      'Multicolor skittle studs on logo, side seams, and hems',
      'Elastic waistband with cream flat drawstring',
      'Raw frayed seam detail across mid-thigh',
      'Side-seam pockets · wide-leg silhouette'
    ],
    details: {
      'Style': 'Wide-leg sweatpants',
      'Fit': 'Relaxed / wide-leg',
      'Fabric': 'Heavyweight cotton fleece',
      'Detailing': 'Skittle stud embellishments',
      'Waist': 'Elastic with drawstring',
      'Pockets': 'Side-seam'
    },
    description: 'Statement sweats that do the talking. The Vale Forever Skittle Sweats combine a washed charcoal base with bold Valley branding and hand-placed skittle studs — built for the fit pic and the everyday.',
    styleIt: 'Pair with a cropped tee or oversized hoodie. Let the studs catch the light — keep the top minimal.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    faqs: [
      { q: 'How do these fit?', a: 'Relaxed wide-leg fit, true to size. Size up for an extra oversized look.' },
      { q: 'Are the studs durable?', a: 'Studs are securely applied. Handle with care when washing — turn inside out, cold wash, hang dry.' },
      { q: 'How do I care for these?', a: 'Machine wash cold inside out. Do not tumble dry. Do not iron directly on studs.' }
    ]
  },
  {
    id: 'project-gr-layered-sweatpants',
    title: 'Project G/R 3 Layered Sweatpants',
    shortDescription: 'Heather grey wide-leg sweatpants with triple-layered waistband, varsity graphics, and deconstructed detailing.',
    price: 175,
    compareAt: null,
    collections: ['new-arrivals', 'best-sellers', 'men'],
    gender: 'unisex',
    type: 'bottoms',
    badge: 'New',
    fit: 'Wide-leg relaxed fit — true to size',
    images: [
      'assets/images/products/project-gr-layered-sweatpants.jpg',
      'assets/images/products/project-gr-layered-sweatpants.svg'
    ],
    imageSlots: [
      { filename: 'project-gr-layered-sweatpants.jpg', label: 'Front view' },
      { filename: 'project-gr-layered-sweatpants-2.jpg', label: 'Back view' },
      { filename: 'project-gr-layered-sweatpants-3.jpg', label: 'Layered waistband detail' }
    ],
    benefits: [
      'Triple-layered waistband — plaid boxer, athletic short, and fleece layers',
      'Project G/R woven labels on plaid layer',
      'Varsity "3" and "USA" peace-flag graphics on thighs',
      'Heather grey heavyweight fleece',
      'Wide-leg straight fit with open hem',
      'Rear patch pocket · side pockets'
    ],
    details: {
      'Style': 'Layered wide-leg sweatpants',
      'Brand': 'Project G/R',
      'Fabric': 'Heather grey cotton fleece',
      'Feature': '3-layer deconstructed waistband',
      'Graphics': 'Varsity appliqué + USA peace flag',
      'Fit': 'Relaxed wide-leg'
    },
    description: 'Deconstruction done right. The Project G/R 3 Layered Sweatpants stack three waistbands into one statement piece — plaid boxer, athletic stripe, and fleece — finished with bold varsity graphics. A Milan Hype essential for serious streetwear collectors.',
    styleIt: 'Let the pants carry the fit. Simple white tee or cropped hoodie. High-top sneakers.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    faqs: [
      { q: 'How does the layered waistband fit?', a: 'Sits at natural waist. The layered look is built-in — no need to layer separately.' },
      { q: 'How do these fit?', a: 'True to size with a wide-leg relaxed silhouette.' },
      { q: 'How do I wash these?', a: 'Cold wash inside out, gentle cycle. Hang dry to preserve graphics and layers.' }
    ]
  },
  {
    id: 'enfants-riches-deprimes-trashed-hoodie',
    title: 'Enfants Riches Déprimés Trashed Hoodie',
    shortDescription: 'Distressed washed burgundy hoodie with ERD serif logo, raw frayed edges, and oversized drop-shoulder fit.',
    price: 289,
    compareAt: null,
    collections: ['new-arrivals', 'best-sellers', 'men', 'women'],
    gender: 'unisex',
    type: 'tops',
    badge: 'Limited',
    fit: 'Oversized boxy fit — size down for regular fit',
    images: [
      'assets/images/products/enfants-riches-deprimes-trashed-hoodie.jpg',
      'assets/images/products/enfants-riches-deprimes-trashed-hoodie.svg'
    ],
    imageSlots: [
      { filename: 'enfants-riches-deprimes-trashed-hoodie.jpg', label: 'Front view' },
      { filename: 'enfants-riches-deprimes-trashed-hoodie-2.jpg', label: 'Front angle' },
      { filename: 'enfants-riches-deprimes-trashed-hoodie-3.jpg', label: 'Back view' }
    ],
    benefits: [
      'Vintage-washed burgundy maroon fleece',
      'Enfants Riches Déprimés serif logo across chest',
      'Heavy intentional distressing — hood, pocket, hem, and seams',
      'Oversized drop-shoulder boxy silhouette',
      'Kangaroo pocket with raw frayed edges',
      'Ribbed cuffs and hem with destroyed finish'
    ],
    details: {
      'Style': 'Distressed pullover hoodie',
      'Brand': 'Enfants Riches Déprimés',
      'Fabric': 'Heavyweight washed cotton fleece',
      'Color': 'Washed burgundy / maroon',
      'Fit': 'Oversized boxy',
      'Detailing': 'Trashed raw-edge distressing throughout'
    },
    description: 'Anti-luxury luxury. The Enfants Riches Déprimés Trashed Hoodie delivers that coveted destroyed aesthetic — washed burgundy fleece, raw frayed edges, and the iconic ERD logo. Oversized, intentional, and impossible to ignore.',
    styleIt: 'Wide-leg sweats or distressed denim. Boots or beat-up sneakers. Less is more.',
    sizes: ['S', 'M', 'L', 'XL'],
    faqs: [
      { q: 'How does this fit?', a: 'Oversized boxy fit with drop shoulders. Size down if you want a standard fit.' },
      { q: 'Is the distressing intentional?', a: 'Yes — every frayed edge and raw seam is part of the trashed design.' },
      { q: 'How do I care for this?', a: 'Cold wash inside out, gentle cycle. Hang dry. Do not bleach.' }
    ]
  }
];

function getProduct(id) {
  return PRODUCTS.find((p) => p.id === id);
}

function getCollectionProducts(slug) {
  if (slug === 'sale') {
    return PRODUCTS.filter((p) => p.compareAt && p.compareAt > p.price);
  }
  if (slug === 'women') {
    return PRODUCTS.filter((p) => p.collections.includes('women') || p.gender === 'unisex');
  }
  if (slug === 'men') {
    return PRODUCTS.filter((p) => p.collections.includes('men') || p.gender === 'unisex');
  }
  return PRODUCTS.filter((p) => p.collections.includes(slug));
}

function formatPrice(amount) {
  return '$' + amount.toFixed(2);
}
