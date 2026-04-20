'use client'

import { useApp } from '@/components/AppContext'

const ACCENT = '#c8102e'
const ACCENT_HOVER = '#a00d25'

export default function ServicePage() {
  const { c, openContact } = useApp()
  const s = c.service

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
            {s.title}
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
            {s.intro}
          </p>
        </div>
      </div>

      <section style={{ padding: '72px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 2,
            }}
          >
            {s.items.map((item) => (
              <div
                key={item.id}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)')
                }
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
                style={{
                  background: '#fff',
                  border: '1px solid #e8e8e8',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'box-shadow 0.2s',
                }}
              >
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: 200,
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                  <div
                    style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)' }}
                  />
                  <div style={{ position: 'absolute', bottom: 16, left: 20 }}>
                    <div style={{ fontSize: 24, fontWeight: 900, color: '#fff', marginBottom: 2 }}>
                      {item.title}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    padding: '28px 28px 24px',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <p
                    style={{
                      fontSize: 14,
                      color: '#555',
                      lineHeight: 1.75,
                      flex: 1,
                      margin: '0 0 24px',
                    }}
                  >
                    {item.desc}
                  </p>
                  <button
                    onClick={() => openContact(item.title)}
                    onMouseEnter={(e) => (e.currentTarget.style.background = ACCENT_HOVER)}
                    onMouseLeave={(e) => (e.currentTarget.style.background = ACCENT)}
                    style={{
                      background: ACCENT,
                      color: '#fff',
                      border: 'none',
                      padding: '12px 20px',
                      fontSize: 13,
                      fontWeight: 700,
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                      letterSpacing: '0.03em',
                      textAlign: 'center',
                    }}
                  >
                    {s.requestCta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#f8f8f8', padding: '64px 24px' }}>
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 48,
            alignItems: 'center',
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
              {s.gakEyebrow}
            </div>
            <h2
              style={{
                fontSize: 28,
                fontWeight: 900,
                margin: '0 0 16px',
                letterSpacing: '-0.02em',
              }}
            >
              {s.gakHeading}
            </h2>
            <div style={{ width: 40, height: 3, background: ACCENT, marginBottom: 20 }} />
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.75, marginBottom: 12 }}>
              {s.gakIntro}
            </p>
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.75, marginBottom: 24 }}>
              {s.gakPrice}
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href={`mailto:${s.gakEmail}`}
                style={{
                  display: 'inline-block',
                  background: '#111',
                  color: '#fff',
                  padding: '11px 22px',
                  fontSize: 14,
                  fontWeight: 700,
                  textDecoration: 'none',
                  letterSpacing: '0.02em',
                }}
              >
                {s.gakEmail}
              </a>
              <button
                onClick={() => openContact('WILD GAK')}
                onMouseEnter={(e) => (e.currentTarget.style.background = ACCENT_HOVER)}
                onMouseLeave={(e) => (e.currentTarget.style.background = ACCENT)}
                style={{
                  background: ACCENT,
                  color: '#fff',
                  border: 'none',
                  padding: '11px 22px',
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                }}
              >
                {s.gakContactCta}
              </button>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {['/pics/konverter_1.jpg', '/pics/konverter_2.jpg', '/pics/konverter_3.jpg', '/pics/konverter_4.jpg'].map(
              (img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="GAK Konverter"
                  style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }}
                />
              ),
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
