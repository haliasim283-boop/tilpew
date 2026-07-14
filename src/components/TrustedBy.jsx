import { useEffect, useState } from 'react'
import { ChevronRight } from 'lucide-react'
import Reveal from './Reveal'
import { PARTNERS } from '../data'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const FADE_MASK =
  'linear-gradient(to right, transparent, black 14%, black 86%, transparent)'

function Logo({ partner }) {
  return partner.logo ? (
    <img
      src={partner.logo}
      alt={partner.name}
      draggable={false}
      className="h-12 w-auto shrink-0 object-contain transition-transform duration-300 hover:scale-105 sm:h-14"
    />
  ) : (
    <span className="shrink-0 text-xl font-extrabold uppercase tracking-tight text-navy-300 transition-colors duration-300 hover:text-navy-900 sm:text-2xl">
      {partner.name}
    </span>
  )
}

export default function TrustedBy() {
  const [animate, setAnimate] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    setAnimate(!prefersReducedMotion())
  }, [])

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="container-tl relative text-center">
        <Reveal>
          <p className="mt-1 text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
            Worked with the names that matter.
          </p>
        </Reveal>

        <Reveal delay={90} className="relative mx-auto mt-12 max-w-3xl">
          <div className="border-t border-slate-200" />
          <div className="relative py-10">
            {animate ? (
              <div
                className="overflow-hidden"
                style={{ WebkitMaskImage: FADE_MASK, maskImage: FADE_MASK }}
              >
                <div
                  className={`marquee-track marquee-track-reverse flex items-center gap-16 ${
                    paused ? '[animation-play-state:paused]' : ''
                  }`}
                  style={{ animationDuration: '14s' }}
                >
                  {[...PARTNERS, ...PARTNERS].map((partner, i) => (
                    <Logo key={`${partner.name}-${i}`} partner={partner} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
                {PARTNERS.map((partner) => (
                  <Logo key={partner.name} partner={partner} />
                ))}
              </div>
            )}

            {animate && (
              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                aria-label={paused ? 'Resume scrolling' : 'Pause scrolling'}
                aria-pressed={paused}
                className="absolute right-0 top-1/2 hidden h-9 w-9 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-navy-900 text-white shadow-md transition-transform duration-200 hover:scale-105 sm:flex"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            )}
          </div>
          <div className="border-t border-slate-200" />
        </Reveal>
      </div>
    </section>
  )
}
