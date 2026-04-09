import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

import Button from '../Button/Button.jsx'

export default function Navbar({ variant = 'dark', links = [], cta = null }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const navClass = `nav ${variant === 'light' ? 'nav--light' : ''} ${scrolled ? 'scrolled' : ''}`

  return (
    <>
      <nav className={navClass}>
        <Link to="/" className="nav-logo">
          <img src="/logo-ot.png" alt="OtterTask" className="nav-logo-img" />
          OtterTask
        </Link>

        <div className="nav-links">
          {links.map((link, i) => (
            link.to ? (
              <Link key={i} to={link.to}>{link.label}</Link>
            ) : (
              <a key={i} href={link.href}>{link.label}</a>
            )
          ))}
        </div>

        <div className="nav-actions">
          {cta && (
            <Button to={cta.to} variant="animated" size="nav-size">
              {cta.label.replace(' →', '')}
            </Button>
          )}
        </div>

        <button
          className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'show' : ''}`}>
        {links.map((link, i) => (
          link.to ? (
            <Link key={i} to={link.to} onClick={closeMenu}>{link.label}</Link>
          ) : (
            <a key={i} href={link.href} onClick={closeMenu}>{link.label}</a>
          )
        ))}
        {cta && (
          <div style={{ marginTop: '1rem' }}>
            <Button to={cta.to} variant="animated" onClick={closeMenu}>
              {cta.label.replace(' →', '')}
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
