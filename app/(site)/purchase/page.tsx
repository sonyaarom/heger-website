'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { getContent } from '@/lib/i18n'
import reifeFrauen from '@/components/pics/reife-frauen.jpg'

export default function PurchasePage() {
  const [content, setContent] = useState(() => getContent('de'))

  useEffect(() => {
    setContent(getContent())
  }, [])

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: 'var(--gray-900)' }}>
          {content.purchase.title}
        </h1>
        <p className="text-xl mb-8" style={{ color: 'var(--gray-700)' }}>
          {content.purchase.description}
        </p>
        <div className="flex justify-center my-12">
          <Image
            src={reifeFrauen}
            alt="Reife Frauen"
            className="rounded-lg shadow-md max-w-md w-full h-auto object-cover"
            priority
          />
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="leading-relaxed whitespace-pre-line" style={{ color: 'var(--gray-700)' }}>
            {content.purchase.content}
          </p>
        </div>
      </div>
    </div>
  )
}
