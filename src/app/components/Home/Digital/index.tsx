'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { bebasNeue } from '@/app/fonts'

const Digital = () => {
  return (
    <section className='relative bg-cover bg-center overflow-hidden py-16 md:py-20 lg:py-24'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='relative rounded-3xl bg-gradient-to-br from-accent-cyan to-accent-cyan-dark overflow-hidden shadow-2xl'>
          {/* Background Image */}
          <div className='absolute inset-0 opacity-10'>
            <Image
              src='/images/hero/sab6.jpg'
              alt='Background'
              fill
              className='object-cover'
            />
          </div>

          {/* Decorative Elements */}
          <div className='absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2' />

          <div className='relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 md:p-12 lg:p-16'>
            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='text-center lg:text-left'
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className='text-white/90 text-sm md:text-base font-bold mb-4 uppercase tracking-wider flex items-center gap-2 justify-center lg:justify-start'
              >
                <Icon icon='mdi:dumbbell' className='text-xl' />
                Ihr Fitness Trainer
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight ${bebasNeue.className}`}
              >
                Sind Sie bereit{' '}
                <span className='text-text-primary'>etwas zu ändern?</span>
                <br />
                Starten Sie jetzt und erreichen gemeinsam mit{' '}
                <span className='text-text-primary'>unserem Experten Team</span> Ihre
                Gesundheits- und Fitnessziele.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='text-white/90 text-base md:text-lg mb-8 leading-relaxed'
              >
                Professionelles Training, individuelle Betreuung und ein
                motivierendes Team – gemeinsam erreichen wir Ihre Ziele.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'
              >
                <Link
                  href='/kontakt'
                  className='btn-solid-light'
                >
                  Jetzt starten
                  <Icon icon='mdi:arrow-right' className='text-xl' />
                </Link>
                <Link
                  href='/#Team'
                  className='btn-outline-light'
                >
                  Unser Team kennenlernen
                  <Icon icon='mdi:account-group' className='text-xl' />
                </Link>
              </motion.div>
            </motion.div>

            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='relative hidden lg:block'
            >
              <div className='relative rounded-2xl overflow-hidden shadow-2xl group'>
                <Image
                  src='/images/hero/sab6.jpg'
                  alt='Natalie Zimmermann - Fitness Training'
                  width={615}
                  height={491}
                  className='w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Digital
