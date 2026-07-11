export type ProductTier = 'Essential' | 'Pro' | 'Elite' | 'Signature';

export type ColorOption = {
  id: string;
  name: string;
  hex: string;
  image: string;
  imageAlt: string;
};

export type ProductFaq = {
  q: string;
  a: string;
};

export type ProductHighlight = {
  icon: string;
  title: string;
  desc: string;
};

export type CompressionZone = {
  id: string;
  label: string;
  description: string;
  position: { x: number; y: number; z: number };
};

export type Product = {
  id: string;
  tier: ProductTier;
  title: string;
  shortDescription: string;
  price: number;
  compareAt: number;
  collections: string[];
  badge: string | null;
  tierRank: number;
  fit: string;
  fabric: string;
  colorOptions: ColorOption[];
  heroImage: string;
  lifestyleImages: string[];
  images: string[];
  imageSlots: { filename: string; label: string }[];
  benefits: string[];
  details: Record<string, string>;
  description: string;
  styleIt: string;
  sizes: string[];
  faqs: ProductFaq[];
  highlights: ProductHighlight[];
  pros: string[];
  cons: string[];
  expertVerdict: string;
  expertBy: string;
  compressionZones: CompressionZone[];
};

export type CartItem = {
  id: string;
  title: string;
  price: number;
  size: string;
  color: string;
  qty: number;
  image: string;
};

export type ImageSize = '512' | '1K' | '2K' | '4K';

export type ImageAspectRatio =
  | '1:1'
  | '2:3'
  | '3:2'
  | '3:4'
  | '4:3'
  | '4:5'
  | '5:4'
  | '9:16'
  | '16:9'
  | '21:9';

export type GenerateImageRequest = {
  prompt: string;
  size?: ImageSize;
  aspectRatio?: ImageAspectRatio;
  transparent?: boolean;
  productId?: string;
  slot?: string;
  forceRegenerate?: boolean;
};

export type GenerateImageResponse = {
  ok: boolean;
  url?: string;
  cached?: boolean;
  error?: string;
  mimeType?: string;
  width?: number;
  height?: number;
};
