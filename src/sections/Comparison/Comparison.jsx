import React from 'react'
import Badge from '../../components/Badge/Badge.jsx'
import Polygons from '../../components/Polygons/Polygons.jsx'
import { COMPARISON } from '../../data/pricingData.js'
import './Comparison.css'

const renderCellValue = (val) => {
  if (val === '✓') return <span className="cell-ok"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>;
  if (val === '—') return <span className="cell-no"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>;
  
  if (['500', 'Básico', 'Email'].includes(val)) {
    return <span className="cell-badge cell-badge--outline">{val}</span>;
  }
  
  if (['Ilimitados', 'Avanzado', 'Chat prioritario', 'Dedicado 24/7'].includes(val)) {
    return <span className="cell-badge cell-badge--blue">{val}</span>;
  }

  return val;
};

export default function Comparison() {
  const categories = COMPARISON.filter(item => item.category).map(item => item.category);
  const [expandedCategories, setExpandedCategories] = React.useState(categories);

  const toggleCategory = (category) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  let currentCategory = null;

  return (
    <section className="section comparison-section" id="comparacion">
      <div className="hero-bg">
        <div className="hero-glow hero-glow--bottom" />
      </div>
      <div className="container">
        <div className="section-header centered reveal">
          <Badge 
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/></svg>}
          >
            Comparación
          </Badge>
          <h2 className="title-section">¿Qué incluye cada plan?</h2>
        </div>
        
        <div className="table-wrap reveal">
          <table className="comparison-table">
            <thead>
              <tr>
                <th className="col-feature">Funcionalidad</th>
                <th className="col-plan th-plan-pup"><span>🦦 Pup</span></th>
                <th className="col-plan th-plan-river"><span>🌊 River</span></th>
                <th className="col-plan th-plan-ocean"><span>🌏 Ocean</span></th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((item, i) => {
                if (item.category) {
                  currentCategory = item.category;
                  const isExpanded = expandedCategories.includes(item.category);
                  return (
                    <tr 
                      key={i} 
                      className={`row-category ${!isExpanded ? 'collapsed' : ''}`}
                      onClick={() => toggleCategory(item.category)}
                    >
                      <td colSpan="4" className="cell-category">
                        <div className="category-content">
                          <span>{item.category}</span>
                          <svg className="category-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </div>
                      </td>
                    </tr>
                  );
                }

                const isVisible = expandedCategories.includes(currentCategory);
                if (!isVisible) return null;

                return (
                  <tr key={i}>
                    <td className="cell-feature">{item.feature}</td>
                    <td className="cell-val">
                      {renderCellValue(item.starter)}
                    </td>
                    <td className="cell-val">
                      {renderCellValue(item.pro)}
                    </td>
                    <td className="cell-val">
                      {renderCellValue(item.enterprise)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
