import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button.jsx'
import Badge from '../../components/Badge/Badge.jsx'
import './Differentiators.css'

const DIFF_LIST = [
  'Precios en ARS, pensado para PyMEs locales',
  'Multi-negocio y multi-sucursal desde el día uno',
  'Roles granulares: cada empleado ve lo que necesita',
  'QR integrado en cada producto, sin apps extra',
  'Auditoría completa de todas las acciones',
  'Atajos de teclado para máxima productividad',
  'Dark mode nativo y diseño mobile-first',
  'Tickets y PDFs generados al instante',
]

const MINI_CARDS = [
  { icon: '🔐', title: 'RBAC Completo', sub: 'Permisos por módulo' },
  { icon: '📍', title: 'Geolocalización', sub: 'Mapa de locales' },
  { icon: '📱', title: 'Mobile Ready', sub: 'Funciona en el celular' },
  { icon: '🌙', title: 'Dark Mode', sub: 'Cuidá tus ojos' },
  { icon: '⌨️', title: 'Atajos Alt+1-8', sub: 'Navegación rápida' },
  { icon: '📋', title: 'Auditoría', sub: 'Trazabilidad total' },
]

export default function Differentiators() {
  return (
    <section className="section diff-section">
      <div className="container diff-inner">
        <div className="diff-text reveal-left">
          <Badge variant="primary">¿Por qué OtterTask?</Badge>
          <h2 className="section-title">Construido para el comercio argentino</h2>
          <ul className="diff-list">
            {DIFF_LIST.map((item, i) => (
              <li key={i} className="diff-item">
                <span className="diff-check">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '2.5rem' }}>
            <Button variant="animated" to="/precios">Ver planes y precios</Button>
          </div>
        </div>
        <div className="diff-visual reveal-right">
          <div className="diff-feature-cards">
            {MINI_CARDS.map((c, i) => (
              <div key={i} className="diff-mini-card" style={{ transitionDelay: `${i * 0.08}s` }}>
                <span className="diff-mini-icon">{c.icon}</span>
                <div>
                  <div className="diff-mini-title">{c.title}</div>
                  <div className="diff-mini-sub">{c.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
