'use client'
import React, { useRef, useEffect } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { Bebas_Neue } from 'next/font/google'

gsap.registerPlugin(ScrollTrigger)

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' })

const Beliefs = () => {
  const column1Ref = useRef(null);
  const column2Ref = useRef(null);

  useEffect(() => {
    if (column1Ref.current) {
      gsap.fromTo(column1Ref.current, 
        { opacity: 0, x: -150 }, 
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', 
          scrollTrigger: {
            trigger: column1Ref.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            toggleActions: 'play reverse play reverse',
          }
        }
      );
    }
    if (column2Ref.current) {
      gsap.fromTo(column2Ref.current, 
        { opacity: 0, x: 150 }, 
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', 
          scrollTrigger: {
            trigger: column2Ref.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            toggleActions: 'play reverse play reverse',
          }
        }
      );
    }
  }, []);

  return (
    <section className='bg-cover bg-center overflow-hidden py-16'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
          {/* COLUMN-1 */}

          <div
            ref={column1Ref}
            className="bg-[#37BEF0] pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl  bg-no-repeat bg-right-bottom">
            <p className='text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start uppercase'>
              beliefs
            </p>
            <h3 className={`text-white mb-5 text-center sm:text-start ${bebasNeue.className}`}>
            Massagen{' '}
              <span className='text-white/60'>
              Regeneration und Entspannung
              </span>
            </h3>
            <p className='pt-2 mb-16 text-center sm:text-start text-white/75 text-lg'>
            Gönnen Sie Ihrem Körper eine Auszeit. Unsere erfahrenen Masseure helfen Ihnen, Verspannungen zu lösen, Schmerzen zu lindern und die Regeneration zu fördern. <br></br> <br></br> Egal, ob nach dem Training oder im Alltag – unsere Massagen bringen Ihren Körper wieder ins Gleichgewicht.
            </p>
            <div className='text-center'>
              <Link
                href='#'
                className='text-xl py-5 px-14 mt-5 font-semibold text-black rounded-full duration-300 bg-white border border-primary hover:bg-darkmode hover:border-darkmode'>
                Meldet Euch!
              </Link>
            </div>
          </div>

          {/* COLUMN-2 */}
          <div
            ref={column2Ref}
            className=''>
            <div className="bg-[#D6FFEB] pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl bg-[url('/images/beliefs/bg.svg')] bg-no-repeat bg-bottom">
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='text-lg font-normal text-primary tracking-widest mb-5 text-center sm:text-start uppercase'>
                Kickboxen
              </motion.p>
              <h3 className={`text-black mb-5 text-center sm:text-start ${bebasNeue.className}`}>
                <span className='text-primary'>Build</span> Dynamik und Präzision
              </h3>
              <p className='pt-2 mb-16 text-center sm:text-start text-black/75 text-lg'>
              Für alle, die noch mehr Bewegung wollen: Beim Kickboxen trainieren Sie mit einer Kombination aus Box- und Kicktechniken. Dieses Workout fördert Ihre Beweglichkeit, stärkt Ihre Muskulatur und schult Ihre Koordination. <br></br> <br></br> Dabei steht der Spaß am Sport und das Training in einer unterstützenden Atmosphäre immer im Vordergrund.
              </p>
              <div className='text-center sm:text-start'>
                <Link
                  href='/kontakt'
                  className='text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-black border border-primary hover:bg-darkmode hover:border-darkmode'>
                  Kontakt!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Beliefs