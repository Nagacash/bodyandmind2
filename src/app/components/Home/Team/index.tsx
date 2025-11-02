'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Bebas_Neue } from 'next/font/google'

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' })

const Team = () => {
  return (
    <section className='overflow-x-hidden py-16'>
      <div className='container mx-auto max-w-7xl px-4 relative'>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-center max-w-5xl mx-auto ${bebasNeue.className}`}>
          Mit Leidenschaft zum Erfolg!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className='font-medium text-center pt-4 text-black/70 max-w-3xl mx-auto'>
          Leidenschaftliche Boxweltmeisterin, engagierte Physiotherapeutin und einfühlsame Personaltrainerin – Erfahren Sie mehr über meine Reise und meine Mission, Ihre Gesundheit und Ihr Wohlbefinden zu fördern.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='grid grid-cols-1 mt-16'>
          <Image
            src='/images/team/boxa5.jpg'
            alt='office-image'
            height={684}
            width={1296}
            className='relative z-1'
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Team