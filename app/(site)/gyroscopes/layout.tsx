import { Metadata } from 'next'
import contentData from '@/data/content.json'

const en = contentData.en
const baseUrl = 'https://www.gmt-heger.com'

export const metadata: Metadata = {
  title: `${en.gyroscopes.title} – GMT Heger`,
  description: en.gyroscopes.intro,
  keywords:
    'north-seeking gyroscopes, GYROMAX, theodolite adapters, tunnel construction, mining, WILD GAK',
  openGraph: {
    title: `${en.gyroscopes.title} – GMT Heger`,
    description: en.gyroscopes.intro,
    type: 'website',
    url: `${baseUrl}/gyroscopes`,
  },
  alternates: {
    canonical: `${baseUrl}/gyroscopes`,
  },
}

export default function GyroscopesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
