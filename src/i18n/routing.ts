import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

export const routing = defineRouting({
  locales: ['de', 'en'],
  defaultLocale: 'de',
  localePrefix: 'as-needed',
  /** Always serve German at `/` — do not auto-switch to `/en` from Accept-Language or cookies */
  localeDetection: false,
})

export const locales = routing.locales
export type Locale = (typeof locales)[number]

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
