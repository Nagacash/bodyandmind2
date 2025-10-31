'use client'
import React from 'react'
import Image from 'next/image'

const Presse = () => {
  return (
    <section id='Presse' className='overflow-hidden scroll-mt-[100px] py-16'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='text-center'>
          <h2 className='my-6'>Presse</h2>
          <p className='text-black/50 text-base font-normal max-w-3xl mx-auto'>
            Auf dieser Seite präsentiere ich euch meine Medienauftritte, sowohl im Fernsehen ( NDR), Internet (YouTube), Radio und Print wie etwa Bild, Hamburger Abendblatt usw. Viel Spaß beim Stöbern.
          </p>
        </div>

        <div className='mt-12'>
          <h3 className='text-2xl font-semibold text-center mb-6'>Tv & Internet</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
              <div className='aspect-w-16 aspect-h-9 rounded-lg overflow-hidden'>
                <iframe
                  src='https://www.youtube.com/embed/Jwbx5gjUos8?si=KYbhBA76P9xBQbX0'
                  title='YouTube video player'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                  className='w-full h-full rounded-lg'
                ></iframe>
              </div>
            }
            {
              <div className='aspect-w-16 aspect-h-9 rounded-lg overflow-hidden'>
                <iframe
                  src='https://www.youtube.com/embed/3yoKKKqGqAA?si=yLbyaMHvJ8Ro1Xa8'
                  title='YouTube video player'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                  className='w-full h-full rounded-lg'
                ></iframe>
              </div>
            }
            {
              <div className='aspect-w-16 aspect-h-9 rounded-lg overflow-hidden relative'>
                <a href='https://www.ndr.de/fernsehen/sendungen/hamburg_journal/Hamburgerin-Natalie-Zimmermann-boxt-um-WBO-WM-Titel,hamj157910.html' target='_blank' rel='noopener noreferrer' className='w-full h-full rounded-lg bg-black flex items-center justify-center text-center p-4'>
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
            {
            <div className='aspect-w-16 aspect-h-9 rounded-lg overflow-hidden'>
              <iframe src="https://www.youtube.com/embed/SLAkZV6mL3E?si=Gj7FMcUHRLb2KKnH"
                className='w-full h-full rounded-lg'
                title='YouTube video player'
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>
            </div>
            }
            <div className='aspect-w-16 aspect-h-9 rounded-lg overflow-hidden'>
              <iframe
                src='https://www.youtube.com/embed/oxgrS13Fb0o?si=gjNRxmTveESoxvJ6'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
                className='w-full h-full rounded-lg'
              ></iframe>
            </div>
            {
              <div className='aspect-w-16 aspect-h-9 rounded-lg overflow-hidden'>
                <iframe
                  src='https://www.youtube.com/embed/sFCfVHTVoy4?si=JLrDf4Fj3oyrLR0e'
                  title='YouTube video player'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  referrerPolicy='strict-origin-when-cross-origin'
                  allowFullScreen
                  className='w-full h-full rounded-lg'
                ></iframe>
              </div>
            }
            


            
            


          </div>
        </div>
      </div>
    </section>
  )
}
export default Presse
