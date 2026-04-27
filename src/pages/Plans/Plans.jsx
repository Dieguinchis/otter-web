import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Footer from '../../sections/Footer/Footer.jsx'
import FAQ from '../../sections/FAQ/FAQ.jsx'
import PaymentMethods from '../../sections/PaymentMethods/PaymentMethods.jsx'
import Pricing from '../../sections/Pricing/Pricing.jsx'
import Comparison from '../../sections/Comparison/Comparison.jsx'
import './Plans.css'
import '../../styles/global.css'

export default function Plans() {
  useEffect(() => {
    document.title = 'OtterTask — Planes y Precios'
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

  return (
    <div className="precios-page">
      {/* NavBar */}
      <Navbar />

      {/* NOISE OVERLAY (Hero Suite) */}
      <div className="hero-noise" />
        
        <div className="pricing-glow-context">
          <Pricing />
          <PaymentMethods />
        </div>

        <Comparison />
        <FAQ />
        <Footer />
      </div>
  )
}
