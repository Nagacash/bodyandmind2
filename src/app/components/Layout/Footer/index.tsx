'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { footerlinks } from '@/app/types/footerlinks'

const footer = () => {
  const [footerlinks, setFooterLinks] = useState<footerlinks[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setFooterLinks(data.FooterLinksData)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/natalie.zimmermann.94',
      icon: '/images/footer/vec.svg',
      color: 'hover:bg-blue-600',
    },
    {
      name: 'TikTok',
      href: 'https://tiktok.com/@nataliezimmermann',
      icon: '/images/footer/tiktok.svg',
      color: 'hover:bg-black',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/nataliezimmermann_ger/',
      icon: '/images/footer/instagram.svg',
      color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500',
    },
  ]

  return (
    <footer className='bg-black text-white relative overflow-hidden'>
      {/* Decorative Background */}
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-black to-black/95 z-0' />
      <div className='absolute top-0 right-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0' />

      <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20'>
        {/* Main Footer Content */}
        <div className='pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-12'>
          <div className='grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-12'>
            {/* Column 1 - About */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='lg:col-span-4 relative z-20'
            >
              <p className='text-white/70 text-base md:text-lg leading-relaxed mb-6 max-w-md'>
                Gemeinsam zu körperlicher Stärke und mentaler Resilienz. Natalie Zimmermann –
                Box-Weltmeisterin und Body & Mind Coach in Hamburg.
              </p>

              {/* Contact Info */}
              <div className='space-y-3 mb-6 md:mb-8'>
                <a
                  href='tel:+494053790578'
                  className='flex items-center gap-3 text-white/80 hover:text-accent-cyan transition-colors duration-300 group text-sm md:text-base'
                >
                  <Icon
                    icon='mdi:phone'
                    className='text-accent-cyan text-lg md:text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300'
                  />
                  <span className='break-all'>040 / 53790578</span>
                </a>
                <a
                  href='mailto:info@nataliezimmermann.de'
                  className='flex items-center gap-3 text-white/80 hover:text-accent-cyan transition-colors duration-300 group text-sm md:text-base'
                >
                  <Icon
                    icon='mdi:email'
                    className='text-accent-cyan text-lg md:text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300'
                  />
                  <span className='break-all'>info@nataliezimmermann.de</span>
                </a>
                <div className='flex items-start gap-3 text-white/80 text-sm md:text-base'>
                  <Icon icon='mdi:map-marker' className='text-accent-cyan text-lg md:text-xl mt-1 flex-shrink-0' />
                  <span>Rothenbaumchaussee 156<br />20149 Hamburg</span>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <p className='text-white/70 text-xs md:text-sm font-semibold mb-3 md:mb-4 uppercase tracking-wide'>
                  Folge uns
                </p>
                <div className='flex items-center gap-3 md:gap-4'>
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className='w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-cyan transition duration-300 group relative z-30'
                      aria-label={social.name}
                    >
                      <Image
                        src={social.icon}
                        alt={social.name}
                        width={18}
                        height={18}
                        className='md:w-5 md:h-5 filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition duration-300 relative z-40'
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Columns 2/3/4 - Footer Links */}
            {footerlinks.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className='lg:col-span-2 relative z-20'
              >
                <h3 className='text-white text-base md:text-lg lg:text-xl font-bold mb-4 md:mb-6 flex items-center gap-2'>
                  <Icon icon='mdi:chevron-right' className='text-accent-cyan text-xs md:text-sm' />
                  {item.section}
                </h3>
                <ul className='space-y-2 md:space-y-3'>
                  {item.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href || '#'}
                        className='text-white/70 text-sm md:text-base hover:text-accent-cyan transition-colors duration-300 flex items-center gap-2 group'
                      >
                        <Icon
                          icon='mdi:chevron-right'
                          className='text-accent-cyan/50 text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition duration-300'
                        />
                        <span className='break-words'>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-white/10 pt-6 md:pt-8 pb-6 md:pb-8 relative z-20'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6'>
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='text-center md:text-left order-2 md:order-1'
            >
              <p className='text-white/70 text-xs md:text-sm lg:text-base'>
                © {new Date().getFullYear()} Natalie Zimmermann. Alle Rechte vorbehalten.
              </p>
              <p className='text-white/50 text-xs mt-1 md:mt-2'>
                Designed by:{' '}
                <Link
                  href='https://cyber-sec-six.vercel.app/#work'
                  target='_blank'
                  className='hover:text-accent-cyan transition-colors duration-300'
                >
                  Naga Codex
                </Link>
              </p>
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='flex items-center justify-center gap-4 md:gap-6 flex-wrap order-1 md:order-2'
            >
              <Link
                href='/impressum'
                className='text-white/70 text-xs md:text-sm lg:text-base hover:text-accent-cyan transition-colors duration-300'
              >
                Impressum
              </Link>
              <div className='w-px h-3 md:h-4 bg-white/20'></div>
              <Link
                href='/datenschutz'
                className='text-white/70 text-xs md:text-sm lg:text-base hover:text-accent-cyan transition-colors duration-300'
              >
                Datenschutz
              </Link>
              <div className='w-px h-3 md:h-4 bg-white/20'></div>
              <Link
                href='/agb'
                className='text-white/70 text-xs md:text-sm lg:text-base hover:text-accent-cyan transition-colors duration-300'
              >
                AGB
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer
