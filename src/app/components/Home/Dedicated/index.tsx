'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Dedicated = () => {
  return (
    <section className='relative bg-cover bg-center overflow-hidden py-16'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-5'>
          <Image
            src='/images/dedicated/spiral.svg'
            height={272}
            width={686}
            alt='spiral-design'
            className='absolute left-0 top-0 hidden lg:block -z-10 w-auto h-auto'
          />
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='col-span-12 rounded-6xl lg:col-span-6 justify-self-center'>
            <Image
              src='/images/dedicated/sabine.jpg'
              alt='man-icon'
              width={416}
              height={530}
              className='mx-auto md:mx-0 rounded-2xl w-auto h-auto'
            />
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='col-span-12 lg:col-span-6'>
                          <div className='relative'>
                            <Image
                              src='/images/dedicated/comma.svg'
                              alt='comma-image'
                              width={200}
                              height={106}
                              className='absolute -top-16 -left-32 hidden lg:block w-auto h-auto'
                            />
                          </div>
                                                      <div className='flex flex-wrap justify-center gap-4 mb-8'>
                                                        <Image
                                                          src='/images/dedicated/sa1.jpg'
                                                          alt='Natalie Zimmermann'
                                                          width={400}
                                                          height={300}
                                                          className='w-full sm:w-1/3 h-auto rounded-lg'
                                                        />
                                                        <Image
                                                          src='/images/dedicated/sab2.jpg'
                                                          alt='Natalie Zimmermann'
                                                          width={400}
                                                          height={300}
                                                          className='w-full sm:w-1/3 h-auto rounded-lg'
                                                        />
                                                        <Image
                                                          src='/images/dedicated/sab5.jpg'
                                                          alt='Natalie Zimmermann'
                                                          width={400}
                                                          height={300}
                                                          className='w-full sm:w-1/3 h-auto rounded-lg'
                                                        />
                                                      </div>
                                                      <h2 className='text-center -mr-1 text-3xl'>
                                                        “Erlebe den fesselnden Werdegang von der Schäferstochter zur Weltmeisterin im Profiboxen.
                                                      </h2>            <p className='text-base font-medium text-black/55 mt-5 text-center'>
              Motivation, Strategie und Selbstbehauptung. Ich teile meinen Erfolg mit dir.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
export default Dedicated
