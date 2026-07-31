import { setRequestLocale } from 'next-intl/server'
import Articles from '@/app/components/Home/Articles'
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
  return pageMetadata(locale, 'leistungen', ROUTES.leistungen)
}

export default async function LeistungenPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const isEn = locale === 'en'
  const pageUrl = isEn
    ? `${SITE_URL}/en${ROUTES.leistungen}`
    : `${SITE_URL}${ROUTES.leistungen}`

  return (
    <main>
      <Articles />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd(isEn ? 'Services' : 'Leistungen', pageUrl)
          ),
        }}
      />
    </main>
  )
}
