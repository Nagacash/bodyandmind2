import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.nataliezimmermann.de'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          'de-DE': `${BASE_URL}/`,
          'x-default': `${BASE_URL}/`,
        },
      },
    },
    {
      url: `${BASE_URL}/about-me`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/kontakt`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/impressum`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/datenschutz`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/agb`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
