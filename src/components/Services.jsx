import {
  PlaneTakeoff,
  ReceiptText,
  ShieldCheck,
  FileCheck2,
  Truck,
  Radar,
  ArrowRight,
} from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import SpotlightCard from './SpotlightCard'
import { SERVICES } from '../data'

const ICONS = { PlaneTakeoff, ReceiptText, ShieldCheck, FileCheck2, Truck, Radar }

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 sm:py-24 lg:py-28"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/service/service.png')" }}
        aria-hidden="true"
      />
      {/* Overlay to keep content readable */}
      <div className="absolute inset-0 bg-canvas/20" aria-hidden="true" />

      <div className="container-tl relative">
        <div className="rounded-2xl bg-navy-900/95 px-8 py-10 shadow-navy sm:px-10">
          <SectionHeading
            eyebrow="What We Do"
            title="End-to-end air freight, handled in one place"
            intro="From booking space to clearing customs, every part of your export moves under one accountable team."
            light
          />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon] ?? PlaneTakeoff
            return (
              <Reveal key={service.title} delay={(i % 2) * 90}>
                <SpotlightCard
                  spotlightColor="rgba(37, 99, 235, 0.13)"
                  className="card-dot-pattern group relative h-full rounded-2xl border border-slate-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-card-hover"
                >
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  {/* Card image with inset padding */}
                  <div className="p-4 pb-0">
                    <div className="relative h-52 w-full overflow-hidden rounded-xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="relative p-7 text-center">
                    <Icon
                      className="pointer-events-none absolute -bottom-4 -right-4 h-24 w-24 rotate-[-12deg] text-navy-900/[0.05]"
                      aria-hidden="true"
                    />
                    <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-navy-900">{service.title}</h3>
                    <p className="mt-2.5 text-justify text-sm leading-relaxed text-navy-500">{service.desc}</p>
                    <a
                      href="#contact"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    >
                      Enquire <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </SpotlightCard>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
