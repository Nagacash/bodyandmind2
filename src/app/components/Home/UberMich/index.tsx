'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { bebasNeue } from '@/app/fonts'

const qualifications = [
  'Physiotherapeutin',
  'Personal Fitness Trainerin',
  'Ernährungsberaterin',
  'Mental Coach',
  'Speakerin',
  'Markenbotschafterin',
]

const milestones = [
  {
    year: 'Früh',
    title: 'Taekwondo · 1. Dan',
    detail: 'Zehn Jahre Taekwondo mit mehreren Landesmeistertiteln',
  },
  {
    year: '2017–2019',
    title: 'Dreifache Deutsche Meisterin',
    detail: 'Kickboxen · Mitglied der deutschen Nationalmannschaft (WAKO), sieben Jahre',
  },
  {
    year: '2019',
    title: 'Vizeweltmeisterin',
    detail: 'Vollkontakt Kickboxen',
  },
  {
    year: '2023',
    title: 'WIBF-Weltmeisterin',
    detail: 'Superleichtgewicht · Profiboxen (ab 37 Jahren)',
  },
  {
    year: '2024',
    title: 'Doppelter Weltmeistertitel',
    detail: 'WIBF Leichtgewicht & WBF Intercontinental-Weltmeistertitel',
  },
]

