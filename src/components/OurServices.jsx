import React from 'react';
import imgOne from '../assets/services-image2.png';
import imgTwo from '../assets/services-image3.png';
import imgThree from '../assets/services-image4.png';
import imgFour from '../assets/services-image5.png';

const OurServices = () => {
  return (
    <div className="bg-black py-14 px-6 pt-14 md:px-10 lg:px-16 w-full">
      {/* Section Title */}
      <p className="text-center text-yellow-600 text-2xl md:text-4xl lg:text-5xl pb-8">
        What We Do At ArewaXtra
      </p>

      <div className="pt-16 flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col lg:basis-1/2">
          <div className="mb-6">
            <p className="text-yellow-600 text-2xl md:text-3xl lg:text-4xl font-semibold mb-10">
              01.
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl text-white mb-6">
              Personal Fragrance Consultations
            </p>
            <p className="text-white text-base md:text-lg leading-relaxed">
              Choosing the right fragrance can be a deeply personal experience. Our team of knowledgeable fragrance experts is here to guide you through this process. Whether you're looking for a signature scent, a gift for a loved one, or need assistance in exploring new fragrance families, our consultants will take the time to understand your preferences and suggest the perfect matches.
            </p>
          </div>
        </div>

        <div className="lg:basis-1/2 w-full">
          <img
            src={imgOne}
            alt="services"
            className="w-full h-auto object-cover rounded-md shadow-lg"
          />
        </div>
      </div>
      <div className="pt-16 flex flex-col-reverse lg:flex-row gap-10">
        <div className="lg:basis-1/2 w-full">
            <img
                src={imgTwo}
                alt="services"
                className="w-full h-auto object-cover rounded-md shadow-lg"
            />
        </div>
        <div className="flex flex-col justify-center lg:basis-1/2">
            <div className="mb-6">
                <p className="text-yellow-600 text-2xl md:text-3xl lg:text-4xl font-semibold mb-10">
                02.
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl text-white mb-6">
                Custom Fragrance Creation
                </p>
                <p className="text-white text-base md:text-lg leading-relaxed">
                Experience the art of bespoke perfumery with our custom service. Work closely with our skilled perfumers to craft a scent that is uniquely yours. From selecting individual notes to blending them into a harmonious symphony, we'll help you bring your fragrance dream to life. Whether it's a special occassion, a gift for someone dear, or simply a way to indulge in luxury, a custom-created perfume is an unforgettable experience.
                </p>
            </div>
        </div>
        
      </div>
      <div className="pt-10 flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col lg:basis-1/2">
          <div className="mb-6">
            <p className="text-yellow-600 text-2xl md:text-3xl lg:text-4xl font-semibold mb-10">
              03.
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl text-white mb-6">
              Scented Gift Selection
            </p>
            <p className="text-white text-base md:text-lg leading-relaxed">
              Choosing the right fragrance can be a deeply personal experience. Our team of knowledgeable fragrance experts is here to guide you through this process. Whether you're looking for a signature scent, a gift for a loved one, or need assistance in exploring new fragrance families, our consultants will take the time to understand your preferences and suggest the perfect matches.
            </p>
          </div>
        </div>

        <div className="lg:basis-1/2 w-full">
          <img
            src={imgThree}
            alt="services"
            className="w-full h-auto object-cover rounded-md shadow-lg"
          />
        </div>
      </div>
      <div className="pt-16 flex flex-col-reverse lg:flex-row gap-10">
        <div className="lg:basis-1/2 w-full">
            <img
                src={imgFour}
                alt="services"
                className="w-full h-auto object-cover rounded-md shadow-lg"
            />
        </div>
        <div className="flex flex-col justify-center lg:basis-1/2">
            <div className="mb-6">
                <p className="text-yellow-600 text-2xl md:text-3xl lg:text-4xl font-semibold mb-10">
                04.
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl text-white mb-6">
                Online Shopping Convenience
                </p>
                <p className="text-white text-base md:text-lg leading-relaxed">
                Experience the art of bespoke perfumery with our custom service. Work closely with our skilled perfumers to craft a scent that is uniquely yours. From selecting individual notes to blending them into a harmonious symphony, we'll help you bring your fragrance dream to life. Whether it's a special occassion, a gift for someone dear, or simply a way to indulge in luxury, a custom-created perfume is an unforgettable experience.
                </p>
            </div>
        </div>
        
      </div>

      <div className="text-white text-lg pt-14">
        <p className="pt-4">
        At Arewaxtra, our passion for perfumery drives us to go above and beyond to serve you better. We invite you to experience our exceptional services and indulge in the world of luxurious scents. Let us be your trusted fragrance destination, where your olfactory dreams come to life.
        </p>
        <p className='pt-3'>
        If you have any questions or need assistance, please do not hesitate to reach out to our friendly team. We're here to make your fragrance exploration a truly memorable one.
        </p>
        <p className="py-6 font-bold text-yellow-600">
        Arewaxtra Team.
        </p>
      </div>
      {/* <hr /> */}
    </div>
  );
};

export default OurServices;
