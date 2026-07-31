'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { useTranslations } from 'next-intl'
import VideoGallery from './VideoGallery'

const PRESS_IMAGES = [
  '/images/articles/nat1.webp',
  '/images/articles/nat2.webp',
  '/images/articles/nat3.webp',
] as const

const PRESS_LINKS = [
  'https://www.ndr.de/fernsehen/sendungen/hamburg_journal/Hamburgerin-Natalie-Zimmermann-boxt-um-WBO-WM-Titel,hamj157910.html',
  '#',
  '#',
] as const

const CATEGORY_STYLES = [
  { icon: 'mdi:television', accent: 'text-brand-blue border-brand-blue/30 bg-brand-blue-light/50' },
  { icon: 'mdi:newspaper-variant', accent: 'text-brand-purple border-brand-purple/30 bg-brand-purple-light/50' },
  { icon: 'mdi:radio', accent: 'text-brand-red border-brand-red/30 bg-brand-red-light/50' },
] as const

function PressSubheading({
  icon,
  title,
  reduceMotion,
}: {
  icon: string
  title: string
  reduceMotion: boolean | null
}) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: reduceMotion ? 0.15 : 0.45 }}
      className='mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4'
    >
      <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-white shadow-[var(--shadow-sm)]'>
        <Icon icon={icon} className='text-2xl text-accent-cyan' aria-hidden />
      </div>
      <h3 className='text-[clamp(1.5rem,4vw+0.5rem,2.25rem)] font-normal tracking-tight text-text-primary md:text-4xl font-display text-balance'>
        {title}
      </h3>
    </motion.div>
  )
}

