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
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'
import ShopProvider from './contexts/ShopContext'
import Products from './components/Products'
const App = () => {
  document.title = "Arewaxtra-Online Store"
  return (
    <>
    <div className="bg-black">
    <Router>
      <ScrollToTop/>
      <AuthProvider>
        <ShopProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/shop/:productId' element={<Products/>} />
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/login' element={<SignIn/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/contactus' element={<Contact/>} />
        </Routes>
        <Footer />
        </ShopProvider>
      </AuthProvider>
    </Router>
    </div>
    </>
  )
}

export default App