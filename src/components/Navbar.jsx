import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import {
  MagnifyingGlassIcon,
  HeartIcon,
  UserIcon,
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'; // Import all icons together

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navList = [
    {
      title: 'home',
      link: '/',
    },
    {
      title: 'shop',
      link: '/shop',
    },
    {
      title: 'about us',
      link: '/about',
    },
    {
      title: 'contact',
      link: '/contact',
    },
  ];

  return (
    <>
      <div className="fixed w-[100%] bg-black flex items-center justify-between px-4 py-2 shadow-md z-50">
        {/* Logo Section */}
        <div>
          <img src={logo} alt="arewaxtra-logo" className="h-20" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navList.map((item) => (
            <NavLink
              key={item.title}
              to={item.link}
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-600 font-bold capitalize'
                  : 'text-gray-200 hover:text-yellow-600 capitalize'
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>

        {/* Icon Section - Always Visible */}
        <div className="flex items-center gap-4">
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-100 hover:text-yellow-600 cursor-pointer" />
          <UserIcon className="h-6 w-6 text-gray-100 hover:text-yellow-600 cursor-pointer" />
          <HeartIcon className="h-6 w-6 text-gray-100 hover:text-yellow-600 cursor-pointer" />
          <ShoppingBagIcon className="h-6 w-6 text-gray-100 hover:text-yellow-600 cursor-pointer" />
        </div>
      </div>

      {/* Hamburger Menu Icon (Mobile Only) */}
      <div
        className="fixed bottom-4 right-4 z-50 lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <XMarkIcon className="h-10 w-10 text-gray-100 bg-yellow-600 rounded-full shadow-md p-2 cursor-pointer" />
        ) : (
          <Bars3Icon className="h-10 w-10 text-gray-100 bg-yellow-600 rounded-full shadow-md p-2 cursor-pointer" />
        )}
      </div>

      {/* Mobile Menu Slider */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-gray-900 shadow-lg transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="pt-32 mt-8 flex flex-col pb-8 px-6 gap-6">
          {/* Navigation Links */}
          {navList.map((item) => (
            <NavLink
              key={item.title}
              to={item.link}
              className={({ isActive }) =>
                isActive
                  ? 'bg-yellow-600 text-white font-bold py-3 px-4 rounded capitalize shadow-md'
                  : 'text-gray-100 hover:text-yellow-600 capitalize py-3 px-4 rounded'
              }
              onClick={() => setIsMenuOpen(false)} // Close the menu on click
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
