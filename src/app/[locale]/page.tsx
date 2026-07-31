import React from 'react'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import Hero from '@/app/components/Home/Hero'
import SectionHub from '@/app/components/Home/SectionHub'
import { SITE_URL, socialShareImageMetadata } from '@/app/data/site'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'

  return {
    title: isEn
      ? 'Natalie Zimmermann – Boxing World Champion, Speaker & Mental Coach in Hamburg'
      : 'Natalie Zimmermann – Box-Weltmeisterin, Speakerin & Mental Coach in Hamburg',
    description: isEn
      ? 'Natalie Zimmermann—WIBF/WBF boxing world champion, speaker, mental coach, physical therapist & personal trainer in Hamburg. Her story, press, and book. Private studio training at Body & Mind—book via the studio site.'
      : 'Natalie Zimmermann – WIBF/WBF-Box-Weltmeisterin, Speakerin, Mental Coach, Physiotherapeutin & Personal Trainerin in Hamburg. Werdegang, Presse und Buch. Privatstudio Body & Mind – Training & Preise über die Studio-Website.',
    keywords: isEn
      ? [
          'Natalie Zimmermann',
          'Boxing World Champion Hamburg',
          'Professional Boxer Germany',
          'Personal Trainer Hamburg',
          'Personal Training Harvestehude',
          'Mental Coach Hamburg',
          'Speaker Hamburg',
          'Motivational Speaker Hamburg',
          'Physical Therapy Hamburg',
          'Physical Therapist Harvestehude',
          'Boxing Hamburg',
          'Kickboxing Hamburg',
          'Body and Mind Studio Hamburg',
          'Lu Jong Yoga Hamburg',
          'Wingwave Coaching Hamburg',
          'Fascia Training Hamburg',
          'Rothenbaumchaussee 156',
        ]
      : [
          'Natalie Zimmermann',
          'Box Weltmeisterin Hamburg',
          'Profiboxerin Deutschland',
          'Personal Trainer Hamburg',
          'Personal Training Harvestehude',
          'Mental Coach Hamburg',
          'Mentalcoach Hamburg',
          'Speakerin Hamburg',
          'Motivationsrednerin Hamburg',
          'Physiotherapie Hamburg',
          'Physiotherapeutin Harvestehude',
          'Boxen Hamburg',
          'Kickboxen Hamburg',
          'Body and Mind Studio Hamburg',
          'Lu Jong Yoga Hamburg',
          'Wingwave Coaching Hamburg',
          'Faszientraining Hamburg',
          'Rothenbaumchaussee 156',
        ],
    alternates: {
      canonical: isEn ? '/en' : '/',
      languages: {
        de: '/',
        en: '/en',
        'x-default': '/',
      },
    },
    openGraph: {
      type: 'website',
      locale: isEn ? 'en_US' : 'de_DE',
      url: isEn ? `${SITE_URL}/en` : SITE_URL,
      siteName: 'Natalie Zimmermann – Body & Mind Hamburg',
      title: isEn
        ? 'Natalie Zimmermann – Boxing World Champion, Speaker & Mental Coach in Hamburg'
        : 'Natalie Zimmermann – Box-Weltmeisterin, Speakerin & Mental Coach in Hamburg',
      description: isEn
        ? 'Boxing world champion, speaker, mental coach & personal trainer in Hamburg. Personal brand, press, and studio link for private training.'
        : 'Box-Weltmeisterin, Speakerin, Mental Coach & Personal Trainerin in Hamburg. Persönliche Marke, Presse und Link zum Privatstudio.',
      images: [socialShareImageMetadata],
    },
    twitter: {
      card: 'summary_large_image',
      title: isEn
        ? 'Natalie Zimmermann – Boxing World Champion, Speaker & Mental Coach Hamburg'
        : 'Natalie Zimmermann – Box-Weltmeisterin, Speakerin & Mental Coach Hamburg',
      description: isEn
        ? 'Professional boxing world champion, speaker, mental coach & personal trainer in Hamburg-Harvestehude.'
        : 'Profibox-Weltmeisterin, Speakerin, Mental Coach & Personal Trainerin in Hamburg-Harvestehude.',
      images: [socialShareImageMetadata.url],
    },
  }
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}#person`,
    name: 'Natalie Zimmermann',
    givenName: 'Natalie',
    familyName: 'Zimmermann',
    url: SITE_URL,
    image: `${SITE_URL}/images/hero/natalie.webp`,
    gender: 'Female',
    nationality: { '@type': 'Country', name: 'Deutschland' },
    jobTitle: [
      'Box-Weltmeisterin',
      'Speakerin',
      'Mental Coach',
      'Personal Trainerin',
      'Physiotherapeutin',
    ],
    worksFor: { '@id': `${SITE_URL}#organization` },
    description:
      'Natalie Zimmermann ist Profibox-Weltmeisterin, Speakerin, Mental Coach, Physiotherapeutin und Personal Trainerin in Hamburg. Sie hilft Menschen dabei, körperliche Stärke und mentale Resilienz zu entwickeln und ihre Gesundheits- und Fitnessziele zu erreichen.',
    knowsAbout: [
      'Profiboxen',
      'Mental Coaching',
      'Wingwave Coaching',
      'Personal Training',
      'Physiotherapie',
      'Manuelle Therapie',
      'Faszientraining',
      'Lu Jong Yoga',
      'Resilienztraining',
      'Motivationsvorträge',
    ],
    award: [
      'WIBF-Weltmeisterin Superleichtgewicht 2023',
      'WIBF-Weltmeisterin Leichtgewicht 2024',
      'WBF Intercontinental-Weltmeisterin 2024',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rothenbaumchaussee 156',
      addressLocality: 'Hamburg',
      addressRegion: 'HH',
      postalCode: '20149',
      addressCountry: 'DE',
    },
    sameAs: [
      'https://www.facebook.com/natalie.zimmermann.94',
      'https://www.instagram.com/nataliezimmermann_ger/',
    ],
  }

  const localBusinessLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HealthAndBeautyBusiness', 'SportsActivityLocation'],
    '@id': `${SITE_URL}#localbusiness`,
    name: 'Body & Mind by Natalie Zimmermann',
    image: [
      `${SITE_URL}/images/hero/natalie.webp`,
      `${SITE_URL}/images/hero/lind3.webp`,
    ],
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo/logo.svg`,
    telephone: '+49-40-53790578',
    email: 'info@nataliezimmermann.de',
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Bank Transfer, PayPal',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rothenbaumchaussee 156',
      addressLocality: 'Hamburg',
      addressRegion: 'HH',
      postalCode: '20149',
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.578612,
      longitude: 9.987175,
    },
    hasMap: 'https://maps.google.com/?q=Rothenbaumchaussee+156,+20149+Hamburg',
    areaServed: [
      { '@type': 'City', name: 'Hamburg' },
      { '@type': 'AdministrativeArea', name: 'Schleswig-Holstein' },
      { '@type': 'AdministrativeArea', name: 'Niedersachsen' },
      { '@type': 'Country', name: 'Deutschland' },
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 53.578612,
        longitude: 9.987175,
      },
      geoRadius: 50000,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    founder: { '@id': `${SITE_URL}#person` },
    employee: { '@id': `${SITE_URL}#person` },
    description:
      'Body & Mind by Natalie Zimmermann in Hamburg-Harvestehude bietet Personal Training, Mental Coaching, Physiotherapie, Boxen, Kickboxen, Lu Jong Yoga und Faszientraining – individuell auf Sie abgestimmt.',
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Personal Training Hamburg' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Mental Coaching & Wingwave Hamburg' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Physiotherapie & Manuelle Therapie' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Boxen & Kickboxen Training' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Speaker & Motivationsvorträge' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Lu Jong Yoga & Faszientraining' },
      },
    ],
    sameAs: [
      'https://www.facebook.com/natalie.zimmermann.94',
      'https://www.instagram.com/nataliezimmermann_ger/',
    ],
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Start',
        item: SITE_URL,
      },
    ],
  }

  return (
    <main>
      <Hero />
      <SectionHub />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </main>
  )
}
