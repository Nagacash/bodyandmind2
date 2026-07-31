'use client'

import type { ReactNode } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { ROUTES } from '@/app/data/routes'
import { SITE_URL } from '@/app/data/site'

const AWARD_KEYS = ['0', '1', '2', '3', '4', '5', '6', '7'] as const
const SERVICE_KEYS = ['0', '1', '2', '3', '4', '5'] as const
const TROPHY_AWARD_KEYS = new Set(['0', '1', '2'])

const linkClassName =
  'font-semibold text-accent-cyan transition-colors duration-200 hover:text-accent-cyan-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2'

function AboutSection({
  id,
  heading,
  headerImage,
  children,
}: {
  id: string
  heading: string
  headerImage?: { src: string; alt: string }
  children: ReactNode
}) {
  return (
    <section
      id={id}
      className='border-t border-border pt-10 first:border-t-0 first:pt-0 md:pt-12'
      aria-labelledby={`${id}-heading`}
    >
      {headerImage ? (
        <div className='relative mb-6 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-grey shadow-[var(--shadow-sm)] md:mb-8'>
          <Image
            src={headerImage.src}
            alt={headerImage.alt}
            fill
            className='object-cover object-center'
            sizes='(max-width: 1024px) 100vw, 640px'
          />
          <div
            className='pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-purple/25 via-transparent to-brand-blue/10'
            aria-hidden
          />
        </div>
      ) : null}
      <h2
        id={`${id}-heading`}
        className='mb-5 text-3xl font-normal tracking-tight text-text-primary md:text-4xl font-display text-balance'
      >
        {heading}
      </h2>
      {children}
    </section>
  )
}

