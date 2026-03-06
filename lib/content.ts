import contentData from '@/data/content.json'

// In production, this would fetch from an API or database
// For now, we'll use localStorage as a fallback
export function getContent() {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('website-content')
    if (saved) {
      try {
        return JSON.parse(saved)
      } catch (e) {
        console.error('Failed to parse saved content:', e)
      }
    }
  }
  return contentData
}

export function saveContent(content: typeof contentData) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('website-content', JSON.stringify(content))
  }
}
