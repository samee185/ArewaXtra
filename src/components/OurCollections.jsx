import React from 'react'
import collectionImg from '../assets/collection-image.png'
import menCollection from "../assets/men-collection.png"
import womenCollection from "../assets/women-collection.png"
import unisexCollection from "../assets/unisex-collection.png"
const OurCollections = () => {
  return (
    <div
      className={`bg-cover bg-center py-20 px-9 text-white`}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${collectionImg})`,
      }}
    >
      <p className="text-2xl md:text-4xl lg:text-5xl md:font-thin text-center pb-2">
        OUR <span className="text-yellow-500">COLLECTIONS</span>
      </p>
      <p className="text-center pb-12">Discover Timeless Elegance with ArewaXtra Collections</p>
      <div className="flex items-center justify-center gap-6 flex-wrap">
      <div className="text-white">
        <div className=" flex items-center justify-center w-52 h-52 border-2 border-yellow-600 rounded-full">
            <img src={menCollection} alt="men-collection" className='w-48 h-48 object-cover rounded-full' />
        </div>
        <p className="text-center py-2 text-lg font-bold">Men</p>
      </div>
      <div className="text-white">
        <div className=" flex items-center justify-center w-52 h-52 border-2 border-yellow-600 rounded-full">
            <img src={womenCollection} alt="men-collection" className='w-48 h-48 object-cover rounded-full' />
        </div>
        <p className="text-center py-2 text-lg font-bold">Women</p>
      </div>
      <div className="text-white">
        <div className=" flex items-center justify-center w-52 h-52 border-2 border-yellow-600 rounded-full">
            <img src={unisexCollection} alt="men-collection" className='w-48 h-48 object-cover rounded-full' />
        </div>
        <p className="text-center py-2 text-lg font-bold">Unisex</p>
      </div>
      </div>
    </div>
  )
}

export default OurCollections