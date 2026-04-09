import React from 'react'
import Badge from '../../components/Badge/Badge.jsx'
import './TrustBanner.css'

const TRUST_ITEMS = [
  {
    icon: '🔒',
    title: 'Seguridad de Grado Bancario',
    desc: 'Tus datos están protegidos con encriptación AES-256, backups automáticos y autenticación de dos factores.'
  },
  {
    icon: '⚡',
    title: '99.9% Uptime Garantizado',
    desc: 'Infraestructura redundante en la nube con servidores optimizados para Latinoamérica. Tu negocio nunca para.'
  },
  {
    icon: '🤝',
    title: 'Soporte Humano Local',
    desc: 'Un equipo en español que entiende tu operación. Respuesta rápida por chat y email, sin bots impersonales.'
  }
]

export default function TrustBanner() {
  return (
    <section className="section trust-section" id="confianza">
      <div className="container">
        <div className="section-header centered reveal">
          <Badge variant="primary">Confianza</Badge>
          <h2 className="section-title">Tu negocio en buenas manos</h2>
        </div>
        <div className="trust-grid">
          {TRUST_ITEMS.map((item, i) => (
            <div key={i} className="trust-card reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className="trust-card-icon">{item.icon}</div>
              <h3 className="trust-card-title">{item.title}</h3>
              <p className="trust-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
