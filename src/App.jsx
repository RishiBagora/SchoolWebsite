import React from 'react'
import Button from './components/common/Button'
import SectionTitle from './components/common/SectionTitle'
import Header from './components/common/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Academics from './pages/Academics'
import Admissions from './pages/Admissions'
import Contact from './pages/Contact'
import Facilities from './pages/Facilities'
import Results from './pages/Results'
import Gallery from './pages/Gallery'
import Footer from './components/common/Footer'
const App = () => {
  return (
    <div className=''>
      <Header/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/admissions" element={<Admissions />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/facilities" element={<Facilities />} />
      <Route path="/results" element={<Results />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
    <Footer/>
      </div>
  )
}

export default App