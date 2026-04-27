import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Hero from '../../sections/Hero/Hero.jsx'
import Features from '../../sections/Features/Features.jsx'
import Differentiators from '../../sections/Differentiators/Differentiators.jsx'
import ExtraFeatures from '../../sections/ExtraFeatures/ExtraFeatures.jsx'
import Coverage from '../../sections/Coverage/Coverage.jsx'
import TrustBanner from '../../sections/TrustBanner/TrustBanner.jsx'
import CTA from '../../sections/CTA/CTA.jsx'
import Footer from '../../sections/Footer/Footer.jsx'
import '../../styles/global.css'

export default function Home() {
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

  return (
    <div className="home">
      <Navbar />

      <div className="hero-combined-block">
        {/* Shared background for Hero and Features */}
        <div className="hero-noise"></div>
        <div className="hero-orb hero-orb--1" />
        <div className="hero-orb hero-orb--2" />

        <Hero />

        <Features />
      </div>
      
      <ExtraFeatures />
      <Differentiators />
      <Coverage />
      <TrustBanner />

      <div className="final-block-wrap">
        <CTA />
        <Footer />
      </div>
    </div>
  )
}
