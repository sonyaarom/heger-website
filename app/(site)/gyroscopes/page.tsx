'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getContent } from '@/lib/i18n'
import antarktis from '@/components/pics/antarktisstation_neumayer_1.jpg'
import kreisel1 from '@/components/pics/kreisel_1.jpg'
import kreisel2 from '@/components/pics/kreisel_2.jpg'
import kreisel3 from '@/components/pics/kreisel_3.jpg'

const GALLERY_IMAGES = [
  { src: antarktis, alt: 'Neumayer Station' },
  { src: kreisel1, alt: 'Vermessungskreisel im Einsatz' },
  { src: kreisel2, alt: 'Kreisel in der Anwendung' },
  { src: kreisel3, alt: 'Vermessungsinstrument' },
]

export default function GyroscopesPage() {
  const [content, setContent] = useState(() => getContent('de'))

  useEffect(() => {
    setContent(getContent())
  }, [])

  const g = content.gyroscopes as {
    title: string
    description: string
    intro?: string
    content: string
    cta?: string
    sections?: { heading: string; body: string }[]
    applicationsHeading?: string
    applications?: string[]
    gyromaxBody?: string
    techDataHeading?: string
    techDataProduct?: string
    techDataRows?: { label: string; value: string }[]
    advantagesHeading?: string
    advantages?: string[]
    adaptersHeading?: string
    adaptersIntro?: string
    adapters?: { brand: string; models: string[] }[]
  }

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-12">
          {/* Left: vertical scroll gallery */}
          <aside className="lg:sticky lg:top-24 flex-shrink-0 w-full lg:w-[340px] xl:w-[380px] order-2 lg:order-1">
            <p className="text-center lg:text-left text-gray-500 text-sm font-medium uppercase tracking-widest mb-4">
              Anwendungen & Einblicke
            </p>
            <div
              className="gallery-scroll relative w-full max-h-[50vh] lg:max-h-[75vh] overflow-y-auto overflow-x-hidden rounded-2xl border border-gray-200 bg-white shadow-xl"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: 'var(--gray-300) transparent',
              }}
            >
              <div className="flex flex-col gap-4 p-4 scroll-smooth snap-y snap-mandatory">
                {GALLERY_IMAGES.map((item, i) => (
                  <div
                    key={i}
                    className="relative flex-shrink-0 w-full rounded-xl overflow-hidden border border-gray-100 shadow-md snap-center"
                  >
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 380px"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Right: text content */}
          <div className="flex-1 min-w-0 order-1 lg:order-2">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: 'var(--gray-900)' }}>
              {g.title}
            </h1>
            <p className="text-xl mb-8" style={{ color: 'var(--gray-700)' }}>
              {g.description}
            </p>

            {g.intro && (
              <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--gray-700)' }}>
                {g.intro}
              </p>
            )}

            {g.sections && g.sections.length > 0 && (
              <div className="space-y-10">
                {g.sections.map((section, i) => (
                  <section key={i}>
                    <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--gray-900)' }}>
                      {section.heading}
                    </h2>
                    <p className="leading-relaxed whitespace-pre-line" style={{ color: 'var(--gray-700)' }}>
                      {section.body}
                    </p>
                  </section>
                ))}
              </div>
            )}

            {g.applicationsHeading && g.applications && g.applications.length > 0 && (
              <section className="mt-12">
                <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--gray-900)' }}>
                  {g.applicationsHeading}
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {g.applications.map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {g.gyromaxBody && (
              <section className="mt-12">
                <p className="leading-relaxed whitespace-pre-line" style={{ color: 'var(--gray-700)' }}>
                  {g.gyromaxBody}
                </p>
              </section>
            )}

            {g.techDataHeading && g.techDataRows && g.techDataRows.length > 0 && (
              <section className="mt-12">
                <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--gray-900)' }}>
                  {g.techDataHeading}
                </h2>
                {g.techDataProduct && (
                  <p className="text-lg font-medium mb-4" style={{ color: 'var(--primary-600)' }}>
                    {g.techDataProduct}
                  </p>
                )}
                <div className="overflow-x-auto rounded-xl border" style={{ borderColor: 'var(--gray-200)' }}>
                  <table className="w-full min-w-[280px] text-left">
                    <tbody>
                      {g.techDataRows.map((row, i) => (
                        <tr
                          key={i}
                          className="border-b last:border-b-0"
                          style={{ borderColor: 'var(--gray-200)' }}
                        >
                          <td className="py-3 px-4 font-medium" style={{ color: 'var(--gray-800)' }}>
                            {row.label}:
                          </td>
                          <td className="py-3 px-4" style={{ color: 'var(--gray-700)' }}>
                            {row.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {g.advantagesHeading && g.advantages && g.advantages.length > 0 && (
              <section className="mt-12">
                <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--gray-900)' }}>
                  {g.advantagesHeading}
                </h2>
                <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--gray-700)' }}>
                  {g.advantages.map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {g.adaptersHeading && g.adapters && g.adapters.length > 0 && (
              <section className="mt-12">
                <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--gray-900)' }}>
                  {g.adaptersHeading}
                </h2>
                {g.adaptersIntro && (
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--gray-700)' }}>
                    {g.adaptersIntro}
                  </p>
                )}
                <div className="space-y-4">
                  {g.adapters.map((entry, i) => (
                    <div key={i}>
                      <span className="font-semibold" style={{ color: 'var(--gray-900)' }}>
                        {entry.brand}
                      </span>
                      <span className="text-gray-600"> — </span>
                      <span style={{ color: 'var(--gray-700)' }}>
                        {entry.models.join(', ')}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {!g.sections?.length && !g.applications?.length && !g.gyromaxBody && !g.techDataRows?.length && !g.advantages?.length && !g.adapters?.length && (
              <div className="prose prose-lg max-w-none">
                <p className="leading-relaxed whitespace-pre-line" style={{ color: 'var(--gray-700)' }}>
                  {g.content}
                </p>
              </div>
            )}

            {g.cta && (
              <p className="mt-12 text-lg" style={{ color: 'var(--gray-700)' }}>
                <Link href="/contact" className="font-medium" style={{ color: 'var(--primary-600)' }}>
                  {content.contact.title}
                </Link>
                {' — '}
                {g.cta}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
