import { useEffect, useRef } from 'react'

export function useScrollReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
    )

    const el = ref.current
    if (el) {
      const reveals = el.querySelectorAll('.reveal')
      reveals.forEach((r) => {
        // Check if already in viewport
        const rect = r.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          r.classList.add('visible')
        } else {
          observer.observe(r)
        }
      })
    }

    return () => observer.disconnect()
  }, [])

  return ref
}
