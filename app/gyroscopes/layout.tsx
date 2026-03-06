import { Metadata } from 'next'
import contentData from '@/data/content.json'

const en = (contentData as { en: { gyroscopes: { title: string; description: string } } }).en
const baseUrl = 'https://www.gmt-heger.com'

export const metadata: Metadata = {
  title: `${en.gyroscopes.title} - GeoMessTechnik Heger`,
  description: en.gyroscopes.description,
  keywords: 'surveying gyroscopes, GYROMAX, theodolite adapters, tunnel surveying, mining equipment, precision instruments',
  openGraph: {
    title: `${en.gyroscopes.title} - GeoMessTechnik Heger`,
    description: en.gyroscopes.description,
    type: 'website',
    url: `${baseUrl}/gyroscopes`,
  },
  alternates: {
    canonical: `${baseUrl}/gyroscopes`,
  },
}

export default function GyroscopesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
