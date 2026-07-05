import SectionHeading from './SectionHeading'
import { CircularTestimonials } from './ui/circular-testimonials'
import { TESTIMONIALS } from '../data'

const testimonials = TESTIMONIALS.map((t) => ({
  quote: t.quote,
  name: t.name,
  designation: t.company,
  src: t.avatar,
}))

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative flex min-h-screen items-center overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-tl relative w-full">
        <SectionHeading
          eyebrow="Client Testimonials"
          title="Trusted by exporters across Pakistan"
          intro="The relationships behind the shipments — in our clients' own words."
        />

        <div className="mt-10 flex justify-center">
          <CircularTestimonials
            testimonials={testimonials}
            autoplay
            colors={{
              name: '#1a2744',
              designation: '#46608c',
              testimony: '#314a72',
              arrowBackground: '#1a2744',
              arrowForeground: '#f9fafb',
              arrowHoverBackground: '#2563eb',
            }}
            fontSizes={{
              name: '1.5rem',
              designation: '0.925rem',
              quote: '1.125rem',
            }}
          />
        </div>
      </div>
    </section>
  )
}
