import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { SITE_URL } from '@/app/data/site'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'aboutMe' })
  const isEn = locale === 'en'

  return {
    metadataBase: new URL(SITE_URL),
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: {
      canonical: isEn ? '/en/about-me' : '/about-me',
      languages: {
        de: '/about-me',
        en: '/en/about-me',
        'x-default': '/about-me',
      },
    },
    openGraph: {
      type: 'profile',
      locale: isEn ? 'en_US' : 'de_DE',
      url: isEn ? `${SITE_URL}/en/about-me` : `${SITE_URL}/about-me`,
      title: t('meta.ogTitle'),
      description: t('meta.ogDescription'),
      images: [
        {
          url: '/images/new/beach3.webp',
          width: 1200,
          height: 630,
          alt: 'Natalie Zimmermann – Profibox-Weltmeisterin & Mental Coach in Hamburg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('meta.twitterTitle'),
      description: t('meta.twitterDescription'),
      images: ['/images/new/beach3.webp'],
    },
  }
}

export default function AboutMeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
