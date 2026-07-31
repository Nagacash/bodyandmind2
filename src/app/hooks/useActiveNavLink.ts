'use client'

import { usePathname } from '@/i18n/routing'

function normalizePath(path: string): string {
  if (path.length > 1 && path.endsWith('/')) {
    return path.slice(0, -1)
  }
  return path
}

/** Active state for header links (pathname match). */
export function useActiveNavLink(href: string): boolean {
  const pathname = normalizePath(usePathname())
  const target = normalizePath(href.split('#')[0] || '/')
  if (target === '/') {
    return pathname === '/'
  }
  return pathname === target
}
