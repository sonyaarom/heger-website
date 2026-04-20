'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useApp } from './AppContext'

const ACCENT = '#c8102e'

export default function InlineContactForm() {
  const { c } = useApp()
  const pathname = usePathname()
  const f = c.contact.form
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  if (pathname === '/contact') return null

  const set = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) =>
    setForm((prev) => ({ ...prev, [k]: v }))

  const inputStyle: React.CSSProperties = {
    width: '100%',
    boxSizing: 'border-box',
    border: '1px solid rgba(255,255,255,0.15)',
    padding: '10px 14px',
    fontSize: 14,
    fontFamily: 'inherit',
    outline: 'none',
    background: 'rgba(255,255,255,0.08)',
    color: '#fff',
    transition: 'border-color 0.15s',
  }

  return (
    <section style={{ background: '#1a1a1a', padding: '64px 24px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: ACCENT,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: 8,
            }}
          >
            {c.inline.eyebrow}
          </div>
          <h2
            style={{
              fontSize: 'clamp(22px,3vw,32px)',
              fontWeight: 900,
              color: '#fff',
              margin: 0,
              letterSpacing: '-0.02em',
            }}
          >
            {c.inline.heading}
          </h2>
        </div>
        {sent ? (
          <div style={{ textAlign: 'center', padding: '24px 0', color: '#fff' }}>
            <div style={{ fontSize: 32, marginBottom: 10 }}>✓</div>
            <div style={{ fontSize: 16, fontWeight: 600 }}>{f.success}</div>
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
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: 12,
                marginBottom: 12,
              }}
            >
              <div>
                <DarkLabel>{f.name}</DarkLabel>
                <input
                  required
                  value={form.name}
                  onChange={(e) => set('name', e.target.value)}
                  style={inputStyle}
                />
              </div>
              <div>
                <DarkLabel>{f.email}</DarkLabel>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => set('email', e.target.value)}
                  style={inputStyle}
                />
              </div>
            </div>
            <div style={{ marginBottom: 16 }}>
              <DarkLabel>{f.message}</DarkLabel>
              <textarea
                required
                rows={3}
                value={form.message}
                onChange={(e) => set('message', e.target.value)}
                style={{ ...inputStyle, resize: 'vertical' }}
              />
            </div>
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
    </section>
  )
}

function DarkLabel({ children }: { children: React.ReactNode }) {
  return (
    <label
      style={{
        fontSize: 12,
        fontWeight: 600,
        color: '#aaa',
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
