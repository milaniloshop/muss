import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductExperience } from '@/components/product/ProductExperience';
import { PRODUCTS, getProduct } from '@/lib/products';

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) return { title: 'Product' };
  return {
    title: product.title,
    description: product.shortDescription,
    openGraph: {
      images: [product.heroImage],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();
  return <ProductExperience product={product} />;
}
