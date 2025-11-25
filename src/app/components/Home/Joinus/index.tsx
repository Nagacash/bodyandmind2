'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Bebas_Neue } from 'next/font/google'

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' })

const Join = () => {
  return (
    <section className='overflow-hidden bg-joinus py-16'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='text-center'>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-accent-cyan text-lg font-normal tracking-widest uppercase'>
            Join us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`my-6 ${bebasNeue.className}`}>Body & Mind Studio Hamburg</motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className={`text-black/50 text-base font-normal max-w-3xl mx-auto pt-4 ${bebasNeue.className}`}>
            Unsere Räumlichkeiten beﬁnden sich in einer wunderschönen Jugendstilvilla im attraktiven Stadtteil von Harvestehude. Hohe Decken, viele Fenster und mit französischen Eichendielen ausgelegter Fußboden vermitteln eine angenehme Wohlfühlatmosphäre.

Personaltraining, Workshops, Seminare - Wir sind offen für eine Zusammenarbeit mit Ihnen in unseren Räumlichkeiten.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className='mx-auto max-w-4xl pt-5'>
          <div className='sm:flex items-center mx-5 p-5 sm:p-0 rounded-xl justify-between bg-grey sm:rounded-full'>
            <div>
              <input
                type='name'
                className='my-4 py-4 sm:pl-6 lg:text-xl text-black sm:rounded-full bg-transparent pl-1 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 bg-emailbg focus:text-black'
                placeholder='Your name'
                autoComplete='off'
                aria-label="Your name"
              />
            </div>
            <div>
              <input
                type='email'
                className='my-4 py-4 sm:pl-6 lg:text-xl text-black sm:border-l border-linegrey bg-transparent focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 bg-emailbg focus:text-black'
                placeholder='Your email'
                autoComplete='off'
                aria-label="Your email"
              />
            </div>
            <div className='sm:mr-3'>
              <Link
                href='#'
                className='w-full sm:w-auto text-xl text-black font-semibold text-center rounded-xl sm:rounded-full bg-accent-cyan/20 py-5 px-12 hover:bg-accent-cyan/30 duration-300 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2'
                aria-label="Join Body & Mind Studio Hamburg">
                Join!
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
export default Join
