import React, { useEffect, useRef, useState } from 'react'
import './Stats.css'

const STATS = [
  { value: 12, suffix: '+', label: 'módulos integrados' },
  { value: 99, suffix: '%', label: 'uptime garantizado' },
  { value: 500, suffix: '+', label: 'negocios activos' },
  { value: 0, suffix: '', label: 'límites de registros', display: '∞' },
]

function useCountUp(end, duration = 2000, startTrigger = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!startTrigger) return
    let start = 0
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) { setCount(end); clearInterval(timer) }
      else { setCount(Math.ceil(start)) }
    }, 16)
    return () => clearInterval(timer)
  }, [end, duration, startTrigger])
  return count
}

function StatItem({ stat, visible, delay }) {
  const count = useCountUp(stat.value, 2000, visible)
  return (
    <div className="stat-item reveal" style={{ transitionDelay: `${delay}s` }}>
      <span className="stat-value">{stat.display || count}{stat.suffix}</span>
      <span className="stat-label">{stat.label}</span>
    </div>
  )
}

export default function Stats() {
  const [statsVisible, setStatsVisible] = useState(false)
  const statsRef = useRef(null)

  useEffect(() => {
    if (!statsRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true) },
      { threshold: 0.3 }
    )
    observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats-band" ref={statsRef}>
      <div className="container stats-inner">
        {STATS.map((s, i) => (
          <StatItem key={i} stat={s} visible={statsVisible} delay={i * 0.1} />
        ))}
      </div>
    </section>
  )
}
