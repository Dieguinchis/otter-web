import React from 'react';
import './PaymentMethods.css';
import Badge from '../../components/Badge/Badge.jsx';
import { PAYMENT_METHODS } from '../../data/paymentsData.js'
import { PAYMENT_LOGOS } from '../../data/paymentLogos.jsx'

const PaymentMethods = () => {
  return (
    <section className="section payment-methods-section" id="pagos">
      <div className="container">
        <div className="section-header centered reveal">
          <Badge 
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>}
          >
            Medios de Pago
          </Badge>
          <h2 className="title-section">Pagá como más te convenga</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>Aceptamos todas las opciones para que empieces hoy mismo.</p>
        </div>

        <div className="payment-fluid-grid">
          {PAYMENT_METHODS.map((m) => (
            <div className="payment-fluid-card reveal" key={m.id}>
              <div className="payment-card-content">
                <div className="payment-card-logos">
                  {m.logoIds.map(id => PAYMENT_LOGOS[id])}
                </div>
                <h4 className="payment-card-title">{m.title}</h4>
                <p className="payment-card-desc">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
