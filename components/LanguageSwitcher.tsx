'use client'

import { useState, useEffect } from 'react'
import { Globe } from 'lucide-react'
import { getLanguage, setLanguage, type Language } from '@/lib/i18n'

export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState<Language>('de')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setCurrentLang(getLanguage())
  }, [])

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
    setCurrentLang(lang)
    setIsOpen(false)
    // Reload page to update content
    window.location.reload()
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
        aria-label="Change language"
      >
        <Globe size={18} />
        <span className="font-medium">{currentLang.toUpperCase()}</span>
      </button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-50 overflow-hidden">
            <button
              onClick={() => handleLanguageChange('de')}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
                currentLang === 'de' ? 'bg-primary-50 text-primary-700 font-semibold' : 'text-gray-700'
              }`}
            >
              Deutsch
            </button>
            <button
              onClick={() => handleLanguageChange('en')}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
                currentLang === 'en' ? 'bg-primary-50 text-primary-700 font-semibold' : 'text-gray-700'
              }`}
            >
              English
            </button>
          </div>
        </>
      )}
    </div>
  )
}
