export const SITE = {
  name: 'Alexandre Store',
  tagline: 'New. Certified Used. Expertly Repaired.',
  city: 'Alexandria',
  address: '214 Corniche Road',
  neighborhood: 'Stanley',
  fullAddress: '214 Corniche Road, Stanley, Alexandria, Egypt',
  phone: '+20 3 487 2200',
  phoneHref: 'tel:+2034872200',
  email: 'hello@alexandrestore.eg',
  emailHref: 'mailto:hello@alexandrestore.eg',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Stanley+Corniche+Alexandria+Egypt',
  mapsEmbed:
    'https://maps.google.com/maps?q=Stanley%20Corniche%2C%20Alexandria%2C%20Egypt&t=&z=15&ie=UTF8&iwloc=&output=embed',
  hours: [
    { days: 'Saturday – Thursday', time: '11:00 AM – 9:00 PM' },
    { days: 'Friday', time: '2:00 PM – 9:00 PM' },
  ],
  instagram: 'https://www.instagram.com/',
  instagramHandle: '@alexandrestore',
  facebook: 'https://www.facebook.com/',
  whatsapp: 'https://wa.me/2034872200',
} as const;

export const TRUST_ITEMS = [
  'Certified Used',
  '12-Month Warranty',
  'In-House Repair',
  'Trade-In Available',
] as const;

export const CATEGORIES = [
  {
    title: 'New iPhones',
    copy: 'Latest models, sealed and ready — sourced for reliability.',
    image: '/images/cat-new-iphones.jpg',
    href: '#devices',
    label: 'Brand New',
  },
  {
    title: 'Certified Used',
    copy: 'Inspected, graded, and warranted — used that feels new.',
    image: '/images/cat-certified.jpg',
    href: '#certified',
    label: 'Certified Pre-Owned',
  },
  {
    title: 'Repair Services',
    copy: 'In-house precision repair — screen, battery, board-level care.',
    image: '/images/cat-repair.jpg',
    href: '#repair',
    label: 'In-House Repair',
  },
] as const;

export const CERT_STEPS = [
  {
    num: '01',
    title: 'Diagnostic Check',
    copy: 'Full hardware and software diagnostics before anything else.',
  },
  {
    num: '02',
    title: 'Battery Health Test',
    copy: 'Measured capacity logged — only devices that meet our bar proceed.',
    battery: 92,
  },
  {
    num: '03',
    title: 'Cosmetic Grading',
    copy: 'Honest condition grades under studio light — no surprises.',
  },
  {
    num: '04',
    title: 'Data Wipe & Reset',
    copy: 'Secure erase and factory reset, verified before listing.',
  },
  {
    num: '05',
    title: '12-Month Warranty',
    copy: 'Coverage applied the moment the device earns certification.',
  },
] as const;

export const DEVICES = [
  {
    name: 'iPhone 15 Pro',
    condition: 'Certified Used',
    tag: 'certified' as const,
    specs: '256 GB  ·  Battery 92%',
    price: 'EGP 48,900',
    image: '/images/device-iphone15.jpg',
  },
  {
    name: 'MacBook Air M2',
    condition: 'Brand New',
    tag: 'new' as const,
    specs: '8 GB  ·  256 GB SSD',
    price: 'EGP 54,500',
    image: '/images/device-macbook.jpg',
  },
  {
    name: 'iPhone 14 Pro',
    condition: 'Certified Used',
    tag: 'certified' as const,
    specs: '128 GB  ·  Battery 89%',
    price: 'EGP 36,200',
    image: '/images/device-iphone14.jpg',
  },
  {
    name: 'MacBook Pro 14″',
    condition: 'Brand New',
    tag: 'new' as const,
    specs: 'M3  ·  16 GB  ·  512 GB',
    price: 'EGP 92,000',
    image: '/images/device-macbook-pro.jpg',
  },
] as const;

export const REPAIR_SERVICES = [
  {
    title: 'Screen Replacement',
    copy: 'OEM-grade displays, calibrated for color and touch accuracy.',
  },
  {
    title: 'Battery Service',
    copy: 'Genuine-capacity cells with health verification after install.',
  },
  {
    title: 'Charging Port Repair',
    copy: 'Clean, reflow, or replace — restoring reliable power delivery.',
  },
  {
    title: 'Water Damage Diagnostics',
    copy: 'Board-level inspection before any irreversible work begins.',
  },
  {
    title: 'Laptop Repair',
    copy: 'MacBook logic board, keyboard, display, and storage service.',
  },
] as const;

export const TRADE_STEPS = [
  {
    num: '01',
    title: 'Get a Quote',
    copy: 'Tell us the model and condition — we respond with a clear offer.',
  },
  {
    num: '02',
    title: 'Drop Off or Ship',
    copy: 'Bring it to Stanley, or arrange secure handoff.',
  },
  {
    num: '03',
    title: 'Get Paid or Credit',
    copy: 'Instant store credit toward your next device, or cash payout.',
  },
] as const;

export const REVIEWS = [
  {
    quote:
      'I almost bought elsewhere until I saw their certification process. Battery health was exactly as listed — and the 12-month warranty sealed it.',
    by: 'Omar H.',
    meta: 'iPhone 15 Pro · Certified Used',
  },
  {
    quote:
      'Screen replacement felt like surgery, not a stall fix. Device came back cleaner than when I dropped it off.',
    by: 'Nour A.',
    meta: 'iPhone 14 · Screen Repair',
  },
  {
    quote:
      'Traded my old MacBook toward a new Air the same afternoon. Transparent grading, no pressure — just precise.',
    by: 'Karim S.',
    meta: 'MacBook Air M2 · Trade-In',
  },
] as const;
