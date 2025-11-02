'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Bebas_Neue } from 'next/font/google'

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' })

const Digital = () => {
  return (
    <section className='relative bg-cover bg-center overflow-hidden py-16'>
      <div className='container mx-auto max-w-7xl px-4'>
                  <div className="rounded-3xl bg-blue-800 bg-no-repeat bg-right-top lg:pb-40 pb-20 relative overflow-hidden shadow-lg">          <div className='grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2'>
            {/* COLUMN-1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className='pt-24 lg:pl-24'>
              <p className='text-lg font-normal text-white mb-5 tracking-widest text-center lg:text-start uppercase mt-5'>
              Ihr Fitness Trainer
              </p>
              <h2 className={`text-white mb-8 leading-tight text-center lg:text-start lg:w-full ${bebasNeue.className}`}>
              
              Sind Sie bereit etwas zu ändern? <br></br>
              Starten Sie jetzt und erreichen gemeinsam mit unserem Experten Team, Ihre Gesundheits- und Fitnessziele.            </h2>
              <div className='text-center lg:text-start'>
                {/* <Link
                  href='/kontakt'
                  className='text-xl font-semibold text-white bg-gray-500 hover:bg-gray-600 py-4 px-12 rounded-full'>
                  Get started
                </Link> */}
              </div>
            </motion.div>
          </div>
          {/* COLUMN-2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='absolute top-1/2 left-1/2 ml-32 -translate-y-1/2 xl:block hidden'>
            <Image
              src='/images/hero/sab6.jpg'
              alt='Natalie Zimmermann'
              width={615}
              height={491}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
export default Digital