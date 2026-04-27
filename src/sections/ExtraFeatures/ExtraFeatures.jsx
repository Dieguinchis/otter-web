import React from 'react';
import Badge from '../../components/Badge/Badge.jsx';
import { EXTRA_FEATURES } from '../../data/extraFeaturesData.js';
import './ExtraFeatures.css';

export default function ExtraFeatures() {
  return (
    <section className="section extra-section" id="extra-features">
      <div className="container extra-container">
        
        {/* Header */}
        <div className="extra-header reveal">
          <Badge
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>}
          >
            Aún hay más
          </Badge>
          <h2 className="title-section">
            Herramientas que <br />
            <span className="text-gradient">Marcan la Diferencia</span>
          </h2>
          <p className="section-sub extra-sub">
            Pequeños detalles que marcan una gran diferencia en tu día a día. 
            Diseñado para que la gestión sea fluida, rápida y profesional.
          </p>
        </div>

        {/* Grid de Extras */}
        <div className="extra-grid reveal">
          {EXTRA_FEATURES.map((feat, i) => (
            <div 
              key={feat.id} 
              className="extra-card" 
              style={{ '--accent': feat.accent, animationDelay: `${i * 0.1}s` }}
            >
              {/* Imagen de fondo */}
              <div className="extra-img-wrap">
                <img src={feat.img} alt={feat.title} className="extra-img" loading="lazy" />
                <div className="extra-img-overlay" />
              </div>
              
              {/* Contenido */}
              <div className="extra-content">
                <div className="extra-icon-box">
                  <span className="extra-icon">{feat.icon}</span>
                </div>
                <h3 className="extra-title">{feat.title}</h3>
                <div className="extra-desc-wrap">
                  <p className="extra-desc">{feat.desc}</p>
                </div>
              </div>

              {/* Borde brillante al hover */}
              <div className="extra-border-glow" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
