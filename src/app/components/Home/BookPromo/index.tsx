'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { bebasNeue } from '@/app/fonts'

const AMAZON_BOOK_URL =
  'https://www.amazon.de/-/en/Mens-Health-Womens-Erfolgsgeheimnisse-Box-Weltmeisterin/dp/3613509911'

const highlights = [
  'Mentale Stärke und Resilienz für den Alltag',
  'Die persönliche Reise zur Box-Weltmeisterin',
  'Praxisnahe Impulse für Sport, Beruf und Leben',
]

const BookPromo = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.aside
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: shouldReduceMotion ? 0.2 : 0.65, ease: [0.22, 1, 0.36, 1] }}
      aria-labelledby='book-promo-heading'
      className='relative'
    >
      <div className='book-promo relative overflow-hidden rounded-3xl bg-grain shadow-[var(--shadow-card-lift)] ring-1 ring-black/5'>
        {/* Background */}
        <div
          className='absolute inset-0 bg-gradient-to-br from-deep-slate via-[#1a5f7a] to-accent-cyan-dark'
          aria-hidden
        />
        <div
          className='pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent-cyan/25 blur-3xl'
          aria-hidden
        />
        <div
          className='pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl'
          aria-hidden
        />

        <div className='relative z-10 grid grid-cols-1 items-center gap-8 p-6 sm:p-8 md:gap-10 md:p-10 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-12 lg:p-12'>
          {/* Cover */}
          <div className='order-1 flex flex-col items-center lg:order-none lg:items-start'>
            <Link
              href={AMAZON_BOOK_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='group relative cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-accent-cyan-dark rounded-2xl'
              aria-label='Buchcover auf Amazon ansehen – Erfolgsgeheimnisse einer Box-Weltmeisterin'
            >
              <div className='relative aspect-[9/16] w-[min(52vw,12.5rem)] sm:w-48 md:w-52 lg:w-56'>
                <div className='absolute inset-0 overflow-hidden rounded-2xl shadow-[0_28px_60px_-18px_rgba(0,0,0,0.55)] ring-1 ring-white/30 transition-shadow duration-300 group-hover:shadow-[0_32px_70px_-16px_rgba(0,0,0,0.6)] group-focus-visible:shadow-[0_32px_70px_-16px_rgba(0,0,0,0.6)]'>
                  <Image
                    src='/images/new/book1.webp'
                    alt=''
                    fill
                    className='object-cover'
                    sizes='(max-width: 640px) 52vw, (max-width: 1024px) 192px, 224px'
                    priority
                  />
                </div>
                {/* Spine highlight */}
                <div
                  className='pointer-events-none absolute inset-y-3 left-0 w-[3px] rounded-full bg-white/25'
                  aria-hidden
                />
              </div>
              {/* Floor reflection */}
              <div
                className='mx-auto mt-4 h-2 w-[70%] rounded-full bg-black/25 blur-md'
                aria-hidden
              />
            </Link>
          </div>

          {/* Copy + CTA */}
          <div className='order-2 text-center lg:order-none lg:text-left'>
            <div className='mb-4 flex flex-wrap items-center justify-center gap-2 lg:justify-start'>
              <span className='inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm'>
                <span className='h-1.5 w-1.5 rounded-full bg-emerald-400' aria-hidden />
                Neu · Jetzt erhältlich
              </span>
              <span className='inline-flex items-center gap-1 rounded-full border border-white/15 bg-black/15 px-3 py-1 text-xs font-semibold text-white/90'>
                <Icon icon='mdi:trophy' className='text-sm text-amber-300' aria-hidden />
                WBO Weltmeisterin
              </span>
            </div>

            <p className='mb-2 text-sm font-semibold uppercase tracking-widest text-accent-cyan-light/90'>
              Mein neues Buch
            </p>

            <h3
              id='book-promo-heading'
              className={`mb-3 text-3xl font-bold leading-[1.05] text-white sm:text-4xl lg:text-[2.75rem] ${bebasNeue.className} text-balance`}
            >
              Erfolgsgeheimnisse einer Box-Weltmeisterin
            </h3>

            <p className='mb-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg lg:mx-0 lg:max-w-none'>
              Inspiration, mentale Stärke und die Strategien hinter dem Weg zur Weltmeisterschaft –
              für alle, die mehr aus sich herausholen wollen.
            </p>

            <ul className='mb-8 space-y-3 text-left'>
              {highlights.map((item) => (
                <li key={item} className='flex items-start gap-3 text-sm text-white/90 md:text-base'>
                  <Icon
                    icon='mdi:check-circle'
                    className='mt-0.5 flex-shrink-0 text-lg text-accent-cyan-light'
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className='flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:items-start lg:justify-start'>
              <Link
                href={AMAZON_BOOK_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='btn-solid-light inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2.5 px-8 py-3.5 text-base font-bold sm:w-auto md:text-lg'
              >
                <Icon icon='simple-icons:amazon' className='text-2xl' aria-hidden />
                Jetzt bei Amazon kaufen
                <Icon icon='mdi:arrow-right' className='text-xl' aria-hidden />
              </Link>
              <p className='text-xs text-white/65 sm:max-w-[11rem] sm:text-left'>
                Taschenbuch · Sofort bestellbar · Versand durch Amazon
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.aside>
  )
}

export default BookPromo
