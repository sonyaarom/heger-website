'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { getContent, getLanguage, setLanguage as persistLanguage, type Content, type Language } from '@/lib/i18n'

type AppContextValue = {
  lang: Language
  setLang: (lang: Language) => void
  c: Content
  openContact: (productName?: string | null) => void
  closeContact: () => void
  contactOpen: boolean
  contactProduct: string | null
}

const AppContext = createContext<AppContextValue | null>(null)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('de')
  const [contactOpen, setContactOpen] = useState(false)
  const [contactProduct, setContactProduct] = useState<string | null>(null)

  useEffect(() => {
    setLangState(getLanguage())
  }, [])

  const setLang = useCallback((next: Language) => {
    persistLanguage(next)
    setLangState(next)
  }, [])

  const openContact = useCallback((productName?: string | null) => {
    setContactProduct(productName || null)
    setContactOpen(true)
  }, [])

  const closeContact = useCallback(() => {
    setContactOpen(false)
    setContactProduct(null)
  }, [])

  const c = useMemo(() => getContent(lang), [lang])

  const value = useMemo<AppContextValue>(
    () => ({ lang, setLang, c, openContact, closeContact, contactOpen, contactProduct }),
    [lang, setLang, c, openContact, closeContact, contactOpen, contactProduct],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
