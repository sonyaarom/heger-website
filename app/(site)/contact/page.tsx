'use client'

import { useState } from 'react'
import { useApp } from '@/components/AppContext'

const ACCENT = '#c8102e'
const ACCENT_HOVER = '#a00d25'

export default function ContactPage() {
  const { c } = useApp()
  const ct = c.contact
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    message: '',
    distributor: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 14px',
    border: '1px solid #ddd',
    fontSize: 14,
    fontFamily: 'inherit',
    background: '#fff',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: 12,
    fontWeight: 700,
    color: '#333',
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  }

  return (
    <div>
      <div
        style={{
          background: '#111',
          padding: '56px 24px 48px',
          borderBottom: `4px solid ${ACCENT}`,
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: ACCENT,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: 10,
            }}
          >
            {c.site.name}
          </div>
          <h1
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 900,
              color: '#fff',
              margin: '0 0 12px',
              letterSpacing: '-0.02em',
            }}
          >
            {ct.title}
          </h1>
          <p
            style={{
              fontSize: 16,
              color: 'rgba(255,255,255,0.65)',
              margin: 0,
              maxWidth: 600,
              lineHeight: 1.7,
            }}
          >
            {ct.intro}
          </p>
        </div>
      </div>

      <section style={{ padding: '72px 24px', background: '#fff' }}>
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 64,
          }}
        >
          <div>
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
              {ct.directContact}
            </div>
            <h2
              style={{
                fontSize: 28,
                fontWeight: 900,
                margin: '0 0 16px',
                letterSpacing: '-0.02em',
              }}
            >
              {c.site.fullName}
            </h2>
            <div style={{ width: 40, height: 3, background: ACCENT, marginBottom: 28 }} />

            <div style={{ marginBottom: 22 }}>
              <div style={{ ...labelStyle, color: '#888' }}>{ct.labels.phone}</div>
              <a
                href={`tel:${c.site.phone.replace(/\s/g, '')}`}
                style={{
                  fontSize: 18,
                  color: '#111',
                  textDecoration: 'none',
                  fontWeight: 600,
                }}
              >
                {c.site.phone}
              </a>
            </div>

            <div style={{ marginBottom: 22 }}>
              <div style={{ ...labelStyle, color: '#888' }}>{ct.labels.email}</div>
              <a
                href={`mailto:${c.site.email}`}
                style={{
                  fontSize: 18,
                  color: '#111',
                  textDecoration: 'none',
                  fontWeight: 600,
                }}
              >
                {c.site.email}
              </a>
            </div>

            <div style={{ marginBottom: 32 }}>
              <div style={{ ...labelStyle, color: '#888' }}>{ct.labels.address}</div>
              <div style={{ fontSize: 15, color: '#333', lineHeight: 1.6 }}>{c.site.address}</div>
            </div>

            <div
              style={{
                borderLeft: `3px solid ${ACCENT}`,
                padding: '16px 20px',
                background: '#f8f8f8',
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  color: ACCENT,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: 6,
                }}
              >
                {ct.distributorTitle}
              </div>
              <div style={{ fontSize: 14, color: '#333', lineHeight: 1.6 }}>
                {ct.distributorNote}
              </div>
            </div>
          </div>

          <div>
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
              {ct.contactForm}
            </div>
            <h2
              style={{
                fontSize: 28,
                fontWeight: 900,
                margin: '0 0 16px',
                letterSpacing: '-0.02em',
              }}
            >
              {ct.contactForm}
            </h2>
            <div style={{ width: 40, height: 3, background: ACCENT, marginBottom: 28 }} />

            {submitted ? (
              <div
                style={{
                  border: '2px solid #2b7a3d',
                  background: '#eaf5ed',
                  padding: '32px 24px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    background: '#2b7a3d',
                    color: '#fff',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 24,
                    fontWeight: 900,
                    marginBottom: 16,
                  }}
                >
                  ✓
                </div>
                <div style={{ fontSize: 18, fontWeight: 800, color: '#1a1a1a', marginBottom: 8 }}>
                  {ct.form.success}
                </div>
                <div style={{ fontSize: 14, color: '#444' }}>{ct.form.successMsg}</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: 16,
                    marginBottom: 16,
                  }}
                >
                  <div>
                    <label style={labelStyle}>{ct.form.name}</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      onFocus={(e) => (e.currentTarget.style.borderColor = ACCENT)}
                      onBlur={(e) => (e.currentTarget.style.borderColor = '#ddd')}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>{ct.form.company}</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      onFocus={(e) => (e.currentTarget.style.borderColor = ACCENT)}
                      onBlur={(e) => (e.currentTarget.style.borderColor = '#ddd')}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: 16,
                    marginBottom: 16,
                  }}
                >
                  <div>
                    <label style={labelStyle}>{ct.form.email}</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      onFocus={(e) => (e.currentTarget.style.borderColor = ACCENT)}
                      onBlur={(e) => (e.currentTarget.style.borderColor = '#ddd')}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>{ct.form.phone}</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      onFocus={(e) => (e.currentTarget.style.borderColor = ACCENT)}
                      onBlur={(e) => (e.currentTarget.style.borderColor = '#ddd')}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={labelStyle}>{ct.form.product}</label>
                  <input
                    type="text"
                    value={form.product}
                    onChange={(e) => setForm({ ...form, product: e.target.value })}
                    onFocus={(e) => (e.currentTarget.style.borderColor = ACCENT)}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#ddd')}
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label style={labelStyle}>{ct.form.message}</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={(e) => (e.currentTarget.style.borderColor = ACCENT)}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#ddd')}
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </div>

                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    fontSize: 14,
                    color: '#333',
                    cursor: 'pointer',
                    marginBottom: 24,
                  }}
                >
                  <input
                    type="checkbox"
                    checked={form.distributor}
                    onChange={(e) => setForm({ ...form, distributor: e.target.checked })}
                    style={{ width: 16, height: 16, accentColor: ACCENT, cursor: 'pointer' }}
                  />
                  {ct.form.distributor}
                </label>

                <button
                  type="submit"
                  onMouseEnter={(e) => (e.currentTarget.style.background = ACCENT_HOVER)}
                  onMouseLeave={(e) => (e.currentTarget.style.background = ACCENT)}
                  style={{
                    background: ACCENT,
                    color: '#fff',
                    border: 'none',
                    padding: '14px 28px',
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    letterSpacing: '0.02em',
                  }}
                >
                  {ct.form.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
