'use client'

import Link from 'next/link'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import { bebasNeue } from '@/app/fonts'
import BookPromo from '@/app/components/Home/BookPromo'
import NatureTriptych from '@/app/components/Home/NatureTriptych'

const pillars = [
  { label: 'Flow', href: '/#Flow', icon: 'mdi:boxing-glove' },
  { label: 'Form', href: '/kontakt', icon: 'mdi:dumbbell' },
  { label: 'Recovery', href: '/#Recovery', icon: 'mdi:spa-outline' },
]

const Aboutus = () => {
  return (
    <section id='About' className='overflow-hidden bg-light py-16 md:py-20 lg:py-24'>
      <div className='container relative z-1 mx-auto max-w-7xl px-4'>
        {/* Philosophie */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-12 text-center md:mb-16'
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`mb-6 text-4xl font-bold text-text-primary md:text-5xl lg:text-6xl ${bebasNeue.className} text-balance`}
          >
            Philosophie Body&amp;Mind
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className={`mb-2 text-2xl font-bold tracking-wide text-accent-cyan md:text-3xl ${bebasNeue.className}`}
          >
            Flow. Form. Recovery.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='mb-6 text-lg font-semibold text-text-primary md:text-xl'
          >
            Für Geist, Körper und Seele.
          </motion.p>

          <NatureTriptych />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className='copy-prose mx-auto max-w-3xl space-y-5 text-left text-base leading-relaxed text-text-secondary md:text-lg'
          >
            <p>
              Gerade in der heutigen Zeit reicht es nicht aus, nur den Körper zu stärken. Wahre
              Gesundheit entsteht dann, wenn Geist, Körper und Seele im Einklang sind.
            </p>
            <p>
              Mit{' '}
              <Link
                href='/#Flow'
                className='font-semibold text-accent-cyan transition-colors duration-200 hover:text-accent-cyan-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2'
              >
                Flow
              </Link>{' '}
              findest du Fokus, innere Ruhe und neue Energie. Mit{' '}
              <Link
                href='/kontakt'
                className='font-semibold text-accent-cyan transition-colors duration-200 hover:text-accent-cyan-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2'
              >
                Form
              </Link>{' '}
              stärkst du deinen Körper, baust Kraft auf und schaffst die Grundlage,
              gesundheitlichen Beschwerden vorzubeugen oder sie nachhaltig zu verbessern. Mit{' '}
              <Link
                href='/#Recovery'
                className='font-semibold text-accent-cyan transition-colors duration-200 hover:text-accent-cyan-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2'
              >
                Recovery
              </Link>{' '}
              gibst du Körper und Geist die Regeneration, die sie brauchen, damit deine Seele neue
              Kraft für die Herausforderungen des Alltags schöpfen kann.
            </p>
            <p>
              Unser Ziel ist es, dich nicht nur fitter zu machen, sondern dich ganzheitlich zu
              stärken – für mehr Gesundheit, Leistungsfähigkeit, Ausgeglichenheit und
              Lebensqualität.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className='mt-10 flex flex-wrap justify-center gap-3'
          >
            {pillars.map((pillar) => (
              <li key={pillar.label}>
                <Link
                  href={pillar.href}
                  className='btn-chip btn-chip-idle inline-flex items-center gap-2 font-semibold normal-case tracking-normal'
                >
                  <Icon icon={pillar.icon} className='text-lg text-accent-cyan' aria-hidden />
                  {pillar.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Book CTA — primary conversion block */}
        <div className='mb-12 md:mb-16'>
          <BookPromo />
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='text-center'
        >
          <div className='rounded-3xl bg-grey p-8 md:p-10'>
            <h3
              className={`mb-4 text-2xl font-bold text-text-primary md:text-3xl ${bebasNeue.className}`}
            >
              Bereit für den nächsten Schritt?
            </h3>
            <p className='mx-auto mb-6 max-w-2xl text-lg text-text-secondary'>
              Lass uns gemeinsam herausfinden, welcher Weg – Flow, Form oder Recovery – zu dir passt.
            </p>
            <div className='flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap'>
              <Link href='/kontakt' className='btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2'>
                Erstgespräch vereinbaren
                <Icon icon='mdi:arrow-right' className='text-xl' />
              </Link>
              <Link href='/#Flow' className='btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2'>
                Unsere Säulen entdecken
                <Icon icon='mdi:arrow-down' className='text-xl' />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Aboutus
