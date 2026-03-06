'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'
import { getContent } from '@/lib/i18n'

export default function Footer() {
  const [content, setContent] = useState(() => getContent('de'))

  useEffect(() => {
    setContent(getContent())
  }, [])

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{content.site.name}</h3>
            <p className="text-gray-400">{content.site.description}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {content.navigation[0].label === 'Home' ? 'Quick Links' : 'Schnellzugriff'}
            </h4>
            <ul className="space-y-2">
              {content.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{content.contact.title}</h4>
            <div className="space-y-3">
              <a
                href={`tel:${content.site.phone}`}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Phone size={18} />
                <span>{content.site.phone}</span>
              </a>
              <a
                href={`mailto:${content.site.email}`}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={18} />
                <span>{content.site.email}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>Copyright © {new Date().getFullYear()} {content.site.name}. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/imprint" className="hover:text-white transition-colors">
              {content.navigation[0].label === 'Home' ? 'Imprint' : 'Impressum'}
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              {content.navigation[0].label === 'Home' ? 'Privacy Policy' : 'Datenschutz'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
