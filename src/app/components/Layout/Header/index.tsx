'use client'
import { Key, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { HeaderItem } from '@/app/types/menu'
import { headerNavLinks, mobileNavLinks } from '@/app/data/nav'
import Logo from './Logo'
import HeaderLink from './Navigation/HeaderLink'
import MobileHeaderLink from './Navigation/MobileHeaderLink'
import { Icon } from '@iconify/react/dist/iconify.js'

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    setSticky(window.scrollY >= 80)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navbarOpen])

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [navbarOpen])

  // header data fetch
  const [headerData, setHeaderData] = useState<HeaderItem[]>(headerNavLinks)
  const [mobileHeaderData, setMobileHeaderData] = useState<HeaderItem[]>(mobileNavLinks)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setHeaderData(data.headerData)
        setMobileHeaderData(data.mobileHeaderData)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <header
      className={`fixed top-0 z-sticky w-full transition-[background-color,box-shadow,border-color] duration-300 ${
        sticky
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-border'
          : 'bg-white border-b border-border/50'
      }`}
    >
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='flex items-center justify-between h-16 md:h-20 lg:h-24'>
          {/* Logo */}
          <div className='flex-shrink-0 z-50'>
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center gap-6 xl:gap-8 flex-grow justify-center'>
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className='flex items-center gap-3 md:gap-4'>
            {/* WhatsApp Button - Desktop */}
            <a
              href='https://wa.me/494053790578'
              target='_blank'
              rel='noopener noreferrer'
              className='btn-accent-sm hidden lg:flex'
              aria-label='WhatsApp Kontakt'
            >
              <Icon icon='mdi:whatsapp' className='text-xl' aria-hidden='true' />
              <span className='hidden xl:inline'>WhatsApp</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className='btn-icon-surface z-50 p-2 lg:hidden'
              aria-label='Toggle mobile menu'
              aria-expanded={navbarOpen}
            >
              <div className='flex flex-col gap-1.5 w-6'>
                <span
                  className={`block h-0.5 bg-darkmode transition-[transform,opacity] duration-300 ${
                    navbarOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 bg-darkmode transition-[transform,opacity] duration-300 ${
                    navbarOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 bg-darkmode transition-[transform,opacity] duration-300 ${
                    navbarOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen && (
        <div
          className='fixed inset-0 bg-black/50 z-fixed lg:hidden'
          onClick={() => setNavbarOpen(false)}
          aria-hidden='true'
        />
      )}

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-full max-w-sm bg-light shadow-2xl transform transition-transform duration-300 ease-in-out z-modal ${
          navbarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Mobile Menu Header */}
        <div className='flex items-center justify-between p-6 border-b border-border'>
          <Logo />
          <button
            onClick={() => setNavbarOpen(false)}
            className='btn-icon-surface p-2 hover:bg-grey'
            aria-label='Close menu'
          >
            <Icon icon='mdi:close' className='text-2xl text-text-primary' />
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className='flex flex-col p-6 overflow-y-auto h-[calc(100vh-80px)]'>
          {mobileHeaderData.map((item: HeaderItem, index: Key | null | undefined) => (
            <MobileHeaderLink key={index} item={item} setNavbarOpen={setNavbarOpen} />
          ))}

          {/* Mobile WhatsApp Button */}
          <a
            href='https://wa.me/494053790578'
            target='_blank'
            rel='noopener noreferrer'
            className='btn-accent-sm mt-6 flex w-full justify-center'
            onClick={() => setNavbarOpen(false)}
          >
            <Icon icon='mdi:whatsapp' className='text-xl' />
            WhatsApp Kontakt
          </a>

          {/* Mobile Contact Info */}
          <div className='mt-8 pt-8 border-t border-border'>
            <p className='text-text-secondary text-sm font-semibold mb-4 uppercase tracking-wide'>
              Kontakt
            </p>
            <div className='space-y-3'>
              <a
                href='tel:+494053790578'
                className='flex items-center gap-3 text-text-primary hover:text-accent-cyan transition-colors duration-300'
              >
                <Icon icon='mdi:phone' className='text-xl text-accent-cyan' />
                <span>040 / 53790578</span>
              </a>
              <a
                href='mailto:info@nataliezimmermann.de'
                className='flex items-center gap-3 text-text-primary hover:text-accent-cyan transition-colors duration-300'
              >
                <Icon icon='mdi:email' className='text-xl text-accent-cyan shrink-0' />
                <span className='break-all'>info@nataliezimmermann.de</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
