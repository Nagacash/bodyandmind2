'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Bebas_Neue } from 'next/font/google'

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' })

const Hero = () => {
  const headingRef = useRef(null)
  const paragraphRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    gsap.set(headingRef.current, { opacity: 0, y: 50 });
    gsap.set(paragraphRef.current, { opacity: 0, y: 50 });
    gsap.set(buttonRef.current, { opacity: 0, y: 50 });

    const timeline = gsap.timeline({ delay: 0.5 });

    timeline.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    });

    timeline.to(paragraphRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.4');

    timeline.to(buttonRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.4');

  }, []);

  return (
    <section id='Hero' className='relative overflow-hidden z-1 bg-light text-white min-h-screen flex items-center justify-center py-16'>
      <div className='container mx-auto px-4 py-16 md:py-24 lg:py-32'>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-12'>
          <div className='w-full text-center'>
            <p ref={headingRef} className='text-black text-base font-bold mb-4'>Box Weltmeisterin</p>
            <h1
              ref={paragraphRef}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-black ${bebasNeue.className}`}>
              Gemeinsam zu körperlicher Stärke und mentaler Resilienz – mit meiner Expertise zu Ihrem Erfolg!
            </h1>
            <Link href={'https://www.amazon.de/-/en/Mens-Health-Womens-Erfolgsgeheimnisse-Box-Weltmeisterin/dp/3613509911/ref=sr_1_1?crid=2SE9AXYVFIL9S&dib=eyJ2IjoiMSJ9.1nanqQDcMcQOEAm1yex9hYgD8iEfspOrwJIxmz5BEixNe2pmHjbM3CTMtb87PgvQg2V8e6Qfu7m08ephWD-pZrB1PM4bgSdF9vcst88PgvQg2V8e6Qfu7m08ephWD-pZrB1PM4bgSdF9vcst88lHM7B6sc17wZ8Fr1M1bRUeylfRXBUTvVW2IxfcU5TO8hfmUtTe8eYe6KnjB9Qit6EoDVuACRqN6ybgVqY_I4oW2ET3Z-LAXYkgbAis9ST6CWM6mg7yPYpYf9HJYz6pAmCsY0.i6xWYFHqVEIkyMPtv-WUGjgftIhhD3mRo8_REVL0tg&dib_tag=se&keywords=natalie+zimmermann&qid=1761492965&sprefix=natalie+zim%2Caps%2C166&sr=8-1'} target="_blank" rel="noopener noreferrer">
              <button ref={buttonRef} className='bg-black text-white text-lg font-semibold py-4 px-10 rounded-full hover:bg-gray-800 hover:cursor-pointer transition duration-300 ease-in-out'>
                Jetzt im Amazon Store erhältlich!
              </button>
            </Link>
          </div>
          <div className='w-full flex justify-center relative h-[400px] md:h-[500px] lg:h-[600px] max-w-full lg:max-w-[900px]'>
            <Image
              src='/images/hero/lind4.JPG'
              alt='banner image'
              width={900}
              height={600}
              className='shadow-3xl absolute top-0 left-0 rounded-lg'
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero