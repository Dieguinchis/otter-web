import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Components
import Navbar from '../../components/Navbar/Navbar.jsx'
import Footer from '../../sections/Footer/Footer.jsx'
import Badge from '../../components/Badge/Badge.jsx'

import './Precios.css'

const PLANS = [
  {
    id: 'pup',
    name: 'Pup',
    emoji: '🦦',
    tagline: 'Para comercios que arrancan',
    monthlyUsd: 9,
    featured: false,
    features: [
      { label: '1 negocio / 1 local', ok: true },
      { label: 'Hasta 500 productos en stock', ok: true },
      { label: 'Ventas y compras ilimitadas', ok: true },
      { label: 'Gestión de caja', ok: true },
      { label: 'Hasta 3 empleados', ok: true },
      { label: 'Clientes y proveedores', ok: true },
      { label: 'Generación de tickets PDF', ok: true },
      { label: 'Soporte por email', ok: true },
      { label: 'Múltiples sucursales', ok: false },
      { label: 'Roles y permisos granulares', ok: false },
      { label: 'Auditoría completa', ok: false },
      { label: 'Balance & analytics avanzados', ok: false },
      { label: 'Geolocalización de locales', ok: false },
      { label: 'Soporte prioritario', ok: false },
    ],
    cta: 'Empezar gratis 14 días',
  },
  {
    id: 'river',
    name: 'River',
    emoji: '🌊',
    tagline: 'El favorito de las PyMEs',
    monthlyUsd: 24,
    featured: true,
    features: [
      { label: '1 negocio / hasta 3 locales', ok: true },
      { label: 'Productos ilimitados', ok: true },
      { label: 'Ventas y compras ilimitadas', ok: true },
      { label: 'Gestión de caja', ok: true },
      { label: 'Hasta 15 empleados', ok: true },
      { label: 'Clientes y proveedores', ok: true },
      { label: 'Generación de tickets PDF', ok: true },
      { label: 'Soporte prioritario por chat', ok: true },
      { label: 'Múltiples sucursales (hasta 3)', ok: true },
      { label: 'Roles y permisos granulares', ok: true },
      { label: 'Auditoría completa', ok: true },
      { label: 'Balance & analytics avanzados', ok: true },
      { label: 'Geolocalización de locales', ok: true },
      { label: 'Soporte 24/7 dedicado', ok: false },
    ],
    cta: 'Empezar gratis 14 días',
  },
  {
    id: 'ocean',
    name: 'Ocean',
    emoji: '🌏',
    tagline: 'Para cadenas y distribuidoras',
    monthlyUsd: null,
    featured: false,
    features: [
      { label: 'Negocios ilimitados', ok: true },
      { label: 'Locales ilimitados', ok: true },
      { label: 'Productos ilimitados', ok: true },
      { label: 'Ventas y compras ilimitadas', ok: true },
      { label: 'Gestión de caja multi-local', ok: true },
      { label: 'Empleados ilimitados', ok: true },
      { label: 'Clientes y proveedores', ok: true },
      { label: 'Generación de tickets PDF', ok: true },
      { label: 'Múltiples sucursales (ilimitadas)', ok: true },
      { label: 'Roles y permisos granulares', ok: true },
      { label: 'Auditoría completa', ok: true },
      { label: 'Balance & analytics avanzados', ok: true },
      { label: 'Geolocalización de locales', ok: true },
      { label: 'Soporte 24/7 dedicado', ok: true },
    ],
    cta: 'Contactar ventas',
  },
]

const COMPARISON = [
  { feature: 'Negocios', starter: '1', pro: '1', enterprise: 'Ilimitados' },
  { feature: 'Locales / Sucursales', starter: '1', pro: 'Hasta 3', enterprise: 'Ilimitados' },
  { feature: 'Empleados', starter: 'Hasta 3', pro: 'Hasta 15', enterprise: 'Ilimitados' },
  { feature: 'Productos en stock', starter: '500', pro: 'Ilimitados', enterprise: 'Ilimitados' },
  { feature: 'Ventas y compras', starter: '✓', pro: '✓', enterprise: '✓' },
  { feature: 'Gestión de caja', starter: '✓', pro: '✓', enterprise: '✓' },
  { feature: 'Clientes y proveedores', starter: '✓', pro: '✓', enterprise: '✓' },
  { feature: 'Tickets y PDFs', starter: '✓', pro: '✓', enterprise: '✓' },
  { feature: 'Importación masiva CSV', starter: '✓', pro: '✓', enterprise: '✓' },
  { feature: 'QR por producto', starter: '✓', pro: '✓', enterprise: '✓' },
  { feature: 'Roles y permisos (RBAC)', starter: '—', pro: '✓', enterprise: '✓' },
  { feature: 'Auditoría completa', starter: '—', pro: '✓', enterprise: '✓' },
  { feature: 'Balance & analytics', starter: 'Básico', pro: 'Avanzado', enterprise: 'Avanzado' },
  { feature: 'Geolocalización de locales', starter: '—', pro: '✓', enterprise: '✓' },
  { feature: 'Dark mode', starter: '✓', pro: '✓', enterprise: '✓' },
  { feature: 'Atajos de teclado', starter: '✓', pro: '✓', enterprise: '✓' },
  { feature: 'Soporte', starter: 'Email', pro: 'Chat prioritario', enterprise: 'Dedicado 24/7' },
]

