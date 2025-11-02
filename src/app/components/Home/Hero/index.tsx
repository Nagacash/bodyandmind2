'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const headingRef = useRef(null)
  const paragraphRef = useRef(null)
  const buttonRef = useRef(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const image1Ref = useRef(null)
  const image2Ref = useRef(null)
  const image3Ref = useRef(null)
  const image4Ref = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0); // To keep track of which image is active

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });

    timeline.from(headingRef.current, {
      opacity: 0,
      y: 100,
      ease: 'power2.out',
    });

    timeline.from(paragraphRef.current, {
      opacity: 0,
      y: 150,
      rotationX: 90,
      scale: 0.8,
      ease: 'back.out(1.7)',
    }, '-=0.3');

    timeline.from(buttonRef.current, {
      opacity: 0,
      y: 100,
      ease: 'power2.out',
    }, '-=0.3');

    // Initial state for images
    gsap.set(image1Ref.current, { opacity: 1 });
    gsap.set(image2Ref.current, { opacity: 0 });

  }, []);

  useEffect(() => {
    gsap.to(image1Ref.current, { opacity: activeIndex === 0 ? 1 : 0, duration: 0.5 });
    gsap.to(image2Ref.current, { opacity: activeIndex === 1 ? 1 : 0, duration: 0.5 });
    gsap.to(image3Ref.current, { opacity: activeIndex === 2 ? 1 : 0, duration: 0.5 });
    gsap.to(image4Ref.current, { opacity: activeIndex === 3 ? 1 : 0, duration: 0.5 });
  }, [activeIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 4); // Now 4 images
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, []); // Empty dependency array to run once on mount

  return (
    <section id='Hero' className='relative overflow-hidden z-1 bg-light text-white min-h-screen flex items-center justify-center py-16'>
      <div className='container mx-auto px-4 py-16 md:py-24 lg:py-32'>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-12'>
          <div className='w-full text-center'>
            <p ref={headingRef} className='text-black text-base font-bold mb-4' style={{ transform: 'translateZ(0)' }}>Box Weltmeisterin</p>
            <h1
              ref={paragraphRef}
              className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-black'>
              Gemeinsam zu körperlicher Stärke und mentaler Resilienz – mit meiner Expertise zu Ihrem Erfolg!
            </h1>
            <Link href={'/kontakt'}>
              <button ref={buttonRef} className='bg-black text-white text-lg font-semibold py-4 px-10 rounded-full hover:bg-gray-800 hover:cursor-pointer transition duration-300 ease-in-out'>
                Get started
              </button>
            </Link>
          </div>
          <div ref={imageRef} className='w-full flex justify-center relative h-[400px] md:h-[500px] lg:h-[600px] max-w-full lg:max-w-[900px]'>
                                        <Image
                                          src='/images/hero/boxa6.jpg'
                                          alt='banner image'
                                          width={900}
                                          height={600}
                                          className='shadow-2xl absolute top-0 left-0 border-4 border-white rounded-lg'
                                          unoptimized
                                          ref={image1Ref}
                                        />            <Image
              src='/images/hero/boxa1.jpg'
              alt='banner image'
              width={900}
              height={600}
              className='shadow-2xl absolute top-0 left-0 border-4 border-white rounded-lg'
              unoptimized
              ref={image2Ref}
            />
            <Image
              src='/images/hero/sab4.jpg'
              alt='banner image'
              width={900}
              height={600}
              className='shadow-2xl absolute top-0 left-0 border-4 border-white rounded-lg'
              unoptimized
              ref={image3Ref}
            />
            <Image
              src='/images/hero/sab5.jpg'
              alt='banner image'
              width={900}
              height={600}
              className='shadow-2xl absolute top-0 left-0 border-4 border-white rounded-lg'
              unoptimized
              ref={image4Ref}
            />
            <div className='absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2'>
              <span
                className={`h-3 w-3 rounded-full cursor-pointer ${activeIndex === 0 ? 'bg-white' : 'bg-gray-400'}`}
                onClick={() => setActiveIndex(0)}
              ></span>
              <span
                className={`h-3 w-3 rounded-full cursor-pointer ${activeIndex === 1 ? 'bg-black' : 'bg-gray-400'}`}
                onClick={() => setActiveIndex(1)}
              ></span>
              <span
                className={`h-3 w-3 rounded-full cursor-pointer ${activeIndex === 2 ? 'bg-black' : 'bg-gray-400'}`}
                onClick={() => setActiveIndex(2)}
              ></span>
              <span
                className={`h-3 w-3 rounded-full cursor-pointer ${activeIndex === 3 ? 'bg-black' : 'bg-gray-400'}`}
                onClick={() => setActiveIndex(3)}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
