import { Plane, MapPin, Award, CheckCircle2, Users } from 'lucide-react'
import Reveal from './Reveal'
import { COMPANY } from '../data'

const highlights = [
  'Specialised exclusively in air cargo forwarding',
  'In-house customs clearing for the Peshawar sector',
  'Form-E, CASS billing and AWB documentation handled in one place',
  'Long-standing relationships with major Gulf and Pakistani carriers',
]

export default function About() {
  return (
    <section id="about" className="flex min-h-screen items-center py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-14">
        <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Story */}
          <div className="lg:col-span-5">
            <span className="eyebrow">Who We Are</span>
            <h2 className="mt-3 section-title text-balance">
              Moving Pakistani exports to the world, since 2009
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-navy-500 text-justify">
              <p>
                Trade International Logistics was founded in <strong className="text-navy-900">2009</strong> by{' '}
                <strong className="text-navy-900">{COMPANY.founder}</strong> with a simple goal: give
                Pakistani exporters a freight partner they can actually rely on. Today the company is
                led by CEO <strong className="text-navy-900">{COMPANY.ceo}</strong>.
              </p>
              <p>
                We specialise in air cargo forwarding from across Pakistan to international
                destinations throughout the Gulf, the United Kingdom and Canada. With{' '}
                <strong className="text-navy-900">15+ years</strong> of hands-on experience, we
                handle the bookings, the paperwork and the clearing so your shipment simply gets
                where it needs to be.
              </p>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-navy-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <Reveal delay={90} className="h-64 overflow-hidden rounded-2xl lg:col-span-4 lg:h-auto">
            <img
              src="/about/aircargo.png"
              alt="Air cargo being handled on the tarmac"
              className="h-full w-full object-cover"
            />
          </Reveal>

          {/* Leadership / identity card */}
          <Reveal delay={150} className="lg:col-span-3">
            <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
              <div className="relative overflow-hidden bg-navy-900 p-7">
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/25 blur-2xl transition-opacity duration-300 group-hover:opacity-80"
                  aria-hidden="true"
                />
                <div className="relative flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-navy-200">
                    <Users className="h-4 w-4 text-white" />
                    Leadership
                  </span>
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/20 text-amber-500 ring-1 ring-white/10">
                    <Plane className="h-5 w-5" />
                  </div>
                </div>

                <div className="relative mt-6 space-y-5">
                  <Person role="Founder" name={COMPANY.founder} />
                  <Person role="Chief Executive Officer" name={COMPANY.ceo} />
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-center gap-3 p-5">
                <FactRow icon={MapPin} label="Head office" value="Peshawar, Pakistan" />
                <FactRow icon={Award} label="Accreditation" value="IATA cargo agent" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Person({ role, name }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-amber-500 to-amber-800 text-sm font-bold text-white ring-2 ring-white/15">
        {name
          .split(' ')
          .map((n) => n[0])
          .slice(0, 2)
          .join('')}
      </span>
      <div>
        <div className="text-sm font-bold text-white">{name}</div>
        <div className="text-xs text-navy-300">{role}</div>
      </div>
    </div>
  )
}

function FactRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3.5 transition-colors group-hover:bg-accent/5">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-black shadow-sm ring-1 ring-slate-200">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="text-[11px] font-semibold uppercase tracking-wide text-navy-400">
          {label}
        </div>
        <div className="truncate text-sm font-semibold text-navy-900">{value}</div>
      </div>
    </div>
  )
}