const FAQ = [
  {
    q: '¿Los 14 días de prueba son realmente gratis?',
    a: 'Sí, completamente gratis. No necesitás ingresar tarjeta de crédito para empezar. Al finalizar el período de prueba, podés elegir el plan que mejor se adapte a tu negocio.',
  },
  {
    q: '¿Puedo cambiar de plan en cualquier momento?',
    a: 'Claro que sí. Podés hacer upgrade o downgrade cuando quieras. Si upgrades, el cobro se prorratea. Si bajas de plan, el cambio aplica al inicio del siguiente período.',
  },
  {
    q: '¿Cómo funciona el sistema multi-sucursal?',
    a: 'En el plan Pro y Enterprise podés crear múltiples locales bajo el mismo negocio. Cada local tiene su propio inventario, caja y empleados, y podés ver todo desde un panel centralizado.',
  },
  {
    q: '¿Mis datos están seguros?',
    a: 'Los datos se almacenan en servidores con respaldos automáticos diarios. Solo vos y los empleados que autorizás tienen acceso a tu información. Jamás vendemos ni compartimos datos con terceros.',
  },
  {
    q: '¿Qué pasa si supero el límite de productos en el plan Starter?',
    a: 'Te avisamos con anticipación cuando te estés acercando al límite. Podés hacer upgrade fácilmente al plan Pro para tener productos ilimitados.',
  },
  {
    q: '¿El precio incluye IVA?',
    a: 'Los precios mostrados son sin IVA. Al momento del cobro se aplicará el IVA correspondiente según la situación impositiva de tu empresa.',
  },
  {
    q: '¿Cómo son los medios de pago?',
    a: 'Aceptamos transferencia bancaria, Mercado Pago (tarjetas de crédito/débito, dinero en cuenta) y DEBIN. Para el plan Enterprise podemos coordinar facturación personalizada.',
  },
  {
    q: '¿Tienen soporte en español?',
    a: 'Sí, todo nuestro soporte es en español argentino. El equipo de soporte está disponible de lunes a viernes de 9 a 18 hs. El plan Enterprise incluye soporte 24/7.',
  },
]

