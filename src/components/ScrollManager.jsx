import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scrolls to the top on a plain route change, or smooth-scrolls to the
// element matching the URL hash (e.g. /#origins) once it's mounted.
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    const id = hash.slice(1)
    const scrollToTarget = () => {
      const target = document.getElementById(id)
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    // Wait a tick so the destination page has rendered before measuring.
    const timer = setTimeout(scrollToTarget, 60)
    return () => clearTimeout(timer)
  }, [pathname, hash])

  return null
}
