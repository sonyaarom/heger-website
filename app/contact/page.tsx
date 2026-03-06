'use client'

import { useState, useEffect } from 'react'
import { Phone, Mail, Send } from 'lucide-react'
import { getContent } from '@/lib/i18n'

export default function ContactPage() {
  const [content, setContent] = useState(() => getContent('de'))
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    setContent(getContent())
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 1000)
  }

  const getInTouchText = content.navigation[0].label === 'Home' ? 'Get in Touch' : 'Kontakt aufnehmen'
  const sendMessageText = content.navigation[0].label === 'Home' ? 'Send us a Message' : 'Senden Sie uns eine Nachricht'
  const phoneLabel = content.navigation[0].label === 'Home' ? 'Phone' : 'Telefon'
  const emailLabel = content.navigation[0].label === 'Home' ? 'Email' : 'E-Mail'
  const successMessage = content.navigation[0].label === 'Home' 
    ? "Message sent successfully! We'll get back to you soon."
    : "Nachricht erfolgreich gesendet! Wir melden uns bald bei Ihnen."

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: 'var(--gray-900)' }}>
          {content.contact.title}
        </h1>
        <p className="text-xl mb-12" style={{ color: 'var(--gray-700)' }}>
          {content.contact.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-6" style={{ color: 'var(--gray-900)' }}>
              {getInTouchText}
            </h2>
            <p className="mb-8 leading-relaxed" style={{ color: 'var(--gray-700)' }}>
              {content.contact.content}
            </p>
            
            <div className="space-y-6">
              <a
                href={`tel:${content.site.phone}`}
                className="flex items-center space-x-4 transition-colors group"
                style={{ color: 'var(--gray-700)' }}
              >
                <div 
                  className="p-3 rounded-lg transition-colors"
                  style={{ backgroundColor: 'var(--primary-100)' }}
                >
                  <Phone className="h-6 w-6" style={{ color: 'var(--primary-600)' }} />
                </div>
                <div>
                  <p className="text-sm" style={{ color: 'var(--gray-500)' }}>{phoneLabel}</p>
                  <p className="font-semibold">{content.site.phone}</p>
                </div>
              </a>
              
              <a
                href={`mailto:${content.site.email}`}
                className="flex items-center space-x-4 transition-colors group"
                style={{ color: 'var(--gray-700)' }}
              >
                <div 
                  className="p-3 rounded-lg transition-colors"
                  style={{ backgroundColor: 'var(--primary-100)' }}
                >
                  <Mail className="h-6 w-6" style={{ color: 'var(--primary-600)' }} />
                </div>
                <div>
                  <p className="text-sm" style={{ color: 'var(--gray-500)' }}>{emailLabel}</p>
                  <p className="font-semibold">{content.site.email}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6" style={{ color: 'var(--gray-900)' }}>
              {sendMessageText}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--gray-700)' }}>
                  {content.contact.form.nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all"
                  style={{ 
                    borderColor: 'var(--gray-300)',
                    '--tw-ring-color': 'var(--primary-500)'
                  } as React.CSSProperties}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--gray-700)' }}>
                  {content.contact.form.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all"
                  style={{ 
                    borderColor: 'var(--gray-300)',
                    '--tw-ring-color': 'var(--primary-500)'
                  } as React.CSSProperties}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--gray-700)' }}>
                  {content.contact.form.messageLabel}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all resize-none"
                  style={{ 
                    borderColor: 'var(--gray-300)',
                    '--tw-ring-color': 'var(--primary-500)'
                  } as React.CSSProperties}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                style={{ 
                  backgroundColor: 'var(--primary-600)',
                  '--tw-ring-color': 'var(--primary-500)'
                } as React.CSSProperties}
              >
                {isSubmitting ? (
                  content.navigation[0].label === 'Home' ? 'Sending...' : 'Wird gesendet...'
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    {content.contact.form.submitLabel}
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="p-4 border rounded-lg" style={{ 
                  backgroundColor: 'var(--success)',
                  backgroundColor: 'rgba(34, 197, 94, 0.1)',
                  borderColor: 'var(--success)',
                  color: '#166534'
                }}>
                  {successMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