export default function AboutMePage() {
  const t = useTranslations('aboutMe')

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t('meta.breadcrumbHome'), item: SITE_URL },
      {
        '@type': 'ListItem',
        position: 2,
        name: t('meta.breadcrumbCurrent'),
        item: `${SITE_URL}/about-me`,
      },
    ],
  }

  const aboutPageLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    url: `${SITE_URL}/about-me`,
    name: t('meta.title'),
    inLanguage: 'de-DE',
    mainEntity: { '@id': `${SITE_URL}#person` },
    isPartOf: { '@id': `${SITE_URL}#website` },
  }

  return (
    <main className='page-section-top bg-grain bg-light pb-20 md:pb-28'>
      <div className='container mx-auto max-w-7xl px-4'>
        <Link href={ROUTES.home} className='btn-back mt-6 md:mt-8'>
          <Icon icon='mdi:arrow-left' className='text-lg' aria-hidden />
          {t('backHome')}
        </Link>

        <div className='mt-10 grid gap-12 lg:grid-cols-12 lg:gap-14 lg:mt-12'>
          <div className='lg:col-span-5'>
            <div className='lg:sticky lg:top-[calc(5.5rem+env(safe-area-inset-top,0px))]'>
              <p className='section-eyebrow'>{t('eyebrow')}</p>
              <div className='relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-blue via-brand-red to-brand-purple p-[2px] shadow-[var(--shadow-card-lift)]'>
                <div className='relative aspect-[4/5] w-full overflow-hidden rounded-[calc(1rem-2px)] bg-grey'>
                  <Image
                    src='/images/new/beach3.webp'
                    alt='Natalie Zimmermann – Box-Weltmeisterin, Mental Coach & Personal Trainerin in Hamburg'
                    fill
                    className='object-cover object-[center_15%]'
                    sizes='(max-width: 1024px) 100vw, 40vw'
                    priority
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-brand-purple/35 via-transparent to-transparent' />
                </div>
              </div>
              <p className='font-telemetry mt-4 text-[10px] text-text-muted sm:text-[11px]'>
                {t('recordLabel')}
              </p>
            </div>
          </div>

          <article className='lg:col-span-7'>
            <header className='mb-10 md:mb-12'>
              <h1 className='mb-5 text-4xl font-normal leading-[0.98] tracking-tight text-text-primary md:text-5xl lg:text-6xl font-display text-balance'>
                {t('title')}
              </h1>
              <div className='copy-prose max-w-none space-y-4 text-base leading-relaxed text-text-secondary md:text-lg'>
                <p className='font-medium text-text-primary'>{t('intro.0')}</p>
                <p>{t('intro.1')}</p>
              </div>
            </header>

            <div className='space-y-10 md:space-y-12'>
              <AboutSection id='career' heading={t('careerHeading')}>
                <div className='copy-prose max-w-none space-y-4 text-base leading-relaxed text-text-secondary md:text-lg'>
                  <p>{t('career.0')}</p>
                  <p>{t('career.1')}</p>
                </div>
              </AboutSection>

              <AboutSection id='awards' heading={t('awardsHeading')}>
                <ul className='space-y-2.5' role='list'>
                  {AWARD_KEYS.map((key) => {
                    const isTrophy = TROPHY_AWARD_KEYS.has(key)
                    return (
                      <li
                        key={key}
                        className={`flex gap-3 rounded-xl border px-4 py-3 text-sm leading-snug md:text-base ${
                          isTrophy
                            ? 'border-brand-red/25 bg-brand-red-light/40 text-text-primary'
                            : 'border-border bg-white text-text-secondary'
                        }`}
                      >
                        <Icon
                          icon={isTrophy ? 'mdi:trophy-variant' : 'mdi:check-circle-outline'}
                          className={`mt-0.5 shrink-0 text-lg ${isTrophy ? 'text-brand-red' : 'text-accent-cyan'}`}
                          aria-hidden
                        />
                        <span className={isTrophy ? 'font-semibold' : undefined}>{t(`awards.${key}`)}</span>
                      </li>
                    )
                  })}
                </ul>
              </AboutSection>

              <AboutSection id='philosophy' heading={t('philosophyHeading')}>
                <div className='copy-prose max-w-none space-y-4 text-base leading-relaxed text-text-secondary md:text-lg'>
                  <p>{t('philosophy.0')}</p>
                  <p>{t('philosophy.1')}</p>
                </div>
              </AboutSection>

              <AboutSection
                id='services'
                heading={t('servicesHeading')}
                headerImage={{
                  src: '/images/new/beach1.webp',
                  alt: 'Body & Mind Studio Hamburg – Training & Coaching',
                }}
              >
                <ul className='grid gap-2 sm:grid-cols-2' role='list'>
                  {SERVICE_KEYS.map((key) => (
                    <li
                      key={key}
                      className='rounded-xl border border-border bg-white px-4 py-3 text-sm leading-snug text-text-secondary md:text-base'
                    >
                      {t(`services.${key}`)}
                    </li>
                  ))}
                </ul>
                <p className='mt-5'>
                  <Link href={ROUTES.leistungen} className={linkClassName}>
                    {t('servicesCta')}
                    <Icon icon='mdi:arrow-right' className='ml-1 inline text-lg align-[-2px]' aria-hidden />
                  </Link>
                </p>
              </AboutSection>

              <AboutSection id='location' heading={t('locationHeading')}>
                <div className='copy-prose max-w-none space-y-4 text-base leading-relaxed text-text-secondary md:text-lg'>
                  <p>{t('location.0')}</p>
                  <p>
                    {t('location.1')}{' '}
                    <Link href={ROUTES.kontakt} className={linkClassName}>
                      {t('location.contactLink')}
                    </Link>
                    .
                  </p>
                </div>
                <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
                  <Link href={ROUTES.kontakt} className='btn-primary inline-flex min-h-12 items-center justify-center gap-2 px-6'>
                    {t('location.contactLink')}
                    <Icon icon='mdi:arrow-right' className='text-xl' aria-hidden />
                  </Link>
                  <Link href={ROUTES.philosophie} className='btn-secondary inline-flex min-h-12 items-center justify-center gap-2 px-6'>
                    <Icon icon='mdi:heart-pulse' className='text-xl' aria-hidden />
                    {t('philosophyCta')}
                  </Link>
                </div>
              </AboutSection>
            </div>
          </article>
        </div>
      </div>

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageLd) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </main>
  )
}
