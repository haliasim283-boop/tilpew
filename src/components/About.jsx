import { Plane, MapPin, Award, CheckCircle2 } from 'lucide-react'
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
      <div className="container-tl w-full">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Story */}
          <div>
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
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Leadership / identity card */}
          <Reveal className="lg:pl-6">
            <div className="card overflow-hidden">
              <div className="relative bg-navy-900 p-7">
                <div className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-xl bg-accent/20">
                  <Plane className="h-5 w-5 text-accent-light" />
                </div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy-200">
                  Leadership
                </p>
                <div className="mt-4 space-y-4">
                  <Person role="Founder" name={COMPANY.founder} />
                  <Person role="Chief Executive Officer" name={COMPANY.ceo} />
                </div>
              </div>
              <div className="grid grid-cols-2 divide-x divide-slate-200">
                <Fact icon={MapPin} label="Head office" value="Peshawar, Pakistan" />
                <Fact icon={Award} label="Accreditation" value="IATA cargo agent" />
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
      <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-sm font-bold text-white">
        {name
          .split(' ')
          .map((n) => n[0])
          .slice(0, 2)
          .join('')}
      </span>
      <div>
        <div className="text-sm font-bold text-white">{name}</div>
        <div className="text-xs text-navy-200">{role}</div>
      </div>
    </div>
  )
}

function Fact({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3 p-5">
      <Icon className="h-5 w-5 shrink-0 text-accent" />
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-wide text-navy-400">
          {label}
        </div>
        <div className="text-sm font-semibold text-navy-900">{value}</div>
      </div>
    </div>
  )
}
