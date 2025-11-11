import { useEffect, useRef } from 'react'

export default function Marquee({ items = [], speed = 40 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let start = null
    let raf
    const step = (ts) => {
      if (start === null) start = ts
      const elapsed = ts - start
      el.style.transform = `translateX(${-((elapsed / 1000) * speed) % (el.scrollWidth / 2)}px)`
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [speed])

  const doubled = [...items, ...items]
  return (
    <div className="relative overflow-hidden">
      <div ref={ref} className="flex gap-8 whitespace-nowrap will-change-transform">
        {doubled.map((item, i) => (
          <span key={i} className="text-sm text-neutral-600">{item}</span>
        ))}
      </div>
    </div>
  )
}
