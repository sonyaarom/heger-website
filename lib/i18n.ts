import contentData from '@/data/content.json'

export type Language = 'de' | 'en'

export function getLanguage(): Language {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('language')
    if (saved === 'de' || saved === 'en') {
      return saved
    }
  }
  // Default to German
  return 'de'
}

export function setLanguage(lang: Language) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lang)
  }
}

export function getContent(lang?: Language) {
  const language = lang || getLanguage()
  return contentData[language]
}

export function getServerLanguage(): Language {
  // In a real app, you'd check cookies or headers
  return 'de' // default
}
