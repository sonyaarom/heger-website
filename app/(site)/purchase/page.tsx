'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { getContent } from '@/lib/i18n'

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
          <p>placeholder Text oder Bild</p>
        </div>
        <p>{content.purchase.content}</p>
      </div>
    </div>
  );
}
