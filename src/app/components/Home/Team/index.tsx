'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { workdata } from '@/app/types/workdata'
import { bebasNeue } from '@/app/fonts'

const stats = [
  { value: '22+', label: 'Jahre Erfahrung' },
  { value: '1000+', label: 'Zufriedene Kunden' },
  { value: '50+', label: 'Erfolgreiche Programme' },
  { value: '3×', label: 'Weltmeisterin' },
]

const TEAM_PHOTO_HEIGHT = 'h-64 sm:h-72 lg:h-[340px]'
const TEAM_CARD_WIDTH =
  'w-[min(calc(100vw-2.5rem),340px)] max-w-full shrink-0 snap-center lg:w-auto lg:min-w-0 lg:max-w-none lg:shrink'

function TeamCardSkeleton() {
  return (
    <div
      role='status'
      aria-label='Team wird geladen'
      className='team-card min-w-0 w-[min(calc(100vw-2.5rem),340px)] max-w-full shrink-0 snap-center animate-pulse overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-border/50 lg:w-auto lg:min-w-0'
    >
      <div className={`${TEAM_PHOTO_HEIGHT} bg-border/40`} />
      <div className='space-y-3 p-6'>
        <div className='mx-auto h-6 w-32 rounded-full bg-border/50' />
        <div className='space-y-2'>
          <div className='h-3 w-full rounded-full bg-border/40' />
          <div className='h-3 w-full rounded-full bg-border/40' />
          <div className='mx-auto h-3 w-4/5 rounded-full bg-border/40' />
        </div>
      </div>
      <span className='sr-only'>Lädt…</span>
    </div>
  )
}

function TeamMemberCard({ member }: { member: workdata }) {
  return (
    <article
      className={`team-card group flex flex-col overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-border/50 transition-[box-shadow,ring-color] duration-200 hover:shadow-lg hover:ring-accent-cyan/30 ${TEAM_CARD_WIDTH}`}
    >
      <div
        className={`relative ${TEAM_PHOTO_HEIGHT} w-full shrink-0 overflow-hidden bg-gradient-to-b from-grey to-white`}
      >
        <div className='absolute inset-0 flex items-center justify-center p-4 pb-2'>
          <Image
            src={member.imgSrc}
            alt={`${member.name} – Teammitglied bei Natalie Zimmermann`}
            width={320}
            height={400}
            className='max-h-full w-auto max-w-full object-contain object-center transition-[filter] duration-200 group-hover:brightness-[1.03]'
            sizes='(max-width: 1024px) min(calc(100vw - 2.5rem), 340px), 340px'
          />
        </div>
      </div>
      <div className='flex min-h-0 flex-col p-5 pt-4 sm:p-6'>
        <h3
          className={`mb-3 text-center text-2xl font-bold text-text-primary lg:text-left ${bebasNeue.className}`}
        >
          {member.name}
        </h3>
        <p className='text-center text-sm leading-relaxed text-text-secondary break-words hyphens-auto md:text-base lg:text-left'>
          {member.profession}
        </p>
      </div>
    </article>
  )
}

