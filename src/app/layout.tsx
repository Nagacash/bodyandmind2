import { Manrope, Bebas_Neue } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/Layout/Header'
import Footer from '@/app/components/Layout/Footer'
import ScrollToTop from '@/app/components/ScrollToTop'
import Aoscompo from '@/utils/aos'
const manrope = Manrope({ subsets: ['latin'] })
const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${manrope.className} flex flex-col min-h-screen`}>
        <Aoscompo>
          <Header />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </Aoscompo>
        <ScrollToTop />
      </body>
    </html>
  )
}
