'use client'
import { useState } from 'react'
import { Link, usePathname } from '@/i18n/routing'
import { HeaderItem } from '@/app/types/menu'
import { useActiveNavLink } from '@/app/hooks/useActiveNavLink'
import { Icon } from '@iconify/react'

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const path = usePathname()
  const isActive = useActiveNavLink(item.href)

  const playAudio = () => {
    const audio = new Audio('/sound/click.wav')
    audio.volume = 0.5
    audio.play()
  }

  const handleMouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true)
    }
  }

  const handleMouseLeave = () => {
    setSubmenuOpen(false)
  }

  const handleClick = () => {
    playAudio()
  }

  return (
    <div
      className='relative'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {item.href.startsWith('http') ? (
        <a
          href={item.href}
          target='_blank'
          rel='noopener noreferrer'
          onClick={() => playAudio()}
          className='group relative flex items-center gap-1 text-base font-semibold tracking-tight text-text-primary transition-colors duration-300 hover:text-accent-cyan md:text-lg'
        >
          <span className='relative'>{item.label}</span>
        </a>
      ) : (
      <Link
        href={item.href}
        target={item.target}
        onClick={handleClick}
        className={`group relative flex items-center gap-1 text-base font-semibold tracking-tight transition-colors duration-300 md:text-lg ${
          isActive ? 'text-accent-cyan' : 'text-text-primary hover:text-accent-cyan'
        }`}
      >
        <span className='relative'>
          {item.label}
          {isActive && (
            <span className='absolute -bottom-1 left-0 w-full h-0.5 bg-accent-cyan'></span>
          )}
        </span>
        {item.submenu && (
          <Icon
            icon='mdi:chevron-down'
            className={`text-lg transition-transform duration-300 ${
              submenuOpen ? 'rotate-180' : ''
            }`}
          />
        )}
      </Link>
      )}

      {/* Submenu */}
      {submenuOpen && item.submenu && (
        <div className='absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-2xl py-2 border border-border overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200'>
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className={`block px-4 py-3 text-text-primary hover:bg-accent-cyan/10 hover:text-accent-cyan transition-colors duration-200 ${
                path === subItem.href ? 'bg-accent-cyan/10 text-accent-cyan font-semibold' : ''
              }`}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default HeaderLink
