import React from 'react'
import Badge from '../../components/Badge/Badge.jsx'
import './HowItWorks.css'

const STEPS = [
  { n: '01', title: 'Creá tu cuenta', desc: 'Registrá tu negocio con nombre, categoría y ubicación de tus locales. Sin configuración técnica.', icon: '🚀' },
  { n: '02', title: 'Cargá tu operación', desc: 'Importá tu catálogo, agregá proveedores, clientes y asigná roles a tus empleados.', icon: '📋' },
  { n: '03', title: 'Gestioná en tiempo real', desc: 'Registrá ventas, monitoreá caja y tomá decisiones con el dashboard de analytics.', icon: '📊' },
]

export default function HowItWorks() {
  return (
    <section className="section how-section" id="como-funciona">
      <div className="container">
        <div className="section-header centered reveal">
          <Badge variant="primary">Proceso</Badge>
          <h2 className="section-title">Empezá en 3 pasos</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>Configurá tu negocio en minutos, no en semanas.</p>
        </div>
        <div className="steps-timeline">
          <div className="timeline-line" />
          {STEPS.map((s, i) => (
            <div 
              key={i} 
              className={`timeline-step ${i % 2 === 0 ? 'reveal-left' : 'reveal-right'} ${i % 2 === 0 ? 'step-left' : 'step-right'}`}
              style={{ transitionDelay: `${i * 0.2}s` }}
            >
              <div className="timeline-dot">
                <span className="timeline-dot-icon">{s.icon}</span>
              </div>
              <div className="timeline-card">
                <span className="step-number">{s.n}</span>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
