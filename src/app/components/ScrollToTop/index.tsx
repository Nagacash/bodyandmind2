'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from '@/i18n/routing'
import { WHATSAPP_NUMBER_DISPLAY, WHATSAPP_URL } from '@/app/data/contact'
import { Icon } from '@iconify/react'

export default function ScrollToTop() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    setIsVisible(false)
    setScrollProgress(0)
  }, [pathname])

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0

      setScrollProgress(progress)

      if (scrollTop > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          toggleVisibility()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    toggleVisibility()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  return (
    <>
      <div
        className='scroll-progress'
        style={{ width: `${scrollProgress}%` }}
        aria-hidden='true'
      />

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className='fixed bottom-6 right-6 md:bottom-8 md:right-8 z-fixed flex flex-col gap-3'
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={WHATSAPP_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='btn-brand-gradient inline-flex items-center gap-2'
                aria-label={`WhatsApp Kontakt - ${WHATSAPP_NUMBER_DISPLAY}`}
              >
                <Icon icon='mdi:whatsapp' className='text-xl' />
                <span className='hidden sm:inline'>{WHATSAPP_NUMBER_DISPLAY}</span>
                <span className='sm:hidden'>WhatsApp</span>
              </Link>
            </motion.div>

            <motion.button
              onClick={scrollToTop}
              aria-label='Scroll to top'
              className='back-to-top group flex h-12 w-12 cursor-pointer items-center justify-center rounded-sm bg-accent-cyan text-white shadow-md shadow-accent-cyan/35 transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-accent-cyan-dark hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Icon icon='mdi:arrow-up' className='text-2xl' />
              </motion.div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
