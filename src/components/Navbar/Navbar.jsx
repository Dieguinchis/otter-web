import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import Button from '../Button/Button.jsx'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [featureNav, setFeatureNav] = useState(null)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleMerge = (e) => setFeatureNav(e.detail)
    const handleUnmerge = () => setFeatureNav(null)

    window.addEventListener('featurenav:merge', handleMerge)
    window.addEventListener('featurenav:unmerge', handleUnmerge)
    return () => {
      window.removeEventListener('featurenav:merge', handleMerge)
      window.removeEventListener('featurenav:unmerge', handleUnmerge)
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)
  
  const links = [
    { label: 'Funcionalidades', href: isHome ? '#features' : '/#features' },
    { label: 'Comparativa', href: isHome ? '#diferenciadores' : '/#diferenciadores' },
    { label: 'Cobertura', href: isHome ? '#cobertura' : '/#cobertura' },
    { label: 'Precios', to: '/plans' },
  ]

  const cta = { label: 'Ver planes', to: '/plans' }

  const isMerged = featureNav !== null
  const navClass = `nav ${scrolled ? 'scrolled' : ''} ${isMerged ? 'nav--merged' : ''}`

  return (
    <>
      <nav className={navClass}>
        <div className="nav-row-main">
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
              <Button to={cta.to} variant="button-navbar">
                {cta.label}
              </Button>
            )}
          </div>

          <button
            className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span /><span /><span />
          </button>
        </div>

        <div className={`nav-row-features ${isMerged ? 'nav-row-features--visible' : ''}`}>
          {isMerged && (
            <div className="nav-feature-tabs">
              {featureNav.items.map((item, i) => (
                <button
                  key={item.id}
                  className={`nav-feature-tab ${i === featureNav.activeIndex ? 'active' : ''}`}
                  onClick={() => featureNav.onTabClick(i)}
                >
                  <span className="nav-feature-tab-icon">{item.icon}</span>
                  <span className="nav-feature-tab-label">{item.label}</span>
                  {i === featureNav.activeIndex && <div className="nav-feature-tab-indicator" />}
                </button>
              ))}
            </div>
          )}
        </div>
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
            <Button to={cta.to} variant="button-navbar" onClick={closeMenu}>
              {cta.label}
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
