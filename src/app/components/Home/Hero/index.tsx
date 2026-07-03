'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { bebasNeue } from '@/app/fonts'

const Hero = () => {
  const shouldReduceMotion = useReducedMotion()
  const quickLinks = [
    { icon: 'mdi:account-circle', label: 'Philosophie', href: '/#About' },
    {
      icon: 'mdi:book-open-variant',
      label: 'Mein Buch',
      href: 'https://www.amazon.de/-/en/Mens-Health-Womens-Erfolgsgeheimnisse-Box-Weltmeisterin/dp/3613509911',
    },
    { icon: 'mdi:phone', label: 'Kontakt', href: '/kontakt' },
  ]

  const fadeUp = {
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
  }

  return (
    <section
      id='Hero'
      className='relative z-10 overflow-hidden bg-grain bg-gradient-to-br from-light via-accent-cyan/5 to-accent-cyan-light/30 text-white min-h-[100dvh] flex items-center justify-center py-16 md:py-20 lg:py-24'
    >
      {/* Soft wash + depth (less “template orb” reliance) */}
      <div
        className='pointer-events-none absolute inset-0 z-0 opacity-[0.12]'
        aria-hidden
      >
        <Image
          src='/images/hero/sab6.webp'
          alt=''
          fill
          className='object-cover'
          sizes='100vw'
          priority={false}
        />
      </div>
      <div className='absolute top-1/2 right-0 z-0 h-[min(80vw,520px)] w-[min(80vw,520px)] -translate-y-1/2 translate-x-1/3 rounded-full bg-accent-cyan/15 blur-[120px]' />

      <div className='container relative z-10 mx-auto px-4 py-8 md:py-16 lg:py-24'>
        <div className='flex flex-col items-center justify-center gap-8 min-w-0 lg:flex-row lg:gap-12'>
          <div className='w-full min-w-0 text-center lg:w-1/2 lg:text-left'>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className='mb-6 inline-flex items-center gap-2 rounded-full bg-accent-cyan/12 px-4 py-2 text-sm font-semibold tracking-wide text-accent-cyan md:text-base'
            >
              <Icon icon='mdi:trophy' className='text-xl' aria-hidden />
              Box Weltmeisterin
            </motion.div>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`mb-6 text-3xl font-bold leading-tight text-text-primary sm:text-4xl md:mb-8 md:text-5xl lg:text-6xl xl:text-7xl ${bebasNeue.className} text-balance`}
            >
              Gemeinsam zu körperlicher Stärke und mentaler Resilienz
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className='copy-prose mx-auto mb-4 text-lg font-medium leading-relaxed text-text-primary md:text-xl lg:mx-0'
            >
              Natalie Zimmermann ist Box-Weltmeisterin (WIBF/WBF), Physiotherapeutin, Mental Coach
              und Personal Trainerin in Hamburg — im Body &amp; Mind Studio, Rothenbaumchaussee 156.
            </motion.p>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className='copy-prose mx-auto mb-8 text-lg leading-relaxed text-text-secondary md:text-xl lg:mx-0'
            >
              Mit meiner Expertise als Box-Weltmeisterin, Physiotherapeutin und Mental Coach
              begleite ich Sie auf Ihrem Weg zu mehr Gesundheit, Fitness und mentaler Stärke.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className='mb-8 flex w-full flex-col justify-center gap-4 sm:flex-row sm:flex-wrap lg:justify-start'
            >
              <Link
                href='https://www.amazon.de/-/en/Mens-Health-Womens-Erfolgsgeheimnisse-Box-Weltmeisterin/dp/3613509911/ref=sr_1_1?crid=2SE9AXYVFIL9S&dib=eyJ2IjoiMSJ9.1nanqQDcMcQOEAm1yex9hYgD8iEfspOrwJIxmz5BEixNe2pmHjbM3CTMtb87PgvQg2V8e6Qfu7m08ephWD-pZrB1PM4bgSdF9vcst88PgvQg2V8e6Qfu7m08ephWD-pZrB1PM4bgSdF9vcst88lHM7B6sc17wZ8Fr1M1bRUeylfRXBUTvVW2IxfcU5TO8hfmUtTe8eYe6KnjB9Qit6EoDVuACRqN6ybgVqY_I4oW2ET3Z-LAXYkgbAis9ST6CWM6mg7yPYpYf9HJYz6pAmCsY0.i6xWYFHqVEIkyMPtv-WUGjgftIhhD3mRo8_REVL0tg&dib_tag=se&keywords=natalie+zimmermann&qid=1761492965&sprefix=natalie+zim%2Caps%2C166&sr=8-1'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Jetzt im Amazon Store erhältlich'
                className='btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2'
              >
                <Icon icon='mdi:book-open-variant' className='text-xl' />
                Mein Buch bei Amazon
              </Link>
              <Link
                href='/kontakt'
                className='btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2'
              >
                <Icon icon='mdi:phone' className='text-xl' />
                Jetzt Kontakt aufnehmen
              </Link>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className='flex flex-wrap justify-center gap-4 lg:justify-start'
            >
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className='flex items-center gap-2 text-sm text-text-secondary transition-colors duration-300 hover:text-accent-cyan md:text-base'
                >
                  <Icon icon={link.icon} className='text-lg' />
                  {link.label}
                </Link>
              ))}
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className='mt-8 grid max-w-md grid-cols-3 gap-2 sm:gap-4 md:mt-12 mx-auto lg:mx-0'
            >
              <div className='min-w-0 text-center tabular-nums lg:text-left'>
                <div className='mb-1 text-xl font-bold text-text-primary sm:text-2xl md:text-3xl'>22+</div>
                <div className='text-[10px] leading-tight text-text-secondary sm:text-xs md:text-sm'>Jahre Erfahrung</div>
              </div>
              <div className='min-w-0 text-center tabular-nums lg:text-left'>
                <div className='mb-1 text-xl font-bold text-text-primary sm:text-2xl md:text-3xl'>1000+</div>
                <div className='text-[10px] leading-tight text-text-secondary sm:text-xs md:text-sm'>Zufriedene Kunden</div>
              </div>
              <div className='min-w-0 text-center tabular-nums lg:text-left'>
                <div className='mb-1 text-xl font-bold text-text-primary sm:text-2xl md:text-3xl'>1</div>
                <div className='text-[10px] leading-tight text-text-secondary sm:text-xs md:text-sm'>Weltmeisterin</div>
              </div>
            </motion.div>
          </div>

          <div className='relative flex h-[350px] min-w-0 w-full max-w-full justify-center sm:h-[450px] md:h-[550px] lg:h-[650px] lg:w-1/2'>
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className='group relative h-full w-full max-w-[900px]'
            >
              <div
                className='relative h-full w-full overflow-hidden rounded-3xl shadow-[var(--shadow-card-lift)]'
              >
                <Image
                  src='/images/hero/lind3.webp'
                  alt='Natalie Zimmermann - Box Weltmeisterin, Physiotherapeutin und Mental Coach'
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transform-none motion-reduce:group-hover:scale-100'
                  priority
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 900px'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent' />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className='absolute -bottom-4 -left-4 z-10 hidden rounded-2xl bg-white p-4 shadow-[var(--shadow-card-lift)] md:block'
              >
                <div className='flex items-center gap-3'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-accent-cyan'>
                    <Icon icon='mdi:trophy-variant' className='text-2xl text-white' />
                  </div>
                  <div>
                    <p className='text-xs font-semibold uppercase tracking-wide text-text-secondary'>
                      WBO
                    </p>
                    <p className='text-sm font-bold text-text-primary'>Weltmeisterin</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.62 }}
                className='absolute -right-4 -top-4 z-10 hidden rounded-2xl bg-accent-cyan p-4 shadow-[var(--shadow-card-lift)] lg:block'
              >
                <div className='text-white'>
                  <p className='mb-1 text-2xl font-bold tabular-nums'>22+</p>
                  <p className='text-xs text-white/90'>Jahre Expertise</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className='absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block'
        >
          <motion.div
            animate={shouldReduceMotion ? { opacity: 1 } : { y: [0, 10, 0] }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 2, repeat: Infinity, ease: 'easeInOut' }
            }
            className='flex cursor-pointer flex-col items-center gap-2 text-text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 rounded-lg px-2 py-1'
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: shouldReduceMotion ? 'auto' : 'smooth',
              })
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: shouldReduceMotion ? 'auto' : 'smooth',
                })
              }
            }}
            role='button'
            tabIndex={0}
            aria-label='Weiter scrollen'
          >
            <span className='text-sm font-semibold'>Mehr erfahren</span>
            <Icon icon='mdi:chevron-down' className='text-2xl' aria-hidden />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
