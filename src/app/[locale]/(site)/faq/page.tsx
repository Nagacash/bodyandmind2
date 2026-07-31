import { setRequestLocale } from 'next-intl/server'
import FAQ from '@/app/components/Home/FAQ'
import { ROUTES } from '@/app/data/routes'
import { pageMetadata } from '@/app/lib/pageMetadata'
import { SITE_URL } from '@/app/data/site'
import { breadcrumbLd, faqPageLd } from '@/app/data/faqSchema'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return pageMetadata(locale, 'faq', ROUTES.faq)
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const isEn = locale === 'en'
  const pageUrl = isEn ? `${SITE_URL}/en${ROUTES.faq}` : `${SITE_URL}${ROUTES.faq}`

  return (
    <main>
      <FAQ />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageLd) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbLd('FAQ', pageUrl)),
        }}
      />
    </main>
  )
}
