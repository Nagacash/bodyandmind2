'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { bebasNeue } from '@/app/fonts'

const effects = [
  {
    num: '01',
    label: 'Foto · Regeneration',
    title: 'Recovery',
    text: 'Löst Verspannungen, fördert die Durchblutung und unterstützt die Regeneration deiner Muskulatur.',
    imgSrc: '/images/new/recovery1.webp',
    icon: 'mdi:spa-outline',
  },
  {
    num: '02',
    label: 'Foto · IHHT',
    title: 'IHHT-Training',
    text: 'Unterstützt die Zellatmung, steigert die Leistungsfähigkeit und fördert die Regeneration auf zellulärer Ebene.',
    imgSrc: '/images/new/recovery2.webp',
    icon: 'mdi:pulse',
  },
  {
    num: '03',
    label: 'Foto · Atmung',
    title: 'Atem & Entspannung',
    text: 'Aktiviert deine Selbstregulation, reduziert Stress und bringt Körper und Geist wieder in Balance.',
    imgSrc: '/images/new/recovery3.webp',
    icon: 'mdi:weather-windy',
  },
]

const gains = [
  'Stress reduzieren',
  'Regeneration fördern',
  'Energie aufbauen',
  'Schlaf & Erholung',
  'Leistungsfähigkeit steigern',
  'Körper & Geist in Balance',
]

const steps = [
  {
    num: '1',
    title: 'Basis wählen',
    text: 'Du startest mit FLOW oder FORM in der Stufe, die zu dir passt.',
  },
  {
    num: '2',
    title: 'Recovery dazu',
    text: 'Du buchst Recovery passend zu deiner Trainingsfrequenz dazu – ab 70 € pro Einheit.',
  },
  {
    num: '3',
    title: 'Erholt durchstarten',
    text: 'Training und Regeneration greifen ineinander – für bessere Erholung und Leistungsfähigkeit.',
  },
]

