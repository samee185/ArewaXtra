import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero-image.png"

const Hero = () => {
  return (
    <div className="flex flex-col px-8 sm:flex-row border border-yellow-600">
      {/* hero left side */}
      <div className="w-full basis-3/4 sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="">
          <div className="flex items-center gap-2"> 
            <p className="w-8 md:w-11 h-[2px] bg-yellow-600"></p>
            <p className="font-medium text-sm md:text-base text-white">
              ELEVATE YOUR SPIRIT WITH
            </p>
          </div>
          <h1 className=" prata-regular text-xl md:text-2xl sm:py-3 lg:text-5xl text-yellow-600 leading-relaxed">
            LUXURIOUS SCENTED FRAGRANCES
          </h1>
          <div className="flex items-center gap-2">
            <Link
              to="/collection"
              onClick={() => {
                // Optional: If you're using any global state for filters
                setSelectedCategories([]);
                setSubCategory([]);
              }}
            >
              <p className="font-semibold text-sm md:text-base border border-yellow-600 text-white p-2 rounded-md transition hover:bg-yellow-600 duration-700">
                SHOP NOW
              </p>
            </Link>

            <p className="w-8 md:w-11 h-[2px] bg-yellow-600"></p>
          </div>
        </div>
      </div>
      {/* Hero rightSide */}
      <img
        className="w-full h-[450px] sm:w-1/2 md:h-[545px]"
        src={heroImg}
        alt=""
      />
    </div>
  );
};

export default Hero;