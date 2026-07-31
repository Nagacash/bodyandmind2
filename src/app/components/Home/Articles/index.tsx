'use client'

import Image from 'next/image'
import Slider from 'react-slick'
import { Link, useRouter } from '@/i18n/routing'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { useTranslations } from 'next-intl'

const ARTICLE_IMAGES = [
  '/images/dedicated/sab5.webp',
  '/images/articles/nat3.webp',
  '/images/dedicated/sab2.webp',
] as const

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

const getServiceIcon = (heading: string) => {
  const headingLower = heading.toLowerCase()
  if (headingLower.includes('recovery') || headingLower.includes('ihht')) {
    return 'mdi:spa-outline'
  }
  if (headingLower.includes('flow') || headingLower.includes('box') || headingLower.includes('kick')) {
    return 'mdi:boxing-glove'
  }
  if (headingLower.includes('form')) {
    return 'mdi:dumbbell'
  }
  if (headingLower.includes('coach')) {
    return 'mdi:brain'
  }
  return 'mdi:star'
}

const Articles = () => {
  const t = useTranslations('articles')
  const router = useRouter()

  const playAudio = () => {
    const audio = new Audio('/sound/click.wav')
    audio.volume = 0.5
    audio.play()
  }

  const itemsRaw = t.raw('items') as Record<
    string,
    {
      heading: string
      heading2: string
      description: string
      date: string
      cta: string
    }
  >

  const articles = Object.values(itemsRaw).map((item, i) => ({
    ...item,
    imgSrc: ARTICLE_IMAGES[i],
  }))

  return (
    <section id='Blog' className='page-section-top relative overflow-hidden bg-light pb-16 md:pb-20 lg:pb-24'>
      <div className='absolute top-0 right-0 w-1/3 h-1/3 bg-accent-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2' />
      <div className='absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent-cyan/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2' />

      <div className='container mx-auto max-w-7xl px-4 relative z-10'>
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
            className='section-eyebrow'
          >
            {t('eyebrow')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`mb-6 text-[clamp(1.875rem,5.5vw+0.75rem,3.75rem)] font-normal text-text-primary font-display leading-[0.98]`}
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-text-secondary text-base md:text-lg max-w-3xl mx-auto leading-relaxed'
          >
            {t('description')}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='-mx-2 overflow-hidden sm:mx-0'
        >
          <Slider {...settings}>
            {articles.map((item, i) => {
              const serviceIcon = getServiceIcon(item.heading)
              return (
                <div key={i} className='flex h-full px-2 md:px-4'>
                  <div className='group flex h-full w-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl'>
                    <div className='relative h-64 shrink-0 overflow-hidden'>
                      <Image
                        src={item.imgSrc}
                        alt={item.heading}
                        fill
                        className='object-cover transition-transform duration-500 group-hover:scale-110'
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent' />

                      <div className='absolute top-4 right-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-cyan shadow-lg'>
                        <Icon icon={serviceIcon} className='text-2xl text-white' />
                      </div>

                      <div className='absolute bottom-4 left-4'>
                        <span className='rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-text-primary backdrop-blur-sm'>
                          {item.date}
                        </span>
                      </div>
                    </div>

                    <div className='flex flex-1 flex-col p-6 md:p-8'>
                      <div className='mb-4 min-h-[4.25rem] shrink-0 md:min-h-[4.75rem]'>
                        <h3
                          className={`mb-2 text-2xl font-semibold text-text-primary md:text-3xl`}
                        >
                          {item.heading}
                        </h3>
                        {item.heading2 && (
                          <h4 className='text-lg font-semibold text-accent-cyan md:text-xl'>
                            {item.heading2}
                          </h4>
                        )}
                      </div>

                      <p className='mb-6 flex-1 text-sm leading-relaxed text-text-secondary md:text-base'>
                        {item.description}
                      </p>

                      <button
                        type='button'
                        onClick={() => {
                          playAudio()
                          router.push('/kontakt')
                        }}
                        className='btn-primary mt-auto flex min-h-12 w-full shrink-0 items-center justify-center gap-2 px-4 py-3 text-sm sm:text-base'
                        aria-label={`${item.heading} - ${item.cta}`}
                      >
                        <Icon icon='mdi:arrow-right' className='shrink-0 text-xl' aria-hidden />
                        <span className='text-balance'>{item.cta}</span>
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </motion.div>

        <style jsx global>{`
          #Blog .slick-track {
            display: flex !important;
            align-items: stretch !important;
          }
          #Blog .slick-slide {
            height: auto !important;
            display: flex !important;
          }
          #Blog .slick-slide > div {
            display: flex !important;
            width: 100%;
            height: 100%;
          }
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='mt-16 md:mt-20 text-center'
        >
          <div className='section-cta-brand text-center'>
            <div className='section-cta-brand-inner'>
              <div className='section-cta-brand-glow' aria-hidden />
              <div className='relative z-10'>
                <Icon icon='mdi:handshake' className='mx-auto mb-4 text-5xl text-white' aria-hidden />
                <h3 className='mb-4 font-display text-3xl font-normal text-white md:text-4xl text-balance'>
                  {t('bottomCta.title')}
                </h3>
                <p className='mx-auto mb-6 max-w-2xl text-lg text-white/90 text-pretty'>
                  {t('bottomCta.description')}
                </p>
                <Link href='/kontakt' className='btn-brand-gradient inline-flex min-h-12 items-center justify-center gap-2'>
                  {t('bottomCta.button')}
                  <Icon icon='mdi:arrow-right' className='text-xl' aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Articles
