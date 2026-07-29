import type { Metadata } from 'next';
import { COLLECTIONS } from '@/lib/products';
import { CollectionBrowser } from '@/components/collection/CollectionBrowser';

export const metadata: Metadata = {
  title: 'Shop',
  description: COLLECTIONS.all.description,
};

export default function CollectionPage() {
  return <CollectionBrowser />;
}
