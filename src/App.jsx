import { useEffect } from 'react'
import TopHeader from './components/TopHeader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Services from './components/Services'
import Origins from './components/Origins'
import Destinations from './components/Destinations'
import BackgroundPattern from './components/BackgroundPattern'
import Airlines from './components/Airlines'
import Testimonials from './components/Testimonials'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  useEffect(() => {
    // Nav/CTA links still use href="#section" markup, but we intercept them so
    // the address bar shows a clean path (e.g. /contact) instead of #contact.
    const scrollToSection = (id) => {
      const target = document.getElementById(id)
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const handleClick = (event) => {
      const anchor = event.target.closest('a[href^="#"]')
      if (!anchor) return
      const id = anchor.getAttribute('href').slice(1)
      if (!document.getElementById(id)) return
      event.preventDefault()
      scrollToSection(id)
      window.history.pushState(null, '', id === 'home' ? '/' : `/${id}`)
    }

    const handlePopState = () => {
      const id = window.location.pathname === '/' ? 'home' : window.location.pathname.slice(1)
      scrollToSection(id)
    }

    document.addEventListener('click', handleClick)
    window.addEventListener('popstate', handlePopState)
    return () => {
      document.removeEventListener('click', handleClick)
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  return (
    <div className="min-h-screen bg-canvas">
      <TopHeader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />

        {/* Shared fixed background: stays put while Origins → Destinations scrolls */}
        <div className="relative">
          <div className="sticky top-0 h-0 overflow-visible pointer-events-none" aria-hidden="true">
            <div className="relative h-screen w-full bg-navy-950">
              <BackgroundPattern theme="dark" accent="#b8860b" accentLight="#d4af37" />
            </div>
          </div>
          <Origins />
          <Destinations />
        </div>
        <Airlines />
        <Testimonials />

        {/* Shared fixed background: stays put while Certificates + Contact scroll over it */}
        <div className="relative">
          <div
            className="absolute inset-0 bg-fixed bg-cover bg-center"
            style={{ backgroundImage: "url('/background/cargo.jpg')" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-canvas/20" aria-hidden="true" />
          <div className="relative">
            <Certificates />
            <div className="relative">
              <div className="absolute inset-0 bg-navy-900/50" aria-hidden="true" />
              <div className="relative">
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
