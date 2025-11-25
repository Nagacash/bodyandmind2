'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { Bebas_Neue } from 'next/font/google'

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' })

const Dedicated = () => {
  return (
    <section className='relative bg-cover bg-center overflow-hidden py-16 md:py-20 lg:py-24 bg-light'>
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
            Meine Geschichte
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 ${bebasNeue.className}`}
          >
            Von der Schäferstochter zur Weltmeisterin
          </motion.h2>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12'>
          {/* Decorative Spiral */}
          <Image
            src='/images/dedicated/spiral.svg'
            height={272}
            width={686}
            alt='spiral-design'
            className='absolute left-0 top-0 hidden lg:block -z-10 w-auto h-auto opacity-20'
          />

          {/* Left Column - Main Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='col-span-12 lg:col-span-6'
          >
            <div className='relative rounded-3xl overflow-hidden shadow-2xl group'>
              <Image
                src='/images/dedicated/sabine.jpg'
                alt='Natalie Zimmermann - Box Weltmeisterin'
                width={416}
                height={530}
                className='w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent' />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='col-span-12 lg:col-span-6 flex flex-col justify-center'
          >
            {/* Quote Icon */}
            <div className='relative mb-6'>
              <Image
                src='/images/dedicated/comma.svg'
                alt='quote-icon'
                width={80}
                height={80}
                className='absolute -top-8 -left-4 hidden lg:block w-16 h-16 opacity-30'
              />
            </div>

            {/* Main Quote */}
            <blockquote className='mb-8'>
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-6 ${bebasNeue.className}`}>
                Erlebe den fesselnden Werdegang von der Schäferstochter zur Weltmeisterin im Profiboxen.
              </h2>
              <p className='text-lg md:text-xl text-text-secondary leading-relaxed font-medium'>
                Motivation, Strategie und Selbstbehauptung. Ich teile meinen Erfolg mit dir.
              </p>
            </blockquote>

            {/* Image Gallery */}
            <div className='grid grid-cols-3 gap-3 md:gap-4 mb-8'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='relative rounded-xl overflow-hidden aspect-square group'
              >
                <Image
                  src='/images/dedicated/sa1.jpg'
                  alt='Natalie Zimmermann Training'
                  fill
                  className='object-cover group-hover:scale-110 transition-transform duration-500'
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='relative rounded-xl overflow-hidden aspect-square group'
              >
                <Image
                  src='/images/dedicated/sab2.jpg'
                  alt='Natalie Zimmermann Boxen'
                  fill
                  className='object-cover group-hover:scale-110 transition-transform duration-500'
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className='relative rounded-xl overflow-hidden aspect-square group'
              >
                <Image
                  src='/images/dedicated/sab5.jpg'
                  alt='Natalie Zimmermann Erfolg'
                  fill
                  className='object-cover group-hover:scale-110 transition-transform duration-500'
                />
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                href='/#Presse'
                className='inline-flex items-center gap-2 btn-primary'
              >
                Mehr über meine Geschichte erfahren
                <Icon icon='mdi:arrow-right' className='text-xl' />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Dedicated
