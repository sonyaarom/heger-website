import contentData from '@/data/content.json'

export type Language = 'de' | 'en'

export type Content = (typeof contentData)['de']

export function getLanguage(): Language {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('language')
    if (saved === 'de' || saved === 'en') {
      return saved
    }
  }
  return 'de'
}

export function setLanguage(lang: Language) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lang)
  }
}

export function getContent(lang?: Language): Content {
  const language = lang || getLanguage()
  return contentData[language] as Content
}
