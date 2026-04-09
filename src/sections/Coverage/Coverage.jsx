import React from 'react'
import WorldMap from '../../components/WorldMap/WorldMap.jsx'
import Badge from '../../components/Badge/Badge.jsx'
import './Coverage.css'

export default function Coverage() {
  const dots = [
    { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: 34.0522, lng: -118.2437 } },
    { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: -15.7975, lng: -47.8919 } },
    { start: { lat: -15.7975, lng: -47.8919 }, end: { lat: 38.7223, lng: -9.1393 } },
    { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 28.6139, lng: 77.209 } },
    { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 43.1332, lng: 131.9113 } },
    { start: { lat: 28.6139, lng: 77.209 }, end: { lat: -1.2921, lng: 36.8219 } },
  ]

  return (
    <section className="section coverage-section" id="cobertura" data-theme="dark">
      <div className="container">
        <div className="section-header centered reveal">
          <Badge variant="primary">Alcance Internacional</Badge>
          <h2 className="section-title">Conectividad Global</h2>
          <p className="section-sub" style={{ margin: '0 auto', maxWidth: '650px' }}>
            Rompe las fronteras tradicionales. Gestioná múltiples sucursales y franquicias 
            a nivel internacional con infraestructura distribuida, soporte multi-moneda 
            y la máxima velocidad sin importar dónde estés.
          </p>
          
          <ul className="coverage-list-global">
            <li><span className="coverage-check">✓</span> Soporte Multi-Moneda y Zona Horaria</li>
            <li><span className="coverage-check">✓</span> Infraestructura Global de Baja Latencia</li>
            <li><span className="coverage-check">✓</span> Normativas Internacionales</li>
          </ul>
        </div>
        
        <div className="coverage-map-wrapper reveal-scale delay-2">
          <WorldMap dots={dots} lineColor="var(--primary)" />
        </div>
      </div>
    </section>
  )
}
