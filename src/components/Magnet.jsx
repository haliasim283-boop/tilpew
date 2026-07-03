import { useState, useEffect, useRef } from 'react'

export default function Magnet({
  children,
  padding = 80,
  magnetStrength = 3,
  disabled = false,
  className = '',
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [active, setActive] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (disabled) {
      setPosition({ x: 0, y: 0 })
      return
    }

    function onMouseMove(e) {
      if (!ref.current) return
      const { left, top, width, height } = ref.current.getBoundingClientRect()
      const cx = left + width / 2
      const cy = top + height / 2
      const dx = Math.abs(cx - e.clientX)
      const dy = Math.abs(cy - e.clientY)

      if (dx < width / 2 + padding && dy < height / 2 + padding) {
        setActive(true)
        setPosition({
          x: (e.clientX - cx) / magnetStrength,
          y: (e.clientY - cy) / magnetStrength,
        })
      } else {
        setActive(false)
        setPosition({ x: 0, y: 0 })
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [padding, magnetStrength, disabled])

  return (
    <div ref={ref} className={className} style={{ display: 'inline-block' }}>
      <div
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: active ? 'transform 0.2s ease-out' : 'transform 0.4s ease-in-out',
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  )
}
