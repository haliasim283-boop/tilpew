import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/background/cargo.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-canvas/40" aria-hidden="true" />
      <div className="relative">
        <Contact />
      </div>
    </div>
  )
}
