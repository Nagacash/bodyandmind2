import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.nataliezimmermann.de'

type LocalizedRoute = {
  de: string
  en: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}

const ROUTES: LocalizedRoute[] = [
  { de: '/', en: '/en', changeFrequency: 'weekly', priority: 1.0 },
  { de: '/philosophie', en: '/en/philosophie', changeFrequency: 'monthly', priority: 0.85 },
  { de: '/about-me', en: '/en/about-me', changeFrequency: 'monthly', priority: 0.9 },
  { de: '/studio', en: '/en/studio', changeFrequency: 'weekly', priority: 0.85 },
  { de: '/leistungen', en: '/en/leistungen', changeFrequency: 'monthly', priority: 0.8 },
  { de: '/stimmen', en: '/en/stimmen', changeFrequency: 'monthly', priority: 0.75 },
  { de: '/faq', en: '/en/faq', changeFrequency: 'monthly', priority: 0.8 },
  { de: '/presse', en: '/en/presse', changeFrequency: 'monthly', priority: 0.8 },
  { de: '/flow', en: '/en/flow', changeFrequency: 'monthly', priority: 0.7 },
  { de: '/form', en: '/en/form', changeFrequency: 'monthly', priority: 0.7 },
  { de: '/recovery', en: '/en/recovery', changeFrequency: 'monthly', priority: 0.7 },
  { de: '/kontakt', en: '/en/kontakt', changeFrequency: 'monthly', priority: 0.9 },
  { de: '/impressum', en: '/en/impressum', changeFrequency: 'yearly', priority: 0.3 },
  { de: '/datenschutz', en: '/en/datenschutz', changeFrequency: 'yearly', priority: 0.3 },
  { de: '/agb', en: '/en/agb', changeFrequency: 'yearly', priority: 0.3 },
]

function languageAlternates(de: string, en: string) {
  return {
    de: `${BASE_URL}${de}`,
    en: `${BASE_URL}${en}`,
    'x-default': `${BASE_URL}${de}`,
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return ROUTES.flatMap(({ de, en, changeFrequency, priority }) => [
    {
      url: `${BASE_URL}${de}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: languageAlternates(de, en),
      },
    },
    {
      url: `${BASE_URL}${en}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: languageAlternates(de, en),
      },
    },
  ])
}
