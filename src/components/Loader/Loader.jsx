import React, { useEffect, useState } from 'react';
import './Loader.css';

export default function Loader({ onComplete }) {
  const logo = "/logo-ot.png";
  const [isFading, setIsFading] = useState(false);
  const text = "OtterTask";

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2300);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`loader-wrapper ${isFading ? 'fade-out' : ''}`}>
      <div className="loader-content">
        <img src={logo} alt="OtterTask Logo" className="loader-logo" />
        <div className="loader-text">
          {text.split('').map((char, index) => (
            <span key={index} style={{ animationDelay: `${1.1 + index * 0.05}s` }}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
