import { Metadata } from 'next'
import contentData from '@/data/content.json'

const contact = (contentData as { de: { contact: { title: string; description: string } } }).de.contact

const baseUrl = 'https://www.gmt-heger.com'

export const metadata: Metadata = {
  title: `Contact - GeoMessTechnik Heger`,
  description: contact.description,
  openGraph: {
    title: `${contact.title} - GeoMessTechnik Heger`,
    description: contact.description,
    type: 'website',
    url: `${baseUrl}/contact`,
  },
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
