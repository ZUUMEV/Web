import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-posts'

const BASE_URL = 'https://zuum.co.in'

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
      url: `${BASE_URL}/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/calculator`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...blogPosts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
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
