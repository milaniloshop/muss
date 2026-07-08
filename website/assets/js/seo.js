/**
 * Milan Hype CoreFit — Structured data (JSON-LD)
 */
(function () {
  'use strict';

  function inject(schema) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  function orgSchema() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Milan Hype',
      url: 'https://milanhype.com',
      logo: 'https://milanhype.com/assets/favicon.svg',
      description: "USA men's compression apparel brand. CoreFit chest + core compression tanks.",
      sameAs: [
        'https://www.instagram.com/milanhype.corefit/',
        'https://www.facebook.com/profile.php?id=61591393637430'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'support@milanhype.com',
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: 'English'
      }
    };
  }

  function websiteSchema() {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Milan Hype CoreFit',
      url: 'https://milanhype.com',
      description: "Men's chest + core compression tanks — four premium tiers from $49.",
      publisher: { '@type': 'Organization', name: 'Milan Hype' }
    };
  }

  function productSchema(product) {
    if (!product) return null;
    const img = product.heroImage
      ? `https://milanhype.com/${product.heroImage.replace(/^\//, '')}`
      : 'https://milanhype.com/assets/images/products/premium-hero-tank.jpg';
    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.title,
      description: product.description,
      image: img,
      brand: { '@type': 'Brand', name: 'Milan Hype' },
      sku: product.id,
      offers: {
        '@type': 'Offer',
        url: `https://milanhype.com/product.html?id=${product.id}`,
        priceCurrency: 'USD',
        price: product.price,
        availability: 'https://schema.org/InStock',
        seller: { '@type': 'Organization', name: 'Milan Hype' }
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '127'
      }
    };
  }

  function faqSchema(items) {
    if (!items?.length) return null;
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: items.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a }
      }))
    };
  }

  function breadcrumbSchema(items) {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        item: item.url
      }))
    };
  }

  window.MH_SEO = { inject, orgSchema, websiteSchema, productSchema, faqSchema, breadcrumbSchema };

  document.addEventListener('DOMContentLoaded', () => {
    const page = document.body.dataset.page;
    inject(orgSchema());

    if (page === 'home') {
      inject(websiteSchema());
      inject(faqSchema([
        { q: 'Is CoreFit a fake muscle padded shirt?', a: 'No. CoreFit compresses and smooths your natural silhouette. No foam pads or fake abs.' },
        { q: 'Will anyone know I am wearing it?', a: 'No. Low neckline and seamless construction stay hidden under dress shirts and polos.' },
        { q: 'Which tier should I start with?', a: 'Most men choose Pro ($89) for Italian microfiber and reinforced chest compression.' }
      ]));
    }

    if (page === 'product' && typeof getProduct === 'function') {
      const id = new URLSearchParams(location.search).get('id') || 'corefit-pro';
      const product = getProduct(id);
      if (product) {
        inject(productSchema(product));
        inject(faqSchema(product.faqs));
        inject(breadcrumbSchema([
          { name: 'Home', url: 'https://milanhype.com/' },
          { name: 'Collection', url: 'https://milanhype.com/collection.html' },
          { name: product.tier, url: `https://milanhype.com/product.html?id=${product.id}` }
        ]));
      }
    }

    if (page === 'collection') {
      inject(breadcrumbSchema([
        { name: 'Home', url: 'https://milanhype.com/' },
        { name: 'CoreFit Collection', url: 'https://milanhype.com/collection.html' }
      ]));
    }
  });
})();
