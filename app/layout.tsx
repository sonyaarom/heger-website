import type { Metadata } from 'next'
import { Inter, Syne } from 'next/font/google'
import './globals.css'
import ConceptSwitcherGate from '@/components/concepts/ConceptSwitcherGate'

const inter = Inter({ subsets: ['latin'] })
const syne = Syne({ subsets: ['latin'], variable: '--font-syne' })

export const metadata: Metadata = {
  title: 'GeoMessTechnik Heger - Surveying Gyroscopes | Professional Precision Instruments',
  description: 'Professional surveying gyroscopes for tunnel construction, mining, training and military applications. Over 30 years of expertise in precision engineering.',
  keywords: 'surveying gyroscopes, theodolites, tachymeters, tunnel construction, mining equipment, Wild GAK, GYROMAX',
  authors: [{ name: 'GeoMessTechnik Heger' }],
  openGraph: {
    title: 'GeoMessTechnik Heger - Surveying Gyroscopes',
    description: 'Professional surveying gyroscopes for tunnel construction, mining, training and military applications.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.gmt-heger.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'GeoMessTechnik Heger',
              description: 'Professional surveying gyroscopes manufacturer',
              url: 'https://www.gmt-heger.com',
              telephone: '+49 395 582 668 0',
              email: 'info@gmt-heger.com',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'DE',
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} ${syne.variable}`}>
        {children}
        <ConceptSwitcherGate />
      </body>
    </html>
  )
}
