'use client'
import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import { DisclosurePanel, DisclosureButton, Disclosure } from '@headlessui/react'
import { motion } from 'framer-motion'
import { Bebas_Neue } from 'next/font/google'
import Link from 'next/link'

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' })

interface FAQItem {
  id: number
  question: string
  answer: string
  category?: string
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'Wie kann man uns erreichen?',
    answer: 'Sie können uns über unser Kontaktformular auf der Webseite erreichen. Wir sind auch per E-Mail (info@nataliezimmermann.de) und Telefon (040 / 53790578) erreichbar. Besuchen Sie unsere Kontaktseite, um die genauen Kontaktinformationen zu erhalten.',
    category: 'Allgemein',
  },
  {
    id: 2,
    question: 'Was kostet eine Stunde Personaltraining?',
    answer: 'Die Kosten für eine Stunde Personaltraining bei Body & Mind by Natalie Zimmermann können je nach Ihren individuellen Bedürfnissen und Anforderungen variieren. Wir bieten maßgeschneiderte Trainingsprogramme an, die auf Ihre Ziele, Ihr Fitnesslevel und Ihre Verfügbarkeit zugeschnitten sind. Um genauere Informationen zu den Preisen zu erhalten und ein auf Sie abgestimmtes Angebot zu erhalten, kontaktieren Sie uns bitte direkt.',
    category: 'Preise',
  },
  {
    id: 3,
    question: 'Wie verläuft die Terminvergabe?',
    answer: 'Nehmen Sie Kontakt über das Kontaktformular oder telefonisch auf und vereinbaren Sie flexibel Ihren Wunschtermin. Wir passen uns gerne Ihrem Zeitplan an und finden gemeinsam den besten Termin für Sie.',
    category: 'Termine',
  },
  {
    id: 4,
    question: 'Wo findet das Training statt?',
    answer: 'Das Training findet in unserem Body & Mind Studio in Hamburg-Harvestehude statt. Unsere Räumlichkeiten befinden sich in einer wunderschönen Jugendstilvilla in der Rothenbaumchaussee 156, 20149 Hamburg. Wir bieten auch Online-Training an.',
    category: 'Standort',
  },
  {
    id: 5,
    question: 'Welche Trainingsarten werden angeboten?',
    answer: 'Wir bieten ein breites Spektrum an Trainingsmöglichkeiten: Boxen, Kickboxen, Personaltraining, Mental Coaching, Massagen, Physiotherapie, Faszientraining, Lu Jong Yoga und vieles mehr. Jedes Training wird individuell auf Ihre Bedürfnisse angepasst.',
    category: 'Training',
  },
  {
    id: 6,
    question: 'Muss ich Vorkenntnisse haben?',
    answer: 'Nein, Vorkenntnisse sind nicht erforderlich. Wir passen das Training an Ihr individuelles Fitnesslevel an. Ob Anfänger oder Fortgeschrittener – wir haben für jeden das passende Programm.',
    category: 'Training',
  },
]

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const playAudio = () => {
    const audio = new Audio('/sound/click.wav')
    audio.volume = 0.5
    audio.play()
  }

  const categories = Array.from(
    new Set(faqData.map((faq) => faq.category).filter((cat): cat is string => Boolean(cat)))
  )

  const filteredFAQs = faqData.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section
      id='FAQ'
      className='relative py-16 md:py-20 lg:py-24 bg-gradient-to-br from-accent-cyan/10 via-light to-accent-cyan-light/10 overflow-hidden'
    >
      {/* Decorative Background */}
      <div className='absolute inset-0 bg-[url("/images/faq/swirl.png")] bg-no-repeat bg-right-bottom opacity-10 -z-0' />

      <div className='container mx-auto max-w-7xl px-4 relative z-10'>
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
            FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 ${bebasNeue.className}`}
          >
            Häufig gestellte Fragen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-text-secondary text-base md:text-lg max-w-3xl mx-auto'
          >
            Finden Sie schnell Antworten auf die häufigsten Fragen. Falls Sie weitere Fragen haben, kontaktieren Sie uns gerne.
          </motion.p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='mb-8 md:mb-12'
        >
          <div className='max-w-3xl mx-auto'>
            {/* Search Bar */}
            <div className='relative mb-6'>
              <Icon
                icon='mdi:magnify'
                className='absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary text-2xl'
              />
              <input
                type='text'
                placeholder='Fragen durchsuchen...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='w-full pl-12 pr-4 py-4 bg-white border-2 border-border rounded-2xl focus:outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 transition-all duration-300 text-text-primary text-lg'
              />
            </div>

            {/* Category Filters */}
            {categories.length > 0 && (
              <div className='flex flex-wrap justify-center gap-3'>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === null
                      ? 'bg-accent-cyan text-white shadow-lg'
                      : 'bg-white text-text-secondary hover:bg-accent-cyan/10'
                  }`}
                >
                  Alle
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-accent-cyan text-white shadow-lg'
                        : 'bg-white text-text-secondary hover:bg-accent-cyan/10'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* FAQ Items */}
        <div className='max-w-4xl mx-auto space-y-4'>
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden'
              >
                <Disclosure>
                  {({ open }) => (
                    <>
                      <DisclosureButton
                        onClick={playAudio}
                        className='flex w-full justify-between items-center p-6 md:p-8 text-left focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 rounded-2xl hover:bg-grey/50 transition-colors duration-300'
                      >
                        <div className='flex items-start gap-4 flex-grow'>
                          <div className='flex-shrink-0 w-10 h-10 bg-accent-cyan/10 rounded-xl flex items-center justify-center mt-1'>
                            <Icon
                              icon='mdi:help-circle-outline'
                              className='text-accent-cyan text-xl'
                            />
                          </div>
                          <div className='flex-grow'>
                            <h3 className='text-lg md:text-xl font-bold text-text-primary mb-1 pr-8'>
                              {faq.question}
                            </h3>
                            {faq.category && (
                              <span className='inline-block text-xs text-text-secondary bg-grey px-3 py-1 rounded-full font-semibold'>
                                {faq.category}
                              </span>
                            )}
                          </div>
                        </div>
                        <div
                          className={`flex-shrink-0 w-10 h-10 bg-accent-cyan rounded-xl flex items-center justify-center transform transition-transform duration-300 ${
                            open ? 'rotate-180' : ''
                          }`}
                        >
                          <Icon
                            icon='mdi:chevron-down'
                            className='text-white text-xl'
                          />
                        </div>
                      </DisclosureButton>
                      <DisclosurePanel className='px-6 md:px-8 pb-6 md:pb-8'>
                        <div className='pl-14 md:pl-16'>
                          <div className='pt-4 border-t border-border'>
                            <p className='text-base md:text-lg text-text-secondary leading-relaxed'>
                              {faq.answer}
                            </p>
                            {faq.id === 1 && (
                              <Link
                                href='/kontakt'
                                className='inline-flex items-center gap-2 mt-4 text-accent-cyan font-semibold hover:text-accent-cyan/80 transition-colors duration-300'
                              >
                                Zur Kontaktseite
                                <Icon icon='mdi:arrow-right' className='text-lg' />
                              </Link>
                            )}
                          </div>
                        </div>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className='text-center py-12 bg-white rounded-2xl shadow-lg'
            >
              <Icon icon='mdi:help-circle-outline' className='text-text-secondary text-6xl mb-4 mx-auto' />
              <p className='text-text-secondary text-lg font-semibold mb-2'>
                Keine Ergebnisse gefunden
              </p>
              <p className='text-text-muted'>
                Versuchen Sie es mit anderen Suchbegriffen oder{' '}
                <Link href='/kontakt' className='text-accent-cyan hover:underline font-semibold'>
                  kontaktieren Sie uns direkt
                </Link>
                .
              </p>
            </motion.div>
          )}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='mt-12 md:mt-16 text-center'
        >
          <div className='bg-gradient-to-br from-accent-cyan to-accent-cyan-dark rounded-3xl p-8 md:p-12 text-white relative overflow-hidden'>
            <div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2' />
            <div className='relative z-10'>
              <Icon icon='mdi:message-question-outline' className='text-5xl mb-4 mx-auto' />
              <h3 className={`text-3xl md:text-4xl font-bold mb-4 ${bebasNeue.className}`}>
                Haben Sie weitere Fragen?
              </h3>
              <p className='text-white/90 text-lg mb-6 max-w-2xl mx-auto'>
                Wir helfen Ihnen gerne weiter. Kontaktieren Sie uns für eine persönliche Beratung.
              </p>
              <Link
                href='/kontakt'
                className='inline-flex items-center gap-2 bg-white text-accent-cyan px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-accent-cyan'
              >
                Jetzt kontaktieren
                <Icon icon='mdi:arrow-right' className='text-xl' />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