const Recovery = () => {
  return (
    <section id='Recovery' className='overflow-hidden bg-light py-16 md:py-20 lg:py-24'>
      <div className='container mx-auto max-w-7xl px-4'>
        {/* Hero */}
        <div className='grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16'>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='order-2 lg:order-1'
          >
            <div className='relative aspect-[3/4] overflow-hidden rounded-3xl shadow-[var(--shadow-card-lift)] lg:aspect-[3/4]'>
              <Image
                src='/images/new/recovery1.webp'
                alt='Recovery – Regeneration und IHHT-Bereich'
                fill
                className='object-cover object-center'
                sizes='(max-width: 1024px) 100vw, 50vw'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent' />
              <span className='absolute bottom-4 left-4 rounded-lg bg-black/50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm'>
                Foto · Recovery / IHHT-Bereich
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='order-1 lg:order-2'
          >
            <p className='mb-4 text-sm font-bold uppercase tracking-widest text-accent-cyan md:text-base'>
              Recovery
            </p>
            <h2
              className={`mb-6 text-4xl font-bold text-text-primary md:text-5xl lg:text-6xl ${bebasNeue.className} text-balance`}
            >
              Regeneration für Körper und Nervensystem.
            </h2>
            <p className='copy-prose mb-5 text-base leading-relaxed text-text-secondary md:text-lg'>
              Recovery kombiniert gezielte Anwendungen mit persönlicher Betreuung, um körperliche
              und mentale Belastung nachhaltig auszugleichen. Durch IHHT-Training, ATP-Atmung und
              regenerative Methoden entsteht ein Raum für Ruhe, Erholung und neue Energie.
            </p>
            <p className='copy-prose mb-8 text-base leading-relaxed text-text-secondary md:text-lg'>
              Ziel von Recovery ist es, Stress zu reduzieren, die Regeneration zu fördern und das
              allgemeine Wohlbefinden zu verbessern. Die Sessions unterstützen deinen Körper
              dabei, schneller zu regenerieren, neue Energie aufzubauen und wieder mehr Balance,
              Fokus und innere Ruhe im Alltag zu finden.
            </p>
            <Link href='/kontakt' className='btn-accent inline-flex items-center gap-2'>
              Erstgespräch vereinbaren
              <Icon icon='mdi:arrow-right' className='text-xl' aria-hidden />
            </Link>
          </motion.div>
        </div>

        {/* Worum es geht */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mt-20 md:mt-28'
        >
          <div className='mb-10 text-center md:mb-14'>
            <p className='mb-3 text-sm font-bold uppercase tracking-widest text-accent-cyan'>
              Worum es geht
            </p>
            <h3
              className={`mb-4 text-3xl font-bold text-text-primary md:text-4xl lg:text-5xl ${bebasNeue.className} text-balance`}
            >
              Mehr als nur Erholung
            </h3>
            <p className='copy-prose mx-auto max-w-2xl text-base text-text-secondary md:text-lg'>
              Recovery wirkt auf mehreren Ebenen – von der Muskulatur bis zum Nervensystem.
            </p>
          </div>

          <div className='grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8'>
            {effects.map((item, i) => (
              <motion.article
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className='group overflow-hidden rounded-3xl border border-border/60 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl'
              >
                <div className='relative h-48 overflow-hidden md:h-52'>
                  <Image
                    src={item.imgSrc}
                    alt={item.title}
                    fill
                    className='object-cover object-center transition-[filter] duration-300 group-hover:brightness-[1.03]'
                    sizes='(max-width: 768px) 100vw, 33vw'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
                  <span className='absolute bottom-3 left-3 text-xs font-semibold uppercase tracking-wide text-white/90'>
                    {item.label}
                  </span>
                  <span
                    className={`absolute right-4 top-4 text-4xl font-bold text-white/30 ${bebasNeue.className}`}
                  >
                    {item.num}
                  </span>
                </div>
                <div className='p-6 md:p-8'>
                  <div className='mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-cyan/10'>
                    <Icon icon={item.icon} className='text-xl text-accent-cyan' aria-hidden />
                  </div>
                  <h4 className={`mb-3 text-xl font-bold text-text-primary md:text-2xl ${bebasNeue.className}`}>
                    {item.title}
                  </h4>
                  <p className='text-base leading-relaxed text-text-secondary'>{item.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Dein Gewinn */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mt-20 md:mt-28'
        >
          <div className='mb-8 text-center md:mb-10'>
            <p className='mb-3 text-sm font-bold uppercase tracking-widest text-accent-cyan'>
              Dein Gewinn
            </p>
            <h3
              className={`text-3xl font-bold text-text-primary md:text-4xl ${bebasNeue.className}`}
            >
              Das bringt dir Recovery
            </h3>
          </div>
          <ul className='flex flex-wrap justify-center gap-3 md:gap-4'>
            {gains.map((gain, i) => (
              <motion.li
                key={gain}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
              >
                <span className='btn-chip btn-chip-idle inline-flex cursor-default uppercase tracking-wide'>
                  {gain}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* So einfach geht's */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mt-20 md:mt-28'
        >
          <div className='mb-10 text-center md:mb-14'>
            <p className='mb-3 text-sm font-bold uppercase tracking-widest text-accent-cyan'>
              So einfach geht&apos;s
            </p>
            <h3
              className={`mb-4 text-3xl font-bold text-text-primary md:text-4xl ${bebasNeue.className} text-balance`}
            >
              Recovery zu deinem Training dazu
            </h3>
            <p className='copy-prose mx-auto max-w-2xl text-base text-text-secondary md:text-lg'>
              Recovery ist ein modularer Baustein – du buchst ihn passend zu FLOW oder FORM dazu,
              so viel oder so wenig, wie zu dir passt.
            </p>
          </div>

          <div className='grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8'>
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className='relative rounded-3xl bg-grey p-6 md:p-8'
              >
                <span
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-cyan text-xl font-bold text-white ${bebasNeue.className}`}
                >
                  {step.num}
                </span>
                <h4 className={`mb-3 text-xl font-bold text-text-primary ${bebasNeue.className}`}>
                  {step.title}
                </h4>
                <p className='text-base leading-relaxed text-text-secondary'>{step.text}</p>
              </motion.div>
            ))}
          </div>

          <p className='copy-prose mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-text-muted md:text-base'>
            In jeder Recovery-Einheit kombinieren wir – abgestimmt auf dich – IHHT, ATP-Atmung,
            mentales Coaching, Nervensystem-Regulation, Körper-Scans, Beinkompressionen und
            gezielte Supplementierung. Recovery-Anwendungen dienen der Regeneration und dem
            Wohlbefinden; sie sind keine medizinische Heilbehandlung und ersetzen keine ärztliche
            Diagnose oder Therapie. Details zu Tarifen findest du unter{' '}
            <Link
              href='/#services-section'
              className='font-semibold text-accent-cyan underline-offset-2 transition-colors duration-200 hover:text-accent-cyan-dark hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2'
            >
              Mitgliedschaften
            </Link>
            .
          </p>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mt-16 md:mt-24'
        >
          <div className='relative overflow-hidden rounded-3xl bg-gradient-to-br from-deep-slate to-text-primary p-8 text-center shadow-xl md:p-12 lg:p-16'>
            <div className='pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-accent-cyan/20 blur-2xl' />
            <div className='relative z-10'>
              <h3
                className={`mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl ${bebasNeue.className} text-balance`}
              >
                Gönn deinem Körper echte Erholung
              </h3>
              <p className='copy-prose mx-auto mb-8 max-w-2xl text-base text-white/85 md:text-lg'>
                Im kostenlosen Erstgespräch zeigen wir dir, wie Training und Recovery zusammen
                wirken.
              </p>
              <Link href='/kontakt' className='btn-accent inline-flex items-center gap-2'>
                Erstgespräch vereinbaren
                <Icon icon='mdi:arrow-right' className='text-xl' aria-hidden />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Recovery
