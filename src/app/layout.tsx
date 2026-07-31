import type { Metadata, Viewport } from 'next'
import './globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { jetbrainsMono, manrope, bebasNeue } from '@/app/fonts'
import { SITE_URL } from '@/app/data/site'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
}

export const viewport: Viewport = {
  themeColor: '#37BEF0',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='de'
      suppressHydrationWarning
      className={`${manrope.variable} ${bebasNeue.variable} ${jetbrainsMono.variable}`}
    >
      <body className={`${manrope.className} flex min-h-screen flex-col`}>{children}</body>
    </html>
  )
}
