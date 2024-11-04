import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Terminals from './pages/Terminals'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Log from './pages/Log'
import Navbar from './components/Navbar'
import Booking from './pages/Booking'
import Home from './pages/Home'
import Footer from './pages/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='bookings' element={<Booking />} />
      <Route path='terminals' element={<Terminals />} />
      <Route path='services' element={<Services />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='log' element={<Log />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
