import { ArrowRight, Plane, ShieldCheck, Clock3 } from 'lucide-react'
import Lightfall from './Lightfall'
import { COMPANY } from '../data'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-navy-900 pt-32 pb-20 sm:pt-36 lg:pt-72 lg:pb-28"
    >
      {/* Lightfall WebGL background */}
      <div className="absolute inset-0" aria-hidden="true">
        <Lightfall
          colors={['#a6c8ff', '#5227ff', '#ff9ffc']}
          backgroundColor="#0a29ff"
          speed={0.5}
          streakCount={4}
          streakWidth={0.7}
          streakLength={1.8}
          glow={0.5}
          density={0.5}
          twinkle={0.4}
          zoom={3.5}
          backgroundGlow={0.3}
          opacity={0.9}
          mouseInteraction={true}
          mouseStrength={0.3}
          mouseRadius={0.6}
        />
      </div>
      {/* Dark veil so streaks don't overpower the content */}
      <div className="absolute inset-0 bg-navy-900/55" aria-hidden="true" />

      <div className="container-tl relative">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Copy */}
          <div className="lg:col-span-7">
            <div className="inline-block">
              <p className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                {COMPANY.name}
              </p>
              <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.25em] text-accent-light">
                Est. {COMPANY.founded}
              </p>
            </div>

            <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              Pakistan&apos;s Trusted{' '}
              <span className="text-accent-light">Air Freight</span> Partner
            </h1>

            <p className="mt-3 font-mono text-sm font-semibold uppercase tracking-[0.22em] text-navy-200">
              Since 2009
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-100 sm:text-lg">
              Reliable air cargo exports from six Pakistani gateways to the Gulf, the UK and
              Canada with in-house customs clearing, Form-E and CASS billing handled end to end.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#contact" className="btn-primary">
                Get a Quote <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#services" className="btn-ghost">
                Explore Services
              </a>
            </div>

            {/* trust row */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-navy-200">
            </div>
          </div>

          {/* Air Waybill style card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm animate-float-slow">
              <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-6 shadow-navy backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-navy-200">
                    Air Waybill
                  </span>
                  <span className="code-chip rounded-md bg-accent/20 px-2 py-1 text-accent-light">
                    214-AWB
                  </span>
                </div>

                {/* route */}
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <div className="code-chip text-2xl font-extrabold text-white">PEW</div>
                    <div className="mt-1 text-xs text-navy-200">Peshawar</div>
                  </div>
                  <div className="mx-3 flex flex-1 items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-light" />
                    <span className="h-px flex-1 bg-gradient-to-r from-accent-light/50 to-accent-light/50" />
                    <Plane className="h-4 w-4 rotate-90 text-accent-light" />
                    <span className="h-px flex-1 bg-gradient-to-r from-accent-light/50 to-accent-light/50" />
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-light" />
                  </div>
                  <div className="text-right">
                    <div className="code-chip text-2xl font-extrabold text-white">DXB</div>
                    <div className="mt-1 text-xs text-navy-200">Dubai</div>
                  </div>
                </div>

                {/* fields */}
                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
                  <Field label="Pieces" value="12" />
                  <Field label="Weight" value="480 kg" />
                  <Field label="Status" value="In Transit" accent />
                </div>

                {/* barcode placeholder */}
                <div className="mt-6 flex h-9 items-end gap-[3px] overflow-hidden rounded-md bg-white/90 px-3 py-2">
                  {Array.from({ length: 38 }).map((_, i) => (
                    <span
                      key={i}
                      className="w-[2px] shrink-0 bg-navy-900"
                      style={{ height: `${30 + ((i * 53) % 60)}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, value, accent = false }) {
  return (
    <div>
      <div className="text-[10px] font-semibold uppercase tracking-wider text-navy-300">
        {label}
      </div>
      <div className={`mt-1 text-sm font-bold ${accent ? 'text-accent-light' : 'text-white'}`}>
        {value}
      </div>
    </div>
  )
}
