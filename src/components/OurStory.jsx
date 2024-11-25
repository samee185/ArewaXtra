import React from 'react';
import aboutImg from '../assets/about-image2.png';
const OurStory = () => {
  return (
    <>
    <div
      className={`bg-cover bg-center py-24 px-9 text-white`}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${aboutImg})`,
      }}
    >
      <p className="text-2xl md:text-4xl lg:text-5xl text-center mb-8">
         OUR <span className="text-yellow-500">STORY</span>
      </p>
      <div className="text-center text-lg">Welcome to ArewaXtra, where tradition meets innovation!
ArewaXtra was born out of a passion for celebrating the bold, vibrant culture of Northern Nigeria. Our mission is simple: to go the extra mile in blending the timeless elegance of Arewa traditions with modern, contemporary styles.  
What sets us apart is our commitment to creating something truly extraordinary – Xtra in every way. From our carefully crafted designs to the stories they tell, every product reflects the rich heritage of Arewa culture while embracing the spirit of today’s trends.  
ArewaXtra isn’t just a brand; it’s a lifestyle. It’s about honoring where we come from and taking it to the next level. Join us on this journey as we continue to redefine Arewa fashion and celebrate the beauty of our roots.  
Thank you for being a part of the ArewaXtra family – where heritage and style meet!  </div>
    </div>
    </>
  )
}

export default OurStory;