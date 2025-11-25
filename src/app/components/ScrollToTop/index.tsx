'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / scrollHeight) * 100

      setScrollProgress(progress)

      if (scrollTop > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Throttle scroll events for better performance
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
    toggleVisibility() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className='scroll-progress'
        style={{ width: `${scrollProgress}%` }}
        aria-hidden='true'
      />

      {/* Scroll to Top Button & WhatsApp */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className='fixed bottom-6 right-6 md:bottom-8 md:right-8 z-999 flex flex-col gap-3'
          >
            {/* WhatsApp Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href='https://wa.me/494053790578'
                target='_blank'
                rel='noopener noreferrer'
                className='btn-primary text-sm md:text-base inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300'
                aria-label='WhatsApp Kontakt - 040 / 53790578'
              >
                <Icon icon='mdi:whatsapp' className='text-xl' />
                <span className='hidden sm:inline'>040 / 53790578</span>
                <span className='sm:hidden'>WhatsApp</span>
              </Link>
            </motion.div>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              aria-label='Scroll to top'
              className='back-to-top flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-accent-cyan text-white shadow-lg transition-all duration-300 hover:bg-accent-cyan/90 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 group'
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
