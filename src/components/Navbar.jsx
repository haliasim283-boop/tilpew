import { ArrowRight } from 'lucide-react'
import { NAV_LINKS } from '../data'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 hidden px-4 pt-9 sm:px-6 lg:-mb-[102px] lg:block lg:px-8">
      <div className="mx-auto max-w-content rounded-2xl border border-white/[0.12] bg-navy-900/75 shadow-navy backdrop-blur-md">
        <nav className="flex h-14 items-center justify-between px-5 sm:px-6 md:h-16">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-white/75 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn-primary">
            Get a Quote <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  )
}
