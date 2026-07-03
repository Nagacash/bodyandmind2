'use client'
import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { featureddata } from '@/app/types/featureddata'
import { AnimatePresence, motion } from 'framer-motion'
import FeaturedSkeleton from '../../Skeleton/Featured'
import { bebasNeue } from '@/app/fonts'
import { Icon } from '@iconify/react'

const Featured = () => {
  const [featured, setFeatured] = useState<featureddata[]>([])
  const [loading, setLoading] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setFeatured(data.FeaturedData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (featured.length && activeIndex >= featured.length) {
      setActiveIndex(0)
    }
  }, [featured, activeIndex])

  useEffect(() => {
    if (featured.length < 2) return
    const t = setInterval(() => {
      setActiveIndex((i) => (i + 1) % featured.length)
    }, 5500)
    return () => clearInterval(t)
  }, [featured.length])

  const go = useCallback(
    (dir: -1 | 1) => {
      setActiveIndex((i) => {
        const n = featured.length
        if (!n) return 0
        return (i + dir + n) % n
      })
    },
    [featured.length]
  )

  const current = featured[activeIndex]

  return (
    <section
      id='Featured'
      className='relative overflow-hidden bg-grey py-16 md:py-20 lg:py-24'
    >
      <div className='pointer-events-none absolute top-0 right-0 -z-0 h-1/3 w-1/3 bg-[url("/images/wework/vector.svg")] bg-contain bg-no-repeat opacity-20' />

      <div className='container relative z-10 mx-auto max-w-7xl px-4'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-12 text-center md:mb-16'
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='mb-4 text-sm font-semibold tracking-wide text-accent-cyan md:text-base'
          >
            Ausgewählte Einblicke
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`mb-6 text-4xl font-bold text-text-primary md:text-5xl lg:text-6xl ${bebasNeue.className} text-balance`}
          >
            Unsere Highlights
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='copy-prose mx-auto max-w-3xl text-base leading-relaxed text-text-secondary md:text-lg'
          >
            Entdecken Sie unsere besten Momente, Trainingseinheiten und Erfolge. Jedes Bild erzählt
            eine Geschichte von Leidenschaft, Hingabe und Exzellenz.
          </motion.p>
        </motion.div>

        {loading ? (
          <div className='flex justify-center py-8'>
            <FeaturedSkeleton />
          </div>
        ) : featured.length === 0 ? null : (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className='space-y-6'
          >
            <div className='relative'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={current?.imgSrc ?? activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className='group relative overflow-hidden rounded-3xl bg-white shadow-[var(--shadow-card-lift)]'
                >
                  <div className='relative aspect-[4/3] overflow-hidden md:aspect-[16/10]'>
                    <Image
                      src={current.imgSrc}
                      alt={current.heading || `Featured work ${activeIndex + 1}`}
                      fill
                      className='object-cover transition-transform duration-700 group-hover:scale-[1.03]'
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px'
                      priority={activeIndex === 0}
                    />
                    <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-80 md:opacity-90' />
                    <div className='absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-10'>
                      <p className='text-center text-base font-bold text-white sm:text-xl md:text-2xl lg:text-3xl text-balance'>
                        {current.heading}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {featured.length > 1 && (
                <>
                  <button
                    type='button'
                    onClick={() => go(-1)}
                    className='absolute left-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-xl bg-accent-cyan text-white shadow-md shadow-accent-cyan/35 ring-1 ring-inset ring-white/10 transition duration-200 hover:bg-accent-cyan-dark hover:shadow-lg active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 md:left-4 md:h-14 md:w-14'
                    aria-label='Vorheriges Bild'
                  >
                    <Icon icon='mdi:chevron-left' className='text-2xl md:text-3xl' aria-hidden />
                  </button>
                  <button
                    type='button'
                    onClick={() => go(1)}
                    className='absolute right-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-xl bg-accent-cyan text-white shadow-md shadow-accent-cyan/35 ring-1 ring-inset ring-white/10 transition duration-200 hover:bg-accent-cyan-dark hover:shadow-lg active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 md:right-4 md:h-14 md:w-14'
                    aria-label='Nächstes Bild'
                  >
                    <Icon icon='mdi:chevron-right' className='text-2xl md:text-3xl' aria-hidden />
                  </button>
                </>
              )}
            </div>

            {featured.length > 1 && (
              <div
                className='flex gap-3 overflow-x-auto pb-2 pt-1 [scrollbar-width:thin]'
                style={{ scrollSnapType: 'x mandatory' }}
                role='tablist'
                aria-label='Highlight auswählen'
              >
                {featured.map((item, i) => (
                  <button
                    key={`${item.imgSrc}-${i}`}
                    type='button'
                    role='tab'
                    aria-selected={i === activeIndex}
                    onClick={() => setActiveIndex(i)}
                    className={`relative h-16 w-24 shrink-0 snap-start overflow-hidden rounded-xl border-2 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 md:h-20 md:w-28 ${
                      i === activeIndex
                        ? 'border-accent-cyan ring-2 ring-accent-cyan/40'
                        : 'border-transparent opacity-75 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={item.imgSrc}
                      alt=''
                      fill
                      className='object-cover'
                      sizes='112px'
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Featured
