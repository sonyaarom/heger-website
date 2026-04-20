import { Metadata } from 'next'
import contentData from '@/data/content.json'

const en = contentData.en
const baseUrl = 'https://www.gmt-heger.com'

export const metadata: Metadata = {
  title: `${en.history.title} – GMT Heger`,
  description: en.history.intro,
  openGraph: {
    title: `${en.history.title} – GMT Heger`,
    description: en.history.intro,
    type: 'website',
    url: `${baseUrl}/history`,
  },
  alternates: { canonical: `${baseUrl}/history` },
}

export default function HistoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
