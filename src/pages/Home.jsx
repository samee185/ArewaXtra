import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Cta from '../components/Cta'
import LatestArrivals from '../components/LatestArrivals'
import OurCollections from '../components/OurCollections'

const Home = () => {
  return (
    <>
      <div className="px-9 py-28" >
        <Hero/>
      </div>
      <div>
        <About/>
      </div>
      <div className='pb-10'>
        <LatestArrivals />
      </div>
      <div>
        <OurCollections/>
      </div>
      <div className="">
        <Cta/> 
      </div>
    </>
  )
}

export default Home