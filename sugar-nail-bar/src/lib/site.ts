export const SITE = {
  name: 'Sugar Nail Bar',
  tagline: 'Nails. Mimosas. Sugar Scrubs.',
  city: 'Ormond Beach',
  state: 'FL',
  zip: '32174',
  address: '409 US-1',
  fullAddress: '409 US-1, Ormond Beach, FL 32174',
  phone: '(321) 948-4708',
  phoneHref: 'tel:+13219484708',
  smsHref: 'sms:+13219484708',
  // Native, self-contained booking flow lives on-page (#booking).
  // No external booking tool or redirect anywhere by design.
  bookingAnchor: '#booking',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Sugar+Nail+Bar+409+US-1+Ormond+Beach+FL+32174',
  mapsEmbed:
    'https://maps.google.com/maps?q=409%20US-1%2C%20Ormond%20Beach%2C%20FL%2032174&t=&z=15&ie=UTF8&iwloc=&output=embed',
  hoursSummary: 'Open Daily 9–8 · Closed Wed',
  rating: '5.0',
  instagram: 'https://www.instagram.com/sugar_nailbar/',
  instagramHandle: '@sugar_nailbar',
  facebook: 'https://www.facebook.com/sugarnailbarormond',
  facebookHandle: '@sugarnailbarormond',
} as const;

/** Section 3 — Services. Soft photo card grid, no hard borders. */
export const SERVICES = [
  {
    name: 'Manicures',
    copy: 'Classic to gel — shaped, buffed, and finished with a homemade sugar scrub.',
    image: '/images/service-manicure.jpg',
    alt: 'Hands receiving a glossy pink manicure at a salon table',
  },
  {
    name: 'Pedicures',
    copy: 'Sink into a massaging spa chair with a drink in hand and let the world soften.',
    image: '/images/service-pedicure.jpg',
    alt: 'Relaxing pedicure in a massaging spa chair with rose petals',
  },
  {
    name: 'Gel-X · SNS · Acrylics',
    copy: 'Long-lasting extensions and dip, sculpted with the precision the regulars rave about.',
    image: '/images/service-gelx.jpg',
    alt: 'Long glossy coral-pink extension nails being finished',
  },
  {
    name: 'Add-On Indulgences',
    copy: 'Extra sugar-scrub scents, a head-spa moment, and little finishing touches.',
    image: '/images/service-headspa.jpg',
    alt: 'A soothing head-spa scalp massage add-on',
  },
] as const;

/**
 * Booking flow — services with duration + price. Also feeds Step 1 of the
 * native on-page booking flow. Prices/durations are demo values for the pitch.
 */
export const BOOKING_SERVICES = [
  {
    id: 'manicure',
    name: 'Classic Manicure',
    duration: '30 min',
    price: '$25',
    image: '/images/service-manicure.jpg',
    alt: 'Hands receiving a glossy pink manicure at a salon table',
  },
  {
    id: 'pedicure',
    name: 'Spa Pedicure',
    duration: '45 min',
    price: '$40',
    image: '/images/service-pedicure.jpg',
    alt: 'Relaxing pedicure in a massaging spa chair with rose petals',
  },
  {
    id: 'gelx',
    name: 'Gel-X / Dip Set',
    duration: '60 min',
    price: '$55',
    image: '/images/service-gelx.jpg',
    alt: 'Long glossy coral-pink extension nails being finished',
  },
  {
    id: 'paraffin',
    name: 'Paraffin Wax Add-On',
    duration: '15 min',
    price: '$10',
    image: '/images/service-headspa.jpg',
    alt: 'A soothing warm paraffin wax treatment add-on',
  },
] as const;

export type BookingService = (typeof BOOKING_SERVICES)[number];

/**
 * Section 4 — Pick Your Pairing. Every appointment comes with a complimentary
 * drink and a homemade sugar scrub. Flavors sourced from the salon's own menu.
 */
export const PAIRINGS = [
  {
    title: 'Mimosas',
    kind: 'Bubbly',
    copy: 'In a bubbly mood? Toast your appointment with a house flute.',
    options: ['Classic', 'Tiffany Blue', 'Sunrise', '& more'],
    image: '/images/pairing-mimosa.jpg',
    alt: 'A classic mimosa with rising champagne bubbles',
    accent: false,
  },
  {
    title: 'Wines',
    kind: 'Sip & soak',
    copy: 'Chill-able reds, crisp whites, and a blush pour for the slow afternoons.',
    options: ['Pink Sunset Blush', 'Crisp White', 'Chill-able Red', 'Sangria Red'],
    image: '/images/pairing-wine.jpg',
    alt: 'A glass of blush wine beside a glass of merlot',
    accent: true,
  },
  {
    title: 'Coffee',
    kind: 'Cozy',
    copy: 'A warm cup for the mornings you want comfort over sparkle.',
    options: ['Latte', 'Iced', 'Hot'],
    image: '/images/pairing-coffee.jpg',
    alt: 'A warm latte with delicate latte art',
    accent: false,
  },
  {
    title: 'Sugar Scrubs',
    kind: 'Homemade',
    copy: 'Every service ends with our signature scrub — pick your scent.',
    options: ['Vanilla', 'Lavender', 'Mango', '& more'],
    image: '/images/pairing-scrub.jpg',
    alt: 'Jars of homemade sugar scrub in vanilla, lavender, and mango',
    accent: false,
  },
] as const;

/**
 * Nail-art gallery — real client work from the salon. Each tile links to
 * Instagram. Add more entries as new photos come in.
 */
export const GALLERY = [
  {
    src: '/images/gallery-scooby.jpg',
    alt: 'Hand-painted Scooby-Doo cartoon nail art on long stiletto nails',
    span: 'tall',
    toss: false,
  },
  {
    src: '/images/gallery-lines.jpg',
    alt: 'Minimal candy-stripe line art on short round nails',
    span: 'wide',
    toss: true,
  },
  {
    src: '/images/gallery-floral.jpg',
    alt: 'Blue and green 3D floral nail art with gems and gold detailing',
    span: 'tall',
    toss: false,
  },
] as const;

/**
 * Section 5 — Reviews. Representative of the salon's perfect 5.0 reputation and
 * the themes guests consistently mention (the drinks, the scrub, long-lasting
 * work by Julieann & Rex). Replace with live Google/Facebook text when available.
 */
export const REVIEWS = [
  {
    quote:
      'A mimosa in one hand, a sugar scrub on the other — and nails that still look perfect three weeks later. I will never go anywhere else.',
    by: 'Brittany',
    meta: 'Ormond-by-the-Sea',
  },
  {
    quote:
      'It feels less like a nail appointment and more like a little treat you give yourself. The chairs, the wine, the whole vibe. Obsessed.',
    by: 'Marisol',
    meta: 'Ormond Beach',
  },
  {
    quote:
      'Julieann is an actual artist. I am hard on my nails and this is the only place that lasts. The homemade scrub is the sweetest touch.',
    by: 'Danielle',
    meta: 'Daytona Beach',
  },
  {
    quote:
      'Cutest little spot. Booked on a whim, left glowing with a glass of blush wine and the softest hands. Already rebooked.',
    by: 'Priya',
    meta: 'Port Orange',
  },
] as const;
