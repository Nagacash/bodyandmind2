import NotFound from '@/app/components/NotFound'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Seite nicht gefunden',
  description: 'Die angeforderte Seite existiert nicht. Zurück zur Startseite von Natalie Zimmermann.',
  robots: { index: false, follow: true },
}

export default function NotFoundPage() {
  return (
    <main id='main-content' tabIndex={-1}>
      <NotFound />
    </main>
  )
}
