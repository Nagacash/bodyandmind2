'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { articles } from '@/app/types/articles'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import ArticlesSkeleton from '../../Skeleton/Articles'
import { bebasNeue } from '@/app/fonts'

const settings = {
  dots: true,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay: false,
  speed: 500,
  cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
  ],
}

// Service icons mapping
const getServiceIcon = (heading: string) => {
  const headingLower = heading.toLowerCase()
  if (headingLower.includes('speaker') || headingLower.includes('vortrag')) {
    return 'mdi:microphone'
  }
  if (headingLower.includes('marken') || headingLower.includes('brand')) {
    return 'mdi:account-star'
  }
  if (headingLower.includes('coach')) {
    return 'mdi:brain'
  }
  return 'mdi:star'
}

const Articles = () => {
  const router = useRouter()
  const playAudio = () => {
    const audio = new Audio('/sound/click.wav')
    audio.volume = 0.5
    audio.play()
  }

  const [articles, setArticles] = useState<articles[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setArticles(data.ArticlesData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <section id='Blog' className='relative bg-light overflow-hidden py-16 md:py-20 lg:py-24'>
      {/* Decorative Background */}
      <div className='absolute top-0 right-0 w-1/3 h-1/3 bg-accent-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2' />
      <div className='absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent-cyan/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2' />

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
            Meine Leistungen
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 ${bebasNeue.className}`}
          >
            Was ich für Sie tun kann
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-text-secondary text-base md:text-lg max-w-3xl mx-auto leading-relaxed'
          >
            Von inspirierenden Vorträgen über professionelles Coaching bis hin zu Markenpartnerschaften – entdecken Sie meine vielfältigen Leistungen.
          </motion.p>
        </motion.div>

        {/* Services Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Slider {...settings}>
            {loading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <ArticlesSkeleton key={i} />
                ))
              : articles.map((item, i) => {
                  const serviceIcon = getServiceIcon(item.heading)
                  return (
                    <div key={i} className='px-2 md:px-4'>
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className='bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col group'
                      >
                        {/* Image Section */}
                        <div className='relative h-64 overflow-hidden'>
                          <Image
                            src={item.imgSrc}
                            alt={item.heading || 'Service image'}
                            fill
                            className='object-cover group-hover:scale-110 transition-transform duration-500'
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                          />
                          <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent' />
                          
                          {/* Icon Badge */}
                          <div className='absolute top-4 right-4 w-14 h-14 bg-accent-cyan rounded-2xl flex items-center justify-center shadow-lg'>
                            <Icon icon={serviceIcon} className='text-white text-2xl' />
                          </div>

                          {/* Category Badge */}
                          <div className='absolute bottom-4 left-4'>
                            <span className='bg-white/90 backdrop-blur-sm text-text-primary px-3 py-1 rounded-full text-xs font-semibold'>
                              {item.date}
                            </span>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className='p-6 md:p-8 flex-grow flex flex-col'>
                          {/* Heading */}
                          <div className='mb-4'>
                            <h3 className={`text-2xl md:text-3xl font-bold text-text-primary mb-2 ${bebasNeue.className}`}>
                              {item.heading}
                            </h3>
                            {item.heading2 && (
                              <h4 className='text-lg md:text-xl font-semibold text-accent-cyan'>
                                {item.heading2}
                              </h4>
                            )}
                          </div>

                          {/* Description */}
                          <p className='text-text-secondary text-sm md:text-base leading-relaxed mb-6 flex-grow line-clamp-4'>
                            {item.name}
                          </p>

                          {/* CTA Button */}
                          <button
                            onClick={() => {
                              playAudio()
                              router.push('/kontakt')
                            }}
                            className='btn-primary w-full inline-flex items-center justify-center gap-2'
                            aria-label={`${item.heading} - Jetzt anfragen`}
                          >
                            <Icon icon='mdi:arrow-right' className='text-xl' />
                            {item.time || 'Jetzt anfragen'}
                          </button>
                        </div>
                      </motion.div>
                    </div>
                  )
                })}
          </Slider>
        </motion.div>

        {/* Custom Slider Styles */}
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
          .slick-prev,
          .slick-next {
            z-index: 20;
            width: 48px;
            height: 48px;
          }
          .slick-prev:before,
          .slick-next:before {
            color: var(--color-accent-cyan);
            font-size: 24px;
          }
          .slick-prev {
            left: -60px;
          }
          .slick-next {
            right: -60px;
          }
          @media (max-width: 1024px) {
            .slick-prev,
            .slick-next {
              display: none !important;
            }
          }
        `}</style>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='mt-16 md:mt-20 text-center'
        >
          <div className='bg-gradient-to-br from-accent-cyan to-accent-cyan-dark rounded-3xl p-8 md:p-12 text-white relative overflow-hidden'>
            <div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2' />
            <div className='relative z-10'>
              <Icon icon='mdi:handshake' className='text-5xl mb-4 mx-auto' />
              <h3 className={`text-3xl md:text-4xl font-bold mb-4 ${bebasNeue.className}`}>
                Bereit für eine Zusammenarbeit?
              </h3>
              <p className='text-white/90 text-lg mb-6 max-w-2xl mx-auto'>
                Lassen Sie uns gemeinsam Ihre Ziele erreichen. Kontaktieren Sie mich für ein individuelles Angebot.
              </p>
              <Link
                href='/kontakt'
                className='btn-solid-light'
              >
                Jetzt Kontakt aufnehmen
                <Icon icon='mdi:arrow-right' className='text-xl' />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Articles
