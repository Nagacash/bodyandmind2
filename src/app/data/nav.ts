import { HeaderItem } from '@/app/types/menu'
import { ROUTES } from '@/app/data/routes'

export const headerNavLinks: HeaderItem[] = [
  { label: 'Home', href: ROUTES.home },
  { label: 'Philosophie', href: ROUTES.philosophie },
  { label: 'Über mich', href: ROUTES.aboutMe },
  { label: 'FAQ', href: ROUTES.faq },
  { label: 'Presse', href: ROUTES.presse },
  { label: 'Kontakt', href: ROUTES.kontakt },
]

export const mobileNavLinks: HeaderItem[] = [
  ...headerNavLinks,
  { label: 'Leistungen', href: ROUTES.leistungen },
  { label: 'Studio', href: ROUTES.studio },
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
  { label: 'AGB', href: '/agb' },
]
