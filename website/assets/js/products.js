const COLLECTIONS = {
  'new-arrivals': {
    title: 'New Arrivals',
    subtitle: 'Fresh styles. Just dropped.',
    description: 'Discover the latest pieces from Milan Hype. Updated with new drops across men\'s and women\'s collections.'
  },
  women: {
    title: 'Women',
    subtitle: 'Elevated style. Effortless confidence.',
    description: 'Shop the full Milan Hype women\'s collection — from everyday essentials to statement pieces designed to move with you.'
  },
  men: {
    title: 'Men',
    subtitle: 'Clean lines. Modern energy.',
    description: 'The Milan Hype men\'s collection — contemporary pieces built for style, comfort, and confidence.'
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
    id: 'artisan-tapestry-low-top',
    title: 'Artisan Tapestry Low-Top — Psychedelic Jacquard',
    shortDescription: 'Hand-finished low-top with a psychedelic jacquard upper, distressed fringe detailing, and curated enamel pins.',
    price: 159,
    compareAt: null,
    collections: ['new-arrivals', 'best-sellers'],
    gender: 'unisex',
    badge: 'New',
    fit: 'True to size — half size up for wide feet',
    images: [
      'assets/images/products/artisan-tapestry-low-top.jpg',
      'assets/images/products/artisan-tapestry-low-top.svg'
    ],
    benefits: [
      'Psychedelic jacquard upper with raw fringe edges',
      'Premium leather toe cap and heel counter',
      'Chocolate brown eyelet stay with brass-tone hardware',
      'Hand-placed enamel pin details',
      'Classic white rubber sole with burgundy lining',
      'Limited run — no guaranteed restock'
    ],
    details: {
      'Upper': 'Woven jacquard tapestry + leather overlays',
      'Sole': 'White rubber vulcanized midsole',
      'Laces': 'Flat tan cotton',
      'Lining': 'Burgundy textile',
      'Closure': 'Lace-up',
      'Edition': 'Limited run'
    },
    description: 'The Artisan Tapestry Low-Top is Milan Hype\'s take on elevated streetwear — a classic low-top silhouette rebuilt with a vibrant woven jacquard upper, raw fringe edges, and hand-placed pin details that make every pair feel one-of-one.',
    styleIt: 'Pair with wide-leg denim and a cropped tee — or let the sneakers carry a minimal all-black fit.',
    sizes: ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '12'],
    faqs: [
      { q: 'How does this fit?', a: 'True to size on a standard foot. Size up half a size for wide feet.' },
      { q: 'Are the pins removable?', a: 'Yes, carefully — we recommend keeping them on for the full designed look.' },
      { q: 'Is every pair identical?', a: 'Jacquard placement may vary slightly — part of the artisan character.' }
    ],
    missingPhotos: ['Pair on floor + box', 'Front toe-on', 'Macro jacquard', 'Macro pins', 'Back heel', 'Top-down flat lay']
  },
  {
    id: 'tie-dye-custom-low-top',
    title: 'Tie-Dye Custom Low-Top — Watercolor',
    shortDescription: 'Custom low-top with watercolor tie-dye panels, tweed side stripe, and hand-placed peace pin details.',
    price: 149,
    compareAt: null,
    collections: ['new-arrivals', 'men'],
    gender: 'unisex',
    badge: 'New',
    fit: 'True to size',
    images: [
      'assets/images/products/tie-dye-custom-low-top.jpg',
      'assets/images/products/tie-dye-custom-low-top.svg'
    ],
    benefits: [
      'Watercolor tie-dye upper in orange, yellow, and red tones',
      'Dark chocolate brown canvas toe and heel',
      'Frayed multi-color tweed side stripe',
      'Hand-placed peace and logo pins',
      'Distressed white midsole with vintage character',
      'Cream flat laces and colorful printed footbed'
    ],
    details: {
      'Upper': 'Canvas tie-dye + tweed stripe detailing',
      'Toe / Heel': 'Dark chocolate brown canvas',
      'Sole': 'White rubber with vintage finish',
      'Detailing': 'Enamel pins, raw fringe edges',
      'Edition': 'Limited custom run'
    },
    description: 'Bold without trying too hard. The Tie-Dye Custom Low-Top blends watercolor energy with deconstructed details — tweed stripe, raw edges, and curated pins for a piece that feels gallery-made, not mass-produced.',
    styleIt: 'Works with relaxed denim, cargo pants, or shorts. Let the color do the talking.',
    sizes: ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '12'],
    faqs: [
      { q: 'How does this fit?', a: 'Runs true to size on standard feet.' },
      { q: 'Will the tie-dye pattern match the photos?', a: 'Each pair is unique — pattern placement varies by design.' }
    ],
    missingPhotos: ['Hero in-hand (add your photo as .jpg)', 'Pair on floor + box', 'Front view', 'Macro tie-dye detail', 'Back heel', 'Top-down']
  },
  {
    id: 'pink-lightning-low-top',
    title: 'Pink Lightning Low-Top — Pearl Detail',
    shortDescription: 'Hot pink and black color-block low-top with lightning bolt graphic, pearl and stud embellishments.',
    price: 169,
    compareAt: null,
    collections: ['new-arrivals', 'women'],
    gender: 'unisex',
    badge: 'Limited',
    fit: 'True to size',
    images: [
      'assets/images/products/pink-lightning-low-top.jpg',
      'assets/images/products/pink-lightning-low-top.svg'
    ],
    benefits: [
      'Fuchsia pink canvas with black toe and heel panels',
      'Black lightning bolt side graphic',
      'Pearl and silver stud embellishments',
      'Chunky white flat laces',
      'Thick white rubber midsole',
      'Statement piece — finishes any fit instantly'
    ],
    details: {
      'Upper': 'Canvas with leather-look overlays',
      'Embellishments': 'Faux pearls + metal studs',
      'Sole': 'White vulcanized rubber',
      'Laces': 'Wide flat white cotton',
      'Edition': 'Limited run'
    },
    description: 'Electric energy meets premium detailing. The Pink Lightning Low-Top commands attention with its bold color block, hand-placed pearls, and signature bolt graphic — built for nights out and every scroll-stopping moment.',
    styleIt: 'Pair with black denim, a mini skirt, or monochrome athleisure. Keep accessories minimal — the shoe is the outfit.',
    sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10'],
    faqs: [
      { q: 'Are the pearls durable?', a: 'Hand-applied for the designed look. Handle with care during cleaning.' },
      { q: 'How does this fit?', a: 'True to size. Size up half for wide feet.' }
    ],
    missingPhotos: ['Hero in-hand (add your photo as .jpg)', 'Pair on floor', 'Front view', 'Macro pearl detail', 'Back heel', 'On-foot lifestyle']
  },
  {
    id: 'travis-scott-jordan-1-canary',
    title: 'Travis Scott x Air Jordan 1 Low — Canary',
    shortDescription: 'Canary yellow, white, and royal blue colorway with signature reversed swoosh and gum outsole.',
    price: 299,
    compareAt: null,
    collections: ['new-arrivals', 'best-sellers', 'men'],
    gender: 'unisex',
    badge: 'Best Seller',
    fit: 'True to size — standard Jordan 1 Low fit',
    images: [
      'assets/images/products/travis-scott-jordan-1-canary.jpg',
      'assets/images/products/travis-scott-jordan-1-canary-2.jpg',
      'assets/images/products/travis-scott-jordan-1-canary.svg'
    ],
    benefits: [
      'Iconic reversed royal blue swoosh',
      'Canary yellow leather overlays',
      'White tumbled leather base',
      'Gum rubber outsole',
      'Cactus Jack tongue branding',
      'Includes extra blue laces'
    ],
    details: {
      'Model': 'Air Jordan 1 Low OG x Travis Scott',
      'Colorway': 'Canary / White / Racer Blue',
      'Upper': 'Tumbled leather',
      'Outsole': 'Gum rubber',
      'Included': 'Extra laces, original box'
    },
    description: 'One of the most sought-after collabs in the game. The Travis Scott x Air Jordan 1 Low in Canary delivers bold color blocking, premium materials, and the reversed swoosh that changed sneaker culture.',
    styleIt: 'Let these carry a clean fit — neutral tee, wide denim, or tonal yellow accents.',
    sizes: ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '12'],
    faqs: [
      { q: 'How does Jordan 1 Low fit?', a: 'Generally true to size. Half size down if you prefer a snug fit.' },
      { q: 'Are these authentic?', a: 'Every pair is verified and ships in original packaging.' }
    ],
    missingPhotos: ['Flat lay top-down (add as .jpg)', 'Medial side view', 'Heel branding close-up', 'Sole tread', 'On-foot lifestyle']
  },
  {
    id: 'nike-sb-jordan-4-pine-green',
    title: 'Nike SB x Air Jordan 4 — Pine Green',
    shortDescription: 'White leather and grey suede Jordan 4 with pine green accents and Nike SB heel branding.',
    price: 279,
    compareAt: null,
    collections: ['best-sellers', 'men'],
    gender: 'unisex',
    badge: 'Best Seller',
    fit: 'True to size — standard Jordan 4 fit',
    images: [
      'assets/images/products/nike-sb-jordan-4-pine-green.jpg',
      'assets/images/products/nike-sb-jordan-4-pine-green-2.jpg',
      'assets/images/products/nike-sb-jordan-4-pine-green.svg'
    ],
    benefits: [
      'Premium white leather upper',
      'Light grey suede toe wrap',
      'Pine green heel tab with Nike SB branding',
      'Visible Air unit in heel',
      'Gum rubber outsole sections',
      'Classic Jordan 4 silhouette — skate-ready collab'
    ],
    details: {
      'Model': 'Nike SB x Air Jordan 4',
      'Colorway': 'Sail / Pine Green / Neutral Grey',
      'Upper': 'Leather + suede + mesh',
      'Outsole': 'White with gum sections',
      'Included': 'Original box'
    },
    description: 'Performance meets heritage. The Nike SB x Air Jordan 4 in Pine Green blends skate durability with iconic Jordan design — clean white leather, pine green hits, and that unmistakable AJ4 shape.',
    styleIt: 'Pairs with everything from cargos to tailored trousers. A true wardrobe anchor.',
    sizes: ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '12', '13'],
    faqs: [
      { q: 'How does Jordan 4 fit?', a: 'True to size for most. Half size up if you have wide feet.' },
      { q: 'What makes this the SB version?', a: 'Nike SB branding on heel, skate-inspired details, and collab packaging.' }
    ],
    missingPhotos: ['Heel tab close-up (add as .jpg)', 'Medial side', 'Top-down', 'Sole tread', 'On-foot lifestyle']
  },
  {
    id: 'paint-splatter-low-top',
    title: 'Paint Splatter Low-Top — Artisan Black',
    shortDescription: 'Smooth black leather low-top with hand-painted multicolor splatter across the toe and forefoot.',
    price: 189,
    compareAt: 219,
    collections: ['new-arrivals', 'sale'],
    gender: 'unisex',
    badge: 'Sale',
    fit: 'True to size',
    images: [
      'assets/images/products/paint-splatter-low-top.jpg',
      'assets/images/products/paint-splatter-low-top.svg'
    ],
    benefits: [
      'Premium black leather base',
      'Hand-painted multicolor splatter detail',
      'Cream flat laces',
      'Gum rubber outsole',
      'Gallery-inspired aesthetic — each pair unique',
      'Numbered tongue tag detail'
    ],
    details: {
      'Upper': 'Black leather with hand-applied paint',
      'Sole': 'Gum rubber',
      'Laces': 'Cream flat cotton',
      'Style': 'Minimal low-top trainer',
      'Edition': 'Limited artisan run'
    },
    description: 'Wearable art. The Paint Splatter Low-Top takes a clean black leather base and breaks it with controlled chaos — red, blue, yellow, and green splatter that makes every pair a one-of-one statement.',
    styleIt: 'All black everything and let the toe be the accent. Or go full color-block and match one splatter tone.',
    sizes: ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '12'],
    faqs: [
      { q: 'Is the splatter identical on every pair?', a: 'No — hand-applied paint means each pair is unique.' },
      { q: 'How do I care for painted leather?', a: 'Spot clean only. Avoid harsh chemicals on painted areas.' }
    ],
    missingPhotos: ['Hero in-hand (add your photo as .jpg)', 'Pair on floor', 'Macro splatter detail', 'Top-down', 'Back heel', 'On-foot lifestyle']
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
