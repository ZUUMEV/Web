/**
 * JSON-LD Structured Data for ZUUM Electric
 * Helps Google show Rich Results (star ratings, FAQ, local business info)
 */

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ZUUM Electric',
    description:
      'India\'s premium EV scooter rental platform for delivery partners. Get Bike + Fuel + Helmet. Earn ₹30,000 to ₹45,000/month.',
    url: 'https://zuum.co.in',
    telephone: '+917900333002',
    email: 'info@zuum.co.in',
    image: 'https://zuum.co.in/zuum-dark-theme-logo.png',
    priceRange: '₹300 - ₹6,000',
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: 'Haldwani',
        addressRegion: 'Uttarakhand',
        addressCountry: 'IN',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Rudrapur',
        addressRegion: 'Uttarakhand',
        addressCountry: 'IN',
      },
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '29.2244',
      longitude: '79.5130',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '09:00',
      closes: '21:00',
    },
    sameAs: [
      'https://www.youtube.com/@ZuumElectric',
      'https://www.facebook.com/ZuumElectric/',
      'https://www.instagram.com/zuumelectric/',
      'https://www.linkedin.com/in/zuumelectric/',
      'https://x.com/ZuumElectric',
      'https://www.pinterest.com/zuumelectric/',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'EV Scooter Rental Plans',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Daily Plan',
            description: '₹300/day — 100 km included',
          },
          price: '300',
          priceCurrency: 'INR',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '300',
            priceCurrency: 'INR',
            billingDuration: {
              '@type': 'QuantitativeValue',
              value: '1',
              unitCode: 'DAY',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Weekly Plan',
            description: '₹1,600/week — 700 km included',
          },
          price: '1600',
          priceCurrency: 'INR',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '1600',
            priceCurrency: 'INR',
            billingDuration: {
              '@type': 'QuantitativeValue',
              value: '1',
              unitCode: 'WK',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Monthly Plan',
            description: '₹6,000/month — 3,000 km included',
          },
          price: '6000',
          priceCurrency: 'INR',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '6000',
            priceCurrency: 'INR',
            billingDuration: {
              '@type': 'QuantitativeValue',
              value: '1',
              unitCode: 'MON',
            },
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema() {
  const faqs = [
    {
      question: 'What do I get when I rent a ZUUM EV scooter?',
      answer:
        'You get a fully charged electric scooter + free charging (fuel) + helmet + insurance + 24/7 roadside support. Everything you need to start delivering.',
    },
    {
      question: 'How much can I earn with ZUUM?',
      answer:
        'Delivery partners earn between ₹30,000 to ₹45,000 per month after rental costs. With zero fuel expense and zero maintenance, your savings are maximum.',
    },
    {
      question: 'What are the rental plans available?',
      answer:
        'Daily Plan: ₹300/day (100 km), Weekly Plan: ₹1,600/week (700 km), Monthly Plan: ₹6,000/month (3,000 km). Refundable deposit of ₹4,000 required.',
    },
    {
      question: 'Is there any fuel or charging cost?',
      answer:
        'No! Charging is completely FREE at all ZUUM stations. This is the biggest advantage — zero fuel cost means maximum earnings for you.',
    },
    {
      question: 'What if the scooter breaks down?',
      answer:
        'ZUUM provides 24/7 roadside support and free maintenance. If your scooter has any issue, we replace it immediately so your delivery work is never interrupted.',
    },
    {
      question: 'Where is ZUUM available?',
      answer:
        'ZUUM is currently available in Haldwani and Rudrapur, Uttarakhand. We are expanding to more cities soon. Contact us to check availability in your area.',
    },
    {
      question: 'How do I join ZUUM?',
      answer:
        'Simply WhatsApp us at +91 79003 33002 or click the Join button on our website. You need a valid driving license and ₹4,000 refundable deposit. That\'s it!',
    },
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
