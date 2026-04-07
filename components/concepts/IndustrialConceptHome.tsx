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
  Target,
  Crosshair,
  Settings2,
  Maximize,
} from 'lucide-react'
import {
  featured,
  gyro,
  gyromaxBodyLead,
  hero,
  homeSections,
  navMain,
  site,
} from '@/lib/siteCopyDe'

const navItems = [
  { label: 'Startseite', href: '/' },
  { label: 'Kreisel', href: '/gyroscopes' },
  { label: 'Reparatur', href: '/repair' },
  { label: 'Ankauf', href: '/purchase' },
] as const

export default function IndustrialConceptHome() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinkClass = `text-xs font-bold uppercase tracking-widest transition-colors hover:text-blue-500 flex gap-2 items-center ${
    isScrolled ? 'text-slate-600' : 'text-slate-300'
  }`

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-slate-900 selection:bg-blue-900 selection:text-white">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border-slate-200 py-3'
            : 'bg-transparent border-slate-800/20 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <div
                className={`relative flex items-center justify-center w-10 h-10 border-2 ${
                  isScrolled ? 'border-blue-600 text-blue-600' : 'border-white text-white'
                }`}
              >
                <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-current" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-current" />
                <Compass size={20} strokeWidth={2} />
              </div>
              <span
                className={`text-lg font-bold tracking-widest uppercase ${
                  isScrolled ? 'text-slate-900' : 'text-white'
                }`}
              >
                GMT Heger
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-10">
              {navItems.map((item, i) => (
                <Link key={item.href} href={item.href} className={navLinkClass}>
                  <span className="font-mono text-[10px] opacity-50">0{i + 1}</span>
                  {item.label}
                </Link>
              ))}

              <div className="flex items-center gap-6 border-l border-slate-500/30 pl-6">
                <Link
                  href="/"
                  className={`flex items-center gap-1 text-xs font-bold uppercase tracking-widest transition-colors hover:text-blue-500 ${
                    isScrolled ? 'text-slate-600' : 'text-slate-300'
                  }`}
                  title="Zur Standard-Website"
                >
                  <Globe size={14} />
                  DE
                </Link>
                <Link
                  href="/contact"
                  className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest border transition-all ${
                    isScrolled
                      ? 'border-slate-900 bg-slate-900 text-white hover:bg-blue-600 hover:border-blue-600'
                      : 'border-white bg-white text-slate-900 hover:bg-blue-500 hover:border-blue-500 hover:text-white'
                  }`}
                >
                  Kontakt
                </Link>
              </div>
            </div>

            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 ${isScrolled ? 'text-slate-900' : 'text-white'}`}
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            className={`md:hidden border-t px-4 py-4 space-y-3 ${
              isScrolled
                ? 'border-slate-200 bg-white'
                : 'border-slate-800 bg-[#0a0f16]'
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block text-sm font-bold uppercase tracking-widest ${
                  isScrolled ? 'text-slate-700' : 'text-slate-200'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block pt-2 text-sm font-bold uppercase tracking-widest text-blue-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontakt
            </Link>
          </div>
        )}
      </nav>

      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#0a0f16] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-slate-800 rounded-full flex items-center justify-center opacity-50">
          <div className="w-[600px] h-[600px] border border-slate-700 border-dashed rounded-full animate-[spin_120s_linear_infinite]" />
          <div className="absolute w-[400px] h-[400px] border border-blue-900/30 rounded-full" />
        </div>

        <div className="absolute inset-4 sm:inset-8 border border-slate-800 pointer-events-none z-10">
          <div className="absolute -top-[1px] -left-[1px] w-8 h-8 border-t-2 border-l-2 border-blue-500" />
          <div className="absolute -top-[1px] -right-[1px] w-8 h-8 border-t-2 border-r-2 border-blue-500" />
          <div className="absolute -bottom-[1px] -left-[1px] w-8 h-8 border-b-2 border-l-2 border-blue-500" />
          <div className="absolute -bottom-[1px] -right-[1px] w-8 h-8 border-b-2 border-r-2 border-blue-500" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 z-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:items-end justify-between">
            <div className="max-w-3xl">
              <div className="font-mono text-blue-500 text-xs tracking-[0.2em] mb-6 flex items-center gap-4">
                <Target size={14} />
                SYS.RDY // EST. 1990
                <span className="flex-1 h-[1px] bg-slate-800 ml-4 hidden sm:block" />
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
                PRÄZISIONS-
                <br />
                <span className="text-blue-500">VERMESSUNGS</span>
                <br />
                KREISEL
              </h1>

              <p className="text-lg text-slate-400 max-w-xl leading-relaxed mb-10 border-l-2 border-slate-800 pl-6">
                Spezialausrüstung für Tunnelvortriebe, Bergbau, Ausbildung und
                Militär. Kompatibel mit branchenführenden Theodoliten und
                Tachymetern.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/gyroscopes"
                  className="px-8 py-4 bg-blue-600 text-white font-bold text-sm uppercase tracking-widest hover:bg-blue-500 transition-colors flex items-center gap-3 group"
                >
                  Systeme ansehen
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <div className="font-mono text-slate-500 text-xs hidden sm:block max-w-xs">
                  {site.description}
                </div>
              </div>
            </div>

            <div className="bg-slate-900/80 backdrop-blur border border-slate-800 p-6 flex flex-col gap-6 lg:w-72 self-end">
              <div>
                <p className="font-mono text-[10px] text-slate-500 tracking-widest mb-1">
                  {gyro.techDataRows[0].label.toUpperCase()}
                </p>
                <p className="text-2xl font-bold text-white">
                  {gyro.techDataRows[0].value}
                </p>
              </div>
              <div className="h-[1px] bg-slate-800 w-full" />
              <div>
                <p className="font-mono text-[10px] text-slate-500 tracking-widest mb-1">
                  {gyro.techDataRows[1].label.toUpperCase()}
                </p>
                <p className="text-2xl font-bold text-white">
                  {gyro.techDataRows[1].value}
                </p>
              </div>
              <div className="h-[1px] bg-slate-800 w-full" />
              <div>
                <p className="font-mono text-[10px] text-slate-500 tracking-widest mb-1">
                  {gyro.techDataRows[4].label.toUpperCase()}
                </p>
                <p className="text-lg font-bold text-white tracking-wide leading-snug">
                  {gyro.techDataRows[4].value}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight uppercase">
              {hero.title}
            </h2>
            <div className="flex-1 h-[1px] bg-slate-200" />
            <div className="font-mono text-xs text-slate-400">SEC-01</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 group relative bg-white border border-slate-200 overflow-hidden flex flex-col md:flex-row">
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-500 z-10" />

              <div className="p-8 md:p-12 z-10 md:w-3/5 flex flex-col justify-center bg-white relative">
                <div className="font-mono text-blue-600 text-[10px] tracking-widest mb-4">
                  01 // PRODUKTION & ENTWICKLUNG
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4 uppercase tracking-tight">
                  {homeSections[0].title}
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {homeSections[0].description}
                </p>
                <Link
                  href="/gyroscopes"
                  className="inline-flex items-center font-bold text-xs uppercase tracking-widest text-slate-900 hover:text-blue-600 transition-colors mt-auto w-fit border-b border-slate-900 hover:border-blue-600 pb-1"
                >
                  {homeSections[0].linkText}
                  <ArrowRight
                    size={14}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>

              <div className="md:w-2/5 bg-slate-50 border-l border-slate-100 relative min-h-[250px] overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:1rem_1rem]" />
                <div className="relative z-10 flex items-center justify-center w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-700">
                  <div className="w-32 h-32 rounded-full border-2 border-blue-600/30 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full border border-slate-400 border-dashed flex items-center justify-center">
                      <Compass size={40} className="text-blue-600" strokeWidth={1} />
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-4 right-4 h-[1px] bg-blue-600/20 -translate-y-1/2" />
                  <div className="absolute left-1/2 top-4 bottom-4 w-[1px] bg-blue-600/20 -translate-x-1/2" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="flex-1 bg-slate-900 text-white p-8 relative group overflow-hidden border border-slate-800">
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-600 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />

                <div className="flex justify-between items-start mb-12">
                  <Wrench size={28} className="text-blue-500" strokeWidth={1.5} />
                  <div className="font-mono text-[10px] tracking-widest text-slate-500 border border-slate-700 px-2 py-1">
                    SERVICE
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">
                  {homeSections[1].title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  {homeSections[1].description}
                </p>

                <Link
                  href="/repair"
                  className="inline-flex items-center font-bold text-xs uppercase tracking-widest text-blue-500 hover:text-white transition-colors mt-auto"
                >
                  {homeSections[1].linkText}
                  <ChevronRight size={14} className="ml-1" />
                </Link>
              </div>

              <div className="flex-1 bg-white border border-slate-200 p-8 relative group">
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-slate-900 z-10 group-hover:border-blue-600 transition-colors" />

                <div className="flex justify-between items-start mb-12">
                  <ShoppingBag size={28} className="text-slate-900" strokeWidth={1.5} />
                  <div className="font-mono text-[10px] tracking-widest text-slate-400 border border-slate-200 px-2 py-1 bg-slate-50">
                    ANKAUF
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tight">
                  {homeSections[2].title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  {homeSections[2].description}
                </p>

                <Link
                  href="/purchase"
                  className="inline-flex items-center font-bold text-xs uppercase tracking-widest text-slate-900 hover:text-blue-600 transition-colors mt-auto"
                >
                  {homeSections[2].linkText}
                  <ChevronRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-20 lg:opacity-40 overflow-hidden">
          <div className="absolute right-[-200px] top-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-blue-500/30 flex items-center justify-center">
            <div className="w-[600px] h-[600px] rounded-full border border-cyan-400/20 border-dashed" />
            <div className="absolute w-[400px] h-[400px] rounded-full border border-blue-500/40 flex items-center justify-center">
              <div className="w-full h-[1px] bg-blue-500/50 absolute" />
              <div className="h-full w-[1px] bg-blue-500/50 absolute" />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-slate-800 hidden lg:block">
                <div className="absolute top-0 left-[-3px] w-[7px] h-[1px] bg-blue-500" />
                <div className="absolute bottom-0 left-[-3px] w-[7px] h-[1px] bg-blue-500" />
              </div>

              <div className="font-mono text-blue-500 text-xs tracking-widest mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 animate-pulse" />
                {featured.title}
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight uppercase">
                {featured.subtitle}
              </h2>

              <p className="text-lg text-slate-300 mb-10 leading-relaxed font-light">
                {featured.description} {gyromaxBodyLead()}
              </p>

              <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-12 font-mono text-sm border-t border-slate-800 pt-8">
                <div>
                  <div className="text-slate-500 text-[10px] mb-1">
                    {gyro.techDataRows[0].label.toUpperCase()}
                  </div>
                  <div className="text-white flex items-center gap-2">
                    <Crosshair size={14} className="text-cyan-400 shrink-0" />{' '}
                    {gyro.techDataRows[0].value}
                  </div>
                </div>
                <div>
                  <div className="text-slate-500 text-[10px] mb-1">
                    {gyro.techDataRows[1].label.toUpperCase()}
                  </div>
                  <div className="text-white flex items-center gap-2">
                    <Settings2 size={14} className="text-cyan-400 shrink-0" />{' '}
                    {gyro.techDataRows[1].value}
                  </div>
                </div>
                <div>
                  <div className="text-slate-500 text-[10px] mb-1">
                    {gyro.techDataRows[2].label.toUpperCase()}
                  </div>
                  <div className="text-white flex items-center gap-2">
                    <Maximize size={14} className="text-cyan-400 shrink-0" />{' '}
                    {gyro.techDataRows[2].value}
                  </div>
                </div>
                <div>
                  <div className="text-slate-500 text-[10px] mb-1">
                    {gyro.techDataRows[4].label.toUpperCase()}
                  </div>
                  <div className="text-white flex items-center gap-2">
                    <Crosshair size={14} className="text-cyan-400 shrink-0" />{' '}
                    {gyro.techDataRows[4].value}
                  </div>
                </div>
              </div>

              <Link
                href="/gyroscopes"
                className="inline-block px-8 py-4 bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white font-bold text-xs uppercase tracking-widest transition-all text-center"
              >
                Technische Daten öffnen
              </Link>
            </div>

            <div className="hidden lg:block" aria-hidden />
          </div>
        </div>
      </section>

      <footer className="bg-white text-slate-600 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-8 mb-16">
            <div className="md:col-span-5">
              <Link href="/" className="flex items-center gap-2 mb-6 text-slate-900">
                <Compass size={24} strokeWidth={2} className="text-blue-600" />
                <span className="text-lg font-bold tracking-widest uppercase">
                  {site.name}
                </span>
              </Link>
              <p className="text-sm leading-relaxed max-w-sm mb-6">
                {site.description}
              </p>
              <p className="text-xs font-mono text-slate-400">
                <span className="text-slate-500">Konzept-Vorschau</span>
                {' · '}
                <Link href="/" className="hover:text-blue-600 transition-colors">
                  Standard-Startseite
                </Link>
                {' · '}
                <Link
                  href="/concept-blueprint"
                  className="hover:text-blue-600 transition-colors"
                >
                  Blueprint-Konzept
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

            <div className="md:col-span-3 md:col-start-7">
              <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-widest text-xs">
                Navigation
              </h4>
              <ul className="space-y-3 text-sm font-medium">
                {navMain.map((item) => (
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

            <div className="md:col-span-3">
              <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-widest text-xs">
                Kontakt
              </h4>
              <ul className="space-y-4 text-sm font-medium">
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
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 text-xs font-medium flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500">
              © {new Date().getFullYear()} GeoMessTechnik Heger. Alle Rechte
              vorbehalten.
            </p>
            <div className="flex gap-8">
              <Link
                href="/imprint"
                className="hover:text-blue-600 transition-colors uppercase tracking-widest"
              >
                Impressum
              </Link>
              <Link
                href="/privacy"
                className="hover:text-blue-600 transition-colors uppercase tracking-widest"
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
