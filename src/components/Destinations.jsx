import { Globe2 } from 'lucide-react'
import BackgroundPattern from './BackgroundPattern'
import Counter from './Counter'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { DESTINATIONS } from '../data'

// Country -> destination count, used for the legend in the network panel.
const countryCounts = DESTINATIONS.reduce((acc, d) => {
  acc[d.country] = (acc[d.country] || 0) + 1
  return acc
}, {})

const REGIONS = [
  { label: 'Gulf', countries: ['UAE', 'Qatar', 'Bahrain', 'Saudi Arabia', 'Oman', 'Kuwait'] },
  { label: 'UK', countries: ['United Kingdom'] },
  { label: 'Canada', countries: ['Canada'] },
]

const regionCounts = REGIONS.map(r => ({
  ...r,
  count: DESTINATIONS.filter(d => r.countries.includes(d.country)).length,
}))

export default function Destinations() {
  return (
    <section id="destinations" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="container-tl relative">
        <SectionHeading
          eyebrow="Destinations We Serve"
          title="14 international destinations"
          intro="Direct air cargo links across the Gulf, plus long-haul service to the United Kingdom and Canada."
          light
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          {/* Network panel */}
          <Reveal className="lg:col-span-4">
            <div className="relative isolate flex h-full min-h-[420px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-amber-500 p-7">
              <BackgroundPattern className="opacity-80" />

              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
                  <Globe2 className="h-3.5 w-3.5" /> Network reach
                </span>
                <div className="mt-3 font-mono text-5xl font-extrabold text-white">
                  <Counter to={DESTINATIONS.length} />
                </div>
                <p className="mt-1 text-sm text-navy-200">
                  destinations across {Object.keys(countryCounts).length} countries
                </p>
              </div>

              <div className="relative z-10 mt-6">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                  Regions served
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {regionCounts.map(r => (
                    <div
                      key={r.label}
                      className="flex flex-col items-center rounded-xl bg-white/5 px-2 py-3 text-center backdrop-blur-sm"
                    >
                      <span className="font-mono text-3xl font-extrabold text-white">{r.count}</span>
                      <span className="mt-1 text-[10px] font-semibold text-white">{r.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <ul className="relative z-10 mt-5 space-y-2">
                {Object.entries(countryCounts).map(([country, count]) => (
                  <li
                    key={country}
                    className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 text-sm backdrop-blur-sm"
                  >
                    <span className="flex items-center gap-2 text-navy-100">
                      <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-blue-900" />
                      {country}
                    </span>
                    <span className="font-mono text-xs font-bold text-white">{count}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Destination cards */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-3">
            {DESTINATIONS.map((dest, i) => (
              <Reveal key={dest.code} delay={(i % 6) * 60}>
                <article className="group relative h-48 overflow-hidden rounded-2xl shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <img
                    src={dest.image}
                    alt={dest.city}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/25 to-navy-900/10" />

                  <div className="relative flex h-full flex-col justify-between p-5">
                    <div className="flex items-center justify-between">
                      <span className="code-chip rounded-lg bg-white/15 px-2.5 py-1 text-xs text-white backdrop-blur-sm">
                        {dest.code}
                      </span>
                      <span className="text-lg" aria-hidden="true">{dest.flag}</span>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{dest.city}</h3>
                      <p className="mt-0.5 text-xs text-white/80">{dest.country}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
