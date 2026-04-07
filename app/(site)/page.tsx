'use client'

import { useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import FeatureSection from '@/components/FeatureSection'
import FeaturedProduct from '@/components/FeaturedProduct'
import { getContent } from '@/lib/i18n'

export default function Home() {
  const [content, setContent] = useState(() => getContent('de'))

  useEffect(() => {
    setContent(getContent())
  }, [])

  return (
    <div>
      <Hero />
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.home.sections.map((section) => (
              <FeatureSection key={section.id} section={section} />
            ))}
          </div>
        </div>
      </div>
      <FeaturedProduct />
    </div>
  )
}
