'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import gsap from 'gsap'
import { Bebas_Neue } from 'next/font/google'

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' })

const Hero = () => {
  const headingRef = useRef(null)
  const paragraphRef = useRef(null)
  const buttonRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    gsap.set(headingRef.current, { opacity: 0, y: 50 })
    gsap.set(paragraphRef.current, { opacity: 0, y: 50 })
    gsap.set(buttonRef.current, { opacity: 0, y: 50 })
    gsap.set(imageRef.current, { opacity: 0, scale: 0.9 })

    const timeline = gsap.timeline({ delay: 0.3 })

    timeline.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    })

    timeline.to(
      paragraphRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=0.4'
    )

    timeline.to(
      imageRef.current,
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
      },
      '-=0.6'
    )

    timeline.to(
      buttonRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=0.4'
    )
  }, [])

  const quickLinks = [
    { icon: 'mdi:account-circle', label: 'Über Mich', href: '/#About' },
    { icon: 'mdi:book-open-variant', label: 'Mein Buch', href: 'https://www.amazon.de/-/en/Mens-Health-Womens-Erfolgsgeheimnisse-Box-Weltmeisterin/dp/3613509911' },
    { icon: 'mdi:phone', label: 'Kontakt', href: '/kontakt' },
  ]

  return (
    <section
      id='Hero'
      className='relative overflow-hidden z-1 bg-gradient-to-br from-light via-accent-cyan/5 to-accent-cyan-light/5 text-white min-h-screen flex items-center justify-center py-16 md:py-20 lg:py-24'
    >
      {/* Decorative Background Elements */}
      <div className='absolute top-0 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2' />
      <div className='absolute bottom-0 left-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2' />

      <div className='container mx-auto px-4 py-8 md:py-16 lg:py-24 relative z-10'>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12'>
          {/* Left Content */}
          <div className='w-full lg:w-1/2 text-center lg:text-left'>
            {/* Badge */}
            <motion.div
              ref={headingRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='inline-flex items-center gap-2 bg-accent-cyan/10 text-accent-cyan px-4 py-2 rounded-full mb-6 font-bold text-sm md:text-base uppercase tracking-wider'
            >
              <Icon icon='mdi:trophy' className='text-xl' />
              Box Weltmeisterin
            </motion.div>

            {/* Main Heading */}
            <h1
              ref={paragraphRef}
              className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 md:mb-8 text-text-primary ${bebasNeue.className}`}
            >
              Gemeinsam zu körperlicher Stärke und mentaler Resilienz
            </h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='text-text-secondary text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0'
            >
              Mit meiner Expertise als Box-Weltmeisterin, Physiotherapeutin und Mental Coach begleite ich Sie auf Ihrem Weg zu mehr Gesundheit, Fitness und mentaler Stärke.
            </motion.p>

            {/* CTA Buttons */}
            <div ref={buttonRef} className='flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start'>
              <Link
                href='https://www.amazon.de/-/en/Mens-Health-Womens-Erfolgsgeheimnisse-Box-Weltmeisterin/dp/3613509911/ref=sr_1_1?crid=2SE9AXYVFIL9S&dib=eyJ2IjoiMSJ9.1nanqQDcMcQOEAm1yex9hYgD8iEfspOrwJIxmz5BEixNe2pmHjbM3CTMtb87PgvQg2V8e6Qfu7m08ephWD-pZrB1PM4bgSdF9vcst88PgvQg2V8e6Qfu7m08ephWD-pZrB1PM4bgSdF9vcst88lHM7B6sc17wZ8Fr1M1bRUeylfRXBUTvVW2IxfcU5TO8hfmUtTe8eYe6KnjB9Qit6EoDVuACRqN6ybgVqY_I4oW2ET3Z-LAXYkgbAis9ST6CWM6mg7yPYpYf9HJYz6pAmCsY0.i6xWYFHqVEIkyMPtv-WUGjgftIhhD3mRo8_REVL0tg&dib_tag=se&keywords=natalie+zimmermann&qid=1761492965&sprefix=natalie+zim%2Caps%2C166&sr=8-1'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Jetzt im Amazon Store erhältlich'
                className='btn-primary inline-flex items-center justify-center gap-2'
              >
                <Icon icon='mdi:book-open-variant' className='text-xl' />
                Mein Buch bei Amazon
              </Link>
              <Link
                href='/kontakt'
                className='btn-secondary inline-flex items-center justify-center gap-2'
              >
                <Icon icon='mdi:phone' className='text-xl' />
                Jetzt Kontakt aufnehmen
              </Link>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className='flex flex-wrap gap-4 justify-center lg:justify-start'
            >
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className='flex items-center gap-2 text-text-secondary hover:text-accent-cyan transition-colors duration-300 text-sm md:text-base'
                >
                  <Icon icon={link.icon} className='text-lg' />
                  {link.label}
                </Link>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className='mt-8 md:mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0'
            >
              <div className='text-center lg:text-left'>
                <div className='text-2xl md:text-3xl font-bold text-text-primary mb-1'>22+</div>
                <div className='text-xs md:text-sm text-text-secondary'>Jahre Erfahrung</div>
              </div>
              <div className='text-center lg:text-left'>
                <div className='text-2xl md:text-3xl font-bold text-text-primary mb-1'>1000+</div>
                <div className='text-xs md:text-sm text-text-secondary'>Zufriedene Kunden</div>
              </div>
              <div className='text-center lg:text-left'>
                <div className='text-2xl md:text-3xl font-bold text-text-primary mb-1'>1</div>
                <div className='text-xs md:text-sm text-text-secondary'>Weltmeisterin</div>
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <div className='w-full lg:w-1/2 flex justify-center relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] max-w-full'>
            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className='relative w-full h-full max-w-[900px] group'
            >
              {/* Main Image */}
              <div className='relative w-full h-full rounded-3xl overflow-hidden shadow-2xl'>
                <Image
                  src='/images/hero/lind3.JPG'
                  alt='Natalie Zimmermann - Box Weltmeisterin, Physiotherapeutin und Mental Coach'
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-700'
                  priority
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 900px'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent' />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className='absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl z-10 hidden md:block'
              >
                <div className='flex items-center gap-3'>
                  <div className='w-12 h-12 bg-accent-cyan rounded-xl flex items-center justify-center'>
                    <Icon icon='mdi:trophy-variant' className='text-white text-2xl' />
                  </div>
                  <div>
                    <p className='text-xs text-text-secondary font-semibold uppercase'>WBO</p>
                    <p className='text-sm font-bold text-text-primary'>Weltmeisterin</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className='absolute -top-4 -right-4 bg-accent-cyan rounded-2xl p-4 shadow-xl z-10 hidden lg:block'
              >
                <div className='text-white'>
                  <p className='text-2xl font-bold mb-1'>22+</p>
                  <p className='text-xs text-white/90'>Jahre Expertise</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className='absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block'
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className='flex flex-col items-center gap-2 text-text-secondary cursor-pointer'
            onClick={() => {
              window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
            }}
          >
            <span className='text-sm font-semibold'>Mehr erfahren</span>
            <Icon icon='mdi:chevron-down' className='text-2xl' />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
