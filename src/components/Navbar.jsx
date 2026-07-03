import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { NAV_LINKS } from '../data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-28 z-40 hidden px-4 pt-9 sm:px-6 lg:block lg:px-8">
      <div
        className={`mx-auto max-w-content rounded-2xl border border-white/[0.12] shadow-navy backdrop-blur-md transition-all duration-300 ${
          scrolled ? 'bg-navy-900/75' : 'bg-white/[0.06]'
        }`}
      >
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
