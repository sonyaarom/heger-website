/** 1 = production homepage; 2–6 = layout concepts (preview). */
export const CONCEPT_ROUTES = [
  { id: 1, href: '/', label: 'Startseite' },
  { id: 2, href: '/concept-blueprint', label: 'Blueprint' },
  { id: 3, href: '/concept-industrial', label: 'Industrial' },
  { id: 4, href: '/concept-brutalist', label: 'Brutalist' },
  { id: 5, href: '/concept-institutional', label: 'Institutional' },
  { id: 6, href: '/concept-investor', label: 'Konzept-Vorschau' },
] as const

export type ConceptRoute = (typeof CONCEPT_ROUTES)[number]
