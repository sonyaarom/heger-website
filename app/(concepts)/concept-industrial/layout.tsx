import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Konzept: Industrial / HUD | GeoMessTechnik Heger',
  description:
    'Alternatives Startseiten-Konzept im industriellen Viewfinder- und HUD-Stil (Vorschau).',
  robots: { index: false, follow: false },
}

export default function ConceptIndustrialLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
