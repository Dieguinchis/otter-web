import React, { useEffect } from 'react'

// Components
import Navbar from '../../components/Navbar/Navbar.jsx'
import Hero from '../../sections/Hero/Hero.jsx'
import Stats from '../../sections/Stats/Stats.jsx'
import Features from '../../sections/Features/Features.jsx'
import HowItWorks from '../../sections/HowItWorks/HowItWorks.jsx'
import Differentiators from '../../sections/Differentiators/Differentiators.jsx'
import Coverage from '../../sections/Coverage/Coverage.jsx'
import TrustBanner from '../../sections/TrustBanner/TrustBanner.jsx'
import CTA from '../../sections/CTA/CTA.jsx'
import Footer from '../../sections/Footer/Footer.jsx'

import '../../styles/global.css'

export default function Landing() {
  /* ── Scroll-reveal observer ── */
  useEffect(() => {
    document.title = 'OtterTask — Gestión Comercial para PyMEs'
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const navLinks = [
    { label: 'Funcionalidades', href: '#features' },
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Precios', to: '/precios' },
    { label: 'Cobertura', href: '#cobertura' },
  ]

  return (
    <div className="landing">
      {/* NavBar */}
      <Navbar
        variant="light"
        links={navLinks}
        cta={{ label: 'Ver planes →', to: '/precios' }}
      />

      {/* Hero Section */}
      <Hero />

      {/* Stats Band */}
      <Stats />

      {/* Features Grid */}
      <Features />

      {/* How It Works — Zigzag Timeline */}
      <HowItWorks />

      {/* Differentiators (with Mockup) */}
      <Differentiators />

      {/* Coverage — Argentina Map */}
      <Coverage />

      {/* Trust Banner */}
      <TrustBanner />

      {/* Call to Action */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  )
}
