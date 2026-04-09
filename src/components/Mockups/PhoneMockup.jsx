import React from 'react'
import './Mockups.css'

export default function PhoneMockup({ src, alt, className = '' }) {
  return (
    <div className={`mockup-phone ${className}`}>
      <div className="mockup-phone-notch" />
      <div className="mockup-screen">
        <img src={src} alt={alt} className="mockup-img-phone" />
      </div>
    </div>
  )
}
