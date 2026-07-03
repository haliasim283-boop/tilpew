import { useEffect, useState } from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { AIRLINES } from '../data'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

function AirlineCard({ airline, className = '' }) {
  return (
    <article
      className={`group/card overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/20 hover:shadow-xl ${className}`}
    >
      {/* Image banner */}
      <div className="relative h-32 w-full overflow-hidden">
        {airline.logo ? (
          <img
            src={airline.logo}
            alt={airline.name}
            draggable={false}
            className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-white/5">
            <span className="text-2xl font-extrabold text-white/40">{airline.mark}</span>
          </div>
        )}
        {/* IATA code badge */}
        <span className="absolute right-2 top-2 rounded-md bg-navy-900/70 px-2 py-0.5 text-[10px] font-bold tracking-wide text-white backdrop-blur-sm">
          {airline.code}
        </span>
      </div>

      {/* Name row */}
      <div className="px-4 py-3">
        <h3 className="truncate text-sm font-bold text-white">{airline.name}</h3>
      </div>
    </article>
  )
}

export default function Airlines() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(!prefersReducedMotion())
  }, [])

  return (
    <section
      id="airlines"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/airlines/airplanebg.png')" }}
        aria-hidden="true"
      />
      {/* Dark overlay so text and cards stay readable */}
      <div className="absolute inset-0 bg-navy-900/70" aria-hidden="true" />

      <div className="relative z-10">
        <div className="container-tl">
          <SectionHeading
            eyebrow="Airline Partners"
            title="Booking power across the region"
            intro="Established relationships with leading Gulf and Pakistani carriers mean dependable space, even when capacity is tight."
            light
          />
        </div>

        <Reveal className="mt-14">
          {animate ? (
            // Full-bleed auto-scrolling carousel; pauses on hover, loops seamlessly.
            <div className="marquee-mask">
              <div className="marquee-track flex gap-5 py-1">
                {[...AIRLINES, ...AIRLINES].map((airline, i) => (
                  <AirlineCard key={`${airline.name}-${i}`} airline={airline} className="w-60 shrink-0" />
                ))}
              </div>
            </div>
          ) : (
            <div className="container-tl">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {AIRLINES.map((airline) => (
                  <AirlineCard key={airline.name} airline={airline} />
                ))}
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  )
}
