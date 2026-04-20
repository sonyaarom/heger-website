'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useApp } from '@/components/AppContext'

const ACCENT = '#c8102e'
const ACCENT_HOVER = '#a00d25'

export default function HomePage() {
  const { c, openContact } = useApp()
  const h = c.home
  const router = useRouter()

  const go = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
  }

  const kpis = [
    { num: '< 6 mgon', label: h.kpiLabels.accuracy },
    { num: '15 min', label: h.kpiLabels.time },
    { num: '30+', label: h.kpiLabels.experience },
    { num: '5+', label: h.kpiLabels.brands },
  ]

  return (
    <div>
      {/* HERO */}
      <section
        style={{
          position: 'relative',
          background: '#111',
          minHeight: 560,
          display: 'flex',
          alignItems: 'stretch',
          overflow: 'hidden',
        }}
      >
        <img
          src="/pics/antarktisstation_neumayer_1.jpg"
          alt="North-Seeking Gyroscope in the field"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.45,
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: 1200,
            margin: '0 auto',
            padding: '80px 24px',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <div style={{ maxWidth: 660 }}>
            <div
              style={{
                display: 'inline-block',
                background: ACCENT,
                color: '#fff',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '5px 12px',
                marginBottom: 20,
              }}
            >
              {h.eyebrow}
            </div>
            <h1
              style={{
                fontSize: 'clamp(40px, 6vw, 72px)',
                fontWeight: 900,
                color: '#fff',
                margin: '0 0 16px',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                whiteSpace: 'pre-line',
              }}
            >
              {h.heroTitle}
            </h1>
            <p
              style={{
                fontSize: 16,
                color: 'rgba(255,255,255,0.75)',
                margin: '0 0 8px',
                fontWeight: 500,
                letterSpacing: '0.02em',
              }}
            >
              {h.heroSubtitle}
            </p>
            <p
              style={{
                fontSize: 16,
                color: 'rgba(255,255,255,0.65)',
                margin: '0 0 36px',
                lineHeight: 1.7,
                maxWidth: 540,
              }}
            >
              {h.heroDesc}
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button
                onClick={() => go('/gyroscopes')}
                onMouseEnter={(e) => (e.currentTarget.style.background = ACCENT_HOVER)}
                onMouseLeave={(e) => (e.currentTarget.style.background = ACCENT)}
                style={{
                  background: ACCENT,
                  color: '#fff',
                  border: 'none',
                  padding: '14px 28px',
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: 'pointer',
                  letterSpacing: '0.02em',
                  fontFamily: 'inherit',
                }}
              >
                {h.heroCta1} →
              </button>
              <button
                onClick={() => openContact()}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)')}
                style={{
                  background: 'transparent',
                  color: '#fff',
                  border: '2px solid rgba(255,255,255,0.5)',
                  padding: '14px 28px',
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: 'pointer',
                  letterSpacing: '0.02em',
                  fontFamily: 'inherit',
                }}
              >
                {h.heroCta2}
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 80,
            background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.4))',
          }}
        />
      </section>

      {/* KPI STRIP */}
      <section style={{ background: ACCENT, padding: 0 }}>
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          }}
        >
          {kpis.map((kpi, i) => (
            <div
              key={i}
              style={{
                padding: '24px 28px',
                borderRight: i < kpis.length - 1 ? '1px solid rgba(255,255,255,0.2)' : 'none',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 900,
                  color: '#fff',
                  letterSpacing: '-0.02em',
                }}
              >
                {kpi.num}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.75)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginTop: 4,
                }}
              >
                {kpi.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3 BOXES */}
      <section style={{ background: '#f8f8f8', padding: '72px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <Eyebrow>{h.offerEyebrow}</Eyebrow>
            <h2
              style={{
                fontSize: 'clamp(26px, 4vw, 38px)',
                fontWeight: 800,
                margin: 0,
                color: '#111',
                letterSpacing: '-0.02em',
              }}
            >
              {h.sectionsTitle}
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 2,
            }}
          >
            {h.boxes.map((box, i) => (
              <div
                key={i}
                onClick={() => go(box.link)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderTopColor = ACCENT
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.10)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderTopColor = 'transparent'
                  e.currentTarget.style.boxShadow = 'none'
                }}
                style={{
                  background: '#fff',
                  padding: '36px 32px',
                  cursor: 'pointer',
                  borderTop: '3px solid transparent',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    fontSize: 32,
                    marginBottom: 16,
                    color: ACCENT,
                    fontWeight: 900,
                  }}
                >
                  0{i + 1}
                </div>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    margin: '0 0 12px',
                    color: '#111',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {box.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: '#666',
                    lineHeight: 1.7,
                    margin: '0 0 20px',
                  }}
                >
                  {box.desc}
                </p>
                <span
                  style={{
                    fontSize: 13,
                    color: ACCENT,
                    fontWeight: 700,
                    letterSpacing: '0.03em',
                  }}
                >
                  {box.cta} →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GYROMAX FEATURE SECTION */}
      <section style={{ background: '#fff', padding: '80px 24px' }}>
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 64,
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 8,
              alignItems: 'stretch',
            }}
          >
            <img
              src="/pics/kreisel_1.jpg"
              alt="GYROMAX Gyroscope"
              style={{
                width: '100%',
                height: '100%',
                minHeight: 0,
                objectFit: 'cover',
                gridRow: 'span 2',
                gridColumn: 1,
                display: 'block',
              }}
            />
            <img
              src="/pics/kreisel_2.jpg"
              alt="GYROMAX Detail"
              style={{
                width: '100%',
                aspectRatio: '4/3',
                objectFit: 'cover',
                display: 'block',
                gridColumn: 2,
                gridRow: 1,
              }}
            />
            <img
              src="/pics/kreisel_3.jpg"
              alt="GYROMAX In Use"
              style={{
                width: '100%',
                aspectRatio: '4/3',
                objectFit: 'cover',
                display: 'block',
                gridColumn: 2,
                gridRow: 2,
              }}
            />
          </div>
          <div>
            <Eyebrow>GYROMAX™</Eyebrow>
            <h2
              style={{
                fontSize: 'clamp(24px, 3.5vw, 36px)',
                fontWeight: 900,
                margin: '0 0 8px',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              {h.gyromaxTitle}
            </h2>
            <div style={{ width: 48, height: 3, background: ACCENT, marginBottom: 20 }} />
            <p
              style={{
                fontSize: 15,
                color: '#444',
                lineHeight: 1.75,
                marginBottom: 28,
              }}
            >
              {h.gyromaxDesc}
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 1,
                background: '#eee',
                marginBottom: 28,
              }}
            >
              {h.techRows.map((row, i) => (
                <div key={i} style={{ background: '#f8f8f8', padding: '14px 16px' }}>
                  <div
                    style={{
                      fontSize: 11,
                      color: '#888',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: 4,
                    }}
                  >
                    {row.label}
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#111' }}>{row.value}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link
                href="/gyroscopes"
                onMouseEnter={(e) => (e.currentTarget.style.background = ACCENT_HOVER)}
                onMouseLeave={(e) => (e.currentTarget.style.background = ACCENT)}
                style={{
                  background: ACCENT,
                  color: '#fff',
                  padding: '12px 24px',
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  display: 'inline-block',
                }}
              >
                {h.techCta} →
              </Link>
              <button
                onClick={() => openContact()}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = ACCENT
                  e.currentTarget.style.color = '#fff'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = ACCENT
                }}
                style={{
                  background: 'transparent',
                  color: ACCENT,
                  border: `2px solid ${ACCENT}`,
                  padding: '12px 24px',
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: 'pointer',
                  letterSpacing: '0.02em',
                  fontFamily: 'inherit',
                }}
              >
                {h.quoteCta}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Applications strip */}
      <section style={{ background: '#111', padding: '56px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center' }}>
            <Eyebrow>{h.applicationsEyebrow}</Eyebrow>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 12,
              justifyContent: 'center',
              marginTop: 20,
            }}
          >
            {c.gyroscopes.applications.map((app, i) => (
              <div
                key={i}
                style={{
                  background: '#1e1e1e',
                  border: '1px solid #333',
                  color: '#ccc',
                  padding: '10px 20px',
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                {app}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
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
      {children}
    </div>
  )
}
