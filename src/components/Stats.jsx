import Reveal from './Reveal'
import Counter from './Counter'
import { STATS } from '../data'

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-amber-500 py-16 sm:py-20">
      {/* faint route line accent */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.5]"
        viewBox="0 0 1440 240"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,180 C360,60 720,220 1080,120 1260,70 1380,150 1440,110"
          fill="none"
          stroke="#1a2744"
          strokeOpacity="0.18"
          strokeWidth="1.5"
          strokeDasharray="5 9"
        />
      </svg>

      <div className="container-tl relative">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90} className="text-center">
              <div className="font-mono text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                <Counter to={stat.value} />
                {stat.suffix}
              </div>
              <div className="mt-2 text-sm font-semibold text-navy-900 sm:text-base">
                {stat.label}
              </div>
              <div className="mt-1 text-xs text-navy-800">{stat.note}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
