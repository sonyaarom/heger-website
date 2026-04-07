'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CONCEPT_ROUTES } from './conceptRoutes'

export default function ConceptSwitcher() {
  const pathname = usePathname()
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setEntered(true)
      return
    }
    const id = requestAnimationFrame(() => setEntered(true))
    return () => cancelAnimationFrame(id)
  }, [])

  const index = CONCEPT_ROUTES.findIndex((c) => c.href === pathname)
  const prev = index > 0 ? CONCEPT_ROUTES[index - 1] : null
  const next =
    index >= 0 && index < CONCEPT_ROUTES.length - 1
      ? CONCEPT_ROUTES[index + 1]
      : null

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[100] flex justify-center px-3 pb-3 sm:px-4 sm:pb-5 pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:duration-0 ${
        entered ? 'translate-y-0 opacity-100' : 'translate-y-[calc(100%+1rem)] opacity-0'
      } motion-reduce:translate-y-0 motion-reduce:opacity-100`}
    >
      <nav
        aria-label="Startseiten-Layouts durchblättern"
        className="pointer-events-auto flex max-w-full items-stretch overflow-hidden rounded-2xl border-2 border-zinc-900 bg-white/95 shadow-[0_-8px_40px_rgba(0,0,0,0.12)] backdrop-blur-md"
      >
        <div className="flex items-center border-r-2 border-zinc-900 bg-zinc-100 px-2 py-2 sm:px-3">
          <span className="hidden font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-500 sm:inline">
            Layout
          </span>
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-500 sm:ml-2 sm:hidden">
            K
          </span>
        </div>

        {prev ? (
          <Link
            href={prev.href}
            className="flex items-center border-r-2 border-zinc-900 px-2 text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-white sm:px-3"
            aria-label={`Vorheriges Konzept: ${prev.label}`}
            title={`${prev.id}. ${prev.label}`}
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
          </Link>
        ) : (
          <span className="flex w-10 items-center justify-center border-r-2 border-zinc-200 bg-zinc-50 text-zinc-300 sm:w-12">
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
          </span>
        )}

        <div className="flex min-w-0 flex-1 items-center gap-0.5 overflow-x-auto px-1 py-2 sm:gap-1 sm:px-2">
          {CONCEPT_ROUTES.map((concept) => {
            const active = pathname === concept.href
            return (
              <Link
                key={concept.href}
                href={concept.href}
                title={concept.label}
                className={`flex min-w-[2.75rem] shrink-0 flex-col items-center justify-center rounded-lg px-2 py-1.5 text-center transition-colors sm:min-w-[3.25rem] sm:px-3 sm:py-2 ${
                  active
                    ? 'bg-zinc-900 text-white'
                    : 'text-zinc-800 hover:bg-zinc-200'
                }`}
              >
                <span className="font-mono text-lg font-black leading-none sm:text-xl">
                  {concept.id}
                </span>
                <span
                  className={`mt-0.5 hidden max-w-[7rem] truncate text-[9px] font-bold uppercase tracking-wider sm:block ${
                    active ? 'text-zinc-300' : 'text-zinc-500'
                  }`}
                >
                  {concept.label}
                </span>
              </Link>
            )
          })}
        </div>

        {next ? (
          <Link
            href={next.href}
            className="flex items-center border-l-2 border-zinc-900 px-2 text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-white sm:px-3"
            aria-label={`Nächstes Konzept: ${next.label}`}
            title={`${next.id}. ${next.label}`}
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
          </Link>
        ) : (
          <span className="flex w-10 items-center justify-center border-l-2 border-zinc-200 bg-zinc-50 text-zinc-300 sm:w-12">
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
          </span>
        )}
      </nav>
    </div>
  )
}
