import contentData from '@/data/content.json'
import { rewritePublicAssetPaths } from '@/lib/assetUrl'

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
  const raw = contentData[language] as Content
  return rewritePublicAssetPaths(raw)
}
