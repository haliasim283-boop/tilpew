import { Quote, Star } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { TESTIMONIALS } from '../data'

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-navy-900 py-20 sm:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-tl relative">
        <SectionHeading
          light
          eyebrow="Client Testimonials"
          title="Trusted by exporters across Pakistan"
          intro="The relationships behind the shipments — in our clients' own words."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm">
                <Quote className="h-8 w-8 text-accent-light" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-navy-100">
                  {t.quote}
                </blockquote>
                <div className="mt-5 flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-accent-light text-accent-light" />
                  ))}
                </div>
                <figcaption className="mt-4 border-t border-white/10 pt-4">
                  <div className="text-sm font-bold text-white">{t.name}</div>
                  <div className="text-xs text-navy-300">{t.company}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