function PlanCard({ plan }) {
  const price = plan.monthlyUsd

  return (
    <div className={`plan-card ${plan.featured ? 'plan-featured' : ''} reveal`}>
      {plan.featured && <div className="plan-popular-badge">⭐ Más popular</div>}
      <div className="plan-header">
        <div className="plan-emoji">{plan.emoji}</div>
        <div>
          <h3 className="plan-name">{plan.name}</h3>
          <p className="plan-tagline">{plan.tagline}</p>
        </div>
      </div>
      <div className="plan-price-block">
        {price ? (
          <>
            <span className="plan-currency">USD</span>
            <span className="plan-price">${price}</span>
            <span className="plan-period">/ mes</span>
          </>
        ) : (
          <span className="plan-price-custom">A consultar</span>
        )}
      </div>
      <button className={`plan-cta ${plan.featured ? 'plan-cta-primary' : 'plan-cta-secondary'}`}>
        {plan.cta}
      </button>
      <ul className="plan-features">
        {plan.features.map((f, i) => (
          <li key={i} className={`plan-feature-item ${!f.ok ? 'disabled' : ''}`}>
            <span className={`feature-check ${f.ok ? 'ok' : 'no'}`}>{f.ok ? '✓' : '✗'}</span>
            {f.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span className="faq-arrow">{open ? '−' : '+'}</span>
      </button>
      <div className={`faq-a ${open ? 'expanded' : ''}`}>
        <div className="faq-a-inner">{a}</div>
      </div>
    </div>
  )
}

export default function Precios() {
  /* ── Scroll-reveal observer ── */
  useEffect(() => {
    document.title = 'OtterTask — Planes y Precios'
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const navLinks = [
    { label: 'Inicio', to: '/' },
    { label: 'Comparación', href: '#comparacion' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <div className="precios-page">
      {/* NavBar (Light variant for pricing page) */}
      <Navbar
        variant="light"
        links={navLinks}
        cta={{ label: '← Volver', to: '/' }}
      />

      {/* HERO */}
      <section className="precios-hero">
        <div className="precios-blob" />
        <div className="precios-blob precios-blob-2" />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <Badge variant="primary" className="animate-up">Planes y Precios</Badge>
          <h1 className="precios-title animate-up delay-1">Elegí el plan ideal<br /><span className="hero-title-accent">para tu comercio</span></h1>
          <p className="precios-sub animate-up delay-2">Sin sorpresas, sin letras chicas. Precios en USD, cancelás cuando querés.</p>
        </div>
      </section>

      {/* PLANS */}
      <section className="section plans-section">
        <div className="container">
          <div className="plans-grid">
            {PLANS.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
          <p className="plans-note reveal">
            🔒 Todos los planes incluyen 14 días de prueba gratuita · Sin tarjeta de crédito · Cancelás cuando querés
          </p>
        </div>
      </section>

      {/* PAYMENT METHODS */}
      <section className="section payment-section" id="medios-pago">
        <div className="container">
          <div className="section-header centered reveal">
            <Badge variant="primary">Medios de Pago</Badge>
            <h2 className="section-title">Pagá como más te convenga</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>Todos los métodos disponibles para Argentina.</p>
          </div>
          <div className="payment-grid">
            {[
              { icon: '💳', title: 'Tarjetas de crédito/débito', desc: 'Visa, Mastercard, American Express. Hasta 12 cuotas sin interés en planes anuales.', badge: 'Más usado' },
              { icon: '📱', title: 'Mercado Pago', desc: 'Pagá con tu cuenta de Mercado Pago, dinero en cuenta o tarjetas vinculadas.', badge: null },
              { icon: '🏦', title: 'Transferencia bancaria', desc: 'CBU / CVU a nombre de OtterTask. El acceso se activa dentro de las 2 hs hábiles.', badge: null },
              { icon: '⚡', title: 'DEBIN', desc: 'Débito inmediato desde tu cuenta bancaria. Disponible para cuentas de personas jurídicas.', badge: null },
            ].map((p, i) => (
              <div key={i} className="payment-card reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="payment-icon">{p.icon}</div>
                <div>
                  <div className="payment-title">
                    {p.title}
                    {p.badge && <Badge style={{ marginLeft: 8 }}>{p.badge}</Badge>}
                  </div>
                  <div className="payment-desc">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="section comparison-section" id="comparacion">
        <div className="container">
          <div className="section-header centered reveal">
            <Badge variant="primary">Comparación</Badge>
            <h2 className="section-title">¿Qué incluye cada plan?</h2>
          </div>
          <div className="table-wrap reveal">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th className="col-feature">Funcionalidad</th>
                  <th className="col-plan">🦦 Pup</th>
                  <th className="col-plan featured-col">🌊 River</th>
                  <th className="col-plan">🌏 Ocean</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={i}>
                    <td className="cell-feature">{row.feature}</td>
                    <td className="cell-val">{row.starter === '✓' ? <span className="cell-ok">✓</span> : row.starter === '—' ? <span className="cell-no">—</span> : row.starter}</td>
                    <td className="cell-val featured-col">{row.pro === '✓' ? <span className="cell-ok">✓</span> : row.pro === '—' ? <span className="cell-no">—</span> : row.pro}</td>
                    <td className="cell-val">{row.enterprise === '✓' ? <span className="cell-ok">✓</span> : row.enterprise === '—' ? <span className="cell-no">—</span> : row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section" id="faq">
        <div className="container faq-container">
          <div className="section-header centered reveal">
            <Badge variant="primary">FAQ</Badge>
            <h2 className="section-title">Preguntas frecuentes</h2>
          </div>
          <div className="faq-list">
            {FAQ.map((item, i) => (
              <AccordionItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" style={{ padding: '5rem 1.5rem' }}>
        <div className="cta-bg"><div className="cta-blob" /></div>
        <div className="container cta-inner reveal">
          <h2 className="cta-title">¿Todavía tenés dudas?</h2>
          <p className="cta-sub">Escribinos y te ayudamos a elegir el plan ideal para tu negocio.</p>
          <div className="cta-actions">
            <button className="btn-primary" style={{ fontSize: '1.05rem' }}>Hablar con el equipo →</button>
            <Link to="/"><button className="btn-secondary">Ver funcionalidades</button></Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}
