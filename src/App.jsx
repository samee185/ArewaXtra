import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
const App = () => {
  return (
    <>
    <div className="bg-black">
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
    </div>
    </>
  )
}

export default App