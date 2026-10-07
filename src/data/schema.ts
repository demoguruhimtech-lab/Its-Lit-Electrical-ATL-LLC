import { BUSINESS, SERVICES, LOCATIONS, ServiceData, LocationData } from '@/data/siteData';

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    '@id': `${BUSINESS.domain}/#business`,
    name: BUSINESS.name,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    url: BUSINESS.domain,
    image: `https://images.pexels.com/photos/9679179/pexels-photo-9679179.jpeg?auto=compress&cs=tinysrgb&h=650&w=940`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    areaServed: [
      { '@type': 'City', name: 'Atlanta' },
      ...LOCATIONS.map((l) => ({ '@type': 'City', name: l.name })),
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Electrical Services',
      itemListElement: SERVICES.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          description: s.tagline,
        },
      })),
    },
    openingHoursSpecification: BUSINESS.hours
      .filter((h) => h.hours !== 'By Appointment')
      .map((h) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: h.day,
        description: h.hours,
      })),
    priceRange: '$$',
  };
}

export function serviceSchema(service: ServiceData, path: string) {
  const primaryService = SERVICES.find((s) => s.slug === service.slug);
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      description: service.metaDescription,
      provider: {
        '@type': 'Electrician',
        name: BUSINESS.name,
        telephone: BUSINESS.phone,
      },
      serviceType: service.name,
      areaServed: {
        '@type': 'City',
        name: 'Atlanta',
      },
      url: `${BUSINESS.domain}${path}`,
    },
    faqSchema(service.faqs),
  ];
}

export function locationSchema(location: LocationData, path: string) {
  const primaryService = SERVICES.find((s) => s.slug === location.primaryService);
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${primaryService?.name} in ${location.name}`,
      description: location.metaDescription,
      provider: {
        '@type': 'Electrician',
        name: BUSINESS.name,
        telephone: BUSINESS.phone,
      },
      serviceType: primaryService?.name,
      areaServed: {
        '@type': 'City',
        name: location.name,
      },
      url: `${BUSINESS.domain}${path}`,
    },
    faqSchema(location.faqs),
  ];
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${BUSINESS.domain}${item.path}`,
    })),
  };
}
