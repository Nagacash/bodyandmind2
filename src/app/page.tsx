import React from 'react'
import Hero from '@/app/components/Home/Hero'
import Aboutus from '@/app/components/Home/AboutUs'
import UberMich from '@/app/components/Home/UberMich'
import Flow from '@/app/components/Home/Flow'
import Recovery from '@/app/components/Home/Recovery'
import Dedicated from '@/app/components/Home/Dedicated'
import Digital from '@/app/components/Home/Digital'
import Beliefs from '@/app/components/Home/Beliefs'
import Team from '@/app/components/Home/Team'
import Featured from '@/app/components/Home/Featured'
import Manage from '@/app/components/Home/Manage'
import FAQ from '@/app/components/Home/FAQ'
import Testimonial from '@/app/components/Home/Testimonials'
import Articles from '@/app/components/Home/Articles'
import Presse from '@/app/components/Home/Presse'
import Join from '@/app/components/Home/Joinus'
import Insta from '@/app/components/Home/Insta'
import { Metadata } from 'next'

const SITE_URL = 'https://www.nataliezimmermann.de'

export const metadata: Metadata = {
  title:
    'Natalie Zimmermann – Box-Weltmeisterin, Speakerin & Mental Coach in Hamburg',
  description:
    'Natalie Zimmermann – WIBF/WBF-Box-Weltmeisterin, Speakerin, Mental Coach, Physiotherapeutin & Personal Trainerin in Hamburg-Harvestehude. Body & Mind Studio, Rothenbaumchaussee 156, 20149 Hamburg. Personal Training, Mental Coaching, Boxen, Vorträge & Markenbotschafterin – jetzt Termin vereinbaren.',
  keywords: [
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
    canonical: '/',
    languages: {
      'de-DE': '/',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: SITE_URL,
    siteName: 'Natalie Zimmermann – Body & Mind Hamburg',
    title:
      'Natalie Zimmermann – Box-Weltmeisterin, Speakerin & Mental Coach in Hamburg',
    description:
      'Profibox-Weltmeisterin, Speakerin, Mental Coach & Personal Trainerin in Hamburg-Harvestehude. Body & Mind Studio – Personal Training, Mental Coaching, Boxen, Vorträge.',
    images: [
      {
        url: '/images/hero/natalie.webp',
        width: 1200,
        height: 630,
        alt: 'Natalie Zimmermann – Box-Weltmeisterin & Mental Coach Hamburg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Natalie Zimmermann – Box-Weltmeisterin, Speakerin & Mental Coach Hamburg',
    description:
      'Profibox-Weltmeisterin, Speakerin, Mental Coach & Personal Trainerin in Hamburg-Harvestehude.',
    images: ['/images/hero/natalie.webp'],
  },
}

export default function Home() {
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
      'https://tiktok.com/@nataliezimmermann',
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
      'https://tiktok.com/@nataliezimmermann',
    ],
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Wie kann man Natalie Zimmermann erreichen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Sie erreichen Natalie Zimmermann über das Kontaktformular auf nataliezimmermann.de, per E-Mail an info@nataliezimmermann.de oder telefonisch unter 040 / 53790578. Das Body & Mind Studio befindet sich in der Rothenbaumchaussee 156, 20149 Hamburg.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was kostet eine Stunde Personal Training in Hamburg bei Natalie Zimmermann?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Die Kosten für eine Stunde Personal Training bei Body & Mind by Natalie Zimmermann variieren je nach individuellen Bedürfnissen, Trainingsumfang und Zielen. Für ein maßgeschneidertes Angebot kontaktieren Sie uns bitte direkt.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie verläuft die Terminvergabe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Nehmen Sie Kontakt über das Kontaktformular oder telefonisch unter 040 / 53790578 auf und vereinbaren Sie flexibel Ihren Wunschtermin. Wir passen uns Ihrem Zeitplan an.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wo findet das Training statt?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Das Training findet im Body & Mind Studio in Hamburg-Harvestehude statt – einer Jugendstilvilla in der Rothenbaumchaussee 156, 20149 Hamburg. Zusätzlich bieten wir Online-Coaching und Online-Training an.',
        },
      },
      {
        '@type': 'Question',
        name: 'Welche Trainingsarten bietet Natalie Zimmermann an?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Wir bieten Boxen, Kickboxen, Personal Training, Mental Coaching (u. a. Wingwave), Massagen, Physiotherapie, Manuelle Therapie, Faszientraining und Lu Jong Yoga. Jedes Training wird individuell angepasst.',
        },
      },
      {
        '@type': 'Question',
        name: 'Muss ich Vorkenntnisse für Boxen oder Personal Training haben?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Nein, Vorkenntnisse sind nicht erforderlich. Das Training wird an Ihr individuelles Fitnesslevel angepasst – sowohl für Anfänger als auch für Fortgeschrittene.',
        },
      },
      {
        '@type': 'Question',
        name: 'Bietet Natalie Zimmermann Wingwave Coaching in Hamburg an?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Ja. Natalie Zimmermann ist Mental Coach mit Schwerpunkt Wingwave und bietet Wingwave Coaching im Body & Mind Studio in Hamburg-Harvestehude an (Rothenbaumchaussee 156, 20149 Hamburg). Wingwave ist eine neurobiologisch fundierte Methode zur schnellen Lösung emotionaler Blockaden und Stress — kombiniert mit Personal Training und Physiotherapie. Kontakt: info@nataliezimmermann.de oder 040 / 53790578.',
        },
      },
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
      <Aboutus />
      <UberMich />
      <Flow />
      <Recovery />
      <Dedicated />
      <Digital />
      <Beliefs />
      <Team />
      <Featured />
      <Manage />
      <FAQ />
      <Testimonial />
      <Articles />
      <Presse />
      <Join />
      <Insta />
      <script
        type='application/ld+json'
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
      <script
        type='application/ld+json'
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
      />
      <script
        type='application/ld+json'
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type='application/ld+json'
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </main>
  )
}
