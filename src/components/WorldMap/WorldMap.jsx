import React, { useMemo } from 'react'
import { motion } from 'motion/react'
import { geoEquirectangular, geoPath } from 'd3-geo'
import * as topojson from 'topojson-client'
import worldData from '../../assets/world-110m.json'
import './WorldMap.css'

export default function WorldMap({ dots = [], lineColor = '#10b981' }) {
  // Config dimensions
  const width = 800
  const height = 400

  // Create our D3 projector (Equirectangular)
  const projection = useMemo(() => {
    return geoEquirectangular()
      .scale((width / 2 / Math.PI) * 1) // Standard scaling
      .translate([width / 2, height / 2.3]) // Shift slightly upward to center map
  }, [width, height])

  const pathGenerator = useMemo(() => geoPath().projection(projection), [projection])

  // Extract topologies
  const countries = useMemo(() => {
    return topojson.feature(worldData, worldData.objects.countries).features
  }, [])

  // Utility to generate a nice quadratic curve between two points
  const generateCurve = (p1, p2) => {
    const midX = (p1[0] + p2[0]) / 2;
    // Bend the curve upwards (or depending on distance, vary the altitude)
    const distance = Math.sqrt(Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2));
    const controlY = Math.min(p1[1], p2[1]) - distance * 0.25; 
    return `M ${p1[0]} ${p1[1]} Q ${midX} ${controlY} ${p2[0]} ${p2[1]}`;
  }

  return (
    <div className="world-map-container">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="world-map-svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Draw the map shapes with solid fill and country borders */}
        <g className="world-shapes">
          {countries.map((feature, i) => (
            <path
              key={`country-${i}`}
              d={pathGenerator(feature)}
              className="country-path"
            />
          ))}
        </g>

        {/* Draw the animated curves and location dots */}
        {dots.map((dot, index) => {
          const startPoint = projection([dot.start.lng, dot.start.lat]);
          const endPoint = projection([dot.end.lng, dot.end.lat]);

          if (!startPoint || !endPoint) return null;

          return (
            <g key={`connection-${index}`}>
              {/* The animating arc line */}
              <motion.path
                d={generateCurve(startPoint, endPoint)}
                fill="none"
                stroke={lineColor}
                strokeWidth="2"
                filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{
                  duration: 2.5,
                  delay: index * 0.4,
                  ease: "easeInOut",
                }}
              />
              
              {/* Start Dot Elements */}
              <motion.circle 
                cx={startPoint[0]} cy={startPoint[1]} r="4" fill={lineColor}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.4 }}
              />
              <motion.circle 
                cx={startPoint[0]} cy={startPoint[1]} fill={lineColor}
                initial={{ r: 4, opacity: 0.8 }}
                whileInView={{ r: 18, opacity: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: (index * 0.4) + 0.3, ease: "easeOut" }}
              />

              {/* End Dot Elements */}
              <motion.circle 
                cx={endPoint[0]} cy={endPoint[1]} r="4" fill={lineColor}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (index * 0.4) + 2.5 }}
              />
              <motion.circle 
                cx={endPoint[0]} cy={endPoint[1]} fill={lineColor}
                initial={{ r: 4, opacity: 0.8 }}
                whileInView={{ r: 18, opacity: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: (index * 0.4) + 2.8, ease: "easeOut" }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  )
}
