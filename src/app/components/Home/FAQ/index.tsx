'use client'

import { useEffect, useMemo, useState } from 'react'
import { Icon } from '@iconify/react'
import { DisclosurePanel, DisclosureButton, Disclosure } from '@headlessui/react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

interface FAQItem {
  id: number
  question: string
  answer: string
  category?: string
}

const BAR_ACCENTS = ['bg-brand-blue', 'bg-brand-red', 'bg-brand-purple'] as const

const NUM_BADGE = [
  'bg-brand-blue/10 text-brand-blue',
  'bg-brand-red/10 text-brand-red',
  'bg-brand-purple/10 text-brand-purple',
] as const

const TAB_ACTIVE = [
  'border-brand-blue shadow-[var(--shadow-card-lift)]',
  'border-brand-red shadow-[var(--shadow-card-lift)]',
  'border-brand-purple shadow-[var(--shadow-card-lift)]',
] as const

const TAB_HOVER = [
  'hover:border-brand-blue/40',
  'hover:border-brand-red/40',
  'hover:border-brand-purple/40',
] as const

const MOBILE_ICON_BG = [
  'bg-brand-blue text-white',
  'bg-brand-red text-white',
  'bg-brand-purple text-white',
] as const

function BrandSpark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-end gap-[3px] ${className}`} aria-hidden>
      <span className='block h-3 w-[3px] -rotate-[28deg] rounded-full bg-brand-blue sm:h-3.5' />
      <span className='block h-4 w-[3px] -rotate-[28deg] rounded-full bg-brand-red sm:h-[18px]' />
      <span className='block h-3.5 w-[3px] -rotate-[28deg] rounded-full bg-brand-purple sm:h-4' />
    </span>
  )
}

function filterChipClass(active: boolean, variant: 'all' | number) {
  if (!active) return 'btn-chip btn-chip-idle'
  if (variant === 'all') {
    return 'btn-chip border-transparent bg-gradient-to-r from-brand-blue via-brand-red to-brand-purple text-white shadow-sm shadow-brand-purple/20'
  }
  const i = variant % 3
  const styles = [
    'btn-chip border-brand-blue bg-brand-blue text-white shadow-sm shadow-brand-blue/25',
    'btn-chip border-brand-red bg-brand-red text-white shadow-sm shadow-brand-red/25',
    'btn-chip border-brand-purple bg-brand-purple text-white shadow-sm shadow-brand-purple/25',
  ]
  return styles[i]
}

const FAQ = () => {
  const t = useTranslations('faq')
  const reduceMotion = useReducedMotion()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const faqData: FAQItem[] = useMemo(() => {
    const items = t.raw('items') as Record<
      string,
      { question: string; answer: string; category: string }
    >
    return Object.values(items).map((item, index) => ({
      id: index + 1,
      ...item,
    }))
  }, [t])

  const [desktopActiveId, setDesktopActiveId] = useState<number>(1)

  const playAudio = () => {
    const audio = new Audio('/sound/click.wav')
    audio.volume = 0.5
    audio.play()
  }

  const categories = useMemo(
    () =>
      Array.from(
        new Set(faqData.map((faq) => faq.category).filter((cat): cat is string => Boolean(cat)))
      ),
    [faqData]
  )

  const filteredFAQs = useMemo(
    () =>
      faqData.filter((faq) => {
        const matchesSearch =
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = !selectedCategory || faq.category === selectedCategory
        return matchesSearch && matchesCategory
      }),
    [faqData, searchQuery, selectedCategory]
  )

  useEffect(() => {
    if (filteredFAQs.length === 0) return
    setDesktopActiveId((id) =>
      filteredFAQs.some((f) => f.id === id) ? id : filteredFAQs[0].id
    )
  }, [filteredFAQs])

  const desktopActiveFaq =
    filteredFAQs.find((f) => f.id === desktopActiveId) ?? filteredFAQs[0]

  const linkClassName =
    'font-semibold text-brand-purple transition-colors duration-200 hover:text-brand-red focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2'

  return (
    <section
      id='FAQ'
      className='page-section-top relative overflow-hidden bg-grain bg-gradient-to-br from-brand-blue-light/30 via-light to-brand-purple-light/25 pb-16 md:pb-20 lg:pb-24'
    >
      <div
        className='pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-brand-blue/15 blur-3xl'
        aria-hidden
      />
      <div
        className='pointer-events-none absolute -left-20 bottom-1/4 h-56 w-56 rounded-full bg-brand-red/10 blur-3xl'
        aria-hidden
      />
      <div
        className='pointer-events-none absolute right-1/3 top-1/3 h-40 w-40 rounded-full bg-brand-purple/10 blur-3xl'
        aria-hidden
      />
      <div className='absolute inset-0 bg-[url("/images/faq/swirl.webp")] bg-no-repeat bg-right-bottom opacity-[0.07]' aria-hidden />

      <div className='container mx-auto max-w-7xl px-4 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12 md:mb-16'
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='section-eyebrow'
          >
            {t('eyebrow')}
          </motion.p>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0.15 : 0.6, delay: reduceMotion ? 0 : 0.15 }}
            className='mb-4 flex justify-center'
          >
            <BrandSpark />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-[clamp(1.875rem,5.5vw+0.75rem,3.75rem)] font-normal text-text-primary mb-6 font-display leading-[0.98]`}
          >
            {t('title')}
          </motion.h2>
          <div className='mb-6 flex justify-center gap-1' aria-hidden>
            <span className='h-1 w-10 rounded-full bg-brand-blue' />
            <span className='h-1 w-10 rounded-full bg-brand-red' />
            <span className='h-1 w-10 rounded-full bg-brand-purple' />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='mx-auto max-w-3xl text-base leading-relaxed text-text-secondary md:text-lg text-pretty'
          >
            {t('description')}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='mb-8 md:mb-12'
        >
          <div className='mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-brand-blue via-brand-red to-brand-purple p-[2px] shadow-[var(--shadow-card-lift)]'>
            <div className='rounded-[calc(1rem-2px)] bg-white p-4 md:p-5'>
            <div className='relative mb-6'>
              <Icon
                icon='mdi:magnify'
                className='absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-brand-purple'
                aria-hidden
              />
              <input
                type='text'
                placeholder={t('searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='input-field rounded-xl border-border/80 py-3.5 pl-12 pr-4 text-base focus-visible:border-brand-blue focus-visible:ring-brand-blue/20 md:py-4 md:text-lg'
              />
            </div>

            {categories.length > 0 && (
              <div className='mobile-chip-scroll justify-start sm:justify-center'>
                <button
                  type='button'
                  onClick={() => setSelectedCategory(null)}
                  className={filterChipClass(selectedCategory === null, 'all')}
                >
                  {t('filterAll')}
                </button>
                {categories.map((category, catIndex) => (
                  <button
                    type='button'
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={filterChipClass(selectedCategory === category, catIndex)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
            </div>
          </div>
        </motion.div>

        <div className='mx-auto max-w-6xl'>
          {filteredFAQs.length > 0 ? (
            <>
              <div className='hidden gap-10 lg:grid lg:grid-cols-12 lg:items-start'>
                <div className='lg:col-span-5'>
                  <p className='font-telemetry mb-3 text-[10px] text-brand-purple sm:text-[11px]'>
                    {t('selectTopic')}
                  </p>
                  <ul
                    className='max-h-[min(70vh,560px)] space-y-2 overflow-y-auto pr-1 [scrollbar-width:thin]'
                    role='tablist'
                    aria-label={t('questionsAria')}
                  >
                    {filteredFAQs.map((faq, index) => {
                      const active = faq.id === desktopActiveId
                      return (
                        <li key={faq.id}>
                          <button
                            type='button'
                            role='tab'
                            aria-selected={active}
                            onClick={() => {
                              playAudio()
                              setDesktopActiveId(faq.id)
                            }}
                            className={`relative flex w-full cursor-pointer overflow-hidden rounded-sm border-2 px-4 py-4 pl-5 text-left transition-[border-color,background-color,box-shadow] duration-200 ${
                              active
                                ? `bg-white ${TAB_ACTIVE[index % TAB_ACTIVE.length]}`
                                : `border-border/80 bg-white/60 ${TAB_HOVER[index % TAB_HOVER.length]} hover:bg-white`
                            }`}
                          >
                            <span
                              className={`absolute bottom-0 left-0 top-0 w-1 ${BAR_ACCENTS[index % BAR_ACCENTS.length]} ${active ? 'opacity-100' : 'opacity-50'}`}
                              aria-hidden
                            />
                            <span
                              className={`relative mr-3 mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-sm text-sm font-bold tabular-nums ${NUM_BADGE[index % NUM_BADGE.length]}`}
                            >
                              {String(index + 1).padStart(2, '0')}
                            </span>
                            <span className='min-w-0 flex-1'>
                              <span className='block font-semibold text-text-primary'>
                                {faq.question}
                              </span>
                              {faq.category ? (
                                <span className='mt-1 inline-block rounded-full bg-grey px-2 py-0.5 text-xs font-medium text-text-secondary'>
                                  {faq.category}
                                </span>
                              ) : null}
                            </span>
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <div className='lg:col-span-7'>
                  {desktopActiveFaq ? (
                    <motion.div
                      key={desktopActiveFaq.id}
                      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: reduceMotion ? 0.15 : 0.35 }}
                      className='rounded-3xl bg-gradient-to-br from-brand-blue via-brand-red to-brand-purple p-[2px] shadow-[var(--shadow-card-lift)]'
                      role='tabpanel'
                    >
                      <div className='rounded-[calc(1.875rem-2px)] bg-white p-8 md:p-10'>
                        <div className='mb-4 flex items-center gap-2'>
                          <BrandSpark className='scale-90' />
                          <p className='section-eyebrow section-eyebrow--sub mb-0'>FAQ</p>
                        </div>
                        <h3 className='mb-4 text-2xl font-semibold text-text-primary md:text-3xl text-pretty'>
                          {desktopActiveFaq.question}
                        </h3>
                        <p className='copy-prose text-base leading-relaxed text-text-secondary md:text-lg'>
                          {desktopActiveFaq.answer}
                        </p>
                        {desktopActiveFaq.id === 1 && (
                          <Link href='/kontakt' className={`mt-6 inline-flex items-center gap-2 ${linkClassName}`}>
                            {t('toContactPage')}
                            <Icon icon='mdi:arrow-right' className='text-lg' aria-hidden />
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  ) : null}
                </div>
              </div>

              <div className='max-w-4xl mx-auto space-y-4 lg:hidden'>
                {filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className='overflow-hidden rounded-2xl bg-gradient-to-br from-brand-blue via-brand-red to-brand-purple p-[2px] shadow-[var(--shadow-md)] transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-card-lift)]'
                  >
                    <div className='overflow-hidden rounded-[calc(1rem-2px)] bg-white'>
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <DisclosureButton
                            onClick={playAudio}
                            className='relative flex w-full cursor-pointer items-center justify-between p-6 pl-5 text-left transition-[background-color] duration-200 hover:bg-grey/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 md:p-8 md:pl-6'
                          >
                            <span
                              className={`absolute bottom-0 left-0 top-0 w-1 ${BAR_ACCENTS[index % BAR_ACCENTS.length]}`}
                              aria-hidden
                            />
                            <div className='flex flex-grow items-start gap-4'>
                              <div
                                className={`mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-sm ${MOBILE_ICON_BG[index % MOBILE_ICON_BG.length]}`}
                              >
                                <Icon icon='mdi:help-circle-outline' className='text-xl' aria-hidden />
                              </div>
                              <div className='min-w-0 flex-grow'>
                                <h3 className='mb-1 pr-6 text-lg font-bold text-text-primary md:text-xl'>
                                  {faq.question}
                                </h3>
                                {faq.category ? (
                                  <span className='inline-block rounded-full bg-grey px-3 py-1 text-xs font-semibold text-text-secondary'>
                                    {faq.category}
                                  </span>
                                ) : null}
                              </div>
                            </div>
                            <div
                              className={`flex h-10 w-10 flex-shrink-0 transform items-center justify-center rounded-sm bg-gradient-to-br from-brand-blue via-brand-red to-brand-purple transition-transform duration-200 ${
                                open ? 'rotate-180' : ''
                              }`}
                            >
                              <Icon icon='mdi:chevron-down' className='text-xl text-white' aria-hidden />
                            </div>
                          </DisclosureButton>
                          <DisclosurePanel className='px-6 pb-6 md:px-8 md:pb-8'>
                            <div className='border-t border-border pl-14 pt-4 md:pl-16'>
                              <p className='text-base leading-relaxed text-text-secondary md:text-lg text-pretty'>
                                {faq.answer}
                              </p>
                              {faq.id === 1 && (
                                <Link
                                  href='/kontakt'
                                  className={`mt-4 inline-flex items-center gap-2 ${linkClassName}`}
                                >
                                  {t('toContactPage')}
                                  <Icon icon='mdi:arrow-right' className='text-lg' aria-hidden />
                                </Link>
                              )}
                            </div>
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className='rounded-2xl bg-gradient-to-br from-brand-blue via-brand-red to-brand-purple p-[2px] shadow-lg'
            >
              <div className='rounded-[calc(1rem-2px)] bg-white py-12 text-center'>
              <Icon
                icon='mdi:help-circle-outline'
                className='mx-auto mb-4 text-6xl text-brand-purple'
                aria-hidden
              />
              <p className='mb-2 text-lg font-semibold text-text-secondary'>
                {t('noResultsTitle')}
              </p>
              <p className='text-text-muted text-pretty'>
                {t.rich('noResultsDescription', {
                  contact: (chunks) => (
                    <Link href='/kontakt' className={`font-semibold ${linkClassName}`}>
                      {chunks}
                    </Link>
                  ),
                })}
              </p>
              </div>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='mt-12 md:mt-16 text-center'
        >
          <div className='section-cta-brand text-center'>
            <div className='section-cta-brand-inner'>
              <div className='section-cta-brand-glow' aria-hidden />
              <div className='relative z-10'>
                <div className='mb-4 flex justify-center'>
                  <BrandSpark />
                </div>
                <h3 className='mb-4 font-display text-3xl font-normal text-white md:text-4xl text-balance'>
                  {t('ctaTitle')}
                </h3>
                <p className='mx-auto mb-6 max-w-2xl text-lg text-white/90 text-pretty'>
                  {t('ctaDescription')}
                </p>
                <Link href='/kontakt' className='btn-brand-gradient inline-flex min-h-12 items-center justify-center gap-2'>
                  {t('ctaButton')}
                  <Icon icon='mdi:arrow-right' className='text-xl' aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
