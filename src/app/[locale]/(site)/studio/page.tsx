import { setRequestLocale } from 'next-intl/server'
import SummerSpecial from '@/app/components/Home/SummerSpecial'
import Join from '@/app/components/Home/Joinus'
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
  return pageMetadata(locale, 'studio', ROUTES.studio)
}

export default async function StudioPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const isEn = locale === 'en'
  const pageUrl = isEn ? `${SITE_URL}/en${ROUTES.studio}` : `${SITE_URL}${ROUTES.studio}`

  return (
    <main>
      <SummerSpecial />
      <Join />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd(isEn ? 'Studio' : 'Studio', pageUrl)
          ),
        }}
      />
    </main>
  )
}
