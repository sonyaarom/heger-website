'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Menu,
  X,
  Globe,
  ArrowDownRight,
  Plus,
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

const desktopNav = navMain.slice(1, 4).map((n) => ({ label: n.label, href: n.href }))
const stats = conceptStatsFour().map((s) => ({ v: s.value, l: s.label }))

export default function BrutalistConceptHome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#F4F4F0] font-sans text-zinc-900 selection:bg-orange-600 selection:text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F4F4F0] border-b-2 border-zinc-900">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-stretch h-20">
            <Link
              href="/"
              className="flex items-center gap-4 pr-6 border-r-2 border-zinc-900"
            >
              <div className="w-6 h-6 bg-orange-600 rounded-none shrink-0" />
              <span className="text-xl font-black tracking-tighter uppercase">
                {site.name}
              </span>
            </Link>

            <div className="hidden md:flex flex-1 items-stretch">
              {desktopNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center px-8 border-r-2 border-zinc-900 text-sm font-bold uppercase tracking-widest hover:bg-zinc-900 hover:text-[#F4F4F0] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex-1" />

              <Link
                href="/"
                className="flex items-center px-6 border-l-2 border-zinc-900 text-sm font-bold uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-colors"
                title="Zur Standard-Website"
              >
                <Globe size={18} className="mr-2 shrink-0" /> DE
              </Link>
              <Link
                href="/contact"
                className="flex items-center px-8 border-l-2 border-zinc-900 bg-zinc-900 text-[#F4F4F0] text-sm font-bold uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-colors"
              >
                Kontakt
              </Link>
            </div>

            <div className="md:hidden flex items-center pl-4 border-l-2 border-zinc-900">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
              >
                {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t-2 border-zinc-900 bg-[#F4F4F0]">
            {desktopNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-6 py-4 text-sm font-bold uppercase tracking-widest border-b-2 border-zinc-900 hover:bg-zinc-900 hover:text-[#F4F4F0]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-6 py-4 text-sm font-bold uppercase tracking-widest bg-zinc-900 text-[#F4F4F0] hover:bg-orange-600 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontakt
            </Link>
          </div>
        )}
      </nav>

      <section className="pt-20 border-b-2 border-zinc-900 flex flex-col lg:flex-row">
        <div className="lg:w-2/3 p-8 md:p-16 lg:p-24 border-b-2 lg:border-b-0 lg:border-r-2 border-zinc-900 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 mb-12 flex-wrap">
              <span className="font-mono text-xs font-bold uppercase tracking-widest px-2 py-1 bg-zinc-900 text-[#F4F4F0]">
                {hero.subtitle}
              </span>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500 max-w-md">
                {site.description}
              </span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-[7rem] font-black uppercase tracking-tighter leading-[0.85] mb-12 text-zinc-900">
              {hero.title}
            </h1>
          </div>

          <div>
            <p className="text-xl sm:text-2xl font-medium text-zinc-700 max-w-xl leading-tight mb-12">
              {hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-0 border-2 border-zinc-900 w-fit max-w-full">
              <Link
                href="/gyroscopes"
                className="px-8 py-5 bg-orange-600 text-white font-bold text-sm uppercase tracking-widest hover:bg-zinc-900 transition-colors flex items-center justify-between gap-6 group"
              >
                {homeSections[0].linkText}
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-2 transition-transform shrink-0"
                />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-5 bg-transparent text-zinc-900 font-bold text-sm uppercase tracking-widest hover:bg-zinc-200 transition-colors border-t-2 sm:border-t-0 sm:border-l-2 border-zinc-900 text-center sm:text-left"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 bg-zinc-900 flex flex-col relative overflow-hidden min-h-[400px]">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(#F4F4F0 2px, transparent 2px), linear-gradient(90deg, #F4F4F0 2px, transparent 2px)',
              backgroundSize: '40px 40px',
            }}
          />

          <div className="flex-1 flex items-center justify-center relative p-12">
            <div className="relative w-full aspect-square max-w-md">
              <div className="absolute top-0 right-0 w-3/4 h-3/4 border-4 border-orange-600 rounded-full" />
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-orange-600" />
              <div className="absolute top-1/4 left-1/4 w-full h-2 bg-[#F4F4F0] mix-blend-difference" />
              <div className="absolute left-1/2 top-0 w-2 h-full bg-[#F4F4F0] mix-blend-difference" />

              <div className="absolute bottom-4 right-4 text-[#F4F4F0] font-mono text-sm text-right max-w-[12rem]">
                {gyro.techDataProduct}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-zinc-900 bg-[#F4F4F0]">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x-2 divide-y-2 md:divide-y-0 divide-zinc-900">
          {stats.map((stat, i) => (
            <div
              key={stat.l}
              className={`p-8 ${
                i === 0 || i === 1
                  ? 'border-t-0'
                  : 'border-t-2 md:border-t-0 border-zinc-900'
              }`}
            >
              <div className="text-4xl font-black tracking-tighter mb-2">
                {stat.v}
              </div>
              <div className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-600">
                {stat.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F4F4F0]">
        <div className="p-8 md:p-16 lg:p-24 border-b-2 border-zinc-900 bg-orange-600 text-white">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-none max-w-4xl">
            {gyro.cta}
          </h2>
        </div>

        <div className="flex flex-col">
          <Link
            href="/gyroscopes"
            className="group block border-b-2 border-zinc-900 hover:bg-zinc-900 hover:text-[#F4F4F0] transition-colors"
          >
            <div className="flex flex-col lg:flex-row lg:items-center">
              <div className="w-full lg:w-1/4 p-8 border-b-2 lg:border-b-0 lg:border-r-2 border-zinc-900 font-mono text-xl font-bold">
                01 // PRODUKTION
              </div>
              <div className="w-full lg:w-1/2 p-8 lg:p-16 lg:border-r-2 border-zinc-900">
                <h3 className="text-4xl font-black uppercase tracking-tight mb-4">
                  {homeSections[0].title}
                </h3>
                <p className="text-lg font-medium max-w-xl group-hover:text-zinc-300">
                  {homeSections[0].description}
                </p>
              </div>
              <div className="hidden lg:flex w-1/4 items-center justify-center py-8">
                <ArrowDownRight
                  size={64}
                  className="opacity-20 group-hover:opacity-100 group-hover:text-orange-500 transition-all group-hover:-rotate-45"
                />
              </div>
            </div>
          </Link>

          <Link
            href="/repair"
            className="group block border-b-2 border-zinc-900 hover:bg-zinc-900 hover:text-[#F4F4F0] transition-colors"
          >
            <div className="flex flex-col lg:flex-row lg:items-center">
              <div className="w-full lg:w-1/4 p-8 border-b-2 lg:border-b-0 lg:border-r-2 border-zinc-900 font-mono text-xl font-bold">
                02 // SERVICE
              </div>
              <div className="w-full lg:w-1/2 p-8 lg:p-16 lg:border-r-2 border-zinc-900">
                <h3 className="text-4xl font-black uppercase tracking-tight mb-4">
                  {homeSections[1].title}
                </h3>
                <p className="text-lg font-medium max-w-xl group-hover:text-zinc-300">
                  {homeSections[1].description}
                </p>
              </div>
              <div className="hidden lg:flex w-1/4 items-center justify-center py-8">
                <ArrowDownRight
                  size={64}
                  className="opacity-20 group-hover:opacity-100 group-hover:text-orange-500 transition-all group-hover:-rotate-45"
                />
              </div>
            </div>
          </Link>

          <Link
            href="/purchase"
            className="group block border-b-2 border-zinc-900 hover:bg-zinc-900 hover:text-[#F4F4F0] transition-colors"
          >
            <div className="flex flex-col lg:flex-row lg:items-center">
              <div className="w-full lg:w-1/4 p-8 border-b-2 lg:border-b-0 lg:border-r-2 border-zinc-900 font-mono text-xl font-bold">
                03 // HANDEL
              </div>
              <div className="w-full lg:w-1/2 p-8 lg:p-16 lg:border-r-2 border-zinc-900">
                <h3 className="text-4xl font-black uppercase tracking-tight mb-4">
                  {homeSections[2].title}
                </h3>
                <p className="text-lg font-medium max-w-xl group-hover:text-zinc-300">
                  {homeSections[2].description}
                </p>
              </div>
              <div className="hidden lg:flex w-1/4 items-center justify-center py-8">
                <ArrowDownRight
                  size={64}
                  className="opacity-20 group-hover:opacity-100 group-hover:text-orange-500 transition-all group-hover:-rotate-45"
                />
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="bg-[#F4F4F0] border-b-2 border-zinc-900 flex flex-col lg:flex-row">
        <div className="lg:w-1/2 flex flex-col border-b-2 lg:border-b-0 lg:border-r-2 border-zinc-900">
          <div className="p-8 md:p-16 lg:p-24 border-b-2 border-zinc-900 flex-1">
            <div className="font-mono text-sm font-bold uppercase tracking-widest text-orange-600 mb-6">
              {featured.title}
            </div>
            <h2 className="text-5xl sm:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
              {featured.subtitle}
            </h2>
            <p className="text-xl font-medium text-zinc-700 leading-snug mb-12 max-w-md">
              {featured.description} {gyromaxBodyLead()}
            </p>
            <Link
              href="/gyroscopes"
              className="inline-block px-8 py-4 border-2 border-zinc-900 font-bold uppercase tracking-widest text-sm hover:bg-zinc-900 hover:text-white transition-colors w-fit"
            >
              {gyro.techDataHeading}
            </Link>
          </div>

          <div className="grid grid-cols-2 bg-zinc-900 text-[#F4F4F0]">
            {[
              gyro.techDataRows[0],
              gyro.techDataRows[1],
              gyro.techDataRows[2],
              gyro.techDataRows[4],
            ].map((row, idx) => (
              <div
                key={row.label}
                className={`p-6 border-zinc-700 ${
                  idx < 2 ? 'border-b' : ''
                } ${idx % 2 === 0 ? 'border-r' : ''}`}
              >
                <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-1">
                  {row.label}
                </div>
                <div className="font-bold text-lg leading-snug">{row.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 bg-zinc-200 relative p-8 flex items-center justify-center min-h-[500px]">
          <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-zinc-300 -translate-x-1/2" />
          <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-zinc-300 -translate-y-1/2" />

          <div className="absolute top-8 left-8 border-2 border-zinc-900 px-3 py-1 font-mono text-sm font-bold uppercase bg-[#F4F4F0] max-w-[90%]">
            FIG. 01 / {gyro.techDataProduct}
          </div>

          <div className="relative w-64 h-96 border-4 border-zinc-900 bg-[#F4F4F0] flex flex-col shadow-[16px_16px_0px_0px_rgba(24,24,27,1)]">
            <div className="h-1/3 border-b-4 border-zinc-900 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-4 border-orange-600 rounded-full flex items-center justify-center">
                <Plus size={24} className="text-zinc-900" />
              </div>
            </div>
            <div className="h-2/3 bg-zinc-900 p-4 flex flex-col justify-between text-[#F4F4F0]">
              <div className="w-full h-2 bg-zinc-700" />
              <div className="font-mono text-xs tracking-widest">SENSOR UNIT</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#F4F4F0]">
        <div className="flex flex-col lg:flex-row divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-zinc-900 border-b-2 border-zinc-900">
          <div className="lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-between">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none text-zinc-900 mb-12">
              {site.name}
            </h2>
            <p className="text-xl font-bold max-w-sm">
              Mühlenstraße 9
              <br />
              17039 Wulkenzin
              <br />
              Deutschland
            </p>
            <p className="mt-8 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              <span>Konzept-Vorschau</span>
              {' · '}
              <Link href="/" className="hover:text-orange-600 transition-colors">
                Standard-Startseite
              </Link>
              {' · '}
              <Link
                href="/concept-blueprint"
                className="hover:text-orange-600 transition-colors"
              >
                Blueprint
              </Link>
              {' · '}
              <Link
                href="/concept-industrial"
                className="hover:text-orange-600 transition-colors"
              >
                Industrial
              </Link>
              {' · '}
              <Link
                href="/concept-institutional"
                className="hover:text-orange-600 transition-colors"
              >
                Institutional
              </Link>
              {' · '}
              <Link
                href="/concept-investor"
                className="hover:text-orange-600 transition-colors"
              >
                Investor
              </Link>
            </p>
          </div>

          <div className="lg:w-1/2 flex flex-col">
            <a
              href={`mailto:${site.email}`}
              className="p-8 md:p-12 border-b-2 border-zinc-900 text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter hover:bg-orange-600 hover:text-white transition-colors flex items-center justify-between gap-4"
            >
              <span className="break-all">{site.email}</span>
              <ArrowRight size={32} className="shrink-0" />
            </a>
            <a
              href="tel:+493955826680"
              className="p-8 md:p-12 border-b-2 border-zinc-900 text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter hover:bg-orange-600 hover:text-white transition-colors flex items-center justify-between gap-4"
            >
              {site.phone}
              <ArrowRight size={32} className="shrink-0" />
            </a>

            <div className="flex-1 p-8 md:p-12 grid grid-cols-2 gap-8 font-bold uppercase tracking-widest text-sm">
              <div className="flex flex-col gap-4">
                {navMain.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="hover:text-orange-600 transition-colors w-fit"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <Link
                  href="/imprint"
                  className="hover:text-orange-600 transition-colors w-fit"
                >
                  Impressum
                </Link>
                <Link
                  href="/privacy"
                  className="hover:text-orange-600 transition-colors w-fit"
                >
                  Datenschutz
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 bg-zinc-900 text-zinc-400 font-mono text-[10px] uppercase tracking-widest">
          <span>© {new Date().getFullYear()} GeoMessTechnik Heger.</span>
          <span>ALL RIGHTS RESERVED.</span>
        </div>
      </footer>
    </div>
  )
}
