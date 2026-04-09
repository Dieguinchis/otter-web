import React, { useRef } from 'react'
import MonitorMockup from '../../components/Mockups/MonitorMockup.jsx'
import Badge from '../../components/Badge/Badge.jsx'
import './Features.css'

const FEATURES = [
  { icon: '📦', title: 'Inventario Inteligente', desc: 'Control total de stock con alertas de bajo nivel, códigos QR por producto e importación masiva desde CSV.', img: '/features/inventory.png' },
  { icon: '🛒', title: 'Ventas & Tickets', desc: 'Registrá ventas, generá tickets al instante y consultá el historial completo por fecha.', img: '/features/sales.png' },
  { icon: '💰', title: 'Caja Diaria', desc: 'Movimientos en tiempo real, totales acumulados y cierre de caja con un solo clic.', imgCrop: '0 20%' },
  { icon: '👥', title: 'Clientes & Deudas', desc: 'Perfil detallado por cliente, historial de deudas, cobros y facturas asociadas.', imgCrop: '0 40%' },
  { icon: '📊', title: 'Balance & Métricas', desc: 'Dashboard con top productos, top clientes y gráficos interactivos para tomar decisiones.', imgCrop: '0 60%' },
  { icon: '🏢', title: 'Multi-Sucursal', desc: 'Gestioná múltiples negocios y locales desde una sola cuenta. Cambio de sucursal en tiempo real.', imgCrop: '0 80%' },
  { icon: '👨‍💼', title: 'Roles & Permisos', desc: 'RBAC completo: asigná permisos granulares a cada empleado por módulo y sucursal.', imgCrop: '100% 0' },
  { icon: '🔍', title: 'Auditoría Completa', desc: 'Registro de quién hizo qué y cuándo. Visibilidad total para el administrador.', imgCrop: '100% 100%' },
]

function FeatureCard({ feature, index }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -5
    const rotateY = ((x - centerX) / centerX) * 5
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)'
  }

  return (
    <div
      ref={cardRef}
      className={`feature-card reveal ${feature.img || feature.imgCrop ? 'has-img' : ''}`}
      style={{ transitionDelay: `${(index % 4) * 0.07}s` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {(feature.img || feature.imgCrop) && (
        <div className="feature-card-img-wrap">
          <img 
            src={feature.img || "/ottertask.png"} 
            alt={feature.title} 
            className="feature-card-img" 
            style={feature.imgCrop ? { objectPosition: feature.imgCrop } : {}}
          />
        </div>
      )}
      <div className="feature-icon-wrap">
        <span className="feature-icon">{feature.icon}</span>
      </div>
      <h3 className="feature-title">{feature.title}</h3>
      <p className="feature-desc">{feature.desc}</p>
    </div>
  )
}

export default function Features() {
  return (
    <section className="section features-section" id="features">
      <div className="container features-inner">
        {/* Left Side: Visuals / Cards */}
        <div className="features-visuals reveal-left">
          <div className="features-grid">
            {FEATURES.map((f, i) => (
              <FeatureCard key={i} feature={f} index={i} />
            ))}
          </div>
        </div>

        {/* Right Side: Text & Images */}
        <div className="features-text-side reveal-right">
          <div className="section-header">
            <Badge variant="primary">Funcionalidades</Badge>
            <h2 className="section-title">Todo lo que tu negocio necesita</h2>
            <p className="section-sub">
              Desde el stock hasta el balance, OtterTask cubre cada aspecto de tu operación diaria para que puedas concentrarte en crecer.
            </p>
          </div>
          
          <div className="features-mockup-wrapper reveal-scale delay-2">
            <MonitorMockup src="/ottertask.png" alt="Features Preview" />
          </div>
        </div>
      </div>
    </section>
  )
}
