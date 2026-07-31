'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { useTranslations } from 'next-intl'
import { bebasNeue } from '@/app/fonts'
import { STUDIO_SITE_URL } from '@/app/data/site'
import ImageLightbox from '@/app/components/Common/ImageLightbox'

const PROMO_IMAGE = '/images/new/sommer-special-2026.webp'

const SummerSpecial = () => {
  const t = useTranslations('summerSpecial')
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id='SommerSpecial'
      aria-labelledby='summer-special-heading'
      className='relative z-20 overflow-hidden border-y border-accent-cyan/20 bg-gradient-to-b from-accent-cyan-light/50 via-white to-accent-cyan-light/30 py-10 md:py-14 lg:py-16'
    >
      <div
        className='pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(ellipse_80%_100%_at_50%_0%,rgba(55,190,240,0.12),transparent)]'
        aria-hidden
      />

      <div className='container relative mx-auto max-w-7xl px-4'>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.55, ease: [0.22, 1, 0.36, 1] }}
          className='mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12'
        >
          <div className='order-2 text-center lg:order-1 lg:text-left'>
            <p className='mb-2 text-sm font-bold uppercase tracking-widest text-accent-cyan'>
              {t('eyebrow')}
            </p>
            <h2
              id='summer-special-heading'
              className={`mb-3 text-3xl font-bold text-text-primary md:text-4xl ${bebasNeue.className} text-balance`}
            >
              {t('title')}
            </h2>
            <p className='mb-3 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg lg:mx-0 mx-auto'>
              {t('description')}
            </p>
            <p className='mb-6 text-sm font-semibold text-accent-cyan-dark'>{t('validUntil')}</p>

            <a
              href={STUDIO_SITE_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='btn-accent inline-flex min-h-12 items-center justify-center gap-2 px-8'
            >
              {t('cta')}
              <Icon icon='mdi:arrow-right' className='text-xl' aria-hidden />
            </a>
          </div>

          <div className='order-1 flex justify-center lg:order-2 lg:justify-end'>
            <div className='relative w-full max-w-[min(100%,22rem)] sm:max-w-sm lg:max-w-md'>
              <div
                className='absolute -inset-3 rounded-[1.35rem] bg-gradient-to-br from-accent-cyan/25 via-accent-cyan-light/40 to-transparent blur-sm'
                aria-hidden
              />
              <div className='relative rounded-2xl bg-white p-2 shadow-[var(--shadow-card-lift)] ring-1 ring-accent-cyan/15'>
                <ImageLightbox
                  src={PROMO_IMAGE}
                  alt={t('imageAlt')}
                  width={900}
                  height={1600}
                  caption={`${t('title')} · ${t('validUntil')}`}
                  className='w-full overflow-hidden rounded-xl ring-1 ring-black/[0.06]'
                  imageClassName='h-auto w-full'
                  sizes='(max-width: 640px) min(100vw - 3rem, 22rem), (max-width: 1024px) 20rem, 28rem'
                  footer={
                    <a
                      href={STUDIO_SITE_URL}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='btn-accent inline-flex min-h-11 w-full items-center justify-center gap-2 px-6 text-sm sm:text-base'
                    >
                      {t('cta')}
                      <Icon icon='mdi:arrow-right' className='text-lg' aria-hidden />
                    </a>
                  }
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SummerSpecial
