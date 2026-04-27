import React from 'react';
import './Polygons.css';

export default function Polygons({ className = '' }) {
  return (
    <div className={`polygons-wrapper ${className}`}>
      <div className="poly poly--left-1" />
      <div className="poly poly--left-2" />
      <div className="poly poly--right-1" />
      <div className="poly poly--right-2" />
    </div>
  );
}
