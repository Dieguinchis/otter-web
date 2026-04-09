import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">
            <img src="/logo-ot.png" alt="OtterTask" className="footer-logo-img" />
            OtterTask
          </div>
          <p className="footer-copy">© 2025 OtterTask. Todos los derechos reservados.</p>
          <p className="footer-copy" style={{ marginTop: 4 }}>Hecho con ❤️ en Argentina</p>
        </div>
        <div className="footer-links">
          <Link to="/precios">Precios</Link>
          <a href="#features">Funcionalidades</a>
          <a href="#cobertura">Cobertura</a>
          <a href="#">Contacto</a>
        </div>
      </div>
    </footer>
  )
}
