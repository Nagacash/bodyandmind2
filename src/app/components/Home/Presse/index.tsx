'use client'
import React from 'react'
import Image from 'next/image'
import { Bebas_Neue } from 'next/font/google'
import VideoGallery from './VideoGallery'

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' })

const Presse = () => {
  return (
    <section id='Presse' className='overflow-hidden scroll-mt-[100px] py-16'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='text-center'>
          <h2 className={`my-6 ${bebasNeue.className}`}>Presse</h2>
          <p className={`text-black/50 text-base font-normal max-w-3xl mx-auto ${bebasNeue.className}`}>
            Auf dieser Seite präsentiere ich euch meine Medienauftritte, sowohl im Fernsehen ( NDR), Internet (YouTube), Radio und Print wie etwa Bild, Hamburger Abendblatt usw. Viel Spaß beim Stöbern.
          </p>
        </div>

        <div className='mt-12'>
          <h3 className='text-2xl font-semibold text-center mb-6'>TV & Internet Videos</h3>
          <VideoGallery />
          <p className='text-center text-black/70 mt-4 text-lg'>Scrollen Sie durch die Videos mit den Pfeiltasten!</p>
          <div className='flex justify-center mt-8'>
            {
              <div className='aspect-w-16 aspect-h-9 rounded-lg overflow-hidden relative'>                          <a href='https://www.ndr.de/fernsehen/sendungen/hamburg_journal/Hamburgerin-Natalie-Zimmermann-boxt-um-WBO-WM-Titel,hamj157910.html' target='_blank' rel='noopener noreferrer' className='w-full h-full rounded-lg bg-black flex items-center justify-center text-center p-4'>
                            <Image
                              src='/images/articles/nat1.jpg' // Placeholder image
                              alt='Article cover'
                              fill
                              className='absolute inset-0 z-0 opacity-50 object-cover'
                            />
                            <h4 className='text-lg font-semibold text-white relative z-10'>Hamburgerin Natalie Zimmermann boxt um WBO-WM-Titel</h4>
                          </a>
                        </div>
                      }
                    </div>
        </div>
      </div>
    </section>
  )
}
export default Presse