const Team = () => {
  const [teamMembers, setTeamMembers] = useState<workdata[]>([])
  const [loading, setLoading] = useState(true)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setTeamMembers(data.WorkData || [])
      } catch (error) {
        console.error('Error fetching team data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    setCanScrollPrev(scrollLeft > 4)
    setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 4)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    updateScrollState()

    el.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)

    return () => {
      el.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [loading, teamMembers.length, updateScrollState])

  const scrollByCard = useCallback((direction: -1 | 1) => {
    const el = scrollRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('.team-card')
    const gap = 24
    const distance = (card?.offsetWidth ?? 320) + gap
    el.scrollBy({ left: direction * distance, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
  }, [prefersReducedMotion])

  const showCarouselControls = !loading && teamMembers.length > 1

  return (
    <section id='Team' className='relative overflow-hidden bg-grey py-16 md:py-20 lg:py-24'>
      <div
        className='pointer-events-none absolute inset-0 bg-[url("/images/wework/elipse.svg")] bg-center bg-no-repeat opacity-[0.07]'
        aria-hidden
      />

      <div className='container relative z-10 mx-auto max-w-7xl px-4'>
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='mb-10 text-center md:mb-14'
        >
          <p className='mb-4 text-sm font-bold uppercase tracking-widest text-accent-cyan md:text-base'>
            Unser Team
          </p>
          <h2
            className={`mb-5 text-4xl font-bold text-text-primary md:text-5xl lg:text-6xl ${bebasNeue.className} text-balance`}
          >
            Gemeinsam zu deinem Ziel
          </h2>
          <p className='copy-prose mx-auto mb-6 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg'>
            Physiotherapie, Training und Mental Coaching – in Hamburg verbindet unser Team Medizin,
            Sport und Mindset unter einem Dach.
          </p>
          <blockquote className='mx-auto max-w-xl text-sm italic text-text-muted md:text-base'>
            „Die Stärke des Teams ist jedes einzelne Mitglied. Die Stärke eines jeden Mitglieds ist
            das Team.“
            <footer className='mt-1 text-xs not-italic font-semibold text-text-secondary md:text-sm'>
              — Phil Jackson
            </footer>
          </blockquote>
        </motion.div>

        <div className='relative'>
          {showCarouselControls && (
            <>
              <div
                className='pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-grey to-transparent lg:hidden'
                aria-hidden
              />
              <div
                className='pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-grey to-transparent lg:hidden'
                aria-hidden
              />
            </>
          )}

          <div
            ref={scrollRef}
            className='team-scroll flex gap-4 overflow-x-auto overscroll-x-contain px-[max(1rem,calc((100%-min(calc(100vw-2.5rem),340px))/2))] pb-4 pt-1 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-2'
            role='region'
            aria-roledescription='Karussell'
            aria-label='Teammitglieder'
          >
            {loading
              ? Array.from({ length: 3 }).map((_, i) => <TeamCardSkeleton key={i} />)
              : teamMembers.map((member) => (
                  <TeamMemberCard key={member.name} member={member} />
                ))}
          </div>

          {showCarouselControls && (
            <div className='mt-6 flex items-center justify-center gap-3 lg:hidden'>
              <button
                type='button'
                onClick={() => scrollByCard(-1)}
                disabled={!canScrollPrev}
                aria-label='Vorheriges Teammitglied'
                className='inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-border bg-white text-text-primary shadow-sm transition-colors duration-200 hover:border-accent-cyan hover:text-accent-cyan focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cyan disabled:cursor-not-allowed disabled:opacity-40'
              >
                <Icon icon='mdi:chevron-left' className='text-2xl' aria-hidden />
              </button>
              <button
                type='button'
                onClick={() => scrollByCard(1)}
                disabled={!canScrollNext}
                aria-label='Nächstes Teammitglied'
                className='inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-border bg-white text-text-primary shadow-sm transition-colors duration-200 hover:border-accent-cyan hover:text-accent-cyan focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cyan disabled:cursor-not-allowed disabled:opacity-40'
              >
                <Icon icon='mdi:chevron-right' className='text-2xl' aria-hidden />
              </button>
            </div>
          )}
        </div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='mt-12 md:mt-16'
        >
          <div className='relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent-cyan to-accent-cyan-dark p-8 text-white md:p-12'>
            <div
              className='absolute top-0 right-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10'
              aria-hidden
            />
            <div className='relative z-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-8 md:grid-cols-4'>
              {stats.map((item) => (
                <div key={item.label} className='min-w-0 px-1 text-center'>
                  <p className={`mb-1 text-3xl font-bold tabular-nums sm:text-4xl md:text-5xl ${bebasNeue.className}`}>
                    {item.value}
                  </p>
                  <p className='text-xs leading-snug text-white/90 text-balance sm:text-sm md:text-base'>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-12'
        >
          <Link
            href='/kontakt'
            className='btn-primary inline-flex min-h-12 cursor-pointer items-center justify-center gap-2'
          >
            Erstgespräch vereinbaren
            <Icon icon='mdi:arrow-right' className='text-xl' aria-hidden />
          </Link>
          <Link
            href='/#UberMich'
            className='btn-secondary inline-flex min-h-12 cursor-pointer items-center justify-center gap-2'
          >
            Natalie kennenlernen
            <Icon icon='mdi:account-outline' className='text-xl' aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Team
