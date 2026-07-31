import { setRequestLocale } from 'next-intl/server'
import Testimonial from '@/app/components/Home/Testimonials'
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
  return pageMetadata(locale, 'stimmen', ROUTES.stimmen)
}

export default async function StimmenPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const isEn = locale === 'en'
  const pageUrl = isEn ? `${SITE_URL}/en${ROUTES.stimmen}` : `${SITE_URL}${ROUTES.stimmen}`

  return (
    <main>
      <Testimonial />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd(isEn ? 'Testimonials' : 'Stimmen', pageUrl)
          ),
        }}
      />
    </main>
  )
}
