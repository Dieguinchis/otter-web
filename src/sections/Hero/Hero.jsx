import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button.jsx'
import MonitorMockup from '../../components/Mockups/MonitorMockup.jsx'
import PhoneMockup from '../../components/Mockups/PhoneMockup.jsx'
import './Hero.css'

const TECHS = [
  { icon: '⚛️', name: 'React' },
  { icon: '⚡', name: 'Vite' },
  { icon: '🎨', name: 'CSS3' },
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />

      <div className="hero-main">
        {/* Left: Text */}
        <div className="hero-text animate-up">
          <h1 className="hero-title animate-up delay-1">
            Gestión comercial.<br />
            <span className="hero-title-accent">Simple y potente.</span>
          </h1>
          <p className="hero-sub animate-up delay-2">
            Inventario, ventas, caja, clientes, empleados y
            múltiples sucursales. Todo en una plataforma
            pensada para PyMEs argentinas.
          </p>

          <div className="hero-cta-row animate-up delay-3">
            <input type="email" placeholder="¿Cuál es tu email de trabajo?" className="hero-input" />
            <Button to="/precios" variant="primary" style={{ padding: '0.95rem 1.8rem' }}>
              Empezar gratis
            </Button>
          </div>

          <div className="hero-trust animate-up delay-4">
            <span className="trust-item"><span className="trust-check">✓</span>Sin tarjeta de crédito</span>
            <span className="trust-item"><span className="trust-check">✓</span>Cancelás cuando querés</span>
            <span className="trust-item"><span className="trust-check">✓</span>Soporte en español</span>
          </div>
        </div>

        {/* Right: Product Images (Monitor + Phone) */}
        <div className="mockups-container animate-up delay-5">
          <MonitorMockup src="/ottertask.png" alt="Dashboard en Monitor" />
          <PhoneMockup src="/ottertask.png" alt="Dashboard en Celular" />
        </div>
      </div>

      {/* Tech Strip (Infinite Marquee) */}
      <div className="hero-tech-strip">
        <div className="hero-tech-inner">
          <span className="hero-tech-label">Construido con tecnologías modernas</span>
          <div className="marquee">
            <div className="marquee-content">
              {TECHS.map((tech, i) => (
                <div key={i} className="hero-tech-item">
                  <span className="hero-tech-icon">{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
              {/* Duplicate for infinite loop */}
              {TECHS.map((tech, i) => (
                <div key={`dup-${i}`} className="hero-tech-item">
                  <span className="hero-tech-icon">{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
