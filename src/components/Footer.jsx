import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {/* Main footer content */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 px-9 py-8 text-sm">
        {/* Logo and description */}
        <div>
        <Link to={"/"}>
        <img src={logo} className="h-20 mb-5 " alt="Logo" />
        </Link>
          <p className="w-full md:w-2/3 text-gray-100">
          All the Essentials in One Place – Browse Our Footer for Contact Info, FAQs, and Exclusive Member Resources.
          </p>
        </div>
        {/* Company links */}
        <div>
          <p className="text-xl font-medium mb-5 text-white">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-100">
            <Link to={"/"}>
            <li>Home</li>
            </Link>
            <Link to ={"/about"}><li>About us</li> </Link>
            <Link to={"/shop"}>Shop</Link>
            <Link to={"/contact"}>Contact</Link>
          </ul>
        </div>
        {/* Contact information */}
        <div>
          <p className="text-xl font-medium mb-5 text-white">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-100">
            <li>+234-802-377-6632</li>
            <li>arewaxtra2@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* Copyright notice */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center text-white">
          copyright 2024@ Arewaxtra -All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

