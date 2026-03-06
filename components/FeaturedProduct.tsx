'use client'

import { useEffect, useState } from 'react'
import { getContent } from '@/lib/i18n'

export default function FeaturedProduct() {
  const [content, setContent] = useState(() => getContent('de'))

  useEffect(() => {
    setContent(getContent())
  }, [])

  return (
    <section 
      className="py-20 text-white"
      style={{ 
        background: 'linear-gradient(135deg, var(--gray-900) 0%, var(--gray-800) 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {content.home.featured.title}
          </h2>
          <p className="text-2xl sm:text-3xl mb-6" style={{ color: 'var(--accent-400)' }}>
            {content.home.featured.subtitle}
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {content.home.featured.description}
          </p>
        </div>
      </div>
    </section>
  )
}
