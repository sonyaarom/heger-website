'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { getContent } from '@/lib/i18n'
import heroImage from '@/components/photo-1421941629638-ded5fddb2300.avif'

export default function Hero() {
  const [content, setContent] = useState(() => getContent('de'))

  useEffect(() => {
    setContent(getContent())
  }, [])

  return (
    <section className="relative text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Surveying gyroscopes and precision instruments - GeoMessTechnik Heger"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      {/* Gradient overlay ~80% opacity so image shows through */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `
            linear-gradient(160deg, rgba(0, 91, 179, 0.82) 0%, rgba(0, 66, 128, 0.82) 35%, rgba(0, 42, 80, 0.82) 70%, rgba(0, 26, 46, 0.82) 100%),
            radial-gradient(ellipse 80% 50% at 70% 20%, rgba(0, 147, 230, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 10% 80%, rgba(230, 137, 0, 0.06) 0%, transparent 45%)
          `,
        }}
      />
      {/* Subtle grid overlay for depth */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-white">
            {content.home.hero.title}
          </h1>
          <p className="text-xl sm:text-2xl mb-4 text-white/95 font-medium">
            {content.home.hero.subtitle}
          </p>
          <p className="text-lg sm:text-xl mb-10 text-white/80 leading-relaxed max-w-2xl">
            {content.home.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/gyroscopes"
              className="group inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-semibold text-primary-700 bg-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 ease-out"
              style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              {content.home.sections[0].linkText}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-semibold border-2 border-white/90 text-white bg-white/5 backdrop-blur-sm hover:bg-white hover:text-primary-700 hover:border-white transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0"
              style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              {content.contact.title}
            </Link>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, var(--background) 0%, transparent 100%)',
        }}
      />
    </section>
  )
}
