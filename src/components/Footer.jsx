import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react'
import { COMPANY } from '../data'

const linkGroups = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Certificates', href: '#certificates' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Network',
    links: [
      { label: 'Origins', href: '#origins' },
      { label: 'Destinations', href: '#destinations' },
      { label: 'Airline Partners', href: '#airlines' },
      { label: 'Client Reviews', href: '#testimonials' },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="container-tl py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <span className="text-lg font-extrabold tracking-tight text-white">{COMPANY.name}</span>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-300">
              {COMPANY.tagline}. Air cargo exports from Pakistan to the Gulf, the UK and Canada 
              handled end to end.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-accent-light" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white">{COMPANY.email}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-accent-light" />
                <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="hover:text-white">{COMPANY.phone}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-accent-light" />
                <span>{COMPANY.address}</span>
              </li>
            </ul>
          </div>

          {/* Link groups */}
          {linkGroups.map((group) => (
            <div key={group.title} className="lg:col-span-3">
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white">{group.title}</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-navy-300 transition-colors hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Back to top */}
          <div className="lg:col-span-1 lg:flex lg:justify-end">
            <a
              href="#home"
              aria-label="Back to top"
              className="inline-grid h-11 w-11 place-items-center rounded-xl border border-white/15 text-white transition-colors hover:bg-white/10"
            >
              <ArrowUp className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-tl flex flex-col gap-3 py-6 text-xs text-navy-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {COMPANY.founded}–{year} {COMPANY.name}. All rights reserved.
          </p>
          <p>
            Founder: <span className="text-navy-200">{COMPANY.founder}</span>
            <span className="mx-2 text-navy-600">|</span>
            CEO: <span className="text-navy-200">{COMPANY.ceo}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
