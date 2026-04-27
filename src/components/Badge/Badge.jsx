import React from 'react'
import './Badge.css'

export default function Badge({ children, icon, className = '', ...props }) {
  return (
    <div className={`badge ${className}`} {...props}>
      <div className="badge-content">
        {icon && <div className="badge-icon-wrap">{icon}</div>}
        <span className="badge-text">{children}</span>
      </div>
    </div>
  )
}
