'use client'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import { featureddata } from '@/app/types/featureddata'
import { motion } from 'framer-motion'
import FeaturedSkeleton from '../../Skeleton/Featured'
import { Bebas_Neue } from 'next/font/google'
import { Icon } from '@iconify/react'

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' })

const SampleNextArrow = (props: { className?: string; style?: React.CSSProperties; onClick?: () => void }) => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'var(--color-accent-cyan)',
        padding: '20px',
        borderRadius: '50%',
        width: '56px',
        height: '56px',
        zIndex: 10,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        cursor: 'pointer',
      }}
      onClick={onClick}
      aria-label="Next slide"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && onClick) {
          e.preventDefault()
          onClick()
        }
      }}
    >
      <Icon icon="mdi:chevron-right" className="text-white text-2xl" />
    </div>
  )
}

const SamplePrevArrow = (props: { className?: string; style?: React.CSSProperties; onClick?: () => void }) => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'var(--color-accent-cyan)',
        padding: '20px',
        borderRadius: '50%',
        width: '56px',
        height: '56px',
        zIndex: 10,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        cursor: 'pointer',
      }}
      onClick={onClick}
      aria-label="Previous slide"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && onClick) {
          e.preventDefault()
          onClick()
        }
      }}
    >
      <Icon icon="mdi:chevron-left" className="text-white text-2xl" />
    </div>
  )
}

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 800,
  fade: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
      },
    },
  ],
}

const Featured = () => {
  const [featured, setFeatured] = useState<featureddata[]>([])
  const [loading, setLoading] = useState(true)

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

  return (
    <section id='Featured' className="relative bg-grey py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[url('/images/wework/vector.svg')] bg-no-repeat bg-contain opacity-20 -z-0" />
      
      <div className='container mx-auto max-w-7xl px-4 relative z-10'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12 md:mb-16'
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='text-accent-cyan text-sm md:text-base font-bold mb-4 uppercase tracking-wider'
          >
            Featured Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 ${bebasNeue.className}`}
          >
            Unsere Highlights
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-text-secondary text-base md:text-lg max-w-3xl mx-auto leading-relaxed'
          >
            Entdecken Sie unsere besten Momente, Trainingseinheiten und Erfolge. Jedes Bild erzählt eine Geschichte von Leidenschaft, Hingabe und Exzellenz.
          </motion.p>
        </motion.div>

        {/* Slider Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <Slider {...settings}>
            {loading
              ? Array.from({ length: 2 }).map((_, index) => (
                  <FeaturedSkeleton key={index} />
                ))
              : featured.map((items, i) => (
                  <div key={i} className="px-2 md:px-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className='group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300'
                    >
                      {/* Image Container */}
                      <div className='relative aspect-[4/3] md:aspect-[16/10] overflow-hidden'>
                        <Image
                          src={items.imgSrc}
                          alt={items.heading || `Featured work ${i + 1}`}
                          fill
                          className='object-cover group-hover:scale-110 transition-transform duration-700'
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                        />
                        {/* Gradient Overlay */}
                        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                        
                        {/* Content Overlay */}
                        {items.heading && (
                          <div className='absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
                            <h4 className='text-white text-2xl md:text-3xl font-bold mb-2'>
                              {items.heading}
                            </h4>
                          </div>
                        )}
                      </div>

                      {/* Bottom Content */}
                      {items.heading && (
                        <div className='p-6 md:p-8 bg-white'>
                          <h4 className='text-xl md:text-2xl font-bold text-text-primary text-center'>
                            {items.heading}
                          </h4>
                        </div>
                      )}
                    </motion.div>
                  </div>
                ))}
          </Slider>
        </motion.div>

        {/* Custom Dots Styling */}
        <style jsx global>{`
          .slick-dots {
            bottom: -50px !important;
          }
          .slick-dots li button:before {
            color: var(--color-accent-cyan) !important;
            font-size: 12px !important;
            opacity: 0.3 !important;
          }
          .slick-dots li.slick-active button:before {
            opacity: 1 !important;
            color: var(--color-accent-cyan) !important;
          }
          .slick-dots li button:hover:before {
            opacity: 0.7 !important;
          }
          .slick-prev,
          .slick-next {
            z-index: 20;
          }
          .slick-prev {
            left: -70px;
          }
          .slick-next {
            right: -70px;
          }
          @media (max-width: 1024px) {
            .slick-prev {
              left: 10px;
            }
            .slick-next {
              right: 10px;
            }
          }
          @media (max-width: 768px) {
            .slick-prev,
            .slick-next {
              display: none !important;
            }
          }
        `}</style>
      </div>
    </section>
  )
}

export default Featured
