'use client'
import { useEffect, useState } from 'react'
import { aboutdata } from '@/app/types/aboutdata'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import AboutSkeleton from '../../Skeleton/AboutUs'
import { Bebas_Neue } from 'next/font/google'

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' })

const Aboutus = () => {
  const playAudio = () => {
    const audio = new Audio('/sound/click.wav');
    audio.volume = 0.5;
    audio.play();
  };
  // fetch about data
  const [about, setAbout] = useState<aboutdata[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setAbout(data.Aboutdata)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='About' className=' bg-cover bg-center overflow-hidden py-16'>
      <div className='container mx-auto max-w-7xl px-4 relative z-1'>
        <div className='p-12 bg-gray-100 rounded-3xl'>
          <Image
            src='/images/aboutus/dots.svg'
            width={100}
            height={100}
            alt='dots-image'
            className='absolute bottom-1 -left-20 w-auto h-auto'
          />
          {/* Call to Action for Book */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center bg-red-600 text-white p-4 rounded-lg mb-10 shadow-lg">
            <p className="text-xl font-bold mb-2">Mein neues Buch ist da!</p>
            <Link href="https://www.amazon.de/-/en/Mens-Health-Womens-Erfolgsgeheimnisse-Box-Weltmeisterin/dp/3613509911/ref=sr_1_1?crid=2SE9AXYVFIL9S&dib=eyJ2IjoiMSJ9.1nanqQDcMcQOEAm1yex9hYgD8iEfspOrwJIxmz5BEixNe2pmHjbM3CTMtb87PgvQg2V8e6Qfu7m08ephWD-pZrB1PM4bgSdF9vcst88PgvQg2V8e6Qfu7m08ephWD-pZrB1PM4bgSdF9vcst88lHM7B6sc17wZ8Fr1M1bRUeylfRXBUTvVW2IxfcU5TO8hfmUtTe8eYe6KnjB9Qit6EoDVuACRqN6ybgVqY_I4oW2ET3Z-LAXYkgbAis9ST6CWM6mg7yPYpYf9HJYz6pAmCsY0.i6xWYFHqVEIkyMPtv-WUGjgftIhhD3mRo8_REVL0tg&dib_tag=se&keywords=natalie+zimmermann&qid=1761492965&sprefix=natalie+zim%2Caps%2C166&sr=8-1" target="_blank" rel="noopener noreferrer" className="text-lg underline hover:no-underline">
              Jetzt im Amazon Store erhältlich!
            </Link>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-center text-black-500 text-lg tracking-widest uppercase'>
            Über Mich
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`text-center pb-12 text-black ${bebasNeue.className}`}>SPEAKERIN & MENTAL COACH</motion.h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-10'>
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <AboutSkeleton key={index} />
                ))
              : about.map((item, i) => {
                  return (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                    key={i}
                    className='hover:bg-blue-50 bg-blue-100 rounded-3xl p-8 shadow-xl group flex flex-col justify-between min-h-[500px]'>
                    <div className="flex-grow">
                      <h5 className={`group-hover:text-black mb-5 ${bebasNeue.className}`}>
                        {item.heading}
                      </h5>
                    <div className="w-full h-64">
                      <Image
                        src={item.imgSrc}
                        alt={item.imgSrc}
                        width={100}
                        height={100}
                        className='w-full h-full object-cover'
                      />
                    </div>
                      <p className='text-black group-hover:text-black mb-5 mt-8 whitespace-pre-line'>
                        {item.paragraph}
                      </p>
                    </div>
                    <Link
                      href='/#Presse'
                      onClick={playAudio}
                      className={`text-18 font-semibold text-red-600 hover-underline flex items-center ${bebasNeue.className}`}>
                      {item.link}
                      <Icon
                        icon='tabler:chevron-right'
                        width='20'
                        height='20'
                      />
                    </Link>
                  </motion.div>
                )})}          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutus
