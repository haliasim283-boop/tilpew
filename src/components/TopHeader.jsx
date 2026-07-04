import { useState, useEffect } from 'react'
import { MapPin, Mail, Phone, Menu, X, ArrowRight } from 'lucide-react'
import Logo from './Logo'
import { COMPANY, NAV_LINKS } from '../data'

export default function TopHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <div className="fixed lg:relative inset-x-0 top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      {/* ── Main bar ── */}
      <div className="container-tl flex h-28 items-center">

        {/* Mobile: [hamburger] [logo centered] [spacer] */}
        <div className="flex w-full items-center justify-between lg:hidden">
          <button
            type="button"
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-100 text-navy-900 transition-colors hover:bg-slate-200"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <a href="#home" aria-label="Trade International Logistics — home">
            <Logo className="h-24 w-auto object-contain" />
          </a>

          {/* spacer keeps logo centred */}
          <div className="h-10 w-10 shrink-0" />
        </div>

        {/* Desktop: logo left + contact info right */}
        <div className="hidden w-full items-center justify-between lg:flex">
          <a href="#home" aria-label="Trade International Logistics — home">
            <Logo className="h-24 w-auto object-contain" />
          </a>

          <div className="flex items-center gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-navy-400">Our Location</p>
                <p className="text-sm font-semibold text-navy-900">{COMPANY.address}</p>
              </div>
            </div>

            <div className="h-10 w-px bg-slate-200" />

            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-navy-400">Email Us</p>
                <a href={`mailto:${COMPANY.email}`} className="text-sm font-semibold text-navy-900 transition-colors hover:text-accent">
                  {COMPANY.email}
                </a>
              </div>
            </div>

            <div className="h-10 w-px bg-slate-200" />

            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-navy-400">Call Us</p>
                <a href={`tel:${COMPANY.phone}`} className="text-sm font-semibold text-navy-900 transition-colors hover:text-accent">
                  {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile slide-down menu ── */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
          open ? 'max-h-[520px] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-slate-200 px-5 pb-6 pt-2">
          <ul className="flex flex-col">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-slate-100 py-3.5 text-base font-medium text-navy-600 transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-5 w-full"
          >
            Get a Quote <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
