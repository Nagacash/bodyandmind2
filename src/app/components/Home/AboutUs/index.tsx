'use client'
import { useEffect, useState } from 'react'
import { aboutdata } from '@/app/types/aboutdata'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import AboutSkeleton from '../../Skeleton/AboutUs'
import { bebasNeue } from '@/app/fonts'

const Aboutus = () => {
  const playAudio = () => {
    const audio = new Audio('/sound/click.wav')
    audio.volume = 0.5
    audio.play()
  }
  
  // fetch about data
  const [about, setAbout] = useState<aboutdata[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setAbout(data.Aboutdata)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='About' className='bg-cover bg-center overflow-hidden py-16 md:py-20 lg:py-24 bg-light'>
      <div className='container mx-auto max-w-7xl px-4 relative z-1'>
        {/* Header */}
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
            className='text-accent-cyan text-sm md:text-base font-bold mb-4 uppercase tracking-wider'
          >
            Über Mich
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 ${bebasNeue.className}`}
          >
            Speakerin & Mental Coach
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-text-secondary text-base md:text-lg max-w-3xl mx-auto leading-relaxed'
          >
            Entdecken Sie meine Expertise in verschiedenen Bereichen – von Mental Coaching über Physiotherapie bis hin zum professionellen Boxen.
          </motion.p>
        </motion.div>

        {/* Book CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className='mb-12 md:mb-16'
        >
          <div className="bg-gradient-to-r from-accent-cyan to-accent-cyan-dark text-white p-6 md:p-8 rounded-3xl shadow-xl relative overflow-hidden">
            <div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2' />
            <div className='relative z-10 flex flex-col md:flex-row items-center justify-between gap-6'>
              <div className='flex items-center gap-4'>
                <div className='flex-shrink-0 w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center'>
                  <Icon icon='mdi:book-open-variant' className='text-white text-3xl' />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-bold mb-1">Mein neues Buch ist da!</p>
                  <p className='text-white/90 text-sm md:text-base'>Erfolgsgeheimnisse einer Box-Weltmeisterin</p>
                </div>
              </div>
              <Link
                href="https://www.amazon.de/-/en/Mens-Health-Womens-Erfolgsgeheimnisse-Box-Weltmeisterin/dp/3613509911/ref=sr_1_1?crid=2SE9AXYVFIL9S&dib=eyJ2IjoiMSJ9.1nanqQDcMcQOEAm1yex9hYgD8iEfspOrwJIxmz5BEixNe2pmHjbM3CTMtb87PgvQg2V8e6Qfu7m08ephWD-pZrB1PM4bgSdF9vcst88PgvQg2V8e6Qfu7m08ephWD-pZrB1PM4bgSdF9vcst88lHM7B6sc17wZ8Fr1M1bRUeylfRXBUTvVW2IxfcU5TO8hfmUtTe8eYe6KnjB9Qit6EoDVuACRqN6ybgVqY_I4oW2ET3Z-LAXYkgbAis9ST6CWM6mg7yPYpYf9HJYz6pAmCsY0.i6xWYFHqVEIkyMPtv-WUGjgftIhhD3mRo8_REVL0tg&dib_tag=se&keywords=natalie+zimmermann&qid=1761492965&sprefix=natalie+zim%2Caps%2C166&sr=8-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-accent-cyan px-7 py-3.5 rounded-xl font-semibold tracking-tight shadow-sm shadow-black/10 hover:bg-gray-50 hover:shadow-md hover:-translate-y-px active:translate-y-0 active:scale-[0.98] transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-accent-cyan"
                aria-label="Jetzt im Amazon Store erhältlich"
              >
                Jetzt bei Amazon kaufen
                <Icon icon='mdi:arrow-right' className='text-xl' />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* About Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <AboutSkeleton key={index} />
              ))
            : about.map((item, i) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    key={i}
                    className='bg-accent-cyan hover:bg-accent-cyan/90 rounded-3xl p-6 md:p-8 shadow-xl group flex flex-col justify-between min-h-[450px] md:min-h-[500px] transition-all duration-300 relative overflow-hidden'
                  >
                    {/* Decorative Element */}
                    <div className='absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2' />
                    
                    <div className="flex-grow relative z-10">
                      {/* Icon Badge */}
                      <div className='mb-6'>
                        <div className='w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4'>
                          <Icon 
                            icon={
                              item.heading.toLowerCase().includes('mental') ? 'mdi:brain' :
                              item.heading.toLowerCase().includes('physio') ? 'mdi:heart-pulse' :
                              item.heading.toLowerCase().includes('box') ? 'mdi:boxing-glove' :
                              'mdi:star'
                            }
                            className='text-white text-3xl'
                          />
                        </div>
                        <h5 className={`text-white mb-2 text-2xl md:text-3xl ${bebasNeue.className}`}>
                          {item.heading}
                        </h5>
                      </div>

                      {/* Image */}
                      <div className="w-full h-48 md:h-64 rounded-2xl overflow-hidden mb-6 shadow-lg">
                        <Image
                          src={item.imgSrc}
                          alt={item.heading}
                          width={400}
                          height={300}
                          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                        />
                      </div>

                      {/* Content */}
                      <p className='text-white mb-6 whitespace-pre-line text-base md:text-lg leading-relaxed'>
                        {item.paragraph}
                      </p>
                    </div>

                    {/* Link */}
                    <Link
                      href='/#Presse'
                      onClick={playAudio}
                      className={`relative z-10 text-lg md:text-xl font-semibold text-white hover:text-gray-100 flex items-center gap-2 transition-all duration-300 ${bebasNeue.className} group/link`}
                      aria-label={`${item.link} - ${item.heading}`}
                    >
                      <span className='border-b-2 border-white/50 group-hover/link:border-white transition-colors duration-300'>
                        {item.link}
                      </span>
                      <Icon
                        icon='tabler:chevron-right'
                        width='20'
                        height='20'
                        className='transition-transform group-hover/link:translate-x-2'
                      />
                    </Link>
                  </motion.div>
                )
              })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='mt-12 md:mt-16 text-center'
        >
          <div className='bg-grey rounded-3xl p-8 md:p-10'>
            <h3 className={`text-2xl md:text-3xl font-bold text-text-primary mb-4 ${bebasNeue.className}`}>
              Bereit für den nächsten Schritt?
            </h3>
            <p className='text-text-secondary text-lg mb-6 max-w-2xl mx-auto'>
              Lassen Sie uns gemeinsam Ihre Ziele erreichen. Kontaktieren Sie mich für eine persönliche Beratung.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/kontakt'
                className='btn-primary inline-flex items-center justify-center gap-2'
              >
                Jetzt Kontakt aufnehmen
                <Icon icon='mdi:arrow-right' className='text-xl' />
              </Link>
              <Link
                href='/#Presse'
                className='btn-secondary inline-flex items-center justify-center gap-2'
              >
                Mehr erfahren
                <Icon icon='mdi:information-outline' className='text-xl' />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Aboutus
