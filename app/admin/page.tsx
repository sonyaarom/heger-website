'use client'

import { useState, useEffect } from 'react'
import { Save, RefreshCw, Globe } from 'lucide-react'
import contentData from '@/data/content.json'
import type { Language } from '@/lib/i18n'

export default function AdminPage() {
  const [content, setContent] = useState(contentData)
  const [currentLang, setCurrentLang] = useState<Language>('de')
  const [isSaving, setIsSaving] = useState(false)
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    // Load content from localStorage if available
    const saved = localStorage.getItem('website-content')
    if (saved) {
      try {
        setContent(JSON.parse(saved))
      } catch (e) {
        console.error('Failed to load saved content:', e)
      }
    }
  }, [])

  const handleSave = async () => {
    setIsSaving(true)
    try {
      // Save to localStorage (in production, you'd save to a server/API)
      localStorage.setItem('website-content', JSON.stringify(content))
      setSaveStatus('success')
      setTimeout(() => setSaveStatus('idle'), 3000)
    } catch (error) {
      setSaveStatus('error')
      setTimeout(() => setSaveStatus('idle'), 3000)
    } finally {
      setIsSaving(false)
    }
  }

  const handleReset = () => {
    if (confirm('Are you sure you want to reset to original content?')) {
      setContent(contentData)
      localStorage.removeItem('website-content')
      window.location.reload()
    }
  }

  const updateNestedValue = (path: string[], value: any) => {
    setContent((prev) => {
      const newContent = JSON.parse(JSON.stringify(prev))
      let current: any = newContent
      for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i]]
      }
      current[path[path.length - 1]] = value
      return newContent
    })
  }

  const renderEditableField = (label: string, path: string[], value: any) => {
    const isTextarea = typeof value === 'string' && value.length > 100
    return (
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--gray-700)' }}>
          {label}
        </label>
        {isTextarea ? (
          <textarea
            value={value}
            onChange={(e) => updateNestedValue(path, e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:border-transparent transition-all"
            style={{ 
              borderColor: 'var(--gray-300)',
              backgroundColor: '#fff',
              color: 'var(--gray-900)',
              '--tw-ring-color': 'var(--primary-500)',
            } as React.CSSProperties}
            rows={4}
          />
        ) : (
          <input
            type="text"
            value={value}
            onChange={(e) => updateNestedValue(path, e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:border-transparent transition-all"
            style={{ 
              borderColor: 'var(--gray-300)',
              backgroundColor: '#fff',
              color: 'var(--gray-900)',
              '--tw-ring-color': 'var(--primary-500)'
            } as React.CSSProperties}
          />
        )}
      </div>
    )
  }

  const langContent = content[currentLang]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold" style={{ color: 'var(--gray-900)' }}>
              Content Management
            </h1>
            <div className="flex gap-4">
              <div className="flex items-center space-x-2 px-4 py-2 border rounded-lg">
                <Globe size={18} />
                <button
                  onClick={() => setCurrentLang('de')}
                  className={`px-2 py-1 rounded transition-colors ${
                    currentLang === 'de' 
                      ? 'font-semibold' 
                      : ''
                  }`}
                  style={currentLang === 'de' ? { 
                    backgroundColor: 'var(--primary-100)',
                    color: 'var(--primary-700)'
                  } : { color: 'var(--gray-600)' }}
                >
                  DE
                </button>
                <span className="text-gray-400">|</span>
                <button
                  onClick={() => setCurrentLang('en')}
                  className={`px-2 py-1 rounded transition-colors ${
                    currentLang === 'en' 
                      ? 'font-semibold' 
                      : ''
                  }`}
                  style={currentLang === 'en' ? { 
                    backgroundColor: 'var(--primary-100)',
                    color: 'var(--primary-700)'
                  } : { color: 'var(--gray-600)' }}
                >
                  EN
                </button>
              </div>
              <button
                onClick={handleReset}
                className="flex items-center px-4 py-2 border rounded-lg transition-colors"
                style={{ 
                  borderColor: 'var(--gray-300)',
                  color: 'var(--gray-700)'
                }}
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Reset
              </button>
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="flex items-center px-6 py-2 rounded-lg text-white transition-colors disabled:opacity-50"
                style={{ backgroundColor: 'var(--primary-600)' }}
              >
                <Save className="mr-2 h-4 w-4" />
                {isSaving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>

          {saveStatus === 'success' && (
            <div className="mb-6 p-4 border rounded-lg" style={{ 
              backgroundColor: 'rgba(34, 197, 94, 0.1)',
              borderColor: 'var(--success)',
              color: '#166534'
            }}>
              Content saved successfully!
            </div>
          )}

          {saveStatus === 'error' && (
            <div className="mb-6 p-4 border rounded-lg" style={{ 
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              borderColor: 'var(--error)',
              color: '#991b1b'
            }}>
              Error saving content. Please try again.
            </div>
          )}

          <div className="space-y-12">
            {/* Site Info */}
            <section>
              <h2 className="text-2xl font-semibold mb-6" style={{ color: 'var(--gray-900)' }}>
                Site Information ({currentLang.toUpperCase()})
              </h2>
              {renderEditableField('Site Name', [currentLang, 'site', 'name'], langContent.site.name)}
              {renderEditableField('Site Description', [currentLang, 'site', 'description'], langContent.site.description)}
              {renderEditableField('Phone', [currentLang, 'site', 'phone'], langContent.site.phone)}
              {renderEditableField('Email', [currentLang, 'site', 'email'], langContent.site.email)}
            </section>

            {/* Home Page */}
            <section>
              <h2 className="text-2xl font-semibold mb-6" style={{ color: 'var(--gray-900)' }}>
                Home Page ({currentLang.toUpperCase()})
              </h2>
              <h3 className="text-xl font-medium mb-4" style={{ color: 'var(--gray-800)' }}>
                Hero Section
              </h3>
              {renderEditableField('Hero Title', [currentLang, 'home', 'hero', 'title'], langContent.home.hero.title)}
              {renderEditableField('Hero Subtitle', [currentLang, 'home', 'hero', 'subtitle'], langContent.home.hero.subtitle)}
              {renderEditableField('Hero Description', [currentLang, 'home', 'hero', 'description'], langContent.home.hero.description)}
              
              <h3 className="text-xl font-medium mb-4 mt-8" style={{ color: 'var(--gray-800)' }}>
                Feature Sections
              </h3>
              {langContent.home.sections.map((section: any, index: number) => (
                <div key={section.id} className="mb-8 p-6 rounded-lg" style={{ backgroundColor: 'var(--gray-50)' }}>
                  <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--gray-900)' }}>
                    {section.title}
                  </h4>
                  {renderEditableField('Title', [currentLang, 'home', 'sections', index.toString(), 'title'], section.title)}
                  {renderEditableField('Description', [currentLang, 'home', 'sections', index.toString(), 'description'], section.description)}
                  {renderEditableField('Link Text', [currentLang, 'home', 'sections', index.toString(), 'linkText'], section.linkText)}
                </div>
              ))}

              <h3 className="text-xl font-medium mb-4 mt-8" style={{ color: 'var(--gray-800)' }}>
                Featured Product
              </h3>
              {renderEditableField('Featured Title', [currentLang, 'home', 'featured', 'title'], langContent.home.featured.title)}
              {renderEditableField('Featured Subtitle', [currentLang, 'home', 'featured', 'subtitle'], langContent.home.featured.subtitle)}
              {renderEditableField('Featured Description', [currentLang, 'home', 'featured', 'description'], langContent.home.featured.description)}
            </section>

            {/* Other Pages */}
            <section>
              <h2 className="text-2xl font-semibold mb-6" style={{ color: 'var(--gray-900)' }}>
                Pages ({currentLang.toUpperCase()})
              </h2>
              
              <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: 'var(--gray-50)' }}>
                <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--gray-900)' }}>
                  Gyroscopes Page
                </h3>
                {renderEditableField('Title', [currentLang, 'gyroscopes', 'title'], langContent.gyroscopes.title)}
                {renderEditableField('Description', [currentLang, 'gyroscopes', 'description'], langContent.gyroscopes.description)}
                {renderEditableField('Content', [currentLang, 'gyroscopes', 'content'], langContent.gyroscopes.content)}
              </div>

              <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: 'var(--gray-50)' }}>
                <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--gray-900)' }}>
                  Repair Page
                </h3>
                {renderEditableField('Title', [currentLang, 'repair', 'title'], langContent.repair.title)}
                {renderEditableField('Description', [currentLang, 'repair', 'description'], langContent.repair.description)}
                {renderEditableField('Content', [currentLang, 'repair', 'content'], langContent.repair.content)}
              </div>

              <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: 'var(--gray-50)' }}>
                <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--gray-900)' }}>
                  Purchase Page
                </h3>
                {renderEditableField('Title', [currentLang, 'purchase', 'title'], langContent.purchase.title)}
                {renderEditableField('Description', [currentLang, 'purchase', 'description'], langContent.purchase.description)}
                {renderEditableField('Content', [currentLang, 'purchase', 'content'], langContent.purchase.content)}
              </div>

              <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: 'var(--gray-50)' }}>
                <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--gray-900)' }}>
                  Contact Page
                </h3>
                {renderEditableField('Title', [currentLang, 'contact', 'title'], langContent.contact.title)}
                {renderEditableField('Description', [currentLang, 'contact', 'description'], langContent.contact.description)}
                {renderEditableField('Content', [currentLang, 'contact', 'content'], langContent.contact.content)}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
