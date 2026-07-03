/**
 * Brand mark: the company logo image (icon + wordmark baked in).
 */
export default function Logo({ className = 'h-12 w-auto sm:h-14' }) {
  return (
    <img
      src="/logo/logo.png"
      alt="Trade International Logistics"
      className={`object-contain ${className}`}
    />
  )
}
