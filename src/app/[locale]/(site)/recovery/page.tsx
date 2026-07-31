import { setRequestLocale } from 'next-intl/server'
import Recovery from '@/app/components/Home/Recovery'
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
  return pageMetadata(locale, 'recovery', ROUTES.recovery)
}

export default async function RecoveryPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const isEn = locale === 'en'
  const pageUrl = isEn ? `${SITE_URL}/en${ROUTES.recovery}` : `${SITE_URL}${ROUTES.recovery}`

  return (
    <main>
      <Recovery />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbLd('Recovery', pageUrl)),
        }}
      />
    </main>
  )
}
