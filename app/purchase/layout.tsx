import { Metadata } from 'next'
import contentData from '@/data/content.json'

const en = (contentData as { en: { purchase: { title: string; description: string } } }).en
const baseUrl = 'https://www.gmt-heger.com'

export const metadata: Metadata = {
  title: `${en.purchase.title} - GeoMessTechnik Heger`,
  description: en.purchase.description,
  keywords: 'buy surveying instruments, used theodolites, surveying equipment purchase, Wild GAK buy',
  openGraph: {
    title: `${en.purchase.title} - GeoMessTechnik Heger`,
    description: en.purchase.description,
    type: 'website',
    url: `${baseUrl}/purchase`,
  },
  alternates: {
    canonical: `${baseUrl}/purchase`,
  },
}

export default function PurchaseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
