'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getContent } from '@/lib/i18n'
import konverter1 from '@/components/pics/konverter_1.jpg'
import konverter2 from '@/components/pics/konverter_2.jpg'
import konverter3 from '@/components/pics/konverter_3.jpg'
import konverter4 from '@/components/pics/konverter_4.jpg'

const KONVERTER_IMAGES = [
  { src: konverter1, alt: 'Konverter 1' },
  { src: konverter2, alt: 'Konverter 2' },
  { src: konverter3, alt: 'Konverter 3' },
  { src: konverter4, alt: 'Konverter 4' },
]

export default function RepairPage() {
  const [content, setContent] = useState(() => getContent('de'))

  useEffect(() => {
    setContent(getContent())
  }, [])

  const r = content.repair as {
    title: string
    description: string
    paragraph1?: string
    paragraph2Start?: string
    inquiryEmail?: string
    paragraph2End?: string
    contactFormLabel?: string
    paragraph2AfterLink?: string
    converterHeading?: string
    converterIntro?: string
    converterPrice?: string
    sidebarRepairHeading?: string
    sidebarContactHeading?: string
    sidebarPhoneLabel?: string
    sidebarEmailLabel?: string
    sidebarEmail?: string
    content?: string
  }

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row lg:gap-12">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: 'var(--gray-900)' }}>
              {r.title}
            </h1>
            <p className="text-xl mb-8" style={{ color: 'var(--gray-700)' }}>
              {r.description}
            </p>

            {r.paragraph1 && (
              <p className="leading-relaxed mb-6" style={{ color: 'var(--gray-700)' }}>
                {r.paragraph1}
              </p>
            )}

            {r.paragraph2Start && (
              <p className="leading-relaxed mb-10" style={{ color: 'var(--gray-700)' }}>
                {r.paragraph2Start}
                <a
                  href={`mailto:${r.inquiryEmail || 'gmt@hegeroptik.de'}`}
                  className="font-medium"
                  style={{ color: 'var(--primary-600)' }}
                >
                  {r.inquiryEmail || 'gmt@hegeroptik.de'}
                </a>
                {r.paragraph2End}
                <Link href="/contact" className="font-medium" style={{ color: 'var(--primary-600)' }}>
                  {r.contactFormLabel}
                </Link>
                {r.paragraph2AfterLink}
              </p>
            )}

            {!r.paragraph1 && !r.paragraph2Start && r.content && (
              <p className="leading-relaxed mb-10" style={{ color: 'var(--gray-700)' }}>
                {r.content}
              </p>
            )}

            {r.converterHeading && (
              <section className="mt-12">
                <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--gray-900)' }}>
                  {r.converterHeading}
                </h2>
                {r.converterIntro && (
                  <p className="leading-relaxed mb-2" style={{ color: 'var(--gray-700)' }}>
                    {r.converterIntro}
                  </p>
                )}
                {r.converterPrice && (
                  <p className="leading-relaxed mb-6 font-medium" style={{ color: 'var(--gray-800)' }}>
                    {r.converterPrice}
                  </p>
                )}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {KONVERTER_IMAGES.map((img, i) => (
                    <div
                      key={i}
                      className="relative rounded-lg overflow-hidden border border-gray-200 shadow-md aspect-square"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 50vw, 25vw"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="flex-shrink-0 w-full lg:w-64 mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-24 space-y-8">
              {r.sidebarRepairHeading && (
                <div>
                  <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--gray-900)' }}>
                    {r.sidebarRepairHeading}
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="/images/reparatur_1.jpg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-lg overflow-hidden border border-gray-200"
                    >
                      <Image
                        src="/images/reparatur_1_t.jpg"
                        alt="Reparatur"
                        width={200}
                        height={150}
                        className="w-full h-auto object-cover"
                        unoptimized
                        onError={(e) => {
                          (e.target as HTMLImageElement).parentElement?.parentElement?.classList.add('hidden')
                        }}
                      />
                    </a>
                    <a
                      href="/images/reparatur_2.jpg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-lg overflow-hidden border border-gray-200"
                    >
                      <Image
                        src="/images/reparatur_2_t.jpg"
                        alt="Wild GAK"
                        width={200}
                        height={150}
                        className="w-full h-auto object-cover"
                        unoptimized
                        onError={(e) => {
                          (e.target as HTMLImageElement).parentElement?.parentElement?.classList.add('hidden')
                        }}
                      />
                    </a>
                  </div>
                </div>
              )}
              {r.sidebarContactHeading && (
                <div>
                  <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--gray-900)' }}>
                    {r.sidebarContactHeading}
                  </h3>
                  <div className="space-y-2 text-sm" style={{ color: 'var(--gray-700)' }}>
                    <p>
                      {r.sidebarPhoneLabel}:{' '}
                      <a href={`tel:${content.site.phone}`} className="font-medium" style={{ color: 'var(--primary-600)' }}>
                        {content.site.phone}
                      </a>
                    </p>
                    <p>
                      {r.sidebarEmailLabel}:{' '}
                      <a
                        href={`mailto:${r.sidebarEmail || content.site.email}`}
                        className="font-medium"
                        style={{ color: 'var(--primary-600)' }}
                      >
                        {r.sidebarEmail || content.site.email}
                      </a>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
