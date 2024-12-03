import React from "react";
import ctaImg from "../assets/cta-image.png";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <div
      className="bg-cover bg-center flex flex-col px-9 py-20 text-white text-2xl md:text-4xl"
      style={{
        backgroundImage: `url(${ctaImg})`,
      }}
    >
      <p className="text-3xl md:text-4xl lg:text-5xl">
      Perfume Year-End Sale! <br/> Up to 50% Off
      </p>
      <p className="text-sm md:text-lg capitalize pt-6 mb-6">
        discover an exquiste collection of premium perfumes <br /> at unbelievable prices during our exclusive premium sales
      </p>
      <Link to={"/shop"}>
        <span className="mt-6 px-4 py-2 rounded-md bg-yellow-600 text-lg inline-block self-start">Shop Now</span>
      </Link>
    </div>
  );
};

export default Cta;
