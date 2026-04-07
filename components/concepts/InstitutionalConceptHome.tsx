'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Menu,
  X,
  Globe,
  ChevronRight,
  Search,
  Compass,
  Settings,
  BookOpen,
  ArrowRight,
} from 'lucide-react'

import {
  conceptStatsFour,
  featured,
  gyromaxBodyLead,
  gyro,
  hero,
  homeSections,
  navMain,
  site,
} from '@/lib/siteCopyDe'

const brandRed = 'bg-[#c8102e]'
const textRed = 'text-[#c8102e]'

const mainNav = navMain.map((n) => ({ label: n.label, href: n.href }))
const facts = conceptStatsFour().map((s) => ({
  num: s.value,
  unit: '',
  text: s.label,
}))

export default function InstitutionalConceptHome() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <div className="bg-slate-100 border-b border-slate-200 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end space-x-6 h-10 items-center text-sm text-slate-600">
            <Link href="/imprint" className="hover:text-slate-900 transition-colors">
              Unternehmen
            </Link>
            <Link href="/contact" className="hover:text-slate-900 transition-colors">
              Karriere
            </Link>
            <Link href="/contact" className="hover:text-slate-900 transition-colors">
              Kontakt
            </Link>
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-slate-900 pl-4 border-l border-slate-300 transition-colors"
              title="Zur Standard-Website"
            >
              <Globe size={14} /> DE
            </Link>
          </div>
        </div>
      </div>

      <nav
        className={`sticky top-0 z-50 bg-white transition-all duration-300 border-t-4 border-[#c8102e] ${
          isScrolled ? 'shadow-md py-2' : 'py-4 border-b border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-4">
              <div
                className={`flex items-center justify-center ${brandRed} text-white w-12 h-12 shrink-0`}
              >
                <Compass size={28} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">
                  {site.name.split(' ').slice(0, -1).join(' ')}
                </span>
                <span className="text-xl font-light tracking-tight text-slate-600 leading-tight">
                  {site.name.split(' ').slice(-1)[0]}
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base font-semibold text-slate-800 hover:text-[#c8102e] transition-colors relative group py-2"
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 ${brandRed} transition-all group-hover:w-full`}
                  />
                </Link>
              ))}
              <Link
                href="/gyroscopes"
                className="p-2 text-slate-600 hover:text-[#c8102e] transition-colors"
                aria-label="Produkte durchsuchen"
              >
                <Search size={20} />
              </Link>
            </div>

            <div className="lg:hidden flex items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-900 p-2"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-1">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 text-base font-semibold text-slate-800 border-b border-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/gyroscopes"
              className="flex items-center gap-2 py-3 text-base font-semibold text-[#c8102e]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Search size={20} /> Suche / Produkte
            </Link>
          </div>
        )}
      </nav>

      <section className="relative bg-slate-50 pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="relative w-full h-[500px] md:h-[600px] bg-slate-200 flex items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
            <div className="text-slate-400 font-medium tracking-widest text-sm uppercase">
              [ Hero Image / Product Visual ]
            </div>
          </div>

          <div className="relative md:absolute md:bottom-12 md:left-12 lg:left-16 bg-white p-8 md:p-12 shadow-xl md:max-w-2xl border-t-4 border-[#c8102e] -mt-20 mx-4 md:mx-0 md:mt-0 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              {hero.title}
            </h1>
            <p className="text-base font-semibold text-slate-500 mb-4">{hero.subtitle}</p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">{hero.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/gyroscopes"
                className={`px-6 py-3 ${brandRed} text-white font-semibold flex items-center justify-center gap-2 hover:bg-red-800 transition-colors`}
              >
                {homeSections[0].linkText} <ChevronRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-slate-100 text-slate-900 font-semibold hover:bg-slate-200 transition-colors text-center"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-200">
            {facts.map((fact, idx) => (
              <div
                key={fact.text}
                className="p-8 lg:p-10 text-center flex flex-col items-center justify-center group hover:bg-slate-50 transition-colors cursor-default"
              >
                <div
                  className={`text-4xl lg:text-5xl font-bold ${textRed} mb-2 tracking-tight group-hover:scale-105 transition-transform`}
                >
                  {fact.num}
                  <span className="text-2xl lg:text-3xl ml-1">{fact.unit}</span>
                </div>
                <div className="text-slate-600 font-medium text-sm uppercase tracking-wider">
                  {fact.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                {gyro.sections[0].heading}
              </h2>
              <div className={`w-20 h-1 ${brandRed} mb-6`} />
              <p className="text-lg text-slate-600">{gyro.sections[0].body}</p>
            </div>
            <Link
              href="/gyroscopes"
              className={`hidden md:flex items-center font-semibold ${textRed} hover:text-red-900 transition-colors`}
            >
              {homeSections[0].linkText} <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 flex flex-col group hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-slate-200 flex items-center justify-center relative overflow-hidden">
                <Compass size={48} className="text-slate-400" strokeWidth={1} />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors" />
              </div>
              <div className="p-8 flex flex-col flex-1 relative">
                <div
                  className={`absolute top-0 left-0 w-full h-1 ${brandRed} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300`}
                />
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {homeSections[0].title}
                </h3>
                <p className="text-slate-600 mb-6 flex-1">{homeSections[0].description}</p>
                <Link
                  href="/gyroscopes"
                  className={`inline-flex items-center font-bold ${textRed} group-hover:text-red-800`}
                >
                  {homeSections[0].linkText}{' '}
                  <ChevronRight
                    size={16}
                    className="ml-1 group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-slate-200 flex flex-col group hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-slate-200 flex items-center justify-center relative overflow-hidden">
                <Settings size={48} className="text-slate-400" strokeWidth={1} />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors" />
              </div>
              <div className="p-8 flex flex-col flex-1 relative">
                <div
                  className={`absolute top-0 left-0 w-full h-1 ${brandRed} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300`}
                />
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {homeSections[1].title}
                </h3>
                <p className="text-slate-600 mb-6 flex-1">{homeSections[1].description}</p>
                <Link
                  href="/repair"
                  className={`inline-flex items-center font-bold ${textRed} group-hover:text-red-800`}
                >
                  {homeSections[1].linkText}{' '}
                  <ChevronRight
                    size={16}
                    className="ml-1 group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-slate-200 flex flex-col group hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-slate-200 flex items-center justify-center relative overflow-hidden">
                <BookOpen size={48} className="text-slate-400" strokeWidth={1} />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors" />
              </div>
              <div className="p-8 flex flex-col flex-1 relative">
                <div
                  className={`absolute top-0 left-0 w-full h-1 ${brandRed} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300`}
                />
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {homeSections[2].title}
                </h3>
                <p className="text-slate-600 mb-6 flex-1">{homeSections[2].description}</p>
                <Link
                  href="/purchase"
                  className={`inline-flex items-center font-bold ${textRed} group-hover:text-red-800`}
                >
                  {homeSections[2].linkText}{' '}
                  <ChevronRight
                    size={16}
                    className="ml-1 group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 md:hidden">
            <Link
              href="/gyroscopes"
              className={`flex items-center font-semibold ${textRed} hover:text-red-900 transition-colors`}
            >
              {homeSections[0].linkText} <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className={`${brandRed} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] bg-red-900/40 border-2 border-white/20 p-8 flex flex-col justify-between shadow-2xl relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 border-t-4 border-l-4 border-white" />
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-4 border-r-4 border-white" />

                <div className="font-mono text-xs uppercase tracking-widest text-white/70">
                  {gyro.techDataProduct}
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-48 h-48 border border-white/30 rounded-full flex items-center justify-center relative">
                    <div className="w-32 h-32 border border-white/50 border-dashed rounded-full animate-[spin_60s_linear_infinite]" />
                    <Compass size={32} className="absolute text-white/80" />
                  </div>
                </div>
                <div className="font-mono text-xs uppercase tracking-widest text-white/70 text-right">
                  FIG. 01
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                {featured.subtitle}
              </h2>
              <div className="w-16 h-1 bg-white/40 mb-8" />

              <p className="text-xl text-white/90 leading-relaxed mb-10 font-light">
                {featured.description} {gyromaxBodyLead()}
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {gyro.techDataRows.slice(0, 4).map((row) => (
                  <div
                    key={row.label}
                    className="bg-red-800/40 p-6 border border-white/10"
                  >
                    <div className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-2">
                      {row.label}
                    </div>
                    <div className="text-2xl font-bold leading-snug">{row.value}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/gyroscopes"
                className="inline-flex px-8 py-4 bg-white text-[#c8102e] font-bold uppercase tracking-wider text-sm hover:bg-slate-100 transition-colors items-center gap-3"
              >
                {gyro.techDataHeading} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <Compass size={28} className="text-white shrink-0" />
                <span className="text-xl font-bold tracking-tight leading-none">
                  GMT
                  <br />
                  Heger
                </span>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Entwicklung, Fertigung und Service von Präzisions-Vermessungskreiseln
                seit über 30 Jahren.
              </p>
              <p className="text-slate-500 text-xs leading-relaxed">
                <span>Konzept-Vorschau</span>
                {' · '}
                <Link href="/" className="hover:text-white transition-colors">
                  Standard-Startseite
                </Link>
                {' · '}
                <Link
                  href="/concept-blueprint"
                  className="hover:text-white transition-colors"
                >
                  Blueprint
                </Link>
                {' · '}
                <Link
                  href="/concept-industrial"
                  className="hover:text-white transition-colors"
                >
                  Industrial
                </Link>
                {' · '}
                <Link
                  href="/concept-brutalist"
                  className="hover:text-white transition-colors"
                >
                  Brutalist
                </Link>
                {' · '}
                <Link
                  href="/concept-investor"
                  className="hover:text-white transition-colors"
                >
                  Investor
                </Link>
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-slate-700">
                Schnellzugriff
              </h4>
              <ul className="space-y-3 text-slate-300">
                <li>
                  <Link
                    href="/gyroscopes"
                    className="hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight size={14} className="mr-2 opacity-50 shrink-0" />{' '}
                    Produkte
                  </Link>
                </li>
                <li>
                  <Link
                    href="/repair"
                    className="hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight size={14} className="mr-2 opacity-50 shrink-0" />{' '}
                    Service & Reparatur
                  </Link>
                </li>
                <li>
                  <Link
                    href="/purchase"
                    className="hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight size={14} className="mr-2 opacity-50 shrink-0" />{' '}
                    Ankauf historischer Geräte
                  </Link>
                </li>
                <li>
                  <Link
                    href="/imprint"
                    className="hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight size={14} className="mr-2 opacity-50 shrink-0" />{' '}
                    Unternehmen
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-slate-700">
                Kontakt
              </h4>
              <ul className="space-y-3 text-slate-300">
                <li>
                  <a
                    href="tel:+493955826680"
                    className="hover:text-white transition-colors block"
                  >
                    <span className="block text-xs text-slate-500 uppercase tracking-wider mb-1">
                      Telefon
                    </span>
                    +49 395 582 668 0
                  </a>
                </li>
                <li className="pt-3">
                  <a
                    href="mailto:info@gmt-heger.com"
                    className="hover:text-white transition-colors block"
                  >
                    <span className="block text-xs text-slate-500 uppercase tracking-wider mb-1">
                      E-Mail
                    </span>
                    info@gmt-heger.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-slate-700">
                Adresse
              </h4>
              <address className="not-italic text-slate-300 text-sm leading-relaxed">
                GeoMessTechnik Heger
                <br />
                Mühlenstraße 9
                <br />
                17039 Wulkenzin
                <br />
                Deutschland
              </address>
            </div>
          </div>
        </div>

        <div className="bg-slate-950 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <div>
              © {new Date().getFullYear()} GeoMessTechnik Heger. Alle Rechte
              vorbehalten.
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/imprint" className="hover:text-white transition-colors">
                Impressum
              </Link>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Datenschutz
              </Link>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
                title="AGB anfragen"
              >
                AGB
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
