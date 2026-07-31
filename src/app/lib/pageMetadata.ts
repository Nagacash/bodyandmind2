import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { SITE_URL } from '@/app/data/site'

type PageMetaKey =
  | 'philosophie'
  | 'studio'
  | 'faq'
  | 'presse'
  | 'leistungen'
  | 'stimmen'
  | 'flow'
  | 'form'
  | 'recovery'

export async function pageMetadata(
  locale: string,
  key: PageMetaKey,
  path: string
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'pages' })
  const isEn = locale === 'en'
  const canonical = isEn ? `/en${path}` : path

  return {
    metadataBase: new URL(SITE_URL),
    title: t(`${key}.title`),
    description: t(`${key}.description`),
    alternates: {
      canonical,
      languages: {
        de: path,
        en: `/en${path}`,
        'x-default': path,
      },
    },
    openGraph: {
      type: 'website',
      locale: isEn ? 'en_US' : 'de_DE',
      url: `${SITE_URL}${canonical}`,
      title: t(`${key}.title`),
      description: t(`${key}.description`),
    },
    twitter: {
      card: 'summary_large_image',
      title: t(`${key}.title`),
      description: t(`${key}.description`),
    },
  }
}
