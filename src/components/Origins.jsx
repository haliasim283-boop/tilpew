import { PlaneTakeoff } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { ORIGINS } from '../data'

export default function Origins() {
  return (
    <section id="origins" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="container-tl relative">
        <SectionHeading
          eyebrow="Origins We Operate From"
          title="Six gateways across Pakistan"
          intro="We accept and consolidate export cargo from the country's major airports — with our own clearing team on the ground in Peshawar."
          light
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ORIGINS.map((origin, i) => (
            <Reveal key={origin.code} delay={(i % 3) * 80}>
              <article className="group relative h-56 overflow-hidden rounded-2xl shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <img
                  src={origin.image}
                  alt={origin.city}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/95 via-navy-900/40 to-navy-900/10" />

                <div className="relative flex h-full flex-col justify-between p-5">
                  <div className="flex items-center justify-between">
                    <span className="code-chip rounded-lg bg-white/15 px-2.5 py-1 text-xs text-white backdrop-blur-sm">
                      {origin.code}
                    </span>
                    <span className="text-lg" aria-hidden="true">🇵🇰</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{origin.city}</h3>
                    <p className="mt-0.5 text-xs text-white/70">{origin.note}</p>
                    <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-accent-light">
                      <PlaneTakeoff className="h-3 w-3" /> Departs from
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
