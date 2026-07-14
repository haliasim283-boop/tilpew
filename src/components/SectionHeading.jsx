import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'center',
  light = false,
}) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start'
  return (
    <Reveal className={`flex max-w-2xl flex-col ${alignment}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`mt-3 section-title ${light ? 'text-white' : ''}`}>{title}</h2>
      {intro && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? 'text-navy-100' : 'text-navy-500'
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  )
}
