/** Localized pathnames (locale prefix handled by next-intl). */
export const ROUTES = {
  home: '/',
  philosophie: '/philosophie',
  aboutMe: '/about-me',
  studio: '/studio',
  faq: '/faq',
  presse: '/presse',
  leistungen: '/leistungen',
  stimmen: '/stimmen',
  kontakt: '/kontakt',
  flow: '/flow',
  form: '/form',
  recovery: '/recovery',
} as const

export type SiteRoute = (typeof ROUTES)[keyof typeof ROUTES]
