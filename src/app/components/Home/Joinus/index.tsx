'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { useTranslations } from 'next-intl'
import { STUDIO_PRICING_URL, STUDIO_SITE_URL } from '@/app/data/site'

const Join = () => {
  const t = useTranslations('join')

  const pillars = Object.values(
    t.raw('pillars') as Record<string, { name: string; summary: string; path: string }>
  )

  return (
    <section id='Studio' className='overflow-hidden bg-light py-16 md:py-20 lg:py-24'>
      <div className='container mx-auto max-w-7xl px-4'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mx-auto max-w-5xl'
        >
          <div className='mx-auto max-w-3xl text-center'>
            <p className='section-eyebrow'>
              {t('eyebrow')}
            </p>
            <h2
              className={`mb-6 text-4xl font-normal text-text-primary md:text-5xl font-display text-balance`}
            >
              {t('title')}
            </h2>
            <p className='copy-prose mx-auto mb-10 text-base leading-relaxed text-text-secondary md:text-lg'>
              {t('description')}
            </p>
          </div>

          <div className='mb-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5'>
            {pillars.map((pillar) => (
              <a
                key={pillar.name}
                href={`${STUDIO_SITE_URL}${pillar.path}`}
                target='_blank'
                rel='noopener noreferrer'
                className='group flex h-full min-h-[13.5rem] flex-col rounded-2xl border border-border bg-grey p-6 text-left transition duration-300 hover:border-accent-cyan/40 hover:bg-accent-cyan/5 md:min-h-[15rem]'
              >
                <p className={`mb-3 shrink-0 text-xl font-normal text-text-primary font-display`}>
                  {pillar.name}
                </p>
                <p className='min-h-[4.5rem] flex-1 text-sm leading-relaxed text-text-secondary md:min-h-[5.25rem]'>
                  {pillar.summary}
                </p>
                <div className='mt-auto flex min-h-[3rem] items-center border-t border-border/70 pt-4'>
                  <span className='inline-flex items-center gap-1 text-sm font-semibold text-accent-cyan transition-all group-hover:gap-2'>
                    body & mind
                    <Icon icon='mdi:arrow-right' className='shrink-0 text-lg' aria-hidden />
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className='mx-auto max-w-3xl rounded-3xl border border-border bg-grey p-8 text-center md:p-10'>
            <p className='mb-6 text-lg text-text-secondary'>{t('ctaPrompt')}</p>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
              <a
                href={STUDIO_SITE_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='btn-primary flex min-h-12 w-full items-center justify-center gap-2 px-4 py-3 text-center text-sm sm:text-base'
              >
                <span className='text-balance'>{t('ctaPrimary')}</span>
                <Icon icon='mdi:arrow-right' className='shrink-0 text-xl' aria-hidden />
              </a>
              <a
                href={STUDIO_PRICING_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='btn-secondary flex min-h-12 w-full items-center justify-center gap-2 px-4 py-3 text-center text-sm sm:text-base'
              >
                <span className='text-balance'>{t('ctaSecondary')}</span>
                <Icon icon='mdi:tag-outline' className='shrink-0 text-xl' aria-hidden />
              </a>
            </div>
            <p className='mt-6 text-sm text-text-muted'>{t('address')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Join
