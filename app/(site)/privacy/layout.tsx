import { Metadata } from 'next'

const baseUrl = 'https://www.gmt-heger.com'

export const metadata: Metadata = {
  title: 'Datenschutz - GeoMessTechnik Heger',
  description: 'Datenschutzerklärung der GeoMessTechnik Heger',
  openGraph: {
    title: 'Datenschutz - GeoMessTechnik Heger',
    description: 'Datenschutzerklärung der GeoMessTechnik Heger',
    type: 'website',
    url: `${baseUrl}/privacy`,
  },
  alternates: {
    canonical: `${baseUrl}/privacy`,
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
