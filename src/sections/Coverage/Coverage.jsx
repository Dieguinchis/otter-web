import React from 'react'
import { 
  Layers, 
  Activity, 
  Globe, 
  FileText, 
  LayoutGrid, 
  ShieldCheck, 
  Building2, 
  Zap, 
  CircleDollarSign, 
  Users,
  Clock
} from 'lucide-react'
import GlobeViz from '../../components/Globe/Globe.jsx'
import Badge from '../../components/Badge/Badge.jsx'
import './Coverage.css'

const PILLS = [
  { label: 'Multisucursal', bg: 'rgba(0,212,255,0.12)', stroke: '#00d4ff', icon: Building2 },
  { label: 'Tiempo real', bg: 'rgba(0,229,160,0.1)', stroke: '#00e5a0', icon: Activity },
  { label: 'Multi-zona horaria', bg: 'rgba(255,179,71,0.1)', stroke: '#ffb347', icon: Clock },
  { label: 'Reportes automáticos', bg: 'rgba(139,119,240,0.12)', stroke: '#8b77f0', icon: FileText },
  { label: 'Franquicias', bg: 'rgba(255,107,157,0.1)', stroke: '#ff6b9d', icon: LayoutGrid },
  { label: 'Datos seguros', bg: 'rgba(0,212,255,0.12)', stroke: '#00d4ff', icon: ShieldCheck },
]

const STATS_ITEMS = [
  {
    color: '#06b6d4',
    value: 'Multisucursal',
    desc: '1 o 500 locales desde un solo panel',
    tag: '48 PAÍSES',
    icon: Building2
  },
  {
    color: '#00e5a0',
    value: 'Tiempo Real',
    desc: 'Cada transacción al instante',
    tag: '< 1 SEG',
    icon: Activity,
  },
  {
    color: '#ffb347',
    value: 'Multi-moneda',
    desc: 'ARS, USD, BRL, EUR, MXN',
    tag: '5 MONEDAS',
    icon: CircleDollarSign,
  },
  {
    color: '#ff6b9d',
    value: 'Roles y permisos',
    desc: 'Accesos por sucursal',
    tag: 'GRANULAR',
    icon: Users,
  },
]

export default function Coverage() {
  return (
    <section className="cov-section" id="cobertura">

      {/* Globe background */}
      <div className="cov-globe-bg">
        <GlobeViz />
      </div>

      {/* Gradient overlays */}
      <div className="cov-fade-left" />
      <div className="cov-fade-top" />
      <div className="cov-fade-bottom" />

      {/* Main layout */}
      <div className="cov-layout">
        <div className="cov-left">

          {/* Badge — using existing component */}
          <div style={{ alignSelf: 'flex-start' }}>
            <Badge icon={<Globe size={14} />}>
              Alcance internacional
            </Badge>
          </div>

          {/* Headline — using existing title-section class */}
          <h2 className="title-section" style={{ textAlign: 'left', margin: '0' }}>
            Un sistema.<br />
            <span className="text-gradient">Todos tus locales.</span><br />
            Donde sea.
          </h2>

          {/* Subtitle — using existing section-sub class */}
          <p className="section-sub" style={{ margin: 0, maxWidth: '680px' }}>
            No importa si tienes 2 sucursales o 200 — si estás en Buenos Aires o en Madrid.
            Gestionas ventas, stock, empleados y reportes desde un solo lugar, en tiempo real.
          </p>

          {/* Pills */}
          <div className="cov-pills">
            {PILLS.map((pill, i) => (
              <div className="cov-pill" key={i}>
                <div className="cov-pill-icon" style={{ background: pill.bg }}>
                  <pill.icon size={12} color={pill.stroke} strokeWidth={2.5} />
                </div>
                {pill.label}
              </div>
            ))}
          </div>

          {/* Stats bar — now includes feature card content */}
          <div className="cov-stats">
            {STATS_ITEMS.map((item, i) => (
              <div className="cov-sb" key={i} style={{ '--sb-color': item.color }}>
                <div className="cov-sb-icon" style={{ background: `${item.color}18` }}>
                  <item.icon size={18} color={item.color} strokeWidth={2} />
                </div>
                <div className="cov-sb-value">{item.value}</div>
                <div className="cov-sb-desc">{item.desc}</div>
                <div className="cov-sb-tag" style={{ background: `${item.color}18`, color: item.color }}>
                  {item.tag}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
