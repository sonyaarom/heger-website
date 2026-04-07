import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Konzept: Brutalist / Editorial | GeoMessTechnik Heger',
  description:
    'Alternatives Startseiten-Konzept im brutalistischen Editorial-Stil (Vorschau).',
  robots: { index: false, follow: false },
}

export default function ConceptBrutalistLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
