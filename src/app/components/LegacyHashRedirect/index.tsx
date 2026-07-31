'use client'

import { useEffect } from 'react'
import { useRouter } from '@/i18n/routing'
import { ROUTES } from '@/app/data/routes'

/** Maps legacy one-page hash anchors to multi-page routes. */
const LEGACY_HASH_ROUTES: Record<string, string> = {
  About: ROUTES.philosophie,
  UberMich: ROUTES.aboutMe,
  FAQ: ROUTES.faq,
  Presse: ROUTES.presse,
  Blog: ROUTES.leistungen,
  Flow: ROUTES.flow,
  Form: ROUTES.form,
  Recovery: ROUTES.recovery,
  Featured: ROUTES.leistungen,
}

function resolveLegacyHash(hash: string): string | null {
  if (!hash || hash === 'Hero' || hash === 'Explore') {
    return null
  }
  return LEGACY_HASH_ROUTES[hash] ?? null
}

export default function LegacyHashRedirect() {
  const router = useRouter()

  useEffect(() => {
    const run = () => {
      const hash = window.location.hash.replace(/^#/, '')
      const target = resolveLegacyHash(hash)
      if (target) {
        router.replace(target)
        return
      }
      if (hash === 'Hero' || hash === 'Explore') {
        window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)
      }
    }

    run()
    window.addEventListener('hashchange', run)
    return () => window.removeEventListener('hashchange', run)
  }, [router])

  return null
}