const Presse = () => {
  const t = useTranslations('presse')
  const reduceMotion = useReducedMotion()
  const motionOff = reduceMotion ?? false

  const fadeUp = motionOff
    ? { initial: false as const, transition: { duration: 0.15 } }
    : {
        initial: { opacity: 0, y: 20 },
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
      }

  const categories = Object.values(
    t.raw('categories') as Record<string, { name: string }>
  ).map((category, i) => ({
    ...category,
    ...CATEGORY_STYLES[i],
  }))

  const articlesRaw = t.raw('articles') as Record<
    string,
    { title: string; source: string; date: string; category: string }
  >

  const pressArticles = Object.values(articlesRaw).map((article, i) => ({
    id: i + 1,
    ...article,
    image: PRESS_IMAGES[i],
    link: PRESS_LINKS[i],
    isLive: PRESS_LINKS[i] !== '#',
  }))

  return (
    <section
      id='Presse'
      className='page-section-top overflow-hidden bg-grain bg-grey pb-16 md:pb-20 lg:pb-24'
    >
      <div className='container mx-auto max-w-7xl px-4'>
        <motion.div
          {...fadeUp}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mb-12 text-center md:mb-16'
        >
          <p className='section-eyebrow'>{t('eyebrow')}</p>
          <h2 className='mb-6 text-[clamp(1.875rem,5.5vw+0.75rem,3.75rem)] font-normal leading-[0.98] tracking-tight text-text-primary md:text-5xl lg:text-6xl font-display text-balance'>
            {t('title')}
          </h2>
          <p className='copy-prose mx-auto max-w-3xl text-base leading-relaxed text-text-secondary md:text-lg text-pretty'>
            {t('description')}
          </p>
        </motion.div>

        <motion.div
          initial={motionOff ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: motionOff ? 0.15 : 0.45, delay: motionOff ? 0 : 0.08 }}
          className='mobile-chip-scroll mb-12 justify-start sm:justify-center'
        >
          {categories.map((category) => (
            <div
              key={category.name}
              className={`inline-flex min-h-11 shrink-0 items-center gap-2 rounded-xl border px-4 py-2.5 shadow-[var(--shadow-xs)] sm:px-5 ${category.accent}`}
            >
              <Icon icon={category.icon} className='text-xl' aria-hidden />
              <span className='text-sm font-semibold text-text-primary'>{category.name}</span>
            </div>
          ))}
        </motion.div>

        <div className='mb-16 md:mb-20'>
          <PressSubheading
            icon='mdi:television'
            title={t('videosSectionTitle')}
            reduceMotion={reduceMotion}
          />
          <VideoGallery />
          <p className='mt-6 flex items-center justify-center gap-2 text-center text-sm text-text-secondary md:text-base'>
            <Icon icon='mdi:information-outline' className='text-accent-cyan text-lg' aria-hidden />
            {t('videosScrollHint')}
          </p>
        </div>

        <div className='mb-12'>
          <PressSubheading
            icon='mdi:newspaper-variant'
            title={t('printSectionTitle')}
            reduceMotion={reduceMotion}
          />

          <ul className='grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3' role='list'>
            {pressArticles.map((article, index) => {
              const cardInner = (
                <>
                  <div className='relative h-48 overflow-hidden md:h-56'>
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className={`object-cover transition-transform duration-300 motion-reduce:transform-none ${
                        article.isLive ? 'group-hover:scale-[1.03] group-focus-visible:scale-[1.03]' : ''
                      }`}
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    />
                    <div
                      className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent'
                      aria-hidden
                    />
                    <div
                      className='pointer-events-none absolute inset-0 outline outline-1 outline-offset-[-1px] outline-black/10'
                      aria-hidden
                    />
                    <div className='absolute right-4 top-4'>
                      <span className='font-telemetry rounded-lg bg-white/95 px-2.5 py-1 text-[10px] font-semibold text-brand-purple shadow-sm'>
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className='flex flex-1 flex-col p-6'>
                    <p className='mb-2 font-telemetry text-[10px] uppercase tracking-wider text-text-muted sm:text-[11px]'>
                      {article.source} · <span className='tabular-nums'>{article.date}</span>
                    </p>
                    <h4 className='mb-3 line-clamp-3 text-lg font-semibold leading-snug text-text-primary transition-colors duration-200 group-hover:text-accent-cyan md:text-xl'>
                      {article.title}
                    </h4>
                    {article.isLive ? (
                      <span className='mt-auto inline-flex items-center gap-2 text-sm font-semibold text-accent-cyan'>
                        {t('readArticle')}
                        <Icon
                          icon='mdi:arrow-right'
                          className='text-lg transition-transform duration-200 group-hover:translate-x-0.5'
                          aria-hidden
                        />
                      </span>
                    ) : (
                      <span className='mt-auto text-sm font-medium text-text-muted'>{t('comingSoon')}</span>
                    )}
                  </div>
                </>
              )

              return (
                <motion.li
                  key={article.id}
                  initial={motionOff ? false : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: motionOff ? 0.15 : 0.4,
                    delay: motionOff ? 0 : Math.min(index * 0.05, 0.15),
                  }}
                  className='h-full'
                >
                  {article.isLive ? (
                    <a
                      href={article.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-md)] transition-[border-color,box-shadow] duration-200 hover:border-accent-cyan/35 hover:shadow-[var(--shadow-card-lift)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2'
                    >
                      {cardInner}
                    </a>
                  ) : (
                    <div
                      className='flex h-full flex-col overflow-hidden rounded-2xl border border-dashed border-border bg-white/80 opacity-90'
                      aria-disabled
                    >
                      {cardInner}
                    </div>
                  )}
                </motion.li>
              )
            })}
          </ul>
        </div>

        <motion.div
          initial={motionOff ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: motionOff ? 0.15 : 0.45 }}
          className='mt-12'
        >
          <div className='section-cta-brand'>
            <div className='section-cta-brand-inner py-10 md:py-12'>
              <div className='section-cta-brand-glow' aria-hidden />
              <div className='relative z-10 max-w-2xl'>
                <p className='section-eyebrow section-eyebrow--on-dark mb-3'>{t('featured.badge')}</p>
                <h3 className='mb-4 text-3xl font-normal text-white md:text-4xl font-display text-balance'>
                  {t('featured.title')}
                </h3>
                <p className='mb-8 text-base leading-relaxed text-white/90 md:text-lg text-pretty'>
                  {t('featured.description')}
                </p>
                <a
                  href='https://www.ndr.de/fernsehen/sendungen/hamburg_journal/Hamburgerin-Natalie-Zimmermann-boxt-um-WBO-WM-Titel,hamj157910.html'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn-brand-gradient inline-flex min-h-12 items-center justify-center gap-2'
                >
                  {t('featured.cta')}
                  <Icon icon='mdi:arrow-right' className='text-xl' aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Presse
