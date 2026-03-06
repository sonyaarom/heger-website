'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface FeatureSectionProps {
  section: {
    id: string
    title: string
    description: string
    link: string
    linkText: string
  }
}

export default function FeatureSection({ section }: FeatureSectionProps) {
  return (
    <div className="h-full flex flex-col bg-white p-8 border border-gray-200 rounded-xl">
      <h3 className="text-2xl font-bold mb-4 text-gray-900">
        {section.title}
      </h3>
      <p className="flex-grow mb-6 leading-relaxed text-gray-700">
        {section.description}
      </p>
      <Link
        href={section.link}
        className="mt-auto inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
      >
        {section.linkText}
        <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  )
}
