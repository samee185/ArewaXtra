import React from "react";
import contactImg from "../assets/services-image.png";
const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-24 border-t">
        <p className="text-yellow-600">CONTACT US</p>
      </div>
      <div className="my-10 px-9 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          src={contactImg}
          alt=""
          className="w-full md:max-w-[480px]"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-yellow-600">Our Store</p>
          <p className="text-white">Shop 23/24 Block D , Islamic Shopping Complex, Bashorun Winners' Road, Bashorun, Ibadan.</p>
          <p className="text-white">Tel: (234) 802-377 6632 <br /> Email: Arewaxtra2@gmail.com</p>
          <p className="font-semibold text-xl text-yellow-600">Careers at ------</p>
          <p className="text-white">Learn more about our teams and job openings.</p>
          <button className="border border-yellow-600 px-8 py-4 text-sm hover:bg-yellow-600 rounded-lg text-white transition-all duration-500">Explore Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
