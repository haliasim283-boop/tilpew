import Hero from '../components/Hero'
import About from '../components/About'
import Stats from '../components/Stats'
import Origins from '../components/Origins'
import Destinations from '../components/Destinations'
import BackgroundPattern from '../components/BackgroundPattern'
import Airlines from '../components/Airlines'
import Testimonials from '../components/Testimonials'
import Certificates from '../components/Certificates'
import TrustedBy from '../components/TrustedBy'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />

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
      <TrustedBy />

      {/* Shared fixed background: stays put while Certificates scrolls over it */}
      <div className="relative">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/background/cargo.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-canvas/20" aria-hidden="true" />
        <div className="relative">
          <Certificates />
        </div>
      </div>
    </>
  )
}
