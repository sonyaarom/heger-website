'use client'

import { useEffect, useState } from 'react'
import { useApp } from './AppContext'

const ACCENT = '#c8102e'

export default function ContactModal() {
  const { c, contactOpen, contactProduct, closeContact } = useApp()
  const f = c.contact.form
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: contactProduct || '',
    message: '',
    distributor: false,
  })

  useEffect(() => {
    if (contactOpen) {
      setSent(false)
      setForm({
        name: '',
        company: '',
        email: '',
        phone: '',
        product: contactProduct || '',
        message: '',
        distributor: false,
      })
    }
  }, [contactOpen, contactProduct])

  useEffect(() => {
    if (!contactOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeContact()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [contactOpen, closeContact])

  if (!contactOpen) return null

  const set = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) =>
    setForm((prev) => ({ ...prev, [k]: v }))

  const inputStyle: React.CSSProperties = {
    width: '100%',
    boxSizing: 'border-box',
    border: '1px solid #ddd',
    padding: '10px 12px',
    fontSize: 14,
    fontFamily: 'inherit',
    outline: 'none',
    background: '#fafafa',
    transition: 'border-color 0.15s',
  }

  return (
    <div
      onClick={closeContact}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.65)',
        zIndex: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#fff',
          width: '100%',
          maxWidth: 560,
          maxHeight: '92vh',
          overflowY: 'auto',
          position: 'relative',
        }}
      >
        <div
          style={{
            background: ACCENT,
            padding: '20px 28px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <div style={{ color: '#fff', fontSize: 18, fontWeight: 800 }}>{c.contact.title}</div>
            {contactProduct && (
              <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, marginTop: 2 }}>
                {contactProduct}
              </div>
            )}
          </div>
          <button
            onClick={closeContact}
            aria-label="Close"
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              fontSize: 26,
              cursor: 'pointer',
              lineHeight: 1,
              padding: '0 4px',
              fontFamily: 'inherit',
            }}
          >
            ×
          </button>
        </div>

        <div style={{ padding: '28px 28px 32px' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '32px 0' }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>✓</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#111', marginBottom: 8 }}>
                {f.success}
              </div>
              <div style={{ color: '#666', fontSize: 14, marginBottom: 24 }}>{f.successMsg}</div>
              <button
                onClick={closeContact}
                style={{
                  background: ACCENT,
                  color: '#fff',
                  border: 'none',
                  padding: '12px 32px',
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                }}
              >
                {f.close}
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 12,
                  marginBottom: 12,
                }}
              >
                <div>
                  <Label>{f.name}</Label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => set('name', e.target.value)}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <Label>{f.company}</Label>
                  <input
                    value={form.company}
                    onChange={(e) => set('company', e.target.value)}
                    style={inputStyle}
                  />
                </div>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 12,
                  marginBottom: 12,
                }}
              >
                <div>
                  <Label>{f.email}</Label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => set('email', e.target.value)}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <Label>{f.phone}</Label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => set('phone', e.target.value)}
                    style={inputStyle}
                  />
                </div>
              </div>
              <div style={{ marginBottom: 12 }}>
                <Label>{f.product}</Label>
                <input
                  value={form.product}
                  onChange={(e) => set('product', e.target.value)}
                  style={inputStyle}
                />
              </div>
              <div style={{ marginBottom: 16 }}>
                <Label>{f.message}</Label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => set('message', e.target.value)}
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>
              <label
                style={{
                  display: 'flex',
                  gap: 10,
                  alignItems: 'flex-start',
                  marginBottom: 20,
                  cursor: 'pointer',
                }}
              >
                <input
                  type="checkbox"
                  checked={form.distributor}
                  onChange={(e) => set('distributor', e.target.checked)}
                  style={{ marginTop: 2, accentColor: ACCENT, width: 16, height: 16, flexShrink: 0 }}
                />
                <span style={{ fontSize: 13, color: '#555', lineHeight: 1.5 }}>{f.distributor}</span>
              </label>
              <button
                type="submit"
                style={{
                  width: '100%',
                  background: ACCENT,
                  color: '#fff',
                  border: 'none',
                  padding: '14px',
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: 'pointer',
                  letterSpacing: '0.03em',
                  fontFamily: 'inherit',
                }}
              >
                {f.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label
      style={{
        fontSize: 12,
        fontWeight: 600,
        color: '#444',
        display: 'block',
        marginBottom: 4,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
      }}
    >
      {children}
    </label>
  )
}
