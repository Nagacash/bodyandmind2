import { setRequestLocale } from 'next-intl/server'
import Aboutus from '@/app/components/Home/AboutUs'
import { ROUTES } from '@/app/data/routes'
import { pageMetadata } from '@/app/lib/pageMetadata'
import { SITE_URL } from '@/app/data/site'
import { breadcrumbLd } from '@/app/data/faqSchema'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return pageMetadata(locale, 'philosophie', ROUTES.philosophie)
}

export default async function PhilosophiePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const isEn = locale === 'en'
  const pageUrl = isEn ? `${SITE_URL}/en${ROUTES.philosophie}` : `${SITE_URL}${ROUTES.philosophie}`

  return (
    <main>
      <Aboutus />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd(isEn ? 'Philosophy' : 'Philosophie', pageUrl)
          ),
        }}
      />
    </main>
  )
}
