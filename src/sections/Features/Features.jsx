import React, { useEffect, useRef, useState, useCallback } from 'react'
import Badge from '../../components/Badge/Badge.jsx'
import './Features.css'
import { FEATURES } from '../../data/featuresData.js'

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMerged, setIsMerged] = useState(false)
  const wrapperRef = useRef(null)
  const stickyRef = useRef(null)
  const headerRef = useRef(null)
  
  // Handle manual tab click: Scrolls to the specific feature "scene"
  const handleTabClick = useCallback((index) => {
    if (!wrapperRef.current || !headerRef.current) return
    
    const headerHeight = headerRef.current.offsetHeight
    const startPinning = wrapperRef.current.offsetTop + headerHeight
    const targetScroll = startPinning + (index * window.innerHeight)
    
    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    })
  }, [])

  useEffect(() => {
    let wasMerged = false

    const handleScroll = () => {
      if (!wrapperRef.current || !headerRef.current) return
      
      const headerHeight = headerRef.current.offsetHeight
      const wrapperTop = wrapperRef.current.offsetTop
      const startPinning = wrapperTop + headerHeight
      const totalDeckHeight = FEATURES.length * window.innerHeight
      const endPinning = wrapperTop + totalDeckHeight // When the deck ends
      
      const scrollPos = window.pageYOffset
      const relativeScroll = scrollPos - startPinning
      
      // Calculate active index
      if (relativeScroll >= 0) {
        const index = Math.min(Math.floor(relativeScroll / window.innerHeight), FEATURES.length - 1)
        setActiveIndex(index)
      } else {
        setActiveIndex(0)
      }

      // Determine if we're in the "merged" zone
      const shouldMerge = scrollPos >= startPinning && scrollPos < endPinning
      
      if (shouldMerge && !wasMerged) {
        wasMerged = true
        setIsMerged(true)
      } else if (!shouldMerge && wasMerged) {
        wasMerged = false
        setIsMerged(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Dispatch merge/unmerge events to Navbar whenever state changes
  useEffect(() => {
    if (isMerged) {
      window.dispatchEvent(new CustomEvent('featurenav:merge', {
        detail: {
          items: FEATURES.map(f => ({ id: f.id, icon: f.icon, label: f.title.split(' ')[0] })),
          activeIndex,
          onTabClick: handleTabClick
        }
      }))
    } else {
      window.dispatchEvent(new Event('featurenav:unmerge'))
    }
  }, [isMerged, activeIndex, handleTabClick])

  // Cleanup: unmerge on unmount
  useEffect(() => {
    return () => window.dispatchEvent(new Event('featurenav:unmerge'))
  }, [])

  return (
    <section 
      className="section fs-deck-wrapper" 
      id="features" 
      ref={wrapperRef} 
      style={{ height: `calc(${FEATURES.length * 100}vh + 300px)` }}
    >
      
      {/* 1. Static Header (Part of the flow, scrolls away) */}
      <div className="fs-static-header" ref={headerRef}>
        <div className="container">
          <Badge 
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>}
          >
            Ecosistema OtterTask
          </Badge>
          <h2 className="title-section">Funcionalidades de Élite</h2>
          <p className="fs-main-sub">
            Sincronización total entre tu punto de venta y administración centralizada.
          </p>
        </div>
      </div>

      {/* 2. Sticky Container */}
      <div className="fs-sticky-canvas" ref={stickyRef}>
        <div className={`container fs-full-height ${isMerged ? 'is-merged' : ''}`}>
          
          {/* Internal nav — visible only before merging into the global navbar */}
          <nav className={`fs-internal-nav ${isMerged ? 'fs-internal-nav--hidden' : ''}`}>
             <div className="fs-nav-pill">
               {FEATURES.map((item, i) => (
                 <button 
                   key={item.id}
                   className={`fs-nav-btn ${i === activeIndex ? 'active' : ''}`}
                   onClick={() => handleTabClick(i)}
                 >
                   <span className="fs-nav-icon">{item.icon}</span>
                   <span className="fs-nav-label">{item.title.split(' ')[0]}</span>
                   {i === activeIndex && <div className="fs-nav-indicator"></div>}
                 </button>
               ))}
             </div>
          </nav>

          {/* Expanded Scene Container */}
          <div className="fs-scene-container">
            
            {/* LARGE Visual Side (Left) */}
            <div className="fs-scene-visual">
              <div className="fs-image-stack">
                {FEATURES.map((feature, i) => (
                  <div key={i} className={`fs-img-layer ${i === activeIndex ? 'is-active' : ''}`}>
                    <div className="fs-img-glow"></div>
                    <img src={feature.imgUrl} alt={feature.title} style={feature.imgStyle} className="fs-main-img" />
                  </div>
                ))}
              </div>
            </div>

            {/* Content Side (Right) */}
            <div className="fs-scene-content">
               {FEATURES.map((feature, i) => (
                 <div key={i} className={`fs-text-layer ${i === activeIndex ? 'active' : ''}`}>
                    <div className="fs-item-meta">
                      <span className="fs-item-number">0{i + 1}</span>
                      <div className="fs-item-line"></div>
                    </div>
                    <h3 className="fs-item-title">{feature.title}</h3>
                    <p className="fs-item-desc">{feature.desc}</p>
                    
                    <div className="fs-item-extras">
                      <span className="fs-extras-label">También incluye:</span>
                      <div className="fs-item-features">
                        {feature.pills && feature.pills.map((pill, idx) => (
                          <div key={idx} className="fs-feature-pill">
                            <span className="fs-pill-icon">{pill.icon}</span>
                            <span className="fs-pill-label">{pill.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                 </div>
               ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
