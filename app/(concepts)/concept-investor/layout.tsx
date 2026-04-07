import type { Metadata } from 'next'
import { Merriweather } from 'next/font/google'

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Konzept: Investor | GeoMessTechnik Heger',
  description:
    'Alternatives Startseiten-Konzept im Investor- / Pitch-Deck-Stil (Vorschau).',
  robots: { index: false, follow: false },
}

export default function ConceptInvestorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className={merriweather.className}>{children}</div>
}
