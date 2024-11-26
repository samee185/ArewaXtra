import React from 'react'
import About from '../components/About'
import OurStory from '../components/OurStory'
import OurServices from '../components/OurServices'

const AboutUs = () => {
  return (
    <>
    <div className="pt-24">
        <OurStory/>
    </div>
    <div className="py-4">
        <OurServices />
    </div>
    <hr />
    </>
  )
}

export default AboutUs