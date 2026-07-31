'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { useTranslations } from 'next-intl'

const VIDEO_SRCS = [
  'https://www.youtube-nocookie.com/embed/SLAkZV6mL3E?rel=0',
  'https://www.youtube-nocookie.com/embed/-f76VQTPltI?rel=0',
  'https://www.youtube-nocookie.com/embed/tfqBXnPkm4A?rel=0',
  'https://www.youtube-nocookie.com/embed/sFCfVHTVoy4?rel=0',
] as const

const VideoGallery: React.FC = () => {
  const t = useTranslations('presse')
  const reduceMotion = useReducedMotion()

  const videos = Object.values(
    t.raw('videoGallery.videos') as Record<string, { title: string }>
  ).map((video, i) => ({
    id: String(i + 1),
    src: VIDEO_SRCS[i],
    title: video.title,
  }))

  const playAudio = () => {
    const audio = new Audio('/sound/click.wav')
    audio.volume = 0.5
    audio.play()
  }
  const [[page, direction], setPage] = useState([0, 0])

  const paginate = (newDirection: number) => {
    setPage(([oldPage]) => [oldPage + newDirection, newDirection])
  }

  const videoIndex = Math.abs(page % videos.length)
  const currentVideo = videos[videoIndex]

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        playAudio()
        setPage(([oldPage]) => [oldPage - 1, -1])
      } else if (e.key === 'ArrowRight') {
        playAudio()
        setPage(([oldPage]) => [oldPage + 1, 1])
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  const slideVariants = reduceMotion
    ? {
        enter: { opacity: 0 },
        center: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        enter: (d: number) => ({ x: d > 0 ? 48 : -48, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (d: number) => ({ x: d < 0 ? 48 : -48, opacity: 0 }),
      }

  const navBtnClass =
    'absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-sm border border-border/60 bg-white/95 text-text-primary shadow-[var(--shadow-md)] backdrop-blur-sm transition-[background-color,box-shadow,transform] duration-200 hover:bg-white hover:shadow-[var(--shadow-lg)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 active:scale-[0.97]'

  return (
    <div className='relative mx-auto w-full max-w-5xl'>
      <div className='relative w-full overflow-hidden rounded-2xl border border-border bg-black shadow-[var(--shadow-card-lift)]'>
        <AnimatePresence initial={false} custom={direction} mode='wait'>
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{
              x: { type: 'spring', stiffness: 320, damping: 32 },
              opacity: { duration: reduceMotion ? 0.12 : 0.22 },
            }}
            className='aspect-video w-full'
          >
            <iframe
              src={currentVideo.src}
              title={currentVideo.title}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
              className='h-full w-full'
              loading='lazy'
            />
          </motion.div>
        </AnimatePresence>

        <button
          type='button'
          onClick={() => {
            playAudio()
            paginate(-1)
          }}
          className={`left-3 sm:left-4 ${navBtnClass}`}
          aria-label={t('videoGallery.prevVideo')}
        >
          <Icon icon='mdi:chevron-left' className='text-2xl' aria-hidden />
        </button>
        <button
          type='button'
          onClick={() => {
            playAudio()
            paginate(1)
          }}
          className={`right-3 sm:right-4 ${navBtnClass}`}
          aria-label={t('videoGallery.nextVideo')}
        >
          <Icon icon='mdi:chevron-right' className='text-2xl' aria-hidden />
        </button>

        <div className='absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-lg bg-black/80 px-3 py-1.5 font-telemetry text-xs tabular-nums text-white backdrop-blur-sm'>
          {videoIndex + 1} / {videos.length}
        </div>
      </div>

      <div className='mt-6 overflow-x-auto pb-2'>
        <div className='flex justify-center gap-3'>
          {videos.map((video, index) => (
            <button
              type='button'
              key={video.id}
              onClick={() => {
                playAudio()
                const dir = index > videoIndex ? 1 : -1
                setPage([index, dir])
              }}
              className={`h-16 w-24 shrink-0 cursor-pointer overflow-hidden rounded-sm border-2 transition-[border-color,opacity,transform] duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 ${
                index === videoIndex
                  ? 'scale-105 border-accent-cyan opacity-100 shadow-[var(--shadow-md)]'
                  : 'border-transparent opacity-70 hover:border-accent-cyan/40 hover:opacity-100'
              }`}
              aria-label={`Video ${index + 1}: ${video.title}`}
              aria-current={index === videoIndex ? 'true' : undefined}
            >
              <div className='flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-blue via-brand-red to-brand-purple'>
                <Icon icon='mdi:play' className='text-2xl text-white' aria-hidden />
              </div>
            </button>
          ))}
        </div>
      </div>

      <p className='mt-4 flex items-center justify-center gap-2 text-center text-xs text-text-secondary'>
        <Icon icon='mdi:keyboard' className='text-accent-cyan' aria-hidden />
        {t('videoGallery.keyboardHint')}
      </p>
    </div>
  )
}

export default VideoGallery
