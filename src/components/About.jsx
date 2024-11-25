import React from "react";
import aboutImg from "../assets/about-image.png";

const About = () => {
  return (
    <div
      className={`bg-cover bg-center py-24 px-9 text-white`}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${aboutImg})`,
      }}
    >
      <p className="text-2xl md:text-4xl lg:text-5xl md:font-thin text-center mb-8">
        WELCOME TO <span className="text-yellow-500">AREWAXTRA</span>
      </p>
      <div className="text-center text-lg">Welcome to Arewa Xtra, where luxury meets elegance. We are a premium perfume brand dedicated to crafting timeless fragrances that elevate your senses and redefine sophistication.
Driven by our passion for luxury, we blend the finest ingredients to create signature scents that resonate with individuality and leave a lasting impression. At Arewa Xtra, we believe that every fragrance tells a story — your story — and we’re here to make it unforgettable.
Discover the essence of true luxury with Arewa Xtra. Let your presence linger long after you’ve left the room</div>
    </div>
  );
};

export default About;
