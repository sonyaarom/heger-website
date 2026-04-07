/**
 * German marketing copy from data/content.json — use for concept layouts so text matches Startseite.
 */
import content from '@/data/content.json'

export const de = content.de

export const site = de.site
export const hero = de.home.hero
export const homeSections = de.home.sections
export const featured = de.home.featured
export const gyro = de.gyroscopes
export const repair = de.repair
export const purchase = de.purchase
export const contact = de.contact
export const navMain = de.navigation

/** KPI strip: official technical data rows + short context from Startseite/GYROMAX. */
export function conceptStatsFour() {
  const rows = gyro.techDataRows
  const apps = gyro.applications
  return [
    {
      label: rows[0].label,
      value: rows[0].value,
      sub: apps[3] ?? '',
    },
    {
      label: rows[1].label,
      value: rows[1].value,
      sub: apps[2] ?? '',
    },
    {
      label: rows[2].label,
      value: rows[2].value,
      sub: hero.subtitle,
    },
    {
      label: rows[4].label,
      value: rows[4].value,
      sub: gyro.techDataHeading,
    },
  ]
}

/** First paragraph of gyromaxBody (before \n\n) for spec intros. */
export function gyromaxBodyLead() {
  const parts = gyro.gyromaxBody.split('\n\n')
  return parts[0]?.trim() ?? gyro.gyromaxBody
}
