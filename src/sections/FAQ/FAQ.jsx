import React, { useState } from 'react'
import Badge from '../../components/Badge/Badge.jsx'
import './FAQ.css'
import { DEFAULT_FAQS } from '../../data/faqData.js'

export default function FAQ({
  items = DEFAULT_FAQS,
  title = "Preguntas Frecuentes",
  subtitle = "Todo lo que necesitás saber saber sobre nuestros planes y medios de pago.",
  badgeText = "Dudas más comunes",
  badgeIcon = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
}) {
  const [open, setOpen] = useState(null)

  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-inner reveal">
        <div className="faq-header">
          <Badge icon={badgeIcon}>
            {badgeText}
          </Badge>
          <h2 className="title-section">{title}</h2>
          <p className="faq-subtitle">{subtitle}</p>
        </div>
        <div className="faq-list">
          {items.map((faq, i) => (
            <div
              key={i}
              className={`faq-item ${open === i ? 'open' : ''}`}
            >
              <button className="faq-question" onClick={() => setOpen(open === i ? -1 : i)}>
                {faq.q}
                <span className="faq-icon">{open === i ? '−' : '+'}</span>
              </button>
              <div className="faq-answer-wrapper">
                <p className="faq-answer">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
