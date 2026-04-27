import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Plans from './pages/Plans/Plans.jsx'
import Loader from './components/Loader/Loader.jsx'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <BrowserRouter>
      <ScrollToTop />
      {!isLoaded && <Loader onComplete={() => setIsLoaded(true)} />}
      <div className={isLoaded ? 'app-ready' : 'app-waiting'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
