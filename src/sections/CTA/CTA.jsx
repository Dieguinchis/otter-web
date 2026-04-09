import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import './CTA.css'

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-bg">
        <div className="cta-blob" />
        <div className="cta-blob cta-blob-2" />
      </div>
      <div className="container cta-inner reveal">
        <h2 className="cta-title">Empezá hoy.<br />Los primeros 14 días son gratis.</h2>
        <p className="cta-sub">Sin tarjeta de crédito. Sin límites durante la prueba. Sin compromisos.</p>
        <div className="cta-actions">
          <Button variant="animated" to="/precios">Ver planes y empezar</Button>
          <button className="btn-outline-v">Hablar con ventas</button>
        </div>
      </div>
    </section>
  )
}
