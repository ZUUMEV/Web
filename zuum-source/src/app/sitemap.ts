import { MetadataRoute } from 'next'

const BASE_URL = 'https://zuum.co.in'

// Site-wide images to include in image sitemap
const SITE_IMAGES = [
  `${BASE_URL}/og-image.png`,
  `${BASE_URL}/zuum-dark-theme-logo.png`,
  `${BASE_URL}/zuum-light-theme-logo.png`,
  `${BASE_URL}/favicon.png`,
  `${BASE_URL}/logo.svg`,
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
      images: SITE_IMAGES,
    },
    {
      url: `${BASE_URL}/locations/uttarakhand`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      images: SITE_IMAGES,
    },
    {
      url: `${BASE_URL}/locations/haldwani`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      images: SITE_IMAGES,
    },
    {
      url: `${BASE_URL}/locations/rudrapur`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      images: SITE_IMAGES,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
      images: SITE_IMAGES,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/refund-policy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
