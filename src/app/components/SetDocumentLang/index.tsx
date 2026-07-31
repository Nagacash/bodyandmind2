'use client'

import { useEffect } from 'react'

/** Root layout owns `<html>`; sync `lang` from the active locale segment. */
export function SetDocumentLang({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = locale === 'en' ? 'en-US' : 'de-DE'
  }, [locale])

  return null
}
