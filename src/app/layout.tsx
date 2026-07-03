import type { Metadata, Viewport } from 'next'
import './globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { manrope } from '@/app/fonts'
import Header from '@/app/components/Layout/Header'
import Footer from '@/app/components/Layout/Footer'
import ScrollToTop from '@/app/components/ScrollToTop'
import BackgroundAmbience from '@/app/components/BackgroundAmbience'
import Aoscompo from '@/utils/aos'

const SITE_URL = 'https://www.nataliezimmermann.de'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      'Natalie Zimmermann – Box-Weltmeisterin, Speakerin & Mental Coach in Hamburg',
    template: '%s | Natalie Zimmermann – Hamburg',
  },
  description:
    'Natalie Zimmermann – Profibox-Weltmeisterin, Speakerin, Mental Coach, Physiotherapeutin & Personal Trainerin in Hamburg-Harvestehude. Body & Mind Studio, Rothenbaumchaussee 156, 20149 Hamburg. Personal Training, Mental Coaching, Boxen, Vorträge & Markenbotschafterin.',
  applicationName: 'Natalie Zimmermann',
  authors: [{ name: 'Natalie Zimmermann', url: SITE_URL }],
  generator: 'Next.js',
  keywords: [
    'Natalie Zimmermann',
    'Box Weltmeisterin',
    'Profiboxerin Hamburg',
    'Personal Trainer Hamburg',
    'Personal Training Hamburg Harvestehude',
    'Mental Coach Hamburg',
    'Mentalcoach Hamburg',
    'Speakerin Hamburg',
    'Motivationsrednerin Deutschland',
    'Physiotherapie Hamburg',
    'Physiotherapeutin Hamburg',
    'Boxen Hamburg',
    'Kickboxen Hamburg',
    'Body and Mind Hamburg',
    'Body & Mind Studio Hamburg',
    'Lu Jong Yoga Hamburg',
    'Faszientraining Hamburg',
    'Wingwave Coaching Hamburg',
    'Markenbotschafterin Sport',
    'Resilienz Training',
    'Rothenbaumchaussee 156',
  ],
  category: 'Health & Fitness',
  classification: 'Personal Training, Mental Coaching, Physiotherapie, Speaker',
  creator: 'Natalie Zimmermann',
  publisher: 'Natalie Zimmermann – Body & Mind',
  referrer: 'origin-when-cross-origin',
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: SITE_URL,
    siteName: 'Natalie Zimmermann – Body & Mind Hamburg',
    title:
      'Natalie Zimmermann – Box-Weltmeisterin, Speakerin & Mental Coach in Hamburg',
    description:
      'Profibox-Weltmeisterin, Speakerin, Mental Coach & Personal Trainerin in Hamburg. Body & Mind Studio in Harvestehude. Personal Training, Mental Coaching, Vorträge & Workshops.',
    images: [
      {
        url: '/images/hero/natalie.webp',
        width: 1200,
        height: 630,
        alt: 'Natalie Zimmermann – Box-Weltmeisterin, Speakerin & Mental Coach in Hamburg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Natalie Zimmermann – Box-Weltmeisterin, Speakerin & Mental Coach Hamburg',
    description:
      'Profibox-Weltmeisterin, Speakerin, Mental Coach & Personal Trainerin in Hamburg. Body & Mind Studio Harvestehude.',
    images: ['/images/hero/natalie.webp'],
    creator: '@nataliezimmermann',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/manifest.webmanifest',
  other: {
    // Geo-targeting meta tags (still read by some crawlers + AI engines)
    'geo.region': 'DE-HH',
    'geo.placename': 'Hamburg',
    'geo.position': '53.578612;9.987175',
    ICBM: '53.578612, 9.987175',
    'DC.title':
      'Natalie Zimmermann – Box-Weltmeisterin, Speakerin & Mental Coach Hamburg',
    'DC.language': 'de',
    'DC.publisher': 'Natalie Zimmermann – Body & Mind, Hamburg',
    rating: 'general',
    distribution: 'global',
    revisit: '7 days',
  },
}

export const viewport: Viewport = {
  themeColor: '#37BEF0',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Site-wide structured data (Organization + WebSite)
  // Person/LocalBusiness/FAQPage are emitted by individual pages where appropriate.
  const organizationLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}#organization`,
    name: 'Natalie Zimmermann – Body & Mind',
    alternateName: 'Body & Mind by Natalie Zimmermann',
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo/logo.svg`,
    image: `${SITE_URL}/images/hero/natalie.webp`,
    email: 'info@nataliezimmermann.de',
    telephone: '+49-40-53790578',
    description:
      'Body & Mind by Natalie Zimmermann – Personal Training, Mental Coaching, Physiotherapie, Boxen und Vorträge in Hamburg-Harvestehude.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rothenbaumchaussee 156',
      addressLocality: 'Hamburg',
      addressRegion: 'HH',
      postalCode: '20149',
      addressCountry: 'DE',
    },
    areaServed: [
      { '@type': 'City', name: 'Hamburg' },
      { '@type': 'Country', name: 'Deutschland' },
    ],
    sameAs: [
      'https://www.facebook.com/natalie.zimmermann.94',
      'https://www.instagram.com/nataliezimmermann_ger/',
      'https://tiktok.com/@nataliezimmermann',
    ],
  }

  const websiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}#website`,
    url: SITE_URL,
    name: 'Natalie Zimmermann – Body & Mind Hamburg',
    inLanguage: 'de-DE',
    publisher: { '@id': `${SITE_URL}#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <html lang='de-DE' suppressHydrationWarning>
      <head>
        <meta name='theme-color' content='#37BEF0' />
        {/* GEO targeting meta tags for local SEO */}
        <meta name='geo.region' content='DE-HH' />
        <meta name='geo.placename' content='Hamburg, Harvestehude' />
        <meta name='geo.position' content='53.578612;9.987175' />
        <meta name='ICBM' content='53.578612, 9.987175' />
        <script
          type='application/ld+json'
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type='application/ld+json'
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
      </head>
      <body className={`${manrope.className} flex flex-col min-h-screen`}>
        <Aoscompo>
          <Header />
          <div className='flex-grow'>{children}</div>
          <Footer />
        </Aoscompo>
        <ScrollToTop />
        <BackgroundAmbience />
      </body>
    </html>
  )
}
