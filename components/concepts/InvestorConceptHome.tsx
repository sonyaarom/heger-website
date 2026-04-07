'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  ArrowUpRight,
  TrendingUp,
  Target,
  ShieldCheck,
  ChevronRight,
  LineChart,
  FileText,
  Menu,
  X,
  Cpu,
  Download,
} from 'lucide-react'
import {
  contact,
  featured,
  gyro,
  gyromaxBodyLead,
  hero,
  homeSections,
  navMain,
  purchase,
  repair,
  site,
} from '@/lib/siteCopyDe'

const navItems = [
  { label: 'Überblick', hash: '#executive-summary' },
  { label: 'Technologie', hash: '#technologie' },
  { label: gyro.applicationsHeading, hash: '#marktpotenzial' },
  { label: 'Leistungen', hash: '#traction' },
] as const

export default function InvestorConceptHome() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobile = () => setMobileMenuOpen(false)

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 selection:bg-slate-200 selection:text-slate-900">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm border-b border-slate-200 py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex flex-col text-left" onClick={closeMobile}>
              <span className="text-2xl font-bold tracking-tight leading-none text-slate-900">
                {site.name}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mt-1">
                {site.description}
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.hash}
                  href={item.hash}
                  className="text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors"
                >
                  {item.label}
                </a>
              ))}

              <div className="pl-6 border-l border-slate-300">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors"
                >
                  {contact.title} <Download size={14} />
                </Link>
              </div>
            </div>

            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2"
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
              <a
                key={item.hash}
                href={item.hash}
                className="block text-sm font-semibold uppercase tracking-wider text-slate-800"
                onClick={closeMobile}
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/contact"
              className="block pt-2 text-sm font-bold uppercase tracking-wider text-slate-900"
              onClick={closeMobile}
            >
              {contact.title}
            </Link>
          </div>
        )}
      </nav>

      <section className="pt-40 pb-20 lg:pt-56 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-[1px] bg-slate-900" />
            <span className="font-mono text-xs uppercase tracking-widest text-slate-600">
              {hero.subtitle}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-slate-900 mb-8 tracking-tight">
            {hero.title}
          </h1>

          <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed mb-12 max-w-3xl font-light">
            {hero.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-slate-900 text-white font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-colors flex items-center gap-3"
            >
              {contact.title} <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/gyroscopes"
              className="px-8 py-4 bg-white border border-slate-300 text-slate-900 font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-colors flex items-center gap-3"
            >
              {gyro.techDataHeading} <FileText size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section
        id="executive-summary"
        className="scroll-mt-28 py-20 border-t border-slate-200 bg-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-mono text-sm uppercase tracking-widest text-slate-400 mb-8">
            Überblick
          </h2>
          <p className="text-2xl md:text-3xl leading-relaxed text-slate-900">
            {hero.description}{' '}
            <span className="bg-slate-100 px-2 py-1 mx-1 text-slate-900">
              {gyromaxBodyLead()}
            </span>
          </p>
        </div>
      </section>

      <section
        id="traction"
        className="scroll-mt-28 py-24 bg-slate-50 border-t border-slate-200"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{hero.title}</h2>
            <p className="text-lg text-slate-600 max-w-2xl">{gyro.intro}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {homeSections.map((section, i) => {
              const Icon = [ShieldCheck, TrendingUp, LineChart][i] ?? ShieldCheck
              return (
                <div key={section.id} className="flex flex-col">
                  <div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center mb-6">
                    <Icon size={24} className="text-slate-900" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-sm">
                    {section.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {section.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section
        id="technologie"
        className="scroll-mt-28 py-24 border-t border-slate-200 bg-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-6 border-b border-slate-200 pb-2">
                {gyro.techDataHeading} · {gyro.techDataProduct}
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                {featured.title}
              </h2>
              <p className="text-sm font-medium text-slate-500 mb-6">
                {featured.subtitle} — {featured.description}
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                {gyro.sections[0].body}
              </p>

              <ul className="space-y-6">
                {gyro.advantages.map((adv, i) => (
                  <li key={adv} className="flex gap-4">
                    {i % 2 === 0 ? (
                      <Target className="text-slate-400 shrink-0 mt-1" size={20} />
                    ) : (
                      <Cpu className="text-slate-400 shrink-0 mt-1" size={20} />
                    )}
                    <div>
                      <h4 className="font-bold text-slate-900">{adv}</h4>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-slate-200 bg-[#FDFDFD] p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-900 pb-4">
                {gyro.techDataHeading} ({gyro.techDataProduct})
              </h3>

              <table className="w-full text-sm">
                <tbody className="divide-y divide-slate-100">
                  {gyro.techDataRows.map((row) => (
                    <tr key={row.label}>
                      <td className="py-4 font-semibold text-slate-900 w-1/2">
                        {row.label}
                      </td>
                      <td className="py-4 text-slate-600 text-right">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-8 pt-6 border-t border-slate-200 text-center">
                <Link
                  href="/gyroscopes"
                  className="text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-slate-500 transition-colors inline-flex items-center"
                >
                  {homeSections[0].linkText} <ChevronRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="marktpotenzial"
        className="scroll-mt-28 py-24 bg-slate-900 text-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-slate-700 pb-8">
            <h2 className="text-4xl md:text-5xl font-bold max-w-xl">
              {gyro.applicationsHeading}
            </h2>
            <p className="text-slate-400 max-w-sm text-sm mt-6 md:mt-0 leading-relaxed">
              {gyro.cta}
            </p>
          </div>

          <ul className="grid md:grid-cols-2 gap-6 mb-12 text-slate-300 text-sm leading-relaxed">
            {gyro.applications.map((app) => (
              <li key={app} className="flex gap-3 border-b border-slate-800 pb-4">
                <span className="text-[#c8102e] font-mono text-xs mt-1">▸</span>
                {app}
              </li>
            ))}
          </ul>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">{purchase.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {purchase.content}
              </p>
              <div className="w-full h-[1px] bg-slate-800" />
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-white">{repair.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {repair.content}
              </p>
              <div className="w-full h-[1px] bg-slate-800" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
            {contact.title}
          </h2>
          <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
            {contact.content}
          </p>
          <p className="text-base text-slate-500 mb-12 max-w-2xl mx-auto">
            {gyro.cta}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-slate-900 text-white font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-colors text-center"
            >
              {contact.title}
            </Link>
            <Link
              href="/gyroscopes"
              className="px-8 py-4 bg-white border border-slate-300 text-slate-900 font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-colors text-center"
            >
              {homeSections[0].linkText}
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#F8F9FA] pt-16 pb-8 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="col-span-2">
              <span className="text-xl font-bold text-slate-900 block mb-4">
                {site.name}
              </span>
              <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
                {site.description}
              </p>
              <p className="mt-4 text-xs font-mono text-slate-400 uppercase tracking-wider">
                <Link href="/" className="hover:text-slate-700 transition-colors">
                  Live-Website
                </Link>
                {' · '}
                <Link
                  href="/concept-blueprint"
                  className="hover:text-slate-700 transition-colors"
                >
                  Weitere Layouts
                </Link>
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-4">
                Navigation
              </h4>
              <ul className="space-y-2 text-sm text-slate-500">
                {navMain.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-slate-900 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-4">
                Kontakt
              </h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="hover:text-slate-900 transition-colors"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${site.phone.replace(/\s/g, '')}`}
                    className="hover:text-slate-900 transition-colors"
                  >
                    {site.phone}
                  </a>
                </li>
                <li className="pt-4 mt-2 border-t border-slate-200">
                  Mühlenstraße 9
                  <br />
                  17039 Wulkenzin
                  <br />
                  Germany
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400">
            <div>
              © {new Date().getFullYear()} {site.name}. Alle Rechte vorbehalten.
            </div>
            <div className="flex gap-6">
              <Link href="/imprint" className="hover:text-slate-900 transition-colors">
                Impressum
              </Link>
              <Link href="/privacy" className="hover:text-slate-900 transition-colors">
                Datenschutzerklärung
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
