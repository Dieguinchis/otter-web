import Badge from '../../components/Badge/Badge.jsx'
import Button from '../../components/Button/Button.jsx'
import Polygons from '../../components/Polygons/Polygons.jsx'
import { PLANS } from '../../data/pricingData.js'
import './Pricing.css'

function PlanCard({ plan }) {
  const price = plan.monthlyUsd

  return (
    <div className={`plan-card ${plan.featured ? 'plan-featured' : ''} reveal`}>
      {plan.featured && <div className="plan-glow" />}
      {plan.featured && <div className="plan-popular-badge">Recomendado</div>}
      
      <div className="plan-inner">
        <div className="plan-header">
          <div className="plan-emoji-wrap">
            <span className="plan-emoji">{plan.emoji}</span>
          </div>
          <div>
            <h3 className="plan-name">{plan.name}</h3>
            <p className="plan-tagline">{plan.tagline}</p>
          </div>
        </div>

        <div className="plan-price-block">
          {price ? (
            <div className="price-main">
              <div className="price-value-wrap">
                <span className="plan-currency">USD</span>
                <span className="plan-price">${price}</span>
              </div>
              <span className="plan-period">por mes / final</span>
            </div>
          ) : (
            <div className="price-custom">
              <span className="plan-price-custom">Custom</span>
              <p className="plan-tagline" style={{ marginTop: 0 }}>Basado en tus necesidades</p>
            </div>
          )}
        </div>

        <Button 
          variant="button-secondary" 
          className="plan-button"
        >
          {plan.cta}
        </Button>

        <div className="plan-features-header">¿Qué incluye?</div>
        <ul className="plan-features">
          {plan.features.map((f, i) => (
            <li key={i} className={`plan-feature-item ${!f.ok ? 'disabled' : ''}`}>
              <div className={`feature-icon-wrap ${f.ok ? 'ok' : 'no'}`}>
                {f.ok ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                )}
              </div>
              <span className="feature-text">{f.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Pricing() {
  return (
    <div className="pricing-section-wrapper">
      {/* Background Elements (Geometry & Lights) */}
      <div className="hero-bg">
        <Polygons className="pricing-polygons" />
        <div className="hero-glow hero-glow--bottom" />
      </div>

      {/* PLANS GRID */}
      <section className="section plans-section">

        <div className="plans-hero">
          <Badge 
            className="animate-up"
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>}
          >
            Planes y Precios
          </Badge>
          <h1 className="title-section animate-up delay-1">
            Elegí el plan ideal para tu comercio
          </h1>
          <p className="plans-sub animate-up delay-2">
            Sin sorpresas, sin letras chicas. Precios en USD, cancelás cuando querés.
          </p>
        </div>

        <div className="plans-grid">
          {PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
          <p className="plans-note reveal">
            🔒 Todos los planes incluyen 14 días de prueba gratuita · Sin tarjeta de crédito · Cancelás cuando querés
          </p>
      </section>
    </div>
  )
}
