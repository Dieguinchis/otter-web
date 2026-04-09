import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  href, 
  to, 
  ...props 
}) {
  const isAnimated = variant === 'animated';
  const btnClass = isAnimated ? `animated-button ${className}` : `btn btn-${variant} btn-${size} ${className}`;

  const renderContent = () => {
    if (isAnimated) {
      return (
        <>
          <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
          <span className="text">{children}</span>
          <span className="circle"></span>
          <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </>
      );
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
