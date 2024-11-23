import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'

const Home = () => {
  return (
    <>
    <div className="px-9 py-28" >
        <Hero/>
    </div>
    <div className=" pb-8">
        <About/>
    </div>
    </>
  )
}

export default Home