import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PRODUCT_IDS = new Set([
  'corefit-essential',
  'corefit-pro',
  'corefit-elite',
  'corefit-signature',
]);

/**
 * Preserve legacy static URLs from milanhype.com (e.g. /product.html?id=corefit-pro).
 */
export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  if (pathname === '/product.html' || pathname === '/product.htm') {
    const id = searchParams.get('id');
    const url = request.nextUrl.clone();
    if (id && PRODUCT_IDS.has(id)) {
      url.pathname = `/product/${id}`;
      url.search = '';
      return NextResponse.redirect(url, 308);
    }
    url.pathname = '/collection';
    url.search = '';
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/product.html', '/product.htm'],
};
