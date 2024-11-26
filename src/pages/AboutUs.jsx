import React from 'react';
import OurStory from '../components/OurStory';
import OurServices from '../components/OurServices';
import Cta from '../components/Cta';

const AboutUs = () => {
  return (
    <>
    <div className="pt-24">
        <OurStory/>
    </div>
    <div className="py-4">
        <OurServices />
    </div> 
    <div className="py-2">
        <Cta />
    </div>
    </>
  )
}

export default AboutUs