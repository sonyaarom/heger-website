import { Metadata } from 'next'
import contentData from '@/data/content.json'

const en = (contentData as { en: { repair: { title: string; description: string } } }).en
const baseUrl = 'https://www.gmt-heger.com'

export const metadata: Metadata = {
  title: `${en.repair.title} - GeoMessTechnik Heger`,
  description: en.repair.description,
  keywords: 'gyroscope repair, Wild GAK calibration, surveying instrument repair, GAK converter',
  openGraph: {
    title: `${en.repair.title} - GeoMessTechnik Heger`,
    description: en.repair.description,
    type: 'website',
    url: `${baseUrl}/repair`,
  },
  alternates: {
    canonical: `${baseUrl}/repair`,
  },
}

export default function RepairLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
