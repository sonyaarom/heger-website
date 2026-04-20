import { Metadata } from 'next'
import contentData from '@/data/content.json'

const en = contentData.en
const baseUrl = 'https://www.gmt-heger.com'

export const metadata: Metadata = {
  title: `${en.service.title} – GMT Heger`,
  description: en.service.intro,
  openGraph: {
    title: `${en.service.title} – GMT Heger`,
    description: en.service.intro,
    type: 'website',
    url: `${baseUrl}/service`,
  },
  alternates: { canonical: `${baseUrl}/service` },
}

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
