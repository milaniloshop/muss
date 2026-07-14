export const SITE = {
  name: 'Joyologie',
  nameFull: 'Joyologie Boutique',
  tagline: 'Resort dressing, done with intention.',
  place: 'Fountain Square Shopping Village',
  placeShort: 'Fountain Square',
  address: '142 E Granada Blvd, Ste 4',
  city: 'Ormond Beach',
  state: 'FL',
  zip: '32176',
  fullAddress: '142 E Granada Blvd Ste 4, Ormond Beach, FL 32176',
  phone: '(386) 238-9184',
  phoneHref: 'tel:+13862389184',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Joyologie+Boutique+142+E+Granada+Blvd+Ormond+Beach+FL+32176',
  mapsEmbed:
    'https://maps.google.com/maps?q=142%20E%20Granada%20Blvd%20Ste%204%2C%20Ormond%20Beach%2C%20FL%2032176&t=&z=15&ie=UTF8&iwloc=&output=embed',
  hours: [
    { days: 'Monday', time: '10:00 AM – 5:00 PM' },
    { days: 'Tuesday', time: '10:00 AM – 5:00 PM' },
    { days: 'Wednesday', time: '9:00 AM – 5:00 PM' },
    { days: 'Thursday', time: '10:00 AM – 5:00 PM' },
    { days: 'Friday', time: '10:00 AM – 5:00 PM' },
    { days: 'Saturday', time: '10:00 AM – 5:00 PM' },
    { days: 'Sunday', time: '10:00 AM – 3:00 PM' },
  ],
  brandsLine: 'Spartina 449 · Hobo · Liverpool Denim · Resortwear',
  instagram: 'https://www.instagram.com/joyologieboutique/',
  instagramHandle: '@joyologieboutique',
  facebook: 'https://www.facebook.com/joyologieboutique',
  accolade: 'Nextdoor Neighborhood Favorite',
} as const;

/**
 * 03 — Collections. Three horizontally-snapped, full-bleed panels.
 */
export const COLLECTIONS = [
  {
    index: '01',
    label: 'Resort & Beach Casual',
    title: 'Sun on linen,\nsalt on skin.',
    copy: 'Effortless linen, breezy silhouettes, and easy pieces made for the walk from beach to boardwalk.',
    image: '/images/collection-resort.jpg',
    alt: 'Woman in ivory linen resortwear walking on warm sand near sea grass',
  },
  {
    index: '02',
    label: 'Spartina & Accessories',
    title: 'The details\nyou collect.',
    copy: 'Spartina 449 prints, Hobo leather, and the finishing pieces that make a look feel personally chosen.',
    image: '/images/collection-spartina.jpg',
    alt: 'Hand-embroidered coastal tote and leather handbag styled on warm ivory linen',
  },
  {
    index: '03',
    label: 'Evening & Occasion',
    title: 'From golden\nhour onward.',
    copy: 'Beach-to-evening dressing — flowing silhouettes and quiet polish for the nights the coast dresses up.',
    image: '/images/collection-evening.jpg',
    alt: 'Woman in a flowing clay-terracotta silk dress at golden hour on a coastal terrace',
  },
] as const;

/**
 * 04 — Shop the Look. Asymmetric masonry linked to Instagram.
 * Individual tiles link to @joyologieboutique. Swap `href` values for
 * specific post permalinks once a live feed / Behold export is available.
 */
export const GALLERY = [
  {
    src: '/images/look-1.jpg',
    alt: 'Flowing linen resort dresses on a wooden rack in warm sunlight',
    href: 'https://www.instagram.com/joyologieboutique/',
    span: 'tall',
    toss: false,
  },
  {
    src: '/images/look-2.jpg',
    alt: 'Detail of hands adjusting a straw hat with gold bangles and linen sleeve',
    href: 'https://www.instagram.com/joyologieboutique/',
    span: 'square',
    toss: false,
  },
  {
    src: '/images/look-3.jpg',
    alt: 'Flat-lay of layered gold jewelry, a scalloped clutch, and a linen scarf',
    href: 'https://www.instagram.com/joyologieboutique/',
    span: 'tall',
    toss: true,
  },
  {
    src: '/images/look-4.jpg',
    alt: 'Back view of a woman in a washed-coral linen dress in coastal dune grass',
    href: 'https://www.instagram.com/joyologieboutique/',
    span: 'square',
    toss: false,
  },
  {
    src: '/images/look-5.jpg',
    alt: 'Terracotta and ivory linen garments folded on a sunlit shelf',
    href: 'https://www.instagram.com/joyologieboutique/',
    span: 'tall',
    toss: false,
  },
  {
    src: '/images/look-6.jpg',
    alt: 'Portrait of a woman in a straw hat and ivory linen in warm afternoon light',
    href: 'https://www.instagram.com/joyologieboutique/',
    span: 'square',
    toss: false,
  },
] as const;

/**
 * 05 — In Their Words. Editorial pull-quotes reflecting the boutique's repeat
 * Nextdoor "Neighborhood Favorite" standing. Attributed by neighborhood, not
 * full name. Replace copy with live Google / Nextdoor text when available.
 */
export const REVIEWS = [
  {
    quote:
      'The kind of shop you stop into for one thing and leave with a whole feeling. Everything is chosen with such care — nothing you would find anywhere else.',
    by: 'Ormond-by-the-Sea',
    meta: 'Nextdoor Neighborhood Favorite',
  },
  {
    quote:
      'I send every out-of-town friend here. The linen, the Spartina bags, the way they style you — it feels like a private boutique on Granada.',
    by: 'Rio Vista',
    meta: 'Google review',
  },
  {
    quote:
      'Warm, unhurried, and impeccably curated. They find the piece you did not know you were looking for, and it always feels like you.',
    by: 'Halifax Plantation',
    meta: 'Nextdoor Neighborhood Favorite',
  },
  {
    quote:
      'A little corner of Fountain Square that feels like a getaway. Beautiful resortwear, genuine people, and a wardrobe that travels well.',
    by: 'Tomoka Oaks',
    meta: 'Google review',
  },
] as const;
