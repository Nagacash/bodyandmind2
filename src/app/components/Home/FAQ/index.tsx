'use client'
import React from 'react'
import { Icon } from '@iconify/react'
import { DisclosurePanel, DisclosureButton, Disclosure } from '@headlessui/react'
import { motion } from 'framer-motion'
import { Bebas_Neue } from 'next/font/google'

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' })

const FAQ = () => {
  return (
    <section
      id='FAQ'
      className='relative py-16 bg-cover bg-center overflow-hidde dark:bg-darkmode'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='relative rounded-2xl py-24 bg-no-repeat bg-cover bg-black'>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-lg font-normal text-white text-center mb-6'>FAQ</motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`text-white text-center max-w-3xl mx-auto ${bebasNeue.className}`}>
            Häufig gestellten Fragen
          </motion.h2>
          <div className='w-full px-4 pt-16'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className='mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5'>
              <Disclosure>
                {({ open }) => (
                  <div>
                    <DisclosureButton className='flex w-full justify-between items-center text-left text-2xl font-medium focus:outline-hidden hover:cursor-pointer'>
                      <span className='text-black'>
                        Wie kann man uns erreichen?
                      </span>
                      <div
                        className={`h-5 w-5 transform transition-transform duration-300 ${
                          open ? 'rotate-180' : ''
                        }`}>
                        <Icon icon='lucide:chevron-up' width='20' height='20' />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel className='text-base text-black/50 font-normal text-left pt-4 mt-6 border-t border-border'>
                      <div className='lg:max-w-70%'>
                        Sie können uns über unser Kontaktformular auf der Webseite erreichen. Wir sind auch per E-Mail und Telefon erreichbar. Besuchen Sie unsere Kontaktseite, um die genauen Kontaktinformationen zu erhalten.
                      </div>
                    </DisclosurePanel>
                  </div>
                )}
              </Disclosure>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className='mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5'>
              <Disclosure as='div' className='mt-2'>
                {({ open }) => (
                  <>
                    <DisclosureButton className='flex w-full justify-between items-center rounded-lg text-left text-2xl font-medium focus:outline-hidden hover:cursor-pointer'>
                      <span className='text-black'>Was kostet eine Stunde Personaltraining?</span>
                      <div
                        className={`h-5 w-5 transform transition-transform duration-300 ${
                          open ? 'rotate-180' : ''
                        }`}>
                        <Icon icon='lucide:chevron-up' width='20' height='20' />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel className='text-base text-black/50 pt-4 mt-6 text-left border-t border-border'>
                      <div className='lg:max-w-70%'>
                        Die Kosten für eine Stunde Personaltraining bei Body & Mind by Natalie Zimmermann können je nach Ihren individuellen Bedürfnissen und Anforderungen variieren. Wir bieten maßgeschneiderte Trainingsprogramme an, die auf Ihre Ziele, Ihr Fitnesslevel und Ihre Verfügbarkeit zugeschnitten sind. Um genauere Informationen zu den Preisen zu erhalten und ein auf Sie abgestimmtes Angebot zu erhalten, kontaktieren Sie uns bitte direkt. Wir sind hier, um Ihnen bei der Erreichung Ihrer Fitnessziele zu helfen und werden gerne Ihre Fragen beantworten und ein maßgeschneidertes Trainingspaket für Sie zusammenstellen.
                      </div>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className='mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5'>
              <Disclosure as='div' className='mt-2'>
                {({ open }) => (
                  <>
                    <DisclosureButton className='flex w-full justify-between items-center rounded-lg text-left text-2xl font-medium focus:outline-hidden hover:cursor-pointer'>
                      <span className='text-black'>Wie verläuft die Terminvergabe?</span>
                      <div
                        className={`h-5 w-5 transform transition-transform duration-300 ${
                          open ? 'rotate-180' : ''
                        }`}>
                        <Icon icon='lucide:chevron-up' width='20' height='20' />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel className='text-base text-black/50 pt-4 mt-6 font-normal text-left border-t border-border'>
                      <div className='lg:max-w-70%'>
                        Nehmen Sie Kontakt über das Kontaktformular oder telefonisch und vereinbaren Sie flexible Ihren Wunschtermin.
                      </div>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