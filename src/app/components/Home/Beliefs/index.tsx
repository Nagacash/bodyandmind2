'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { bebasNeue } from '@/app/fonts'

const Beliefs = () => {
  return (
    <section className='bg-cover bg-center overflow-hidden py-16 md:py-20 lg:py-24 bg-light'>
      <div className='container mx-auto max-w-7xl px-4'>
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
            Unsere Angebote
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 ${bebasNeue.className}`}
          >
            Massagen & Kickboxen
          </motion.h2>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8'>
          {/* Massagen Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='bg-accent-cyan rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl group'
          >
            {/* Decorative Background */}
            <div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2' />

            <div className='relative z-10'>
              {/* Icon */}
              <div className='mb-6'>
                <div className='w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4'>
                  <Icon icon='mdi:spa-outline' className='text-white text-3xl' />
                </div>
                <p className='text-white/90 text-sm font-semibold uppercase tracking-wider mb-2'>
                  Regeneration & Entspannung
                </p>
              </div>

              {/* Heading */}
              <h3 className={`text-white mb-6 text-3xl md:text-4xl ${bebasNeue.className}`}>
                Massagen
              </h3>

              {/* Description */}
              <p className='text-white/90 text-base md:text-lg leading-relaxed mb-8'>
                Gönnen Sie Ihrem Körper eine Auszeit. Unsere erfahrenen Masseure helfen Ihnen,
                Verspannungen zu lösen, Schmerzen zu lindern und die Regeneration zu fördern.
              </p>
              <p className='text-white/90 text-base md:text-lg leading-relaxed mb-8'>
                Egal, ob nach dem Training oder im Alltag – unsere Massagen bringen Ihren Körper
                wieder ins Gleichgewicht.
              </p>

              {/* CTA Button */}
              <Link
                href='/kontakt'
                className='btn-solid-light'
              >
                Jetzt Termin vereinbaren
                <Icon icon='mdi:arrow-right' className='text-xl' />
              </Link>
            </div>
          </motion.div>

          {/* Kickboxen Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='bg-accent-cyan-light rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl group'
          >
            {/* Background Pattern */}
            <div
              className='absolute inset-0 bg-[url("/images/beliefs/bg.svg")] bg-no-repeat bg-bottom opacity-20'
              style={{ backgroundSize: 'contain' }}
            />

            {/* Decorative Background */}
            <div className='absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2' />

            <div className='relative z-10'>
              {/* Icon */}
              <div className='mb-6'>
                <div className='w-16 h-16 bg-accent-cyan/20 rounded-2xl flex items-center justify-center mb-4'>
                  <Icon icon='mdi:boxing-glove' className='text-accent-cyan text-3xl' />
                </div>
                <p className='text-accent-cyan text-sm font-semibold uppercase tracking-wider mb-2'>
                  Dynamik & Präzision
                </p>
              </div>

              {/* Heading */}
              <h3 className={`text-text-primary mb-6 text-3xl md:text-4xl ${bebasNeue.className}`}>
                Kickboxen
              </h3>

              {/* Description */}
              <p className='text-text-secondary text-base md:text-lg leading-relaxed mb-8'>
                Für alle, die noch mehr Bewegung wollen: Beim Kickboxen trainieren Sie mit einer
                Kombination aus Box- und Kicktechniken. Dieses Workout fördert Ihre Beweglichkeit,
                stärkt Ihre Muskulatur und schult Ihre Koordination.
              </p>
              <p className='text-text-secondary text-base md:text-lg leading-relaxed mb-8'>
                Dabei steht der Spaß am Sport und das Training in einer unterstützenden Atmosphäre
                immer im Vordergrund.
              </p>

              {/* CTA Button */}
              <Link
                href='/kontakt'
                className='btn-primary'
              >
                Jetzt Kontakt aufnehmen
                <Icon icon='mdi:arrow-right' className='text-xl' />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Beliefs
