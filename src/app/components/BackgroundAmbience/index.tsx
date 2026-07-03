'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Icon } from '@iconify/react'

const TRACK_SRC = '/sound/lateral-drift.mp3'
const STORAGE_KEY = 'natalie-ambient-music'
const VOLUME = 0.28

export default function BackgroundAmbience() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const userPausedRef = useRef(false)
  const unlockedRef = useRef(false)
  const pendingUnmuteRef = useRef(false)
  const [playing, setPlaying] = useState(false)

  const startPlayback = useCallback(async (fromUserGesture = false) => {
    if (userPausedRef.current) return false

    const audio = audioRef.current
    if (!audio) return false

    const markPlaying = () => {
      audio.volume = VOLUME
      setPlaying(true)
      unlockedRef.current = true
      sessionStorage.setItem(STORAGE_KEY, '1')
    }

    if (fromUserGesture || !pendingUnmuteRef.current) {
      try {
        audio.muted = false
        audio.volume = VOLUME
        await audio.play()
        pendingUnmuteRef.current = false
        markPlaying()
        return true
      } catch {
        if (fromUserGesture) {
          setPlaying(false)
          return false
        }
      }
    }

    try {
      audio.muted = true
      audio.volume = VOLUME
      await audio.play()
      pendingUnmuteRef.current = true
      markPlaying()
      return true
    } catch {
      setPlaying(false)
      return false
    }
  }, [])

  const pause = useCallback(() => {
    const audio = audioRef.current
    audio?.pause()
    setPlaying(false)
    userPausedRef.current = true
    sessionStorage.setItem(STORAGE_KEY, '0')
  }, [])

  const toggle = () => {
    if (playing) {
      pause()
      return
    }

    userPausedRef.current = false
    sessionStorage.setItem(STORAGE_KEY, '1')
    void startPlayback(true)
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (sessionStorage.getItem(STORAGE_KEY) === '0') {
      userPausedRef.current = true
      return
    }

    const removeUnlockListeners = () => {
      window.removeEventListener('pointerdown', onUnlock)
      window.removeEventListener('touchstart', onUnlock)
      window.removeEventListener('keydown', onUnlock)
      window.removeEventListener('scroll', onUnlock, true)
      window.removeEventListener('click', onUnlock)
    }

    const onUnlock = () => {
      if (userPausedRef.current) return
      if (unlockedRef.current && !pendingUnmuteRef.current) return

      void startPlayback(true).then((ok) => {
        if (ok) removeUnlockListeners()
      })
    }

    const tryAutoplay = async () => {
      const ok = await startPlayback(false)
      if (!ok || pendingUnmuteRef.current) {
        window.addEventListener('pointerdown', onUnlock, { passive: true })
        window.addEventListener('touchstart', onUnlock, { passive: true })
        window.addEventListener('keydown', onUnlock)
        window.addEventListener('scroll', onUnlock, { passive: true, capture: true })
        window.addEventListener('click', onUnlock)
      }
    }

    void tryAutoplay()

    const onCanPlay = () => {
      if (!unlockedRef.current && !userPausedRef.current) {
        void startPlayback(false)
      }
    }
    audio.addEventListener('canplaythrough', onCanPlay)

    return () => {
      removeUnlockListeners()
      audio.removeEventListener('canplaythrough', onCanPlay)
      audio.pause()
    }
  }, [startPlayback])

  useEffect(() => {
    const onVisibility = () => {
      const audio = audioRef.current
      if (!audio || userPausedRef.current || !unlockedRef.current) return

      if (document.hidden) {
        audio.pause()
        setPlaying(false)
        return
      }

      void audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false))
    }

    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  return (
    <>
      <audio
        ref={audioRef}
        src={TRACK_SRC}
        loop
        autoPlay
        preload='auto'
        className='sr-only'
        aria-hidden
      />
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
    </>
  )
}
