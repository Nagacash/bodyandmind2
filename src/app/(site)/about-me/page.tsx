import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'

const SITE_URL = 'https://www.nataliezimmermann.de'

export const metadata: Metadata = {
  title:
    'Über Natalie Zimmermann – Box-Weltmeisterin, Mental Coach & Personal Trainerin Hamburg',
  description:
    'Lernen Sie Natalie Zimmermann kennen: Profibox-Weltmeisterin 2023, Speakerin, Mental Coach, Physiotherapeutin und Personal Trainerin in Hamburg-Harvestehude. Ihr Werdegang, ihre Philosophie und ihre Mission.',
  keywords: [
    'Natalie Zimmermann Biografie',
    'Über Natalie Zimmermann',
    'Box Weltmeisterin Hamburg',
    'Profiboxerin Deutschland',
    'Mental Coach Hamburg',
    'Personal Trainerin Hamburg',
    'Physiotherapeutin Hamburg',
    'Speakerin Hamburg',
  ],
  alternates: { canonical: '/about-me' },
  openGraph: {
    type: 'profile',
    locale: 'de_DE',
    url: `${SITE_URL}/about-me`,
    title:
      'Über Natalie Zimmermann – Box-Weltmeisterin, Mental Coach & Personal Trainerin',
    description:
      'Profibox-Weltmeisterin 2023, Speakerin, Mental Coach und Personal Trainerin in Hamburg. Erfahren Sie mehr über ihren Werdegang und ihre Philosophie.',
    images: [
      {
        url: '/images/aboutus/NatalieZimmermann3.webp',
        width: 1200,
        height: 630,
        alt: 'Natalie Zimmermann – Profibox-Weltmeisterin & Mental Coach',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Über Natalie Zimmermann – Box-Weltmeisterin & Mental Coach Hamburg',
    description:
      'Profibox-Weltmeisterin 2023, Speakerin, Mental Coach und Personal Trainerin in Hamburg.',
    images: ['/images/aboutus/NatalieZimmermann3.webp'],
  },
}

export default function AboutMePage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Start', item: SITE_URL },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Über Mich',
        item: `${SITE_URL}/about-me`,
      },
    ],
  }

  const aboutPageLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    url: `${SITE_URL}/about-me`,
    name: 'Über Natalie Zimmermann',
    inLanguage: 'de-DE',
    mainEntity: { '@id': `${SITE_URL}#person` },
    isPartOf: { '@id': `${SITE_URL}#website` },
  }

  return (
    <main className='container mx-auto max-w-5xl px-4 py-16 md:py-24 lg:py-32'>
      <article className='prose prose-lg lg:prose-xl max-w-none'>
        <header className='mb-12'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
            Über Natalie Zimmermann – Box-Weltmeisterin, Mental Coach &amp;
            Personal Trainerin in Hamburg
          </h1>
          <p className='text-lg md:text-xl text-text-secondary font-medium'>
            Natalie Zimmermann ist WIBF- und WBF-Box-Weltmeisterin, Physiotherapeutin, Personal
            Trainerin, Mental Coach und Speakerin in Hamburg-Harvestehude — Leiterin des Body &amp;
            Mind Studios an der Rothenbaumchaussee 156.
          </p>
          <p className='text-lg md:text-xl text-text-secondary'>
            Profibox-Weltmeisterin (WIBF 2023/2024, WBF 2024), Physiotherapeutin, Personal
            Trainerin, Mental Coach und Speakerin — aus Hamburg-Harvestehude für ganz Deutschland.
          </p>
        </header>

        <section>
          <h2>Mein Werdegang</h2>
          <p>
            Seit meinem 20. Lebensjahr bin ich Leistungssportlerin und habe
            meine Leidenschaft zum Beruf gemacht. Mit fast 20 Jahren Erfahrung
            arbeite ich heute als Physiotherapeutin, Personal Fitness Trainerin
            und Mental Coach – mit eigenem Studio,{' '}
            <strong>Body &amp; Mind</strong>, in der Rothenbaumchaussee 156 in
            Hamburg-Harvestehude.
          </p>
          <p>
            Mit Mitte 30 habe ich mir meinen Traum erfüllt und den Weg ins
            Profiboxen eingeschlagen. <strong>2023 wurde ich Weltmeisterin</strong>
            {' '}im Profiboxen – ein Meilenstein, der zeigt, dass es nie zu spät
            ist, an sich zu glauben und große Ziele zu verwirklichen.
          </p>
        </section>

        <section>
          <h2>Auszeichnungen &amp; Qualifikationen</h2>
          <ul>
            <li>WIBF-Weltmeisterin Superleichtgewicht 2023</li>
            <li>WIBF-Weltmeisterin Leichtgewicht 2024</li>
            <li>WBF Intercontinental-Weltmeisterin 2024</li>
            <li>Examinierte Physiotherapeutin (Schwerpunkt Manuelle Therapie)</li>
            <li>Zertifizierter Personal Fitness Trainer</li>
            <li>Mental Coach mit Schwerpunkt Wingwave</li>
            <li>Faszienexpertin und Lu Jong Yoga Lehrerin</li>
            <li>Über 22 Jahre Erfahrung im Kampfsport</li>
          </ul>
        </section>

        <section>
          <h2>Meine Philosophie</h2>
          <p>
            Mein Ansatz ist <strong>ganzheitlich</strong>: Körper, Geist und
            Lebensstil greifen ineinander. Echte Stärke entsteht, wenn
            körperliches Training, mentale Resilienz und eine klare innere
            Haltung zusammenkommen. Genau dort setzt mein Coaching an.
          </p>
          <p>
            Ob Personal Training, Mental Coaching, Boxen oder Vorträge – ich
            möchte Menschen inspirieren, ihre Komfortzone zu verlassen, ihre
            Blockaden aufzulösen und das Beste aus sich herauszuholen.
          </p>
        </section>

        <section>
          <h2>Leistungen im Body &amp; Mind Studio Hamburg</h2>
          <ul>
            <li>
              <strong>Personal Training in Hamburg</strong> – individuell
              geplant, für jedes Fitnesslevel.
            </li>
            <li>
              <strong>Mental Coaching &amp; Wingwave</strong> – mehr Fokus,
              weniger Stress, klare Ziele.
            </li>
            <li>
              <strong>Boxen &amp; Kickboxen</strong> – Technik, Kondition und
              mentale Stärke.
            </li>
            <li>
              <strong>Physiotherapie &amp; Manuelle Therapie</strong> – Therapie
              auf Leistungssport-Niveau.
            </li>
            <li>
              <strong>Lu Jong Yoga &amp; Faszientraining</strong> – Mobilität,
              Atmung, Regeneration.
            </li>
            <li>
              <strong>Speaker- und Markenbotschafter-Engagements</strong> –
              authentisch, motivierend, wirkungsvoll.
            </li>
          </ul>
        </section>

        <section>
          <h2>Standort: Hamburg-Harvestehude</h2>
          <p>
            Sie finden mich im{' '}
            <strong>Body &amp; Mind Studio, Rothenbaumchaussee 156, 20149
            Hamburg</strong>. Online-Coaching biete ich deutschlandweit an.
          </p>
          <p>
            Lust auf ein erstes Gespräch?{' '}
            <Link href='/kontakt' className='text-accent-cyan font-semibold'>
              Jetzt Kontakt aufnehmen
            </Link>
            .
          </p>
        </section>
      </article>

      <script
        type='application/ld+json'
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageLd) }}
      />
      <script
        type='application/ld+json'
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </main>
  )
}
