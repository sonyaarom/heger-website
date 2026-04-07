'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Menu,
  X,
  Globe,
  Compass,
  Wrench,
  ShoppingBag,
  ChevronRight,
  Phone,
  Mail,
  Crosshair,
  Settings2,
  Maximize,
  Ruler,
  Target,
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

const navItems = navMain.slice(0, 4).map((n) => ({ label: n.label, href: n.href }))
const statsStrip = conceptStatsFour()
const productSpecs = gyro.techDataRows.map((row, i) => ({
  label: row.label,
  value: row.value,
  Icon: [Target, Settings2, Maximize, Ruler, Crosshair][i] ?? Target,
}))

export default function BlueprintConceptHome() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm border-slate-200 py-4'
            : 'bg-white border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <Compass size={28} className="text-blue-600" strokeWidth={1.5} />
              <span className="text-lg font-bold tracking-widest uppercase text-slate-900">
                {site.name}
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-12">
              {navItems.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors"
                >
                  <span className="font-mono text-[9px] text-slate-300 group-hover:text-blue-500 transition-colors">
                    0{i + 1}
                  </span>
                  {item.label}
                </Link>
              ))}

              <div className="flex items-center gap-6 pl-6 border-l border-slate-200">
                <Link
                  href="/"
                  className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors"
                  title="Zur Standard-Website"
                >
                  <Globe size={14} />
                  DE
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-2 text-xs font-bold uppercase tracking-widest bg-slate-900 text-white hover:bg-blue-600 transition-colors"
                >
                  Kontakt
                </Link>
              </div>
            </div>

            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-900"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm font-bold uppercase tracking-widest text-slate-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block pt-2 text-sm font-bold uppercase tracking-widest text-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontakt
            </Link>
          </div>
        )}
      </nav>

      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 bg-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:items-center justify-between">
            <div className="max-w-2xl">
              <div className="font-mono text-blue-600 text-[10px] tracking-[0.2em] mb-8 flex items-center gap-4 uppercase">
                <div className="w-8 h-[1px] bg-blue-600" />
                {hero.subtitle}
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.05]">
                {hero.title}
              </h1>

              <p className="text-lg text-slate-600 max-w-xl leading-relaxed mb-12">
                {hero.description}
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <Link
                  href="/gyroscopes"
                  className="px-8 py-4 bg-blue-600 text-white font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-colors flex items-center gap-3"
                >
                  {homeSections[0].linkText}
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-transparent border border-slate-300 text-slate-900 font-bold text-xs uppercase tracking-widest hover:border-slate-900 transition-colors"
                >
                  Kontakt
                </Link>
              </div>
            </div>

            <div className="relative w-full max-w-md mx-auto lg:mx-0 aspect-square flex items-center justify-center pointer-events-none">
              <div className="absolute inset-0 flex items-center justify-center opacity-80">
                <div className="w-full h-full rounded-full border border-slate-300 relative">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-slate-400" />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-slate-400" />
                  <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-[1px] bg-slate-400" />
                  <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-[1px] bg-slate-400" />
                </div>
                <div className="absolute w-[70%] h-[70%] rounded-full border border-blue-200" />
                <div className="absolute w-[40%] h-[40%] rounded-full border-2 border-blue-600 flex items-center justify-center">
                  <Crosshair
                    className="text-blue-600 opacity-50"
                    size={32}
                    strokeWidth={1}
                  />
                </div>
                <div className="absolute w-full h-[1px] bg-slate-200" />
                <div className="absolute h-full w-[1px] bg-slate-200" />
              </div>

              <div className="absolute top-10 right-10 bg-white border border-slate-200 px-3 py-1.5 font-mono text-[9px] tracking-widest text-slate-500 shadow-sm">
                AZ: 184.234°
              </div>
              <div className="absolute bottom-16 left-4 bg-white border border-slate-200 px-3 py-1.5 font-mono text-[9px] tracking-widest text-slate-500 shadow-sm">
                ACCURACY {'<'} 6 mgon
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
            {statsStrip.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-mono text-[10px] text-slate-400 tracking-widest uppercase mb-2">
                  {stat.label}
                </span>
                <span className="text-2xl font-bold text-slate-900 mb-1 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-500">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                {hero.title}
              </h2>
              <p className="text-lg text-slate-600 max-w-xl">{gyro.intro}</p>
            </div>
            <div className="font-mono text-[10px] tracking-widest text-slate-400 border border-slate-200 px-3 py-1">
              PORTFOLIO // 01
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 group bg-slate-50 border border-slate-200 p-8 md:p-12 flex flex-col justify-between hover:border-blue-600 transition-colors">
              <div className="flex justify-between items-start mb-16">
                <div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center text-blue-600 shadow-sm">
                  <Ruler size={24} strokeWidth={1.5} />
                </div>
                <span className="font-mono text-[10px] tracking-widest text-slate-400">
                  01
                </span>
              </div>

              <div className="max-w-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                  {homeSections[0].title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-10">
                  {homeSections[0].description}
                </p>
                <Link
                  href="/gyroscopes"
                  className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-blue-600 hover:text-slate-900 transition-colors"
                >
                  {homeSections[0].linkText}{' '}
                  <ArrowRight
                    size={14}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="flex-1 bg-white border border-slate-200 p-8 flex flex-col justify-between group hover:border-slate-900 transition-colors">
                <div className="flex justify-between items-start mb-8">
                  <Wrench size={24} className="text-slate-700" strokeWidth={1.5} />
                  <span className="font-mono text-[10px] tracking-widest text-slate-400">
                    02
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                    {homeSections[1].title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-8">
                    {homeSections[1].description}
                  </p>
                  <Link
                    href="/repair"
                    className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-900 group-hover:text-blue-600 transition-colors"
                  >
                    {homeSections[1].linkText}{' '}
                    <ChevronRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>

              <div className="flex-1 bg-slate-900 text-white border border-slate-900 p-8 flex flex-col justify-between group hover:bg-slate-800 transition-colors">
                <div className="flex justify-between items-start mb-8">
                  <ShoppingBag
                    size={24}
                    className="text-slate-300"
                    strokeWidth={1.5}
                  />
                  <span className="font-mono text-[10px] tracking-widest text-slate-500 border border-slate-700 px-2 py-0.5">
                    ANKAUF
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {homeSections[2].title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    {homeSections[2].description}
                  </p>
                  <Link
                    href="/purchase"
                    className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-blue-400 group-hover:text-white transition-colors"
                  >
                    {homeSections[2].linkText}{' '}
                    <ChevronRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-950 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="font-mono text-[10px] text-blue-500 tracking-widest mb-6 uppercase border border-blue-500/30 inline-block px-3 py-1">
                {featured.title}
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-white">
                {featured.subtitle}
              </h2>

              <p className="text-lg text-slate-400 mb-12 leading-relaxed font-light">
                {featured.description} {gyromaxBodyLead()}
              </p>

              <div className="border-t border-slate-800">
                {productSpecs.map((spec) => {
                  const SpecIcon = spec.Icon
                  return (
                    <div
                      key={spec.label}
                      className="flex items-center justify-between py-5 border-b border-slate-800"
                    >
                      <div className="flex items-center gap-4 text-slate-400">
                        <span className="text-slate-600">
                          <SpecIcon size={16} />
                        </span>
                        <span className="text-sm">{spec.label}</span>
                      </div>
                      <span className="text-sm font-medium text-white">
                        {spec.value}
                      </span>
                    </div>
                  )
                })}
              </div>

              <div className="mt-12">
                <Link
                  href="/gyroscopes"
                  className="inline-block px-8 py-4 bg-white text-slate-900 font-bold text-xs uppercase tracking-widest hover:bg-slate-200 transition-colors"
                >
                  {gyro.techDataHeading}
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] bg-slate-900 border border-slate-800 p-8 flex items-center justify-center">
              <div className="absolute top-4 left-4 font-mono text-[9px] text-slate-600">
                FIG. 1
              </div>
              <div className="absolute bottom-4 right-4 font-mono text-[9px] text-slate-600">
                SCALE 1:4
              </div>

              <div className="relative w-64 h-80 flex flex-col items-center">
                <div className="w-16 h-32 border-2 border-slate-600 rounded-t-sm relative">
                  <div className="absolute top-4 left-0 right-0 border-t border-slate-700" />
                  <div className="absolute top-8 left-0 right-0 border-t border-slate-700" />
                </div>
                <div className="w-32 h-40 border-2 border-slate-500 mt-2 relative flex items-center justify-center">
                  <div className="absolute -left-4 top-8 w-4 h-12 border-2 border-r-0 border-slate-600" />
                  <div className="w-12 h-12 border border-blue-500/50 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  </div>
                </div>
                <div className="w-40 h-8 border-2 border-slate-600 mt-2 rounded-b-sm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white text-slate-600 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-4">
              <Link href="/" className="flex items-center gap-2 mb-6 text-slate-900">
                <Compass size={24} strokeWidth={1.5} className="text-blue-600" />
                <span className="text-base font-bold tracking-widest uppercase">
                  {site.name}
                </span>
              </Link>
              <p className="text-sm leading-relaxed mb-6">{site.description}</p>
              <p className="text-xs font-mono text-slate-400">
                <span className="text-slate-500">Konzept-Vorschau</span>
                {' · '}
                <Link href="/" className="hover:text-blue-600 transition-colors">
                  Standard-Startseite
                </Link>
                {' · '}
                <Link
                  href="/concept-industrial"
                  className="hover:text-blue-600 transition-colors"
                >
                  Industrial-Konzept
                </Link>
                {' · '}
                <Link
                  href="/concept-brutalist"
                  className="hover:text-blue-600 transition-colors"
                >
                  Brutalist-Konzept
                </Link>
                {' · '}
                <Link
                  href="/concept-institutional"
                  className="hover:text-blue-600 transition-colors"
                >
                  Institutional-Konzept
                </Link>
                {' · '}
                <Link
                  href="/concept-investor"
                  className="hover:text-blue-600 transition-colors"
                >
                  Investor-Konzept
                </Link>
              </p>
            </div>

            <div className="md:col-span-2 md:col-start-7">
              <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-widest text-[10px]">
                Menü
              </h4>
              <ul className="space-y-4 text-sm">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-widest text-[10px]">
                Kontakt
              </h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-slate-400 shrink-0" />
                  <a href="tel:+493955826680" className="hover:text-blue-600">
                    {site.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-slate-400 shrink-0" />
                  <a
                    href={`mailto:${site.email}`}
                    className="hover:text-blue-600"
                  >
                    {site.email}
                  </a>
                </li>
                <li className="flex items-start gap-3 mt-4 text-slate-500">
                  <span className="block mt-1 w-4 h-[1px] bg-slate-300 shrink-0" />
                  <span>
                    Mühlenstraße 9
                    <br />
                    17039 Wulkenzin
                    <br />
                    Deutschland
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500">
              © {new Date().getFullYear()} GeoMessTechnik Heger. Alle Rechte
              vorbehalten.
            </p>
            <div className="flex gap-8">
              <Link
                href="/imprint"
                className="hover:text-slate-900 transition-colors uppercase tracking-widest"
              >
                Impressum
              </Link>
              <Link
                href="/privacy"
                className="hover:text-slate-900 transition-colors uppercase tracking-widest"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
