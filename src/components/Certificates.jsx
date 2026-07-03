import { BadgeCheck } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { CERTIFICATES } from '../data'

function Seal() {
  // Placeholder certificate seal — swap for a real certificate image later.
  return (
    <div className="relative grid h-16 w-16 shrink-0 place-items-center">
      <svg viewBox="0 0 56 56" className="h-16 w-16" aria-hidden="true">
        <circle cx="28" cy="28" r="22" fill="#1a2744" />
        <circle
          cx="28"
          cy="28"
          r="22"
          fill="none"
          stroke="#2563eb"
          strokeWidth="2"
          strokeDasharray="3 3"
        />
        <circle cx="28" cy="28" r="15" fill="none" stroke="#3b82f6" strokeOpacity="0.5" strokeWidth="1" />
      </svg>
      <BadgeCheck className="absolute h-7 w-7 text-accent-light" />
    </div>
  )
}

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 sm:py-24 lg:py-28">
      <div className="container-tl">
        <div className="rounded-2xl bg-navy-900/95 px-8 py-10 shadow-navy sm:px-10">
          <SectionHeading
            eyebrow="Certificates & Accreditations"
            title="Qualified to handle your cargo"
            intro="Our team holds the industry certifications that keep air cargo compliant, safe and correctly documented."
            light
          />
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATES.map((cert, i) => (
            <Reveal key={cert.title} delay={(i % 3) * 90}>
              <article className="card flex h-full min-h-[230px] items-start gap-5 p-8 hover:-translate-y-1 hover:border-accent/30 hover:shadow-card-hover">
                <Seal />
                <div>
                  <h3 className="text-lg font-bold text-navy-900">{cert.title}</h3>
                  <span className="mt-1.5 inline-block rounded-md bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
                    {cert.issuer}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-navy-500">{cert.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
