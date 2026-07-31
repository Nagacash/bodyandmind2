import { JetBrains_Mono, Manrope, Bebas_Neue } from 'next/font/google'

/** Body copy, UI, navigation — aligns with rounded body & mind wordmark */
export const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
})

/** Display headlines only (h1, section h2, hero) — athletic poster tone */
export const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-bebas-neue',
})

/** Belt codes, stats labels, record telemetry */
export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})
