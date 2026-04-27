import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

export default function Button({ 
  children, 
  variant = 'button-primary', 
  className = '', 
  href, 
  to, 
  size = 'default',
  ...props 
}) {
  const btnClass = `btn ${variant} ${size !== 'default' ? 'btn-' + size : ''} ${className}`;

  const renderContent = () => {
    if (variant === 'button-navbar') {
      return (
        <>
          <span className="text">{children}</span>
          <span className="circle"></span>
        </>
      )
    }

    if (variant === 'button-primary') {
      return (
        <>
          {children}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </>
      )
    }

    return children;
  };

  if (to) {
    return (
      <Link to={to} className={btnClass} {...props}>
        {renderContent()}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={btnClass} {...props}>
        {renderContent()}
      </a>
    )
  }

  return (
    <button className={btnClass} {...props}>
      {renderContent()}
    </button>
  )
}
