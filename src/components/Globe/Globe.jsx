import React, { useRef, useEffect } from 'react'
import { geoOrthographic, geoPath, geoGraticule, geoInterpolate, geoDistance } from 'd3-geo'
import * as topojson from 'topojson-client'
import worldData from '../../assets/world-110m.json'
import './Globe.css'

const LOCS = [
  { lat: -34.6, lng: -58.4, c: '#8b77f0', r: 5, name: 'Buenos Aires', country: 'Argentina', flag: '🇦🇷' },
  { lat: 19.4, lng: -99.1, c: '#00d4ff', r: 4, name: 'CDMX', country: 'México', flag: '🇲🇽' },
  { lat: -23.5, lng: -46.6, c: '#ff6b9d', r: 4.5, name: 'São Paulo', country: 'Brasil', flag: '🇧🇷' },
  { lat: 40.4, lng: -3.7, c: '#00e5a0', r: 5, name: 'Madrid', country: 'España', flag: '🇪🇸' },
  { lat: 51.5, lng: -0.1, c: '#ffb347', r: 4, name: 'Londres', country: 'Reino Unido', flag: '🇬🇧' },
  { lat: 25.2, lng: 55.3, c: '#8b77f0', r: 4.5, name: 'Dubái', country: 'EAU', flag: '🇦🇪' },
  { lat: 1.3, lng: 103.8, c: '#00d4ff', r: 5, name: 'Singapur', country: 'Singapur', flag: '🇸🇬' },
  { lat: 35.7, lng: 139.7, c: '#00e5a0', r: 4, name: 'Tokio', country: 'Japón', flag: '🇯🇵' },
  { lat: -33.9, lng: 151.2, c: '#ffb347', r: 3.5, name: 'Sídney', country: 'Australia', flag: '🇦🇺' },
  { lat: -1.3, lng: 36.8, c: '#ff6b9d', r: 3.5, name: 'Nairobi', country: 'Kenia', flag: '🇰🇪' },
  { lat: 31.2, lng: 121.5, c: '#8b77f0', r: 4, name: 'Shanghái', country: 'China', flag: '🇨🇳' },
  { lat: 52.5, lng: 13.4, c: '#00d4ff', r: 3.5, name: 'Berlín', country: 'Alemania', flag: '🇩🇪' },
  { lat: 48.9, lng: 2.3, c: '#00e5a0', r: 3.5, name: 'París', country: 'Francia', flag: '🇫🇷' },
  { lat: 43.7, lng: -79.4, c: '#ffb347', r: 4, name: 'Toronto', country: 'Canadá', flag: '🇨🇦' },
  { lat: 40.7, lng: -74.0, c: '#ff6b9d', r: 4, name: 'New York', country: 'EE.UU.', flag: '🇺🇸' },
  { lat: 55.7, lng: 37.6, c: '#8b77f0', r: 3.5, name: 'Moscú', country: 'Rusia', flag: '🇷🇺' },
  { lat: 28.6, lng: 77.2, c: '#00d4ff', r: 4, name: 'Nueva Delhi', country: 'India', flag: '🇮🇳' },
  { lat: 39.9, lng: 116.4, c: '#00e5a0', r: 4, name: 'Pekín', country: 'China', flag: '🇨🇳' },
  { lat: -26.2, lng: 28.0, c: '#ffb347', r: 3.5, name: 'Johannesburgo', country: 'Sudáfrica', flag: '🇿🇦' },
  { lat: 6.5, lng: 3.4, c: '#ff6b9d', r: 3.5, name: 'Lagos', country: 'Nigeria', flag: '🇳🇬' },
  { lat: 4.7, lng: -74.0, c: '#8b77f0', r: 3.5, name: 'Bogotá', country: 'Colombia', flag: '🇨🇴' },
  { lat: -33.4, lng: -70.6, c: '#00d4ff', r: 3.5, name: 'Santiago', country: 'Chile', flag: '🇨🇱' },
]

