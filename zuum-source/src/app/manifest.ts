import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ZUUM Electric — EV Scooter Rentals for Delivery Partners',
    short_name: 'ZUUM Electric',
    description:
      'EV scooter rentals for delivery partners in Uttarakhand. Free fuel, helmet, insurance. Earn ₹35,000+/month. Plans from ₹300/day.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#10b981',
    orientation: 'portrait',
    categories: ['business', 'navigation', 'travel'],
    icons: [
      {
        src: '/favicon.png',
        sizes: 'any',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/favicon.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/favicon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    shortcuts: [
      {
        name: 'Apply on WhatsApp',
        short_name: 'Apply',
        url: '/?action=apply',
      },
      {
        name: 'View Plans',
        short_name: 'Plans',
        url: '/#plans',
      },
      {
        name: 'Haldwani Rentals',
        short_name: 'Haldwani',
        url: '/locations/haldwani',
      },
    ],
  }
}
