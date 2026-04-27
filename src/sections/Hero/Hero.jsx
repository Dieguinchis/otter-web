import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button.jsx'
import Polygons from '../../components/Polygons/Polygons.jsx'
import './Hero.css'

export default function Hero() {
  return (
    <section className="section hero">
      {/* Ambient background decor pinned to Hero */}
      <div className="hero-bg">
        <Polygons className="hero-polygons" />
        {/* Transition glow positioned between sections */}
        <div className="hero-glow hero-glow--bottom" />
      </div>

      <div className="hero-content">
        {/* Top Text Section */}
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="hero-title-dim">TODO EN UNO</span><br />
            TU ECOSISTEMA COMERCIAL UNIFICADO
          </h1>

          <p className="hero-sub">
            Unifica tu inventario, ventas y locales comerciales con la plataforma 
            multisucursal y multilocal definitiva para escalar tu negocio sin límites.
          </p>

          <div className="hero-cta-wrap">
            <Button to="/plans" variant="button-primary">
              Empezar gratis
            </Button>
          </div>

          <div className="hero-trust">
            <span className="hero-trust-item"><span className="hero-check">✓</span>Sin tarjeta de crédito</span>
            <span className="hero-trust-item"><span className="hero-check">✓</span>Cancelas cuando quieres</span>
          </div>
        </div>

        {/* The Dashboard Mockup */}
        <div className="hero-dashboard">
          <div className="hero-dashboard-inner">
            <img src="/ottertask.png" alt="OtterTask Dashboard" className="hero-dashboard-img" />
          </div>
        </div>
      </div>
    </section>
  )
}
