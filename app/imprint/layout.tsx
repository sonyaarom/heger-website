import { Metadata } from 'next'

const baseUrl = 'https://www.gmt-heger.com'

export const metadata: Metadata = {
  title: 'Impressum - GeoMessTechnik Heger',
  description: 'Impressum und Haftungsausschluss der GeoMessTechnik Heger',
  openGraph: {
    title: 'Impressum - GeoMessTechnik Heger',
    description: 'Impressum und Haftungsausschluss der GeoMessTechnik Heger',
    type: 'website',
    url: `${baseUrl}/imprint`,
  },
  alternates: {
    canonical: `${baseUrl}/imprint`,
  },
}

export default function ImprintLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
