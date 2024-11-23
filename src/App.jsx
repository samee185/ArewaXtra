import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Footer from './components/Footer'
import AuthProvider from './contexts/AuthContext'
const App = () => {
  return (
    <>
    <div className="bg-black">
    <Router>
      <AuthProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/shop' element={<Shop/>} />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
    </div>
    </>
  )
}

export default App