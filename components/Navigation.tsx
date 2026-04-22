'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useApp } from './AppContext'
import { assetUrl } from '@/lib/assetUrl'

const ACCENT = '#c8102e'
const ACCENT_HOVER = '#a00d25'

export default function Navigation() {
  const { c, lang, setLang, openContact } = useApp()
  const pathname = usePathname()
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    const onResize = () => setIsMobile(window.innerWidth <= 768)
    onResize()
    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const go = (href: string) => {
    setMenuOpen(false)
    router.push(href)
    window.scrollTo(0, 0)
  }

  return (
    <>
      {/* Top bar */}
      <div
        style={{
          background: '#f5f5f5',
          borderBottom: '1px solid #e0e0e0',
          fontSize: 13,
          color: '#555',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 38,
            gap: 12,
            flexWrap: 'wrap',
          }}
        >
          <span style={{ letterSpacing: '0.02em' }}>{c.site.fullName}</span>
          <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
            <a href={`tel:${c.site.phone}`} style={{ color: '#555', textDecoration: 'none' }}>
              {c.site.phone}
            </a>
            <a
              href={`mailto:${c.site.email}`}
              style={{ color: ACCENT, textDecoration: 'none', fontWeight: 600 }}
            >
              {c.site.email}
            </a>
            <div
              style={{
                display: 'flex',
                gap: 4,
                marginLeft: 8,
                borderLeft: '1px solid #ccc',
                paddingLeft: 16,
              }}
            >
              <LangBtn active={lang === 'de'} onClick={() => setLang('de')}>
                DE
              </LangBtn>
              <LangBtn active={lang === 'en'} onClick={() => setLang('en')}>
                EN
              </LangBtn>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: '#fff',
          borderBottom: '1px solid #e8e8e8',
          borderTop: `3px solid ${ACCENT}`,
          boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.08)' : 'none',
          transition: 'box-shadow 0.2s',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 64,
          }}
        >
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            aria-label={c.site.fullName}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              padding: 0,
              textDecoration: 'none',
            }}
          >
            <img
              src={assetUrl('/pics/gmt-logo.jpg')}
              alt={c.site.fullName}
              style={{
                height: 44,
                width: 'auto',
                display: 'block',
                objectFit: 'contain',
              }}
            />
            {!isMobile && (
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#333',
                  letterSpacing: '0.04em',
                  fontStyle: 'italic',
                  borderLeft: `2px solid ${ACCENT}`,
                  paddingLeft: 14,
                  lineHeight: 1.2,
                  whiteSpace: 'nowrap',
                }}
              >
                Wir geben Orientierung
              </span>
            )}
          </Link>

          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {c.navigation.map((item) => {
                const active = pathname === item.href
                return (
                  <button
                    key={item.href}
                    onClick={() => go(item.href)}
                    onMouseEnter={(e) => {
                      if (!active) e.currentTarget.style.color = '#111'
                    }}
                    onMouseLeave={(e) => {
                      if (!active) e.currentTarget.style.color = '#444'
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '8px 14px',
                      fontSize: 14,
                      fontWeight: 600,
                      color: active ? ACCENT : '#444',
                      borderBottom: active ? `2px solid ${ACCENT}` : '2px solid transparent',
                      transition: 'color 0.15s, border-color 0.15s',
                      letterSpacing: '0.01em',
                      fontFamily: 'inherit',
                    }}
                  >
                    {item.label}
                  </button>
                )
              })}
              <button
                onClick={() => openContact()}
                onMouseEnter={(e) => (e.currentTarget.style.background = ACCENT_HOVER)}
                onMouseLeave={(e) => (e.currentTarget.style.background = ACCENT)}
                style={{
                  marginLeft: 8,
                  background: ACCENT,
                  color: '#fff',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px 18px',
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  fontFamily: 'inherit',
                }}
              >
                {c.enquireCta}
              </button>
            </div>
          )}

          {isMobile && (
            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 4,
              }}
            >
              <div
                style={{
                  width: 24,
                  height: 2,
                  background: '#111',
                  marginBottom: 5,
                  transition: 'transform 0.2s',
                  transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none',
                }}
              />
              <div
                style={{
                  width: 24,
                  height: 2,
                  background: '#111',
                  marginBottom: 5,
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <div
                style={{
                  width: 24,
                  height: 2,
                  background: '#111',
                  transition: 'transform 0.2s',
                  transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
                }}
              />
            </button>
          )}
        </div>

        {isMobile && menuOpen && (
          <div style={{ background: '#fff', borderTop: '1px solid #eee', padding: '8px 24px 16px' }}>
            {c.navigation.map((item) => {
              const active = pathname === item.href
              return (
                <button
                  key={item.href}
                  onClick={() => go(item.href)}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    borderBottom: '1px solid #f0f0f0',
                    padding: '12px 0',
                    fontSize: 15,
                    fontWeight: 600,
                    color: active ? ACCENT : '#333',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                  }}
                >
                  {item.label}
                </button>
              )
            })}
            <button
              onClick={() => {
                openContact()
                setMenuOpen(false)
              }}
              style={{
                marginTop: 12,
                width: '100%',
                background: ACCENT,
                color: '#fff',
                border: 'none',
                padding: '12px',
                fontSize: 15,
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              {c.enquireCta}
            </button>
          </div>
        )}
      </nav>
    </>
  )
}

function LangBtn({
  active,
  children,
  onClick,
}: {
  active: boolean
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      style={{
        background: active ? ACCENT : 'transparent',
        color: active ? '#fff' : '#555',
        border: `1px solid ${active ? ACCENT : '#ccc'}`,
        borderRadius: 2,
        padding: '2px 8px',
        cursor: 'pointer',
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: '0.05em',
        fontFamily: 'inherit',
      }}
    >
      {children}
    </button>
  )
}
