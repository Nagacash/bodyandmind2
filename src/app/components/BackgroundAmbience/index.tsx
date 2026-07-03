'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Icon } from '@iconify/react'

const TRACK_SRC = '/sound/lateral-drift.mp3'
const STORAGE_KEY = 'natalie-ambient-music'
const VOLUME = 0.28

export default function BackgroundAmbience() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const userPausedRef = useRef(false)
  const [playing, setPlaying] = useState(false)

  const ensureAudio = useCallback(() => {
    if (!audioRef.current) {
      const audio = new Audio(TRACK_SRC)
      audio.loop = true
      audio.volume = VOLUME
      audio.preload = 'auto'
      audioRef.current = audio
    }
    return audioRef.current
  }, [])

  const play = useCallback(async () => {
    if (userPausedRef.current) return false
    const audio = ensureAudio()
    try {
      await audio.play()
      setPlaying(true)
      sessionStorage.setItem(STORAGE_KEY, '1')
      return true
    } catch {
      setPlaying(false)
      return false
    }
  }, [ensureAudio])

  const pause = useCallback(() => {
    audioRef.current?.pause()
    setPlaying(false)
    userPausedRef.current = true
    sessionStorage.setItem(STORAGE_KEY, '0')
  }, [])

  const toggle = () => {
    if (playing) pause()
    else {
      userPausedRef.current = false
      sessionStorage.setItem(STORAGE_KEY, '1')
      void play()
    }
  }

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === '0') {
      userPausedRef.current = true
      return
    }

    void play()

    const startOnGesture = () => {
      if (userPausedRef.current) return
      const audio = audioRef.current
      if (audio && !audio.paused) return
      void play()
    }

    window.addEventListener('pointerdown', startOnGesture, { once: true, passive: true })
    window.addEventListener('keydown', startOnGesture, { once: true })

    return () => {
      window.removeEventListener('pointerdown', startOnGesture)
      window.removeEventListener('keydown', startOnGesture)
      audioRef.current?.pause()
      audioRef.current = null
    }
  }, [play])

  useEffect(() => {
    const onVisibility = () => {
      const audio = audioRef.current
      if (!audio || userPausedRef.current) return
      if (document.hidden) {
        audio.pause()
        setPlaying(false)
      } else {
        void audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
      }
    }
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  return (
    <button
      type='button'
      onClick={toggle}
      aria-label={
        playing
          ? 'Hintergrundmusik pausieren – Lateral Drift'
          : 'Hintergrundmusik abspielen – Lateral Drift'
      }
      aria-pressed={playing}
      title={playing ? 'Musik pausieren' : 'Chill-Vibe einschalten'}
      className={`fixed bottom-6 left-6 z-fixed flex h-12 w-12 items-center justify-center rounded-xl shadow-md ring-1 ring-inset transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 md:bottom-8 md:left-8 ${
        playing
          ? 'bg-accent-cyan text-white shadow-accent-cyan/35 ring-white/10 hover:bg-accent-cyan-dark'
          : 'bg-white text-text-primary shadow-black/10 ring-black/5 hover:bg-grey'
      }`}
    >
      <Icon
        icon={playing ? 'mdi:music-note' : 'mdi:music-note-off-outline'}
        className='text-2xl'
        aria-hidden
      />
    </button>
  )
}