const CONNS = [
  [0,3],[0,2],[0,20],[0,21],[3,4],[3,11],[3,12],[4,14],[4,13],
  [5,6],[5,9],[5,15],[6,7],[6,10],[7,8],[7,17],[5,16],[11,15],
  [12,15],[13,14],[1,14],[1,20],[2,21],[9,18],[9,19],[16,17],
  [0,1],[3,5],[6,16],[10,17],
]

const countries = topojson.feature(worldData, worldData.objects.countries).features

export default function Globe() {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const tooltipRef = useRef(null)
  const state = useRef({
    rot: [-28, -16], drag: false, interacted: false, lx: 0, ly: 0,
    arc: 0, t0: Date.now(), W: 0, H: 0, R: 0, animId: null,
    hoveredCity: null,
  })

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    const tooltip = tooltipRef.current
    if (!container || !canvas) return
    const ctx = canvas.getContext('2d')
    const s = state.current

    function resize() {
      s.W = container.offsetWidth
      s.H = container.offsetHeight
      canvas.width = s.W
      canvas.height = s.H
      s.R = Math.min(s.W, s.H) * 0.35
    }
    resize()

    const CX = () => s.W * 0.5
    const CY = () => s.H * 0.5

    function getProjection() {
      return geoOrthographic().scale(s.R).translate([CX(), CY()]).rotate(s.rot).clipAngle(90)
    }


    function draw() {
      const p = getProjection()
      const pathGen = geoPath(p, ctx)
      const cx = CX(), cy = CY()
      const t = (Date.now() - s.t0) / 1000

      ctx.clearRect(0, 0, s.W, s.H)

      // Atmosphere Halo
      const halo = ctx.createRadialGradient(cx, cy, s.R, cx, cy, s.R * 1.24)
      halo.addColorStop(0, 'rgba(124, 58, 237, 0.12)')
      halo.addColorStop(1, 'rgba(124, 58, 237, 0)')
      ctx.fillStyle = halo
      ctx.beginPath()
      ctx.arc(cx, cy, s.R * 1.24, 0, 2 * Math.PI)
      ctx.fill()

      // Ocean sphere
      ctx.save()
      ctx.beginPath()
      ctx.arc(cx, cy, s.R, 0, 2 * Math.PI)
      ctx.fillStyle = '#030006'
      ctx.fill()
      
      // Inner sphere glow
      const innerGlow = ctx.createRadialGradient(cx, cy, s.R * 0.7, cx, cy, s.R)
      innerGlow.addColorStop(0, 'rgba(124, 58, 237, 0)')
      innerGlow.addColorStop(1, 'rgba(124, 58, 237, 0.08)')
      ctx.fillStyle = innerGlow
      ctx.fill()
      ctx.restore()

      // Graticule
      ctx.beginPath()
      pathGen(geoGraticule()())
      ctx.strokeStyle = 'rgba(124, 58, 237, 0.05)'
      ctx.lineWidth = 0.4
      ctx.stroke()

      // Countries
      countries.forEach(f => {
        ctx.beginPath()
        pathGen(f)
        ctx.fillStyle = 'rgba(124, 58, 237, 0.18)' // Vibrant purple semi-translucent
        ctx.fill()
        ctx.strokeStyle = 'rgba(167, 139, 250, 0.25)' // Brighter border
        ctx.lineWidth = 0.5
        ctx.stroke()
      })

      // Connection arcs
      if (s.arc > 0) {
        CONNS.forEach(([i, j], ci) => {
          const a = LOCS[i], b = LOCS[j]
          const interp = geoInterpolate([a.lng, a.lat], [b.lng, b.lat])
          const steps = 60
          ctx.beginPath()
          let started = false
          for (let st = 0; st <= Math.floor(steps * Math.min(s.arc, 1)); st++) {
            const pt = interp(st / steps)
            const vis = geoDistance(pt, [-s.rot[0], -s.rot[1]]) < Math.PI / 2
            const xy = p(pt)
            if (!vis || !xy) { started = false; continue }
            started ? ctx.lineTo(xy[0], xy[1]) : (ctx.moveTo(xy[0], xy[1]), started = true)
          }
          ctx.strokeStyle = `rgba(109,90,205,${0.2 + 0.08 * Math.sin(t * 0.9 + ci)})`
          ctx.lineWidth = 0.7
          ctx.setLineDash([3, 5])
          ctx.stroke()
          ctx.setLineDash([])
        })

        // Animated particles on arcs
        if (s.arc >= 1) {
          CONNS.forEach(([i, j], ci) => {
            const a = LOCS[i], b = LOCS[j]
            const interp = geoInterpolate([a.lng, a.lat], [b.lng, b.lat])
            const pt = interp((t * 0.28 + ci * 0.13) % 1)
            const vis = geoDistance(pt, [-s.rot[0], -s.rot[1]]) < Math.PI / 2
            const xy = p(pt)
            if (!vis || !xy) return
            ctx.beginPath()
            ctx.arc(xy[0], xy[1], 1.6, 0, 2 * Math.PI)
            ctx.fillStyle = 'rgba(180,160,255,0.85)'
            ctx.fill()
          })
        }
      }

      // City dots — store positions for hover detection
      s._cityPositions = []
      LOCS.forEach((loc, idx) => {
        const coords = [loc.lng, loc.lat]
        if (geoDistance(coords, [-s.rot[0], -s.rot[1]]) >= Math.PI / 2) return
        const xy = p(coords)
        if (!xy) return

        s._cityPositions.push({ x: xy[0], y: xy[1], idx })

        const pulse = (Math.sin(t * 2.1 + idx * 0.85) + 1) / 2
        const r = loc.r
        const isHovered = s.hoveredCity === idx

        // Outer pulse
        ctx.beginPath(); ctx.arc(xy[0], xy[1], r + 5 + pulse * 5, 0, 2 * Math.PI)
        ctx.fillStyle = loc.c + (isHovered ? '30' : '14'); ctx.fill()
        // Middle glow
        ctx.beginPath(); ctx.arc(xy[0], xy[1], r + (isHovered ? 4 : 2), 0, 2 * Math.PI)
        ctx.fillStyle = loc.c + (isHovered ? '50' : '2a'); ctx.fill()
        // Core dot
        ctx.beginPath(); ctx.arc(xy[0], xy[1], r + (isHovered ? 1.5 : 0), 0, 2 * Math.PI)
        ctx.fillStyle = loc.c; ctx.fill()
        ctx.strokeStyle = isHovered ? '#fff' : 'rgba(255,255,255,0.45)'
        ctx.lineWidth = isHovered ? 1.5 : 1; ctx.stroke()
      })

      // Globe edge / Outline
      ctx.save()
      ctx.beginPath(); ctx.arc(cx, cy, s.R, 0, 2 * Math.PI)
      ctx.strokeStyle = 'rgba(124, 58, 237, 0.4)'
      ctx.lineWidth = 1.5; ctx.stroke()
      
      ctx.beginPath(); ctx.arc(cx, cy, s.R + 2, 0, 2 * Math.PI)
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.15)' // Cyan glow
      ctx.lineWidth = 4; ctx.stroke()
      
      // Subtle outer ring
      ctx.beginPath(); ctx.arc(cx, cy, s.R + 8, 0, 2 * Math.PI)
      ctx.strokeStyle = 'rgba(124, 58, 237, 0.03)'
      ctx.lineWidth = 12; ctx.stroke()
      ctx.restore()
    }

    function animate() {
      // Only auto-rotate when NOT dragging and has NOT been interacted with
      if (!s.drag) {
        s.rot[0] += 0.09
      }
      if (s.arc < 1) s.arc += 0.005
      draw()
      s.animId = requestAnimationFrame(animate)
    }
    animate()

    // ── Hover detection for city tooltips ──
    const onMouseMoveCanvas = e => {
      if (s.drag) return
      const rect = canvas.getBoundingClientRect()
      const mx = (e.clientX - rect.left) * (canvas.width / rect.width)
      const my = (e.clientY - rect.top) * (canvas.height / rect.height)

      let found = null
      const hitRadius = 12
      for (const cp of (s._cityPositions || [])) {
        const dx = mx - cp.x, dy = my - cp.y
        if (dx * dx + dy * dy < hitRadius * hitRadius) {
          found = cp.idx
          break
        }
      }

      s.hoveredCity = found

      if (found !== null && tooltip) {
        const loc = LOCS[found]
        tooltip.innerHTML = `
          <div class="tt-header">
            <span class="tt-flag">${loc.flag}</span>
            <span class="tt-city">${loc.name}, ${loc.country}</span>
          </div>
          <div class="tt-details">
            <span>Operación Activa</span>
            <span class="tt-sep">•</span>
            <span>Región Latam</span>
          </div>
        `
        tooltip.style.opacity = '1'
        tooltip.style.left = `${e.clientX - rect.left}px`
        tooltip.style.top = `${e.clientY - rect.top - 46}px`
        canvas.style.cursor = 'pointer'
      } else if (tooltip) {
        tooltip.style.opacity = '0'
        canvas.style.cursor = s.drag ? 'grabbing' : 'grab'
      }
    }

    const onMouseLeaveCanvas = () => {
      s.hoveredCity = null
      if (tooltip) tooltip.style.opacity = '0'
    }

    // Drag handlers
    const onMD = e => { s.drag = true; s.interacted = true; s.lx = e.clientX; s.ly = e.clientY; canvas.style.cursor = 'grabbing' }
    const onMU = () => { s.drag = false; canvas.style.cursor = 'grab' }
    const onMM = e => {
      if (!s.drag) return
      s.rot[0] += (e.clientX - s.lx) * 0.35
      s.rot[1] = Math.max(-80, Math.min(80, s.rot[1] - (e.clientY - s.ly) * 0.35))
      s.lx = e.clientX; s.ly = e.clientY
      // Hide tooltip while dragging
      if (tooltip) tooltip.style.opacity = '0'
    }
    const onTS = e => { s.drag = true; s.interacted = true; s.lx = e.touches[0].clientX; s.ly = e.touches[0].clientY }
    const onTE = () => { s.drag = false }
    const onTM = e => {
      if (!s.drag) return
      s.rot[0] += (e.touches[0].clientX - s.lx) * 0.35
      s.rot[1] = Math.max(-80, Math.min(80, s.rot[1] - (e.touches[0].clientY - s.ly) * 0.35))
      s.lx = e.touches[0].clientX; s.ly = e.touches[0].clientY
    }

    canvas.addEventListener('mousedown', onMD)
    window.addEventListener('mouseup', onMU)
    window.addEventListener('mousemove', onMM)
    canvas.addEventListener('mousemove', onMouseMoveCanvas)
    canvas.addEventListener('mouseleave', onMouseLeaveCanvas)
    canvas.addEventListener('touchstart', onTS, { passive: true })
    canvas.addEventListener('touchend', onTE)
    canvas.addEventListener('touchmove', onTM, { passive: true })
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(s.animId)
      canvas.removeEventListener('mousedown', onMD)
      window.removeEventListener('mouseup', onMU)
      window.removeEventListener('mousemove', onMM)
      canvas.removeEventListener('mousemove', onMouseMoveCanvas)
      canvas.removeEventListener('mouseleave', onMouseLeaveCanvas)
      canvas.removeEventListener('touchstart', onTS)
      canvas.removeEventListener('touchend', onTE)
      canvas.removeEventListener('touchmove', onTM)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="globe-container" ref={containerRef}>
      <canvas ref={canvasRef} className="globe-canvas" />
      <div ref={tooltipRef} className="globe-tooltip" />
    </div>
  )
}
