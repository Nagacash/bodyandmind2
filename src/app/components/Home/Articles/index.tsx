'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { articles } from '@/app/types/articles'
import { motion } from 'framer-motion'
import ArticlesSkeleton from '../../Skeleton/Articles'

const settings = {
  dots: true,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: false,
  autoplay: false,
  speed: 500,
  cssEase: 'linear',
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
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
}

const Articles = () => {
  const router = useRouter();
  // fetch data

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
    <section id='Blog' className='relative bg-grey overflow-hidden py-16'>
      <div className='container mx-auto max-w-7xl px-4 relative'>
        <div className='text-center'>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-red-500 text-xl font-normal tracking-widest'>
            NATALIE ZIMMERMANN
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}>Meine leistungen.</motion.h2>
        </div>

        <Slider {...settings}>
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <ArticlesSkeleton key={i} />
              ))
            : articles.map((items, i) => (
                <div key={i}>
                  <div className='bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-4xl relative h-[600px] sm:h-[550px] flex flex-col justify-between'>
                    <div className="w-full h-64">
                      <Image
                        src={items.imgSrc}
                        alt='gaby'
                        width={150}
                        height={150}
                        className='w-full h-full object-cover'
                      />
                    </div>

                    <h5 className='font-bold text-center mt-8'>{items.heading}</h5>
                    <h5 className='font-bold text-center'>{items.heading2}</h5>
                    <div className='flex-grow min-h-[100px]'>
                      <h3 className='text-sm font-normal text-black/75 dark:text-white/75 text-center'>
                        {items.name}
                      </h3>
                      <h3 className='text-sm font-normal text-black/75 dark:text-white/75 text-center'>
                        {items.date}
                      </h3>
                    </div>
                    <button
                      onClick={() => {
                        router.push('/kontakt');
                      }}
                      className='mt-4 bg-black text-white text-lg font-semibold py-2 px-6 rounded-full hover:bg-gray-800 hover:cursor-pointer transition duration-300 ease-in-out'>
                      Get started
                    </button>
                  </div>
                </div>
              ))}
        </Slider>
      </div>
    </section>
  )
}
export default Articles
