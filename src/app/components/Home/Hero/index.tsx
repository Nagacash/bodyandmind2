'use client'

import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { useTranslations } from 'next-intl'
import { STUDIO_SITE_URL } from '@/app/data/site'
import { ROUTES } from '@/app/data/routes'

const AMAZON_BOOK_URL =
  'https://www.amazon.de/-/en/Mens-Health-Womens-Erfolgsgeheimnisse-Box-Weltmeisterin/dp/3613509911'

const QUICK_LINK_ICONS = ['mdi:account-circle', 'mdi:book-open-variant', 'mdi:phone'] as const
const QUICK_LINK_HREFS = [ROUTES.philosophie, AMAZON_BOOK_URL, ROUTES.kontakt] as const
const QUICK_LINK_EXTERNAL = [false, true, false] as const

const ease = [0.22, 1, 0.36, 1] as const

/** Logo-style spark (blue · red · purple) */
function HeroBrandSpark({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-end gap-[3px] ${className}`}
      aria-hidden
    >
      <span className='block h-3 w-[3px] -rotate-[28deg] rounded-full bg-brand-blue sm:h-3.5' />
      <span className='block h-4 w-[3px] -rotate-[28deg] rounded-full bg-brand-red sm:h-[18px]' />
      <span className='block h-3.5 w-[3px] -rotate-[28deg] rounded-full bg-brand-purple sm:h-4' />
    </span>
  )
}

const Hero = () => {
  const t = useTranslations('hero')
  const shouldReduceMotion = useReducedMotion()
  const motionOff = shouldReduceMotion

  const quickLinks = Object.values(
    t.raw('quickLinks') as Record<string, { label: string }>
  ).map((link, i) => ({
    ...link,
    icon: QUICK_LINK_ICONS[i],
    href: QUICK_LINK_HREFS[i],
    external: QUICK_LINK_EXTERNAL[i],
  }))

  const stats = Object.values(
    t.raw('stats') as Record<string, { value: string; label: string }>
  )

  return (
    <section
      id='Hero'
      className='hero-mesh relative z-10 overflow-hidden bg-grain pt-[calc(4.25rem+env(safe-area-inset-top,0px))] pb-20 sm:pb-24 md:flex md:min-h-[100dvh] md:items-center md:pb-28 md:py-20 lg:py-24 lg:pb-32'
    >
      <div className='pointer-events-none absolute inset-0 z-0 overflow-hidden' aria-hidden>
        <div className='absolute inset-0 bg-gradient-to-br from-white via-[#f7f8fa] to-brand-purple-light/25' />
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_100%_0%,rgba(56,192,240,0.14),transparent_52%)]' />
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_0%_100%,rgba(84,12,80,0.16),transparent_55%)]' />
        <div className='absolute inset-0 bg-[linear-gradient(105deg,transparent_42%,rgba(232,24,64,0.05)_50%,transparent_58%)]' />
        <div className='absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(20,26,31,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(20,26,31,0.06)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_85%_75%_at_50%_35%,black,transparent)]' />
      </div>

      <div className='container relative z-10 mx-auto max-w-7xl px-4'>
        <div className='flex min-w-0 flex-col gap-10 sm:gap-8 lg:flex-row lg:items-center lg:gap-12 xl:gap-16'>
          <motion.div
            initial={motionOff ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: motionOff ? 0.2 : 0.75, ease }}
            className='order-2 w-full min-w-0 lg:order-2 lg:w-1/2'
          >
            <div className='group relative mx-auto w-full max-w-[min(100%,28rem)] max-lg:mb-2 lg:max-w-none'>
              <div
                className='pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-red/25 via-brand-purple/15 to-brand-blue/20 opacity-90 blur-xl transition-opacity duration-500 group-hover:opacity-100 sm:-inset-4'
                aria-hidden
              />

              <div className='relative rounded-[1.75rem] bg-gradient-to-br from-brand-blue via-brand-red to-brand-purple p-[2px] shadow-[var(--shadow-card-lift)] sm:rounded-3xl'>
                <div className='relative aspect-[4/5] w-full overflow-hidden rounded-[calc(1.75rem-2px)] bg-light sm:aspect-[5/6] sm:rounded-[calc(1.5rem-2px)] md:aspect-[4/5] lg:aspect-auto lg:h-[min(72vh,650px)] lg:max-h-[650px]'>
                  <Image
                    src='/images/hero/lind3.webp'
                    alt={t('imageAlt')}
                    fill
                    className='object-cover object-[center_12%] transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:group-hover:scale-100'
                    priority
                    sizes='(max-width: 1024px) min(100vw - 2rem, 28rem), 50vw'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-brand-purple/45 via-transparent to-brand-blue/[0.08] mix-blend-multiply' />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent' />

                  <div className='absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-2 md:bottom-5 md:left-5 md:right-5'>
                    <span className='font-telemetry inline-flex items-center gap-2 rounded-xl bg-white/95 px-3 py-2 text-[11px] font-semibold text-text-primary shadow-md backdrop-blur-sm ring-1 ring-black/5 sm:text-xs'>
                      <Icon icon='mdi:trophy-variant' className='text-lg text-brand-purple' aria-hidden />
                      {t('badgePhoto')}
                    </span>
                    <span className='inline-flex rounded-xl bg-gradient-to-r from-brand-blue via-brand-red to-brand-purple px-3 py-2 text-xs font-bold tabular-nums text-white shadow-md backdrop-blur-sm lg:hidden'>
                      {t('badgeYearsMobile')}
                    </span>
                  </div>
                </div>
              </div>

              <motion.div
                initial={motionOff ? false : { opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: motionOff ? 0 : 0.45, ease }}
                className='absolute -bottom-4 -left-4 z-10 hidden rounded-2xl border border-white/60 bg-white/95 p-4 shadow-[var(--shadow-card-lift)] backdrop-blur-md lg:block'
              >
                <div className='flex items-center gap-3'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple text-white'>
                    <Icon icon='mdi:trophy-variant' className='text-2xl' aria-hidden />
                  </div>
                  <div>
                    <p className='font-telemetry text-[10px] font-medium text-text-secondary'>
                      {t('floatingCardOrg')}
                    </p>
                    <p className='text-sm font-semibold text-text-primary'>{t('floatingCardTitle')}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={motionOff ? false : { opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: motionOff ? 0 : 0.52, ease }}
                className='absolute -right-4 -top-4 z-10 hidden rounded-2xl bg-gradient-to-br from-brand-blue via-brand-red to-brand-purple p-4 shadow-[var(--shadow-card-lift)] lg:block'
              >
                <p className='mb-1 font-display text-2xl font-normal tabular-nums text-white'>{t('floatingCardYears')}</p>
                <p className='font-telemetry text-[10px] text-white/85'>{t('floatingCardYearsLabel')}</p>
              </motion.div>
            </div>
          </motion.div>

          <div className='relative z-20 order-1 w-full min-w-0 text-center lg:order-1 lg:w-1/2 lg:text-left'>
            <motion.div
              initial={motionOff ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: motionOff ? 0.2 : 0.65, delay: motionOff ? 0 : 0.12, ease }}
              className='mb-4 inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-white/90 px-4 py-2 text-sm font-semibold text-text-primary shadow-sm backdrop-blur-md md:mb-6 md:text-base'
            >
              <HeroBrandSpark />
              <Icon icon='mdi:trophy' className='text-lg text-brand-red' aria-hidden />
              <span className='font-telemetry text-xs text-brand-purple sm:text-sm'>{t('badge')}</span>
            </motion.div>

            <div className='mb-3 flex justify-center gap-1 lg:justify-start' aria-hidden>
              <span className='h-1 w-10 rounded-full bg-brand-blue' />
              <span className='h-1 w-10 rounded-full bg-brand-red' />
              <span className='h-1 w-10 rounded-full bg-brand-purple' />
            </div>

            <motion.h1
              initial={motionOff ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: motionOff ? 0.2 : 0.7, delay: motionOff ? 0 : 0.18, ease }}
              className={`mb-4 font-display text-[clamp(2rem,8vw,2.75rem)] font-normal leading-[0.98] tracking-tight text-text-primary sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl xl:text-7xl text-balance`}
            >
              {t('title')}
            </motion.h1>

            <motion.p
              initial={motionOff ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: motionOff ? 0.2 : 0.6, delay: motionOff ? 0 : 0.24, ease }}
              className='relative z-10 mx-auto mb-4 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg lg:mx-0'
            >
              {t('subtitle')}
            </motion.p>

            <motion.p
              initial={motionOff ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: motionOff ? 0.2 : 0.6, delay: motionOff ? 0 : 0.28, ease }}
              className='relative z-10 mx-auto mb-6 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg md:mb-8 lg:mx-0'
            >
              {t('subtitle2')}
            </motion.p>

            <motion.div
              initial={motionOff ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: motionOff ? 0.2 : 0.6, delay: motionOff ? 0 : 0.3, ease }}
              className='mb-6 grid w-full grid-cols-1 gap-3 sm:grid-cols-3 lg:max-w-none'
            >
              <Link
                href='/kontakt'
                className='btn-primary flex min-h-12 w-full items-center justify-center gap-2 px-4 py-3 text-center text-sm sm:text-base'
              >
                <Icon icon='mdi:calendar-check' className='shrink-0 text-xl' aria-hidden />
                <span className='text-balance'>{t('ctaPrimary')}</span>
              </Link>
              <a
                href={STUDIO_SITE_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='btn-brand-gradient flex min-h-12 w-full items-center justify-center gap-2 px-4 py-3 text-center text-sm sm:text-base'
              >
                <Icon icon='mdi:dumbbell' className='shrink-0 text-xl' aria-hidden />
                <span className='text-balance'>{t('ctaStudio')}</span>
              </a>
              <Link
                href={ROUTES.philosophie}
                className='btn-secondary flex min-h-12 w-full items-center justify-center gap-2 px-4 py-3 text-center text-sm sm:text-base'
              >
                <Icon icon='mdi:heart-pulse' className='shrink-0 text-xl' aria-hidden />
                <span className='text-balance'>{t('ctaSecondary')}</span>
              </Link>
            </motion.div>

            <motion.div
              initial={motionOff ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: motionOff ? 0.2 : 0.55, delay: motionOff ? 0 : 0.36, ease }}
              className='mb-8 flex flex-wrap justify-center gap-x-5 gap-y-2 lg:justify-start'
            >
              {quickLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex min-h-11 items-center gap-2 text-sm text-text-secondary transition-colors duration-200 hover:text-brand-purple md:text-base'
                  >
                    <Icon icon={link.icon} className='shrink-0 text-lg' aria-hidden />
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className='inline-flex min-h-11 items-center gap-2 text-sm text-text-secondary transition-colors duration-200 hover:text-brand-purple md:text-base'
                  >
                    <Icon icon={link.icon} className='shrink-0 text-lg' aria-hidden />
                    {link.label}
                  </Link>
                )
              )}
            </motion.div>

            <motion.div
              initial={motionOff ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: motionOff ? 0.2 : 0.55, delay: motionOff ? 0 : 0.42, ease }}
              className='mx-auto mt-2 grid max-w-md grid-cols-3 gap-px overflow-hidden rounded-sm border border-border bg-border shadow-sm lg:mx-0'
            >
              {stats.map((item, index) => {
                const isChampion = index === 2
                const valueClass = isChampion
                  ? 'text-brand-red'
                  : index === 0
                    ? 'text-brand-blue'
                    : 'text-text-primary'
                return (
                  <div
                    key={item.label}
                    className={`min-w-0 bg-white/95 px-2 py-3 text-center tabular-nums sm:px-3 sm:py-4 lg:text-left ${isChampion ? 'bg-brand-red/[0.04]' : ''}`}
                  >
                    <p className={`mb-1 font-display text-2xl font-normal sm:text-3xl md:text-4xl ${valueClass}`}>
                      {item.value}
                    </p>
                    <p
                      className={`font-telemetry text-[11px] leading-snug sm:text-xs ${isChampion ? 'text-brand-red' : 'text-text-muted'}`}
                    >
                      {item.label}
                    </p>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: motionOff ? 0 : 0.7 }}
          className='mt-8 flex justify-center lg:absolute lg:bottom-20 lg:left-1/2 lg:mt-0 lg:-translate-x-1/2 xl:bottom-24'
        >
          <button
            type='button'
            onClick={() => {
              document.getElementById('About')?.scrollIntoView({
                behavior: shouldReduceMotion ? 'auto' : 'smooth',
              })
            }}
            className='flex min-h-11 cursor-pointer flex-col items-center gap-1 rounded-lg px-3 py-2 text-text-secondary transition-colors duration-200 hover:text-brand-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2'
            aria-label={t('scrollAria')}
          >
            <HeroBrandSpark className='mb-0.5 opacity-90' />
            <span className='section-eyebrow mb-0 sm:text-sm'>
              {t('scrollLabel')}
            </span>
            <motion.span
              animate={shouldReduceMotion ? undefined : { y: [0, 6, 0] }}
              transition={
                shouldReduceMotion
                  ? undefined
                  : { duration: 2, repeat: Infinity, ease: 'easeInOut' }
              }
              className='inline-flex'
            >
              <Icon icon='mdi:chevron-down' className='text-2xl' aria-hidden />
            </motion.span>
          </button>
        </motion.div>
      </div>

      <div
        className='pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-40 sm:h-44 md:h-52'
        aria-hidden
      >
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white' />
        <svg
          className='absolute bottom-0 left-0 h-12 w-full text-white sm:h-14 md:h-16'
          viewBox='0 0 1440 56'
          preserveAspectRatio='none'
          aria-hidden
        >
          <path
            fill='currentColor'
            d='M0,36 C320,56 520,12 720,34 C920,56 1120,10 1440,32 L1440,56 L0,56 Z'
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero
