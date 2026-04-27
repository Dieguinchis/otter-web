import React from 'react'
import { ShieldCheck } from 'lucide-react'
import Badge from '../../components/Badge/Badge.jsx'
import './TrustBanner.css'

const ShieldIcon = () => (
  <svg className="shield-svg" viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shieldGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#581c87" stopOpacity="0.15" />
      </linearGradient>
      <linearGradient id="shieldStroke" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#a78bfa" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
    </defs>
    <path
      d="M100 8 L185 40 L185 110 C185 158 145 192 100 210 C55 192 15 158 15 110 L15 40 Z"
      fill="url(#shieldGrad)"
      stroke="url(#shieldStroke)"
      strokeWidth="2"
    />
    <path
      d="M100 30 L168 55 L168 110 C168 148 138 176 100 192 C62 176 32 148 32 110 L32 55 Z"
      fill="none"
      stroke="rgba(167, 139, 250, 0.2)"
      strokeWidth="1"
    />
    <path
      d="M70 108 L90 128 L132 86"
      stroke="white"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
)

const ZapIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
)

const CloudIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </svg>
)

const ShieldCheckIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

const LockIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24">
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)

const AlertIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
)

/* ── Visuals for each card ── */

const VisAlwaysOn = () => (
  <div className="vis-alwayson">
    <div className="ao-ring" />
    <div className="ao-ring" />
    <div className="ao-ring" />
    <div className="ao-ring" />
    <div className="ao-core">
      <ZapIcon />
    </div>
  </div>
)

const VisCloud = () => (
  <div className="vis-cloud">
    <div className="cloud-glow" />
    <div className="cloud-icon">
      <CloudIcon size={56} color="#7c3aed" />
      <div style={{ marginTop: '-15px' }}>
        <LockIcon size={22} color="#a78bfa" />
      </div>
    </div>
  </div>
)

const VisShields = () => (
  <div className="vis-shields">
    <div className="shield-row">
      <div className="sh-cell active"><ShieldCheckIcon /></div>
      <div className="sh-cell warn">
        <AlertIcon />
        <span className="sh-pulse" />
      </div>
      <div className="sh-cell active"><ShieldCheckIcon /></div>
      <div className="sh-cell active"><ShieldCheckIcon /></div>
    </div>
    <div className="shield-row">
      <div className="sh-cell active"><ShieldCheckIcon /></div>
      <div className="sh-cell active"><ShieldCheckIcon /></div>
      <div className="sh-cell active"><ShieldCheckIcon /></div>
      <div className="sh-cell warn"><AlertIcon /></div>
    </div>
  </div>
)

const VisTrustless = () => (
  <div className="vis-trustless">
    {/* SVG Connections for better alignment */}
    <svg className="tl-svg" viewBox="0 0 110 100" fill="none">
      <line x1="10" y1="14" x2="55" y2="50" stroke="rgba(124, 58, 237, 0.25)" strokeWidth="1" />
      <line x1="10" y1="62" x2="55" y2="50" stroke="rgba(124, 58, 237, 0.25)" strokeWidth="1" />
      <line x1="100" y1="14" x2="55" y2="50" stroke="rgba(124, 58, 237, 0.25)" strokeWidth="1" />
      <line x1="100" y1="62" x2="55" y2="50" stroke="rgba(124, 58, 237, 0.25)" strokeWidth="1" />
      
      {/* Decorative Dots */}
      <circle cx="10" cy="14" r="3.5" fill="rgba(124, 58, 237, 0.5)" />
      <circle cx="10" cy="62" r="3.5" fill="rgba(124, 58, 237, 0.5)" />
      <circle cx="100" cy="14" r="3.5" fill="rgba(124, 58, 237, 0.5)" />
      <circle cx="100" cy="62" r="3.5" fill="rgba(124, 58, 237, 0.5)" />
      <circle cx="4" cy="38" r="3.5" fill="rgba(124, 58, 237, 0.2)" />
      <circle cx="106" cy="38" r="3.5" fill="rgba(124, 58, 237, 0.2)" />
    </svg>
    <div className="tl-core">
      <LockIcon size={22} />
    </div>
  </div>
)

/* ── Card data ── */

const cards = [
  {
    id: 'auth-jwt',
    label: 'Autenticación Segura',
    labelIcon: <LockIcon size={12} />,
    title: 'Autenticación por JWT Token',
    description: 'Sesiones protegidas con JSON Web Tokens y Bearer Authorization para garantizar el acceso únicamente a usuarios verificados.',
    visual: <VisCloud />,
  },
  {
    id: 'rbac-roles',
    label: 'Control Granular',
    labelIcon: <ShieldCheckIcon size={12} />,
    title: 'Sistema de Roles (RBAC)',
    description: 'Control de acceso basado en roles. Asigná permisos específicos por módulo y por sucursal a cada empleado del sistema.',
    visual: <VisShields />,
  },
  {
    id: 'audit-log',
    label: 'Trazabilidad Total',
    labelIcon: <ZapIcon size={12} />,
    title: 'Registro de Auditoría',
    description: 'Log detallado de cada acción realizada. El sistema registra de forma inmutable quién, qué, cuándo y desde dónde operó.',
    visual: <VisAlwaysOn />,
  },
  {
    id: 'multi-tenant',
    label: 'Datos Segmentados',
    labelIcon: <CloudIcon size={12} />,
    title: 'Arquitectura Multi-Tenant',
    description: 'La información de cada negocio y local está estructuralmente separada para prevenir fugas de datos y cruces de stock.',
    visual: <VisTrustless />,
  },
]

export default function TrustBanner() {
  return (
    <section className="trust-hero">

      {/* Decorative Background Lines */}
      <svg className="trust-bg-lines" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="none">
        <path d="M100 0 V500 L250 600" stroke="rgba(124, 58, 237, 0.1)" strokeWidth="2" />
        <path d="M1100 0 V500 L950 600" stroke="rgba(124, 58, 237, 0.1)" strokeWidth="2" />
      </svg>

      {/* Radial glow background */}
      <div className="trust-hero__glow" aria-hidden="true" />

      {/* Badge */}
      <div className="reveal-up">
        <Badge icon={<ShieldCheck size={16} />}>
          Seguridad de Grado Bancario
        </Badge>
      </div>

      {/* Floating items */}
      <div className="float-item fi-top-left">
        <div className="float-icon"><ZapIcon color="#a78bfa" /></div>
        <span className="float-label">• Auditoría Total</span>
        <span className="float-sub">Trazabilidad</span>
      </div>

      <div className="float-item fi-top-right">
        <div className="float-icon"><CloudIcon color="#a78bfa" /></div>
        <span className="float-label">• Aislamiento</span>
        <span className="float-sub">Multi-Tenant</span>
      </div>

      <div className="float-item fi-mid-left">
        <div className="float-icon"><ShieldCheckIcon color="#a78bfa" /></div>
        <span className="float-label">• Privacidad</span>
        <span className="float-sub">Roles (RBAC)</span>
      </div>

      <div className="float-item fi-mid-right">
        <div className="float-icon"><LockIcon color="#a78bfa" /></div>
        <span className="float-label">• JWT Auth</span>
        <span className="float-sub">Accesos Seguros</span>
      </div>

      {/* Shield */}
      <div className="shield-wrap">
        <div className="shield-pulse" />
        <div className="shield-pulse" />
        <div className="shield-pulse" />
        <ShieldIcon />
      </div>

      {/* Title */}
      <h2 className="title-section trust-title">
        Protegé la Información de tu <span className="highlight">Negocio</span><br />
        con Seguridad Robusta
      </h2>
      <p className="section-sub">
        Implementamos un sistema de roles y auditoría completo para que tu información 
        comercial y la de tus clientes esté siempre a salvo y bajo tu control.
      </p>

      {/* Cards */}
      <div className="cards-row">
        {cards.map((card) => (
          <div key={card.id} className="bottom-card">
            <div className="card-visual">{card.visual}</div>
            <div className="card-badge">
              {card.labelIcon}
              {card.label}
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>

    </section>
  )
}