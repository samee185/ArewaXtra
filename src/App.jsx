import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Footer from './components/Footer'
import AuthProvider from './contexts/AuthContext'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import AboutUs from './pages/AboutUs'
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
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/login' element={<SignIn/>} />
          <Route path='/signup' element={<SignUp/>} />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
    </div>
    </>
  )
}

export default App