export const SITE = {
  name: 'Chuckle & Bliss',
  tagline: "Ormond Beach's Favorite Little Boutique",
  owner: 'Kate Bell',
  address: '54 E Granada Blvd',
  city: 'Ormond Beach',
  state: 'FL',
  zip: '32176',
  fullAddress: '54 E Granada Blvd, Ormond Beach, FL 32176',
  phone: '(386) 947-7625',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=54+E+Granada+Blvd,+Ormond+Beach,+FL+32176',
  mapsEmbed:
    'https://maps.google.com/maps?q=54%20E%20Granada%20Blvd%2C%20Ormond%20Beach%2C%20FL%2032176&t=&z=15&ie=UTF8&iwloc=&output=embed',
  hours: [
    { days: 'Monday – Friday', time: '10:00 AM – 6:00 PM' },
    { days: 'Saturday', time: '10:00 AM – 5:00 PM' },
    { days: 'Sunday', time: 'Closed' },
  ],
  rating: '5.0',
  instagram: 'https://www.instagram.com/chuckleandbliss/',
  instagramHandle: '@chuckleandbliss',
  facebook: 'https://www.facebook.com/chuckleandbliss',
  place: 'Gaslamp Shoppes',
} as const;

export const GALLERY = [
  {
    src: '/images/look-1.jpg',
    alt: 'Browsing racks under warm boutique light',
    href: 'https://www.instagram.com/chuckleandbliss/',
    tall: true,
    toss: false,
  },
  {
    src: '/images/look-2.jpg',
    alt: 'Editorial look — soft neutrals and linen',
    href: 'https://www.instagram.com/chuckleandbliss/',
    tall: false,
    toss: false,
  },
  {
    src: '/images/look-3.jpg',
    alt: 'Special-occasion pieces styled for golden hour',
    href: 'https://www.instagram.com/chuckleandbliss/',
    tall: false,
    toss: true,
  },
  {
    src: '/images/look-4.jpg',
    alt: 'A quiet moment with curated fashion',
    href: 'https://www.instagram.com/chuckleandbliss/',
    tall: true,
    toss: false,
  },
  {
    src: '/images/look-5.jpg',
    alt: 'Accessories and texture details',
    href: 'https://www.instagram.com/chuckleandbliss/',
    tall: false,
    toss: false,
  },
  {
    src: '/images/look-6.jpg',
    alt: 'Coastal boutique wardrobe inspiration',
    href: 'https://www.instagram.com/chuckleandbliss/',
    tall: false,
    toss: false,
  },
] as const;

export const CATEGORIES = [
  {
    title: 'Everyday Essentials',
    copy: 'Easy pieces you reach for without thinking — soft, flattering, beach-town ready.',
    image: '/images/cat-everyday.jpg',
  },
  {
    title: 'Special Occasion',
    copy: 'Dresses and polish for dinners, celebrations, and the nights you dress up.',
    image: '/images/cat-occasion.jpg',
  },
  {
    title: 'Gifts & Accessories',
    copy: 'Small treasures, jewelry, and finishing touches that feel personally chosen.',
    image: '/images/cat-gifts.jpg',
  },
] as const;

/** Editorial guest quotes inspired by the boutique’s perfect 5.0 reputation. */
export const REVIEWS = [
  {
    quote:
      'Walking in feels like visiting a friend who has impeccable taste. Kate finds pieces that actually work for real life — and still feel special.',
    by: 'Sarah M.',
    meta: 'Google review · 5.0',
  },
  {
    quote:
      'My new favorite stop on Granada. Beautiful clothes, warm energy, and nothing that feels mass-market. I leave with something I love every time.',
    by: 'Lauren T.',
    meta: 'Google review · 5.0',
  },
  {
    quote:
      'A little boutique with a big heart. The curation is thoughtful, the space is gorgeous, and you can tell everything was chosen with care.',
    by: 'Emily R.',
    meta: 'Google review · 5.0',
  },
] as const;
