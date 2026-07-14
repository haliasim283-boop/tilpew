import { ArrowRight, Plane, MapPin, Award, CheckCircle2, Target, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { COMPANY } from '../data'

const highlights = [
  'Specialised exclusively in air cargo forwarding',
  'In-house customs clearing for the Peshawar sector',
  'Form-E, CASS billing and AWB documentation handled in one place',
  'Long-standing relationships with major Gulf and Pakistani carriers',
]

export default function AboutPage() {
  return (
    <>
      {/* Page banner + Story + leadership + Mission & Vision, over a fixed background image */}
      <div className="relative">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/about/aboutus.avif')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-canvas/30" aria-hidden="true" />

      <section className="relative pb-20 pt-40 sm:pb-24 sm:pt-44 lg:pb-28 lg:pt-32">
        <div className="container-tl">
          <div className="rounded-2xl bg-navy-900 px-8 py-10 shadow-navy sm:px-10">
            <SectionHeading
              eyebrow="Who We Are"
              title="Moving Pakistani exports to the world, since 2009"
              intro="Trade International Logistics is Pakistan's dedicated air cargo forwarding partner — built to take the friction out of exporting, one shipment at a time."
              light
            />
          </div>

          <div className="mt-14 grid items-center gap-12 rounded-2xl border border-slate-200 bg-white p-7 shadow-card lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="eyebrow">Our Story</span>
              <h2 className="mt-3 section-title text-balance">
                Built by exporters, for exporters
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-navy-500 text-justify">
                <p>
                  Trade International Logistics was founded in <strong className="text-navy-900">2009</strong> by{' '}
                  <strong className="text-navy-900">{COMPANY.founder}</strong>, who saw exporters across
                  Khyber Pakhtunkhwa losing time and money to unreliable freight bookings and tangled
                  paperwork. The company was built on a simple promise: handle the booking, the customs,
                  and the documentation in one place, so cargo actually gets where it needs to go, on
                  schedule. Today the company is led by CEO <strong className="text-navy-900">{COMPANY.ceo}</strong>.
                </p>
                <p>
                  What started as a single-office operation in Peshawar has grown into a nationwide network
                  spanning six Pakistani gateways, with air cargo moving daily to 14 destinations across the
                  Gulf, the United Kingdom and Canada. Along the way, we've stayed deliberately specialised
                  air cargo forwarding is the only thing we do, and we do it end to end: booking, customs
                  clearance, Form-E processing and live tracking, all under one accountable team.
                </p>
                <p>
                  We're a registered IATA cargo agent, DGR certified, and an approved CASS settlement agent
                  credentials that back up every shipment we handle with the documentation and compliance an
                  international carrier expects.
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

            {/* Leadership / identity card */}
            <Reveal className="lg:pl-6">
              <div className="card overflow-hidden">
                <div className="relative bg-navy-900 p-7">
                  <div className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-xl bg-accent/20">
                    <Plane className="h-5 w-5 text-amber-500" />
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

      {/* Mission & vision */}
      <section className="relative py-20 sm:py-24 lg:py-28">
        <div className="container-tl">
          <div className="grid gap-8 sm:grid-cols-2">
            <Reveal className="card p-8">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-amber-500">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-navy-900">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-500 text-justify">
                To give every Pakistani exporter — from established manufacturers to first-time
                shippers — a freight partner who handles the booking, the paperwork and the clearing
                with total reliability, so their cargo reaches the world on time.
              </p>
            </Reveal>
            <Reveal delay={90} className="card p-8">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-amber-500">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-navy-900">Our Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-500 text-justify">
                To be Pakistan's most trusted name in air cargo forwarding — known for the routes we
                serve, the carriers we work with, and the exporters who never have to think twice
                about where their shipment stands.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

function Person({ role, name }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-amber-500 text-sm font-bold text-white">
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
      <Icon className="h-5 w-5 shrink-0 text-black" />
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-wide text-navy-400">
          {label}
        </div>
        <div className="text-sm font-semibold text-navy-900">{value}</div>
      </div>
    </div>
  )
}