const UberMich = () => {
  return (
    <section id='UberMich' className='overflow-hidden bg-grey py-16 md:py-20 lg:py-24'>
      <div className='container mx-auto max-w-7xl px-4'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-12 text-center md:mb-16'
        >
          <p className='mb-4 text-sm font-bold uppercase tracking-widest text-accent-cyan md:text-base'>
            Persönlich
          </p>
          <h2
            className={`text-4xl font-bold text-text-primary md:text-5xl lg:text-6xl ${bebasNeue.className} text-balance`}
          >
            Über mich
          </h2>
        </motion.div>

        <div className='grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14'>
          {/* Portrait + highlights */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='lg:col-span-5 lg:sticky lg:top-28'
          >
            <div className='relative mb-6 w-full overflow-hidden rounded-3xl bg-white shadow-[var(--shadow-card-lift)] ring-1 ring-border/60'>
              <Image
                src='/images/new/ubermich.webp'
                alt='Natalie Zimmermann mit WIBF- und WBF-Weltmeistertiteln'
                width={1200}
                height={1800}
                className='h-auto w-full object-contain'
                priority
                sizes='(max-width: 1024px) 100vw, 480px'
              />
              <div className='pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent' />
              <div className='absolute bottom-4 left-4 right-4 flex flex-wrap gap-2'>
                <span className='rounded-lg bg-black/50 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white backdrop-blur-sm'>
                  WBO · WIBF · WBF
                </span>
                <span className='rounded-lg bg-accent-cyan/90 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white'>
                  Weltmeisterin
                </span>
              </div>
            </div>

            <div className='rounded-2xl border border-border bg-white p-6 shadow-sm'>
              <p className='mb-4 text-xs font-bold uppercase tracking-widest text-text-muted'>
                Qualifikationen
              </p>
              <ul className='flex flex-wrap gap-2'>
                {qualifications.map((item) => (
                  <li key={item}>
                    <span className='btn-chip btn-chip-idle inline-flex cursor-default text-xs font-semibold normal-case tracking-normal md:text-sm'>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Biography */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='lg:col-span-7'
          >
            <div className='copy-prose max-w-none space-y-6 text-base leading-relaxed text-text-secondary md:text-lg'>
              <p className='text-lg font-medium text-text-primary md:text-xl'>
                Natalie Zimmermann ist WIBF- und WBF-Box-Weltmeisterin, Physiotherapeutin, Personal
                Trainerin und Mental Coach in Hamburg-Harvestehude — im Body &amp; Mind Studio an der
                Rothenbaumchaussee 156.
              </p>
              <p>
                Ich bin in Ostholstein aufgewachsen – gemeinsam mit meinen vier Schwestern. Mein
                Vater war Schaf- und Pferdezüchter. Schon früh habe ich gelernt, Verantwortung zu
                übernehmen, diszipliniert zu arbeiten und niemals aufzugeben. Diese Werte prägen
                mich bis heute.
              </p>
              <p>
                Ich bin ein Mensch, der Herausforderungen sucht, sich kontinuierlich
                weiterentwickelt und nie stehen bleibt. Leistung bedeutet für mich nicht nur
                sportlichen Erfolg, sondern die Bereitschaft, jeden Tag dazuzulernen und das Beste
                aus sich herauszuholen.
              </p>
              <p>
                Deshalb habe ich mich bewusst in unterschiedlichen Bereichen ausgebildet. Für mich
                gehören Bewegung, Gesundheit, Ernährung und mentale Stärke untrennbar zusammen. Nur
                wenn alle Bereiche zusammenspielen, kann ein Mensch sein volles Potenzial entfalten.
              </p>
            </div>

            {/* Sport timeline */}
            <div className='mt-10 md:mt-12'>
              <h3
                className={`mb-6 text-2xl font-bold text-text-primary md:text-3xl ${bebasNeue.className}`}
              >
                Im Leistungssport
              </h3>
              <ol className='relative space-y-0 border-l-2 border-accent-cyan/25 pl-6 md:pl-8'>
                {milestones.map((item, i) => (
                  <li key={item.year + item.title} className='relative pb-8 last:pb-0'>
                    <span
                      className='absolute -left-[calc(0.75rem+1px)] top-1.5 flex h-3 w-3 rounded-full bg-accent-cyan ring-4 ring-grey md:-left-[calc(1rem+1px)]'
                      aria-hidden
                    />
                    <p className='mb-1 text-xs font-bold uppercase tracking-widest text-accent-cyan tabular-nums'>
                      {item.year}
                    </p>
                    <p className={`mb-1 text-lg font-bold text-text-primary ${bebasNeue.className}`}>
                      {item.title}
                    </p>
                    <p className='text-sm leading-relaxed text-text-secondary md:text-base'>
                      {item.detail}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div className='copy-prose mt-10 max-w-none space-y-6 text-base leading-relaxed text-text-secondary md:mt-12 md:text-lg'>
              <p>
                Mit 37 Jahren begann für mich ein neues Kapitel im Profiboxen. Am 1. September 2023
                gewann ich den WIBF-Weltmeistertitel im Superleichtgewicht. Am 27. September 2024
                folgten der WIBF-Weltmeistertitel im Leichtgewicht sowie der
                WBF-Intercontinental-Weltmeistertitel.
              </p>
              <p>
                Heute verbinde ich mein Wissen aus Medizin, Therapie, Ernährung, Training,
                Mentalcoaching und Spitzensport. Mein Ziel ist es, Menschen dabei zu unterstützen,
                ihre Gesundheit zu verbessern, ihre Leistungsfähigkeit zu steigern und über sich
                hinauszuwachsen.
              </p>
            </div>

            <blockquote className='mt-10 rounded-2xl border-l-4 border-accent-cyan bg-white p-6 shadow-sm md:mt-12 md:p-8'>
              <p className='text-lg font-medium leading-relaxed text-text-primary md:text-xl'>
                Ich glaube daran, dass Wachstum eine Entscheidung ist. Wer bereit ist,
                Verantwortung für sich selbst zu übernehmen und kontinuierlich an sich zu arbeiten,
                kann Außergewöhnliches erreichen.
              </p>
            </blockquote>

            <div className='mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-12'>
              <Link href='/kontakt' className='btn-primary w-full sm:w-auto inline-flex min-h-12 items-center justify-center gap-2'>
                Lass uns sprechen
                <Icon icon='mdi:arrow-right' className='text-xl' aria-hidden />
              </Link>
              <Link
                href='/about-me'
                className='btn-secondary w-full sm:w-auto inline-flex min-h-12 items-center justify-center gap-2'
              >
                Vollständige Biografie
                <Icon icon='mdi:account-details-outline' className='text-xl' aria-hidden />
              </Link>
              <Link
                href='/#Presse'
                className='btn-secondary w-full sm:w-auto inline-flex min-h-12 items-center justify-center gap-2'
              >
                Medien & Presse
                <Icon icon='mdi:newspaper-variant-outline' className='text-xl' aria-hidden />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default UberMich
