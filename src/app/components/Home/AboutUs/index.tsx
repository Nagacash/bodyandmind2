'use client'
import { useEffect, useState } from 'react'
import { aboutdata } from '@/app/types/aboutdata'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import AboutSkeleton from '../../Skeleton/AboutUs'
import Modal from '@/app/components/Modal'

const Aboutus = () => {
  // fetch about data
  const [about, setAbout] = useState<aboutdata[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const openModal = (content: string, title: string) => {
    console.log('Opening modal with content:', content);
    console.log('Title:', title);
    const formattedContent = content.replace(/\n/g, '<br />');
    setModalContent(formattedContent);
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
    setModalTitle('');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setAbout(data.Aboutdata)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='About' className=' bg-cover bg-center overflow-hidden py-16'>
      <div className='container mx-auto max-w-7xl px-4 relative z-1'>
        <div className='p-12 bg-gray-100 rounded-3xl'>
          <Image
            src='/images/aboutus/dots.svg'
            width={100}
            height={100}
            alt='dots-image'
            className='absolute bottom-1 -left-20 w-auto h-auto'
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-center text-red-500 text-lg tracking-widest uppercase mt-10'>
            about us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='text-center pb-12 text-black'>SPEAKERIN & MENTAL COACH</motion.h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-10'>
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <AboutSkeleton key={index} />
                ))
              : about.map((item, i) => {
                  console.log('Item Heading:', item.heading);
                  console.log('Condition result:', item.heading.trim() === 'DER MENTAL-COACH:' || item.heading.trim() === 'Die Speakerin:');
                  return (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                    key={i}
                    className='hover:bg-darkmode bg-white rounded-3xl p-8 shadow-xl group flex flex-col justify-between min-h-[500px]'>
                    <div className="flex-grow">
                      <h5 className='group-hover:text-white mb-5'>
                        {item.heading}
                      </h5>
                    <div className="w-full h-64">
                      <Image
                        src={item.imgSrc}
                        alt={item.imgSrc}
                        width={100}
                        height={100}
                        className='w-full h-full object-cover'
                      />
                    </div>
                      <p className='text-lg font-normal text-black group-hover:text-white mb-5 mt-8 whitespace-pre-line'>
                        {item.paragraph}
                      </p>
                    </div>
                    {item.heading.trim() === 'About us' || item.heading.trim() === 'Die Speakerin' || item.heading.trim() === 'DER MENTAL-COACH:' ? (
                      <button
                        onClick={() => openModal(item.fullParagraph || '', item.heading)}
                        className='text-18 font-semibold text-red-600 hover-underline flex items-center'>
                        {item.link}
                        <Icon
                          icon='tabler:chevron-right'
                          width='20'
                          height='20'
                        />
                      </button>
                    ) : (
                      <Link
                        href='#'
                        className='text-18 font-semibold text-red-600 hover-underline flex items-center'>
                        {item.link}
                        <Icon
                          icon='tabler:chevron-right'
                          width='20'
                          height='20'
                        />
                      </Link>
                    )}
                  </motion.div>
                )})}          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} title={modalTitle}>
        <p className="text-black" dangerouslySetInnerHTML={{ __html: modalContent }}></p>
      </Modal>
    </section>
  )
}

export default Aboutus
