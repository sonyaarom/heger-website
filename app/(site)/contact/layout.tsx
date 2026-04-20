import { Metadata } from 'next'
import contentData from '@/data/content.json'

const en = contentData.en
const baseUrl = 'https://www.gmt-heger.com'

export const metadata: Metadata = {
  title: `${en.contact.title} – GMT Heger`,
  description: en.contact.intro,
  openGraph: {
    title: `${en.contact.title} – GMT Heger`,
    description: en.contact.intro,
    type: 'website',
    url: `${baseUrl}/contact`,
  },
  alternates: { canonical: `${baseUrl}/contact` },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
