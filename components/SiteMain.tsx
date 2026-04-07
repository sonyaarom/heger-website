'use client'

import { usePathname } from 'next/navigation'
import { conceptSwitcherActivePath } from '@/components/concepts/ConceptSwitcherGate'

export default function SiteMain({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const padBottom = conceptSwitcherActivePath(pathname)

  return (
    <main className={padBottom ? 'min-h-screen pb-24 sm:pb-28' : 'min-h-screen'}>
      {children}
    </main>
  )
}
