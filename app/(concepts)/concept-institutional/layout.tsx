import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Konzept: Institutional | GeoMessTechnik Heger',
  description:
    'Alternatives Startseiten-Konzept im institutionellen Hochschul-Stil (Vorschau).',
  robots: { index: false, follow: false },
}

export default function ConceptInstitutionalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
