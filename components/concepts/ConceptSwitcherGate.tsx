'use client'

import { usePathname } from 'next/navigation'
import ConceptSwitcher from './ConceptSwitcher'

export function conceptSwitcherActivePath(pathname: string | null) {
  if (!pathname) return false
  return pathname === '/' || pathname.startsWith('/concept-')
}

export default function ConceptSwitcherGate() {
  const pathname = usePathname()
  if (!conceptSwitcherActivePath(pathname)) return null
  return <ConceptSwitcher />
}
