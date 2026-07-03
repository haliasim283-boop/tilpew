import { useState } from 'react'
import { Mail, Phone, MapPin, Clock3, Send, CheckCircle2, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { COMPANY, ORIGINS, DESTINATIONS } from '../data'

const EMPTY = {
  name: '',
  company: '',
  phone: '',
  email: '',
  origin: '',
  destination: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) {
      next.name = 'Please enter your full name.'
    } else if (!/^[A-Za-z\s]+$/.test(form.name.trim())) {
      next.name = 'Name must contain letters only.'
    }
    if (!form.phone.trim()) {
      next.phone = 'Please enter a phone number.'
    } else if (!/^\d{11}$/.test(form.phone.replace(/[\s\-]/g, ''))) {
      next.phone = 'Phone must be exactly 11 digits (e.g. 03001234567).'
    }
    if (!form.email.trim()) next.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (!form.origin) next.origin = 'Select an origin city.'
    if (!form.destination) next.destination = 'Select a destination.'
    return next
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length === 0) {
      // Frontend only — no data is sent anywhere. Wire this to a backend
      // (e.g. Formspree, EmailJS, or your own API) when ready.
      setSubmitted(true)
    }
  }

  const reset = () => {
    setForm(EMPTY)
    setErrors({})
    setSubmitted(false)
  }

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-28">
      <div className="container-tl">
        <div className="rounded-2xl bg-navy-900/95 px-8 py-10 shadow-navy sm:px-10">
          <SectionHeading
            eyebrow="Get a Quote"
            title="Let's move your cargo"
            intro="Tell us your route and shipment details and we'll come back with rates and available space. No obligation."
            light
          />
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Info panel */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col rounded-2xl bg-navy-900 p-8 text-white">
              <span className="eyebrow text-accent-light">Reach Us Directly</span>
              <h3 className="mt-3 text-xl font-bold tracking-tight">Contact details</h3>

              <ul className="mt-8 space-y-5">
                <ContactItem icon={Mail} label="Email" value={COMPANY.email} href={`mailto:${COMPANY.email}`} />
                <ContactItem icon={Phone} label="Phone" value={COMPANY.phone} href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} />
                <ContactItem icon={MapPin} label="Office" value={COMPANY.address} />
                <ContactItem icon={Clock3} label="Hours" value={COMPANY.hours} />
              </ul>

              <div className="mt-auto pt-8">

                <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
                  <iframe
                    title="Office location"
                    src="https://www.google.com/maps?q=TRADE+INTERNATIONAL+LOGISTICS,+Saddar+Rd,+CANTT,+Peshawar,+25000,+Pakistan&z=17&output=embed"
                    className="h-40 w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} className="lg:col-span-3">
            <div className="card p-7 sm:p-9">
              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-accent/10">
                    <CheckCircle2 className="h-9 w-9 text-accent" />
                  </div>
                  <h3 className="mt-5 text-2xl font-extrabold text-navy-900">Thanks, {form.name.split(' ')[0]}!</h3>
                  <p className="mt-2 max-w-sm text-sm text-navy-500">
                    Your enquiry for{' '}
                    <span className="font-semibold text-navy-900">{form.origin}</span> →{' '}
                    <span className="font-semibold text-navy-900">{form.destination}</span> has been
                    received. Our team will get back to you shortly with a quote.
                  </p>
                  <button type="button" onClick={reset} className="btn-primary mt-7">
                    Send another enquiry <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" error={errors.name}>
                      <input
                        type="text"
                        value={form.name}
                        onChange={update('name')}
                        placeholder="e.g. Imran Khattak"
                        className={inputCls(errors.name)}
                      />
                    </Field>
                    <Field label="Company name" optional error={errors.company}>
                      <input
                        type="text"
                        value={form.company}
                        onChange={update('company')}
                        placeholder="e.g. Khattak Exports"
                        className={inputCls(errors.company)}
                      />
                    </Field>
                    <Field label="Phone" error={errors.phone}>
                      <input
                        type="tel"
                        inputMode="numeric"
                        value={form.phone}
                        onChange={(e) => {
                          const val = e.target.value.replace(/[^\d\s\-]/g, '')
                          if (val.replace(/[\s\-]/g, '').length <= 11) {
                            setForm((f) => ({ ...f, phone: val }))
                            if (errors.phone) setErrors((er) => ({ ...er, phone: undefined }))
                          }
                        }}
                        placeholder="03001234567"
                        maxLength={13}
                        className={inputCls(errors.phone)}
                      />
                    </Field>
                    <Field label="Email" error={errors.email}>
                      <input
                        type="email"
                        value={form.email}
                        onChange={update('email')}
                        placeholder="you@company.com"
                        className={inputCls(errors.email)}
                      />
                    </Field>
                    <Field label="Origin city" error={errors.origin}>
                      <select value={form.origin} onChange={update('origin')} className={selectCls(errors.origin)}>
                        <option value="" disabled>
                          Select origin
                        </option>
                        {ORIGINS.map((o) => (
                          <option key={o.code} value={`${o.city} (${o.code})`}>
                            {o.city} ({o.code})
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Destination" error={errors.destination}>
                      <select
                        value={form.destination}
                        onChange={update('destination')}
                        className={selectCls(errors.destination)}
                      >
                        <option value="" disabled>
                          Select destination
                        </option>
                        {DESTINATIONS.map((d) => (
                          <option key={d.code} value={`${d.city} (${d.code})`}>
                            {d.city}, {d.country} ({d.code})
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <div className="mt-5">
                    <Field label="Message" optional error={errors.message}>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={update('message')}
                        placeholder="Commodity, approximate weight, number of pieces, and any timing requirements…"
                        className={`${inputCls(errors.message)} resize-y`}
                      />
                    </Field>
                  </div>

                  <button type="submit" className="btn-primary mt-7 w-full bg-navy-900 hover:bg-navy-800 sm:w-auto">
                    <Send className="h-4 w-4" /> Send enquiry
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ContactItem({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/10">
        <Icon className="h-5 w-5 text-accent-light" />
      </span>
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-wide text-navy-300">{label}</div>
        <div className="text-sm font-medium text-white">{value}</div>
      </div>
    </div>
  )
  return <li>{href ? <a href={href} className="block transition-opacity hover:opacity-80">{content}</a> : content}</li>
}

function Field({ label, children, error, optional }) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center justify-between text-sm font-semibold text-navy-900">
        {label}
        {optional && <span className="text-xs font-normal text-navy-400">Optional</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs font-medium text-red-600">{error}</span>}
    </label>
  )
}

const base =
  'w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-navy-900 placeholder:text-navy-300 transition-colors focus:outline-none focus:ring-4'
const inputCls = (error) =>
  `${base} ${
    error
      ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
      : 'border-slate-300 focus:border-accent focus:ring-accent/15'
  }`
const selectCls = (error) => `${inputCls(error)} cursor-pointer appearance-none select-chevron`
