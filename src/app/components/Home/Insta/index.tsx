'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Insta = () => {
  return (
    <section className='container mx-auto max-w-2xl pt-16 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:-mb-44 lg:-mb-34 '>
      <div className='grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
        {/* Image Container 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='relative group mx-auto overflow-hidden rounded-3xl'>
          {/* Image */}
          <Image
            src='/images/insta/insta1.png'
            width={306}
            height={306}
            alt='instaOne'
            className='w-full h-full object-cover'
          />

          {/* Sliding Overlay */}
          <Link href='https://instagram.com' target='_blank'>
            <div className='absolute inset-0 bg-black/60 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-3xl flex items-center justify-center'>
              <Image
                src='/images/insta/instagram.svg'
                alt='instagram'
                width={36}
                height={36}
                className='cursor-pointer'
              />
            </div>
          </Link>
        </motion.div>

        {/* Image Container 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='relative group mx-auto overflow-hidden rounded-3xl'>
          <Image
            src='/images/insta/insta2.png'
            width={306}
            height={306}
            alt='instaTwo'
            className='w-full h-full object-cover'
          />

          {/* Sliding Overlay */}
          <Link href='https://instagram.com' target='_blank'>
            <div className='absolute inset-0 bg-black/60 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-3xl flex items-center justify-center'>
              <Image
                src='/images/insta/instagram.svg'
                alt='instagram'
                width={36}
                height={36}
                className='cursor-pointer'
              />
            </div>
          </Link>
        </motion.div>

        {/* Image Container 3 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className='relative group mx-auto overflow-hidden rounded-3xl'>
          <Image
            src='/images/insta/insta3.png'
            width={306}
            height={306}
            alt='instaThree'
            className='w-full h-full object-cover'
          />
          {/* Sliding Overlay */}
          <Link href='https://instagram.com' target='_blank'>
            <div className='absolute inset-0 bg-black/60 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-3xl flex items-center justify-center'>
              <Image
                src='/images/insta/instagram.svg'
                alt='instagram'
                width={36}
                height={36}
                className='cursor-pointer'
              />
            </div>
          </Link>
        </motion.div>

        {/* Image Container 4 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className='relative group mx-auto overflow-hidden rounded-3xl'>
          <Image
            src='/images/insta/insta4.png'
            width={306}
            height={306}
            alt='instaFour'
            className='w-full h-full object-cover'
          />
          {/* Sliding Overlay */}
          <Link href='https://instagram.com' target='_blank'>
            <div className='absolute inset-0 bg-black/60 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-3xl flex items-center justify-center'>
              <Image
                src='/images/insta/instagram.svg'
                alt='instagram'
                width={36}
                height={36}
                className='cursor-pointer'
              />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Insta
