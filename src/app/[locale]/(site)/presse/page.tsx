import { setRequestLocale } from 'next-intl/server'
import Presse from '@/app/components/Home/Presse'
import Insta from '@/app/components/Home/Insta'
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
  return pageMetadata(locale, 'presse', ROUTES.presse)
}

export default async function PressePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const isEn = locale === 'en'
  const pageUrl = isEn ? `${SITE_URL}/en${ROUTES.presse}` : `${SITE_URL}${ROUTES.presse}`

  return (
    <main>
      <Presse />
      <Insta />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd(isEn ? 'Press' : 'Presse', pageUrl)
          ),
        }}
      />
    </main>
  )
}
