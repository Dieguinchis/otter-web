import React from 'react'
import Badge from '../../components/Badge/Badge.jsx'
import { COMPARISON_DATA } from '../../data/diffData.js'
import './Differentiators.css'

const renderWithIcon = (text) => {
  if (typeof text !== 'string') return text;
  if (text.startsWith('✅ ')) {
    return (
      <div className="diff-cell-content ok">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        <span>{text.replace('✅ ', '')}</span>
      </div>
    );
  }
  if (text.startsWith('❌ ')) {
    return (
      <div className="diff-cell-content no">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        <span>{text.replace('❌ ', '')}</span>
      </div>
    );
  }
  if (text.startsWith('⚠️ ')) {
    return (
      <div className="diff-cell-content warn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        <span>{text.replace('⚠️ ', '')}</span>
      </div>
    );
  }
  return text;
};

export default function Differentiators() {
  const [expandedCategories, setExpandedCategories] = React.useState(
    COMPARISON_DATA.filter(item => item.category).map(item => item.category)
  );

  const toggleCategory = (category) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  let currentCategory = null;

  return (
    <section className="section diff-section" id="diferenciadores">

      <div className="container diff-container">
        {/* Header */}
        <div className="diff-header reveal">
          <Badge
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>}
          >
            ¿Por qué OtterTask?
          </Badge>
          <h2 className="title-section">La Ventaja OtterTask</h2>
          <p className="section-sub diff-sub">
            Descubre por qué somos la solución preferida para negocios que buscan expansión y control total.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="diff-comparison reveal">
          <div className="diff-table-container">
            <table className="diff-table">
              <thead>
                <tr>
                  <th>Qué necesitás</th>
                  <th className="diff-th-comp"><span>Métodos tradicionales / Otros sistemas </span></th>
                  <th className="diff-th-otter"><span>Con OtterTask</span></th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_DATA.map((item, idx) => {
                  if (item.category) {
                    currentCategory = item.category;
                    const isExpanded = expandedCategories.includes(item.category);
                    return (
                      <tr 
                        key={`cat-${idx}`} 
                        className={`diff-row-category ${!isExpanded ? 'collapsed' : ''}`}
                        onClick={() => toggleCategory(item.category)}
                      >
                        <td colSpan="3">
                          <div className="diff-category-content">
                            <div className="diff-category-info">
                              <span className="diff-category-icon">{item.icon}</span>
                              <span>{item.category}</span>
                            </div>
                            <svg className="diff-category-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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
                    <tr key={`row-${idx}`}>
                      <td className="diff-td-feature">{item.feature}</td>
                      <td className="diff-td-comp">{renderWithIcon(item.comp)}</td>
                      <td className="diff-td-otter">{renderWithIcon(item.otter)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
