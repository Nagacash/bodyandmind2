'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'

interface Video {
  id: string
  src: string
  title: string
  thumbnail?: string
}

const videos: Video[] = [
  {
    id: '1',
    src: 'https://www.youtube-nocookie.com/embed/Jwbx5gjUos8?si=KYbhBA76P9xBQbX0&rel=0',
    title: 'YouTube video player 1',
  },
  {
    id: '2',
    src: 'https://www.youtube-nocookie.com/embed/3yoKKKqGqAA?si=yLbyaMHvJ8Ro1Xa8&rel=0',
    title: 'YouTube video player 2',
  },
  {
    id: '3',
    src: 'https://www.youtube-nocookie.com/embed/SLAkZV6mL3E?si=Gj7FMcUHRLb2KKnH&rel=0',
    title: 'YouTube video player 3',
  },
  {
    id: '4',
    src: 'https://www.youtube-nocookie.com/embed/oxgrS13Fb0o?si=gjNRxmTveESoxvJ6&rel=0',
    title: 'YouTube video player 4',
  },
  {
    id: '5',
    src: 'https://www.youtube-nocookie.com/embed/sFCfVHTVoy4?si=JLrDf4Fj3oyrLR0e&rel=0',
    title: 'YouTube video player 5',
  },
  {
    id: '6',
    src: 'https://www.youtube-nocookie.com/embed/WjmfVrdd7dA?rel=0',
    title: 'YouTube video player 6',
  },
  {
    id: '7',
    src: 'https://www.youtube-nocookie.com/embed/2z4UgDQCOhE?rel=0',
    title: 'YouTube video player 7',
  },
]

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
}

const VideoGallery: React.FC = () => {
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

  // Keyboard navigation
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

  return (
    <div className='relative w-full max-w-5xl mx-auto'>
      {/* Main Video Player */}
      <div className='relative w-full overflow-hidden rounded-2xl shadow-2xl bg-black'>
        <AnimatePresence initial={false} custom={direction} mode='wait'>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
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
              className='w-full h-full'
              loading='lazy'
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={() => {
            playAudio()
            paginate(-1)
          }}
          className='absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-black p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 hover:scale-110'
          aria-label='Vorheriges Video'
        >
          <Icon icon='mdi:chevron-left' className='text-2xl' />
        </button>
        <button
          onClick={() => {
            playAudio()
            paginate(1)
          }}
          className='absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-black p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 hover:scale-110'
          aria-label='Nächstes Video'
        >
          <Icon icon='mdi:chevron-right' className='text-2xl' />
        </button>

        {/* Video Counter */}
        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm'>
          {videoIndex + 1} / {videos.length}
        </div>
      </div>

      {/* Video Thumbnails Navigation */}
      <div className='mt-6 overflow-x-auto pb-4'>
        <div className='flex gap-4 justify-center'>
          {videos.map((video, index) => (
            <button
              key={video.id}
              onClick={() => {
                playAudio()
                const direction = index > videoIndex ? 1 : -1
                setPage([index, direction])
              }}
              className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 ${
                index === videoIndex
                  ? 'border-accent-cyan scale-110 shadow-lg'
                  : 'border-transparent hover:border-accent-cyan/50 hover:scale-105 opacity-70 hover:opacity-100'
              }`}
              aria-label={`Video ${index + 1}: ${video.title}`}
            >
              <div className='w-full h-full bg-gradient-to-br from-accent-cyan to-accent-cyan-dark flex items-center justify-center'>
                <Icon icon='mdi:play' className='text-white text-2xl' />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Keyboard Navigation Hint */}
      <p className='text-center text-text-secondary text-xs mt-4 flex items-center justify-center gap-2'>
        <Icon icon='mdi:keyboard' className='text-accent-cyan' />
        Verwenden Sie die Pfeiltasten für Navigation
      </p>
    </div>
  )
}

export default VideoGallery
