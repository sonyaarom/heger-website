import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import './globals.css'
import { AppProvider } from '@/components/AppContext'
import ContactModal from '@/components/ContactModal'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-barlow',
})

export const metadata: Metadata = {
  title: 'GMT Heger – North-Seeking Gyroscopes',
  description:
    'GeoMessTechnik Heger – North-Seeking Gyroscopes für Tunnelbau, Bergbau und Hochschulausbildung. Präzisionstechnik seit über 30 Jahren.',
  keywords:
    'North-Seeking Gyroscopes, GYROMAX, Vermessungskreisel, Tunnelbau, Bergbau, Theodolit, Tachymeter, WILD GAK',
  authors: [{ name: 'GeoMessTechnik Heger' }],
  openGraph: {
    title: 'GMT Heger – North-Seeking Gyroscopes',
    description:
      'GeoMessTechnik Heger – North-Seeking Gyroscopes für Tunnelbau, Bergbau und Hochschulausbildung.',
    type: 'website',
    locale: 'de_DE',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'GeoMessTechnik Heger',
              description: 'North-Seeking Gyroscopes manufacturer',
              url: 'https://www.gmt-heger.com',
              telephone: '+49 395 582 668 0',
              email: 'info@gmt-heger.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Mühlenstraße 9',
                postalCode: '17039',
                addressLocality: 'Wulkenzin',
                addressCountry: 'DE',
              },
            }),
          }}
        />
      </head>
      <body className={`${barlow.variable}`} style={{ fontFamily: 'var(--font-barlow), Barlow, "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
        <AppProvider>
          {children}
          <ContactModal />
        </AppProvider>
      </body>
    </html>
  )
}
