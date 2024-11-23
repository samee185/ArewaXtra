import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
    <div className="bg-black">
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shop' element={<Shop/>} />
      </Routes>
      <Footer />
    </Router>
    </div>
    </>
  )
}

export default App