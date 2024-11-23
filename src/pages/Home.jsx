import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Cta from '../components/Cta'

const Home = () => {
  return (
    <>
    <div className="px-9 py-28" >
        <Hero/>
    </div>
    <div>
        <About/>
    </div>
    <div className="">
      <Cta/> 
    </div>
    </>
  )
}

export default Home