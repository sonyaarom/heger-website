'use client'

import { useState } from 'react'
import { useApp } from '@/components/AppContext'

const ACCENT = '#c8102e'
const ACCENT_HOVER = '#a00d25'

type Product = ReturnType<typeof useApp>['c']['gyroscopes']['products'][number]

export default function GyroscopesPage() {
  const { c, openContact } = useApp()
  const g = c.gyroscopes
  const [selected, setSelected] = useState<Product | null>(null)

  if (selected) {
    return (
      <ProductDetail
        product={selected}
        onBack={() => setSelected(null)}
        onSelectProduct={setSelected}
      />
    )
  }

  return (
    <div>
      <PageHeader eyebrow={c.site.name} title={g.title} intro={g.intro} />

      <section style={{ padding: '72px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Eyebrow>{g.productsTitle}</Eyebrow>
          <div style={{ width: 48, height: 3, background: ACCENT, marginBottom: 40 }} />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 24,
            }}
          >
            {g.products.map((prod) => (
              <div
                key={prod.id}
                onClick={() => {
                  setSelected(prod)
                  window.scrollTo(0, 0)
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'none'
                }}
                style={{
                  border: '1px solid #e8e8e8',
                  background: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.2s, transform 0.15s',
                }}
              >
                <div style={{ position: 'relative', overflow: 'hidden', background: '#f5f5f5' }}>
                  <img
                    src={prod.img}
                    alt={prod.name}
                    style={{
                      width: '100%',
                      height: 240,
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      background: ACCENT,
                      color: '#fff',
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      padding: '4px 10px',
                    }}
                  >
                    {g.productBadge}
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
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 800,
                      margin: '0 0 6px',
                      color: '#111',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {prod.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 13,
                      color: ACCENT,
                      fontWeight: 600,
                      margin: '0 0 14px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {prod.tagline}
                  </p>
                  <p
                    style={{
                      fontSize: 14,
                      color: '#666',
                      lineHeight: 1.7,
                      margin: '0 0 20px',
                      flex: 1,
                    }}
                  >
                    {prod.desc}
                  </p>

                  <div style={{ background: '#f8f8f8', padding: '12px 16px', marginBottom: 20 }}>
                    {prod.techRows.slice(0, 2).map((row, i) => (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: 13,
                          padding: '4px 0',
                          borderBottom: i < 1 ? '1px solid #eee' : 'none',
                        }}
                      >
                        <span style={{ color: '#888' }}>{row.label}</span>
                        <span style={{ fontWeight: 700, color: '#111' }}>{row.value}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: 8 }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelected(prod)
                        window.scrollTo(0, 0)
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = ACCENT)}
                      onMouseLeave={(e) => (e.currentTarget.style.background = '#111')}
                      style={{
                        flex: 1,
                        background: '#111',
                        color: '#fff',
                        border: 'none',
                        padding: '11px 16px',
                        fontSize: 13,
                        fontWeight: 700,
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {g.viewDetails}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        openContact(prod.name)
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = ACCENT_HOVER)}
                      onMouseLeave={(e) => (e.currentTarget.style.background = ACCENT)}
                      style={{
                        background: ACCENT,
                        color: '#fff',
                        border: 'none',
                        padding: '11px 16px',
                        fontSize: 13,
                        fontWeight: 700,
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                      }}
                    >
                      {g.enquire}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#f8f8f8', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, margin: '0 0 32px', color: '#111' }}>
            {g.applicationTitle}
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 16,
            }}
          >
            {g.applications.map((app, i) => (
              <div
                key={i}
                style={{
                  background: '#fff',
                  border: '1px solid #e8e8e8',
                  padding: '20px',
                  borderLeft: `3px solid ${ACCENT}`,
                }}
              >
                <div style={{ fontSize: 14, color: '#333', fontWeight: 500 }}>{app}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function ProductDetail({
  product,
  onBack,
  onSelectProduct,
}: {
  product: Product
  onBack: () => void
  onSelectProduct: (p: Product) => void
}) {
  const { c, openContact } = useApp()
  const g = c.gyroscopes
  const [activeImg, setActiveImg] = useState(0)
  const images = product.images
  const otherProducts = g.products.filter((p) => p.id !== product.id)

  return (
    <div>
      {/* Breadcrumb */}
      <div
        style={{
          background: '#f8f8f8',
          borderBottom: '1px solid #e8e8e8',
          padding: '12px 24px',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 13,
            color: '#888',
          }}
        >
          <button
            onClick={onBack}
            style={{
              background: 'none',
              border: 'none',
              color: ACCENT,
              cursor: 'pointer',
              fontSize: 13,
              fontWeight: 600,
              fontFamily: 'inherit',
              padding: 0,
            }}
          >
            ← {g.backAll}
          </button>
          <span>/</span>
          <span style={{ color: '#333', fontWeight: 500 }}>{product.name}</span>
        </div>
      </div>

      <section style={{ padding: '56px 24px', background: '#fff' }}>
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 56,
            alignItems: 'start',
          }}
        >
          <div>
            <img
              src={images[activeImg]}
              alt={product.name}
              style={{
                width: '100%',
                aspectRatio: '4/3',
                objectFit: 'cover',
                display: 'block',
                marginBottom: 8,
              }}
            />
            <div style={{ display: 'flex', gap: 8 }}>
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  onClick={() => setActiveImg(i)}
                  style={{
                    width: '31%',
                    aspectRatio: '4/3',
                    objectFit: 'cover',
                    cursor: 'pointer',
                    border: activeImg === i ? `2px solid ${ACCENT}` : '2px solid transparent',
                    transition: 'border-color 0.15s',
                  }}
                />
              ))}
            </div>
            {'video' in product && product.video ? (
              <div style={{ marginTop: 28 }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: '#111',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: 12,
                  }}
                >
                  {g.video3dHeading}
                </div>
                <video
                  controls
                  playsInline
                  preload="metadata"
                  style={{
                    width: '100%',
                    aspectRatio: '16/9',
                    background: '#111',
                    display: 'block',
                  }}
                  aria-label={`${product.name} — ${g.video3dHeading}`}
                >
                  <source src={product.video} type="video/mp4" />
                </video>
              </div>
            ) : null}
          </div>

          <div>
            <Eyebrow>{c.site.name}</Eyebrow>
            <h1
              style={{
                fontSize: 'clamp(24px, 3.5vw, 36px)',
                fontWeight: 900,
                margin: '0 0 8px',
                letterSpacing: '-0.02em',
              }}
            >
              {product.name}
            </h1>
            <p
              style={{
                fontSize: 14,
                color: ACCENT,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                margin: '0 0 16px',
              }}
            >
              {product.tagline}
            </p>
            <div style={{ width: 40, height: 3, background: ACCENT, marginBottom: 20 }} />
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.75, marginBottom: 28 }}>
              {product.desc}
            </p>

            <div style={{ marginBottom: 28 }}>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: '#111',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: 12,
                }}
              >
                {g.technicalData}
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <tbody>
                  {product.techRows.map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#f8f8f8' : '#fff' }}>
                      <td
                        style={{
                          padding: '10px 14px',
                          color: '#666',
                          borderBottom: '1px solid #eee',
                          width: '45%',
                        }}
                      >
                        {row.label}
                      </td>
                      <td
                        style={{
                          padding: '10px 14px',
                          fontWeight: 700,
                          color: '#111',
                          borderBottom: '1px solid #eee',
                        }}
                      >
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
              <button
                onClick={() => openContact(product.name)}
                onMouseEnter={(e) => (e.currentTarget.style.background = ACCENT_HOVER)}
                onMouseLeave={(e) => (e.currentTarget.style.background = ACCENT)}
                style={{
                  background: ACCENT,
                  color: '#fff',
                  border: 'none',
                  padding: '13px 28px',
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: 'pointer',
                  letterSpacing: '0.02em',
                  fontFamily: 'inherit',
                }}
              >
                {g.requestQuote}
              </button>
            </div>
          </div>
        </div>
      </section>

      {product.advantages.length > 0 && (
        <section style={{ background: '#f8f8f8', padding: '56px 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, margin: '0 0 28px', color: '#111' }}>
              {g.advantagesHeading}
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 12,
              }}
            >
              {product.advantages.map((adv, i) => (
                <div
                  key={i}
                  style={{
                    background: '#fff',
                    padding: '14px 18px',
                    borderLeft: `3px solid ${ACCENT}`,
                    fontSize: 14,
                    color: '#333',
                    fontWeight: 500,
                  }}
                >
                  {adv}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {product.adapters.length > 0 && (
        <section style={{ background: '#fff', padding: '56px 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, margin: '0 0 28px', color: '#111' }}>
              {g.compatibleHeading}
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: 16,
              }}
            >
              {product.adapters.map((ad, i) => (
                <div key={i} style={{ border: '1px solid #e8e8e8', padding: '16px 18px' }}>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 800,
                      color: '#111',
                      marginBottom: 8,
                      borderBottom: `2px solid ${ACCENT}`,
                      paddingBottom: 6,
                    }}
                  >
                    {ad.brand}
                  </div>
                  {ad.models.map((m, j) => (
                    <div
                      key={j}
                      style={{ fontSize: 13, color: '#555', padding: '3px 0' }}
                    >
                      · {m}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section style={{ background: '#f8f8f8', padding: '56px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 28,
              flexWrap: 'wrap',
              gap: 12,
            }}
          >
            <h2 style={{ fontSize: 20, fontWeight: 800, margin: 0 }}>{g.otherProducts}</h2>
            <button
              onClick={onBack}
              style={{
                background: '#111',
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                fontSize: 13,
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              ← {g.backAll}
            </button>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 16,
            }}
          >
            {otherProducts.map((p) => (
              <div
                key={p.id}
                onClick={() => {
                  onSelectProduct(p)
                  window.scrollTo(0, 0)
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)')
                }
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
                style={{
                  background: '#fff',
                  border: '1px solid #e8e8e8',
                  padding: 0,
                  cursor: 'pointer',
                  display: 'flex',
                  gap: 0,
                  transition: 'box-shadow 0.2s',
                }}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  style={{ width: 120, objectFit: 'cover', flexShrink: 0 }}
                />
                <div style={{ padding: '16px' }}>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 800,
                      color: '#111',
                      marginBottom: 4,
                    }}
                  >
                    {p.name}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: ACCENT,
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {p.tagline}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string
  title: string
  intro: string
}) {
  return (
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
          {eyebrow}
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
          {title}
        </h1>
        <p
          style={{
            fontSize: 16,
            color: 'rgba(255,255,255,0.65)',
            margin: 0,
            maxWidth: 680,
            lineHeight: 1.7,
          }}
        >
          {intro}
        </p>
      </div>
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
