import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Konzept: Blueprint | GeoMessTechnik Heger',
  description:
    'Alternatives Startseiten-Konzept im technischen Blueprint-Stil (Vorschau).',
  robots: { index: false, follow: false },
}

export default function ConceptBlueprintLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
