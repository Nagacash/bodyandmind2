'use client'

import { Link } from '@/i18n/routing'
import { Icon } from '@iconify/react'
import { motion, useReducedMotion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { ROUTES } from '@/app/data/routes'

const HUB_ITEMS: {
  linkKey: 'philosophie' | 'aboutMe' | 'studio' | 'leistungen' | 'stimmen' | 'faq' | 'presse' | 'kontakt'
  href: string
  icon: string
  accent: 'blue' | 'red' | 'purple'
}[] = [
  { linkKey: 'philosophie', href: ROUTES.philosophie, icon: 'mdi:heart-pulse', accent: 'purple' },
  { linkKey: 'aboutMe', href: ROUTES.aboutMe, icon: 'mdi:account-star', accent: 'blue' },
  { linkKey: 'studio', href: ROUTES.studio, icon: 'mdi:dumbbell', accent: 'red' },
  { linkKey: 'leistungen', href: ROUTES.leistungen, icon: 'mdi:view-grid-outline', accent: 'blue' },
  { linkKey: 'stimmen', href: ROUTES.stimmen, icon: 'mdi:format-quote-close', accent: 'purple' },
  { linkKey: 'faq', href: ROUTES.faq, icon: 'mdi:help-circle-outline', accent: 'blue' },
  { linkKey: 'presse', href: ROUTES.presse, icon: 'mdi:newspaper-variant-outline', accent: 'red' },
  { linkKey: 'kontakt', href: ROUTES.kontakt, icon: 'mdi:email-outline', accent: 'purple' },
]

const ACCENT_BAR: Record<(typeof HUB_ITEMS)[number]['accent'], string> = {
  blue: 'bg-brand-blue',
  red: 'bg-brand-red',
  purple: 'bg-brand-purple',
}

const SectionHub = () => {
  const t = useTranslations('pages.hub')
  const reduceMotion = useReducedMotion()

  return (
    <section
      id='Explore'
      className='relative border-t border-border bg-grain bg-grey py-16 md:py-20 lg:py-24'
      aria-labelledby='section-hub-title'
    >
      <div
        className='pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent'
        aria-hidden
      />
      <div className='container relative mx-auto max-w-7xl px-4'>
        <div className='mb-12 flex flex-col gap-6 md:mb-14 lg:flex-row lg:items-end lg:justify-between'>
          <div className='max-w-2xl lg:text-left'>
            <p className='section-eyebrow'>{t('eyebrow')}</p>
            <h2
              id='section-hub-title'
              className='mb-4 text-4xl font-normal leading-[0.95] tracking-tight text-text-primary md:text-5xl lg:text-6xl font-display text-balance'
            >
              {t('title')}
            </h2>
            <p className='max-w-prose text-lg leading-relaxed text-text-secondary text-pretty'>
              {t('subtitle')}
            </p>
          </div>
          <p className='font-telemetry hidden max-w-xs text-left text-[10px] leading-relaxed text-text-muted lg:block'>
            {t('indexHint')}
          </p>
        </div>

        <ol className='mx-auto grid max-w-4xl gap-2 md:gap-2.5'>
          {HUB_ITEMS.map((item, index) => {
            const indexLabel = String(index + 1).padStart(2, '0')
            const slug = item.href.replace(/^\//, '') || 'home'

            return (
              <li key={item.href}>
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: reduceMotion ? 0.15 : 0.4,
                    delay: reduceMotion ? 0 : Math.min(index * 0.035, 0.21),
                  }}
                >
                  <Link
                    href={item.href}
                    className='group relative flex min-h-[3.75rem] items-center gap-4 overflow-hidden rounded-xl border border-border/90 bg-white py-3 pl-5 pr-4 transition-[border-color,box-shadow,transform] duration-200 ease-out hover:border-brand-blue/35 hover:shadow-md active:scale-[0.995] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 md:min-h-[4.25rem] md:py-4 md:pl-6'
                  >
                    <span
                      className={`absolute bottom-0 left-0 top-0 w-1 ${ACCENT_BAR[item.accent]} opacity-80 transition-opacity duration-200 group-hover:opacity-100`}
                      aria-hidden
                    />
                    <span className='font-telemetry w-8 shrink-0 text-xs tabular-nums text-brand-purple'>
                      {indexLabel}
                    </span>
                    <Icon
                      icon={item.icon}
                      className='hidden shrink-0 text-xl text-accent-cyan sm:block'
                      aria-hidden
                    />
                    <span className='min-w-0 flex-1'>
                      <span className='block font-semibold text-text-primary transition-colors duration-200 group-hover:text-accent-cyan'>
                        {t(`links.${item.linkKey}`)}
                      </span>
                      <span className='font-telemetry mt-0.5 block truncate text-[10px] normal-case tracking-wider text-text-muted'>
                        /{slug}
                      </span>
                    </span>
                    <Icon
                      icon='mdi:arrow-right'
                      className='shrink-0 text-xl text-text-muted transition-[transform,color] duration-200 group-hover:translate-x-0.5 group-hover:text-accent-cyan'
                      aria-hidden
                    />
                  </Link>
                </motion.div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export default SectionHub
