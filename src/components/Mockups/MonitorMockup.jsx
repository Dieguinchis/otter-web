import React from 'react'
import './Mockups.css'

export default function MonitorMockup({ src, alt, className = '' }) {
  return (
    <div className={`mockup-monitor ${className}`}>
      <div className="mockup-screen">
        <img src={src} alt={alt} className="mockup-img" />
      </div>
    </div>
  )
}
