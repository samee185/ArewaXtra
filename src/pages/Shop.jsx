import React from 'react'
import AllProduct from '../components/AllProduct'
import Cta from '../components/Cta'

const Shop = () => {
  return (
    <>
      <div className='pt-28 px-9 pb-16'>
      <p className="text-center text-3xl md:text-4xl text-yellow-600 mb-1">
        Our Collection
      </p>
      <p className="text-center text-white text-md mb-12 capitalize">
        Explore our breath taking collection of luxurious fragrances!
      </p>

      <AllProduct/>
      </div>
      <div>
        <Cta />
      </div>
    </>
  )
}

export default Shop