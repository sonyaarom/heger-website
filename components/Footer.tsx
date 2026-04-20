'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useApp } from './AppContext'

const ACCENT = '#c8102e'

export default function Footer() {
  const { c } = useApp()
  const router = useRouter()
  const [showImprint, setShowImprint] = useState(false)
  const f = c.footer

  useEffect(() => {
    if (!showImprint) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowImprint(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [showImprint])

  const go = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
  }

  return (
    <>
      {/* Contact CTA strip */}
      <div style={{ background: '#111', color: '#fff', padding: '48px 24px' }}>
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 32,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>{f.ctaHeading}</div>
            <div style={{ color: '#aaa', fontSize: 15 }}>{f.ctaSub}</div>
          </div>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a
              href={`tel:${c.site.phone}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                color: '#fff',
                textDecoration: 'none',
                background: '#222',
                padding: '12px 20px',
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              <span>📞</span> {c.site.phone}
            </a>
            <a
              href={`mailto:${c.site.email}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                color: '#fff',
                textDecoration: 'none',
                background: ACCENT,
                padding: '12px 20px',
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              <span>✉</span> {c.site.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <footer style={{ background: '#1a1a1a', color: '#ccc', padding: '56px 24px 0' }}>
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 40,
            paddingBottom: 48,
          }}
        >
          <div>
            <div style={{ fontSize: 20, fontWeight: 800, color: ACCENT, marginBottom: 4 }}>
              {c.site.name}
            </div>
            <div
              style={{
                fontSize: 11,
                color: '#888',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 16,
              }}
            >
              {c.site.fullName}
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.7, color: '#888', margin: 0 }}>{f.tagline}</p>
          </div>

          <div>
            <ColumnHeading>{f.quicklinks}</ColumnHeading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {c.navigation.map((item) => (
                <button
                  key={item.href}
                  onClick={() => go(item.href)}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#aaa')}
                  style={{
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    color: '#aaa',
                    cursor: 'pointer',
                    fontSize: 14,
                    padding: 0,
                    fontFamily: 'inherit',
                    transition: 'color 0.15s',
                  }}
                >
                  › {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <ColumnHeading>{f.contactHead}</ColumnHeading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a
                href={`tel:${c.site.phone}`}
                style={{ color: '#aaa', textDecoration: 'none', fontSize: 14 }}
              >
                <div
                  style={{
                    fontSize: 11,
                    color: '#666',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: 2,
                  }}
                >
                  {c.contact.labels.phone}
                </div>
                {c.site.phone}
              </a>
              <a
                href={`mailto:${c.site.email}`}
                style={{ color: ACCENT, textDecoration: 'none', fontSize: 14 }}
              >
                <div
                  style={{
                    fontSize: 11,
                    color: '#666',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: 2,
                  }}
                >
                  {c.contact.labels.email}
                </div>
                {c.site.email}
              </a>
            </div>
          </div>

          <div>
            <ColumnHeading>{f.addressHead}</ColumnHeading>
            <address
              style={{ fontStyle: 'normal', fontSize: 14, lineHeight: 1.8, color: '#aaa' }}
            >
              {f.addressLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < f.addressLines.length - 1 && <br />}
                </span>
              ))}
            </address>
          </div>
        </div>

        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            borderTop: '1px solid #2a2a2a',
            padding: '20px 0',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ fontSize: 13, color: '#666' }}>
            © {new Date().getFullYear()} {c.site.fullName}. {f.rights}
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            <FooterLinkBtn onClick={() => setShowImprint(true)}>{f.legal}</FooterLinkBtn>
            <FooterLinkBtn onClick={() => setShowImprint(true)}>{f.privacy}</FooterLinkBtn>
          </div>
        </div>
      </footer>

      {showImprint && (
        <div
          onClick={() => setShowImprint(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.7)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#fff',
              maxWidth: 600,
              width: '100%',
              padding: 40,
              position: 'relative',
              maxHeight: '80vh',
              overflowY: 'auto',
            }}
          >
            <button
              aria-label="Close"
              onClick={() => setShowImprint(false)}
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                background: 'none',
                border: 'none',
                fontSize: 24,
                cursor: 'pointer',
                color: '#666',
                fontFamily: 'inherit',
              }}
            >
              ×
            </button>
            <div
              style={{
                fontSize: 11,
                color: ACCENT,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 8,
              }}
            >
              Legal
            </div>
            <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 24, marginTop: 0 }}>
              {f.imprint.title}
            </h2>
            <pre
              style={{
                fontFamily: 'inherit',
                fontSize: 14,
                lineHeight: 1.8,
                color: '#444',
                whiteSpace: 'pre-wrap',
                margin: 0,
              }}
            >
              {f.imprint.content}
            </pre>
          </div>
        </div>
      )}
    </>
  )
}

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 12,
        fontWeight: 700,
        color: '#fff',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        marginBottom: 16,
        paddingBottom: 8,
        borderBottom: '1px solid #333',
      }}
    >
      {children}
    </div>
  )
}

function FooterLinkBtn({
  children,
  onClick,
}: {
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
      onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}
      style={{
        background: 'none',
        border: 'none',
        color: '#888',
        cursor: 'pointer',
        fontSize: 13,
        fontFamily: 'inherit',
        padding: 0,
        transition: 'color 0.15s',
      }}
    >
      {children}
    </button>
  )
}
