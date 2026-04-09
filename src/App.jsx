import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing.jsx'
import Precios from './pages/Precios/Precios.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/precios" element={<Precios />} />
      </Routes>
    </BrowserRouter>
  )
}
