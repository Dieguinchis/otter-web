import React, { useState } from 'react'
import './FAQ.css'

const faqs = [
  { q: '¿Qué necesito para empezar a usar OtterTask?', a: 'Absolutamente nada extra. Simplemente creás tu cuenta con tu email, configurás los datos básicos de tu negocio y estás listo para cargar productos y facturar. Todo corre 100% en la nube desde tu dispositivo actual.' },
  { q: '¿Es necesario instalar algo en mi computadora?', a: 'No, OtterTask es un software SaaS (Software as a Service) enteramente basado en la web. Podés acceder de forma segura desde tu PC, Mac, tablet o celular abriendo el navegador, sin instalaciones ni descargas pesadas.' },
  { q: '¿Puedo usarlo en varios locales al mismo tiempo?', a: 'Sí. Toda la arquitectura está pensada para ser multi-sucursal desde el primer día. Podés controlar el stock, las cajas y los empleados de todos tus locales de forma unificada desde un solo panel de control administrador.' },
  { q: '¿Cómo funciona la prueba gratuita de 14 días?', a: 'Te damos acceso completo e irrestricto a nuestro plan más robusto para que pruebes absolutamente todas las funcionalidades durante dos semanas. No te pedimos tarjeta de crédito para iniciar y podés cancelar tu cuenta permanentemente con un solo clic si no es lo que buscabas.' },
  { q: '¿Ofrecen soporte técnico si tengo dudas?', a: '¡Claro que sí! Nuestro equipo de soporte habla tu idioma, entiende cómo opera el mercado en la región y está disponible por vía chat directo o correo electrónico para resolver tus dudas rápidamente y que tu comercio nunca pare.' }
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-inner reveal">
        <div className="faq-header">
          <span className="section-label">Dudas más comunes</span>
          <h2 className="section-title">Preguntas Frecuentes</h2>
          <p className="faq-subtitle">Todo lo que necesitás saber antes de dar el salto hacia una gestión comercial 100% moderna.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
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
