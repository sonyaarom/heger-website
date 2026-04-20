'use client'

import { useApp } from '@/components/AppContext'

const ACCENT = '#c8102e'
const ACCENT_HOVER = '#a00d25'

export default function HistoryPage() {
  const { c, openContact } = useApp()
  const h = c.history

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
            {h.title}
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
            {h.intro}
          </p>
        </div>
      </div>

      <section style={{ padding: '72px 24px', background: '#fff' }}>
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
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
              {h.eyebrow}
            </div>
            <h2
              style={{
                fontSize: 28,
                fontWeight: 900,
                margin: '0 0 16px',
                letterSpacing: '-0.02em',
              }}
            >
              {h.heading}
            </h2>
            <div style={{ width: 40, height: 3, background: ACCENT, marginBottom: 24 }} />
            {h.content.split('\n\n').map((para, i) => (
              <p
                key={i}
                style={{ fontSize: 15, color: '#555', lineHeight: 1.8, marginBottom: 16 }}
              >
                {para}
              </p>
            ))}
            <button
              onClick={() => openContact()}
              onMouseEnter={(e) => (e.currentTarget.style.background = ACCENT_HOVER)}
              onMouseLeave={(e) => (e.currentTarget.style.background = ACCENT)}
              style={{
                marginTop: 16,
                background: ACCENT,
                color: '#fff',
                border: 'none',
                padding: '12px 24px',
                fontSize: 14,
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'inherit',
                letterSpacing: '0.02em',
              }}
            >
              {h.contactCta}
            </button>
          </div>

          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: ACCENT,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: 24,
              }}
            >
              {h.milestonesHeading}
            </div>
            <div style={{ position: 'relative', paddingLeft: 32 }}>
              <div
                style={{
                  position: 'absolute',
                  left: 8,
                  top: 0,
                  bottom: 0,
                  width: 2,
                  background: '#e8e8e8',
                }}
              />
              {h.milestones.map((m, i) => (
                <div key={i} style={{ position: 'relative', marginBottom: 36 }}>
                  <div
                    style={{
                      position: 'absolute',
                      left: -28,
                      top: 4,
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      background: ACCENT,
                      border: '2px solid #fff',
                      boxShadow: `0 0 0 2px ${ACCENT}`,
                    }}
                  />
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 800,
                      color: ACCENT,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: 4,
                    }}
                  >
                    {m.year}
                  </div>
                  <div style={{ fontSize: 15, color: '#333', fontWeight: 500 }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ position: 'relative', height: 320, overflow: 'hidden' }}>
        <img
          src="/pics/antarktisstation_neumayer_1.jpg"
          alt="GMT Heger in the field"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.55)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ textAlign: 'center', color: '#fff' }}>
            <div
              style={{
                fontSize: 'clamp(22px,3.5vw,40px)',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                marginBottom: 8,
              }}
            >
              {h.bannerTitle}
            </div>
            <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)' }}>
              {c.site.fullName}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
