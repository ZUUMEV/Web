/**
 * Organization + WebSite schema for ZUUM Electric
 * Helps Google show knowledge panel + sitelinks search box
 */

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ZUUM Electric',
    url: 'https://zuum.co.in',
    logo: 'https://zuum.co.in/zuum-dark-theme-logo.png',
    description: 'India\'s premium EV scooter rental platform for delivery partners. Free charging, helmet, insurance, and 24/7 breakdown support. Earn ₹35,000+/month.',
    foundingDate: '2024',
    founders: [{
      '@type': 'Person',
      name: 'ZUUM Electric Team',
    }],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-7900333002',
      email: 'info@zuum.co.in',
      contactType: 'customer support',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Haldwani',
      addressRegion: 'Uttarakhand',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://www.youtube.com/@ZuumElectric',
      'https://www.facebook.com/ZuumElectric/',
      'https://www.instagram.com/zuumelectric/',
      'https://www.linkedin.com/in/zuumelectric/',
      'https://x.com/ZuumElectric',
      'https://www.pinterest.com/zuumelectric/',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ZUUM Electric',
    url: 'https://zuum.co.in',
    description: 'EV scooter rentals for delivery partners in Uttarakhand. Earn ₹35,000+/month with zero fuel and zero maintenance.',
    publisher: {
      '@type': 'Organization',
      name: 'ZUUM Electric',
      url: 'https://zuum.co.in',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://zuum.co.in?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
