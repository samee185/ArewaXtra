import React from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import {
  MagnifyingGlassIcon,
  HeartIcon,
  UserIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline';

const Navbar = () => {
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
      <div className="flex items-center justify-between p-4 bg-gray-50">
        {/* Logo Section */}
        <div>
          <img src={logo} alt="arewaxtra-logo" className="h-20" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:block flex items-center gap-5">
          <ul className="flex gap-5">
            {navList.map((item) => (
              <li key={item.title}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-yellow-500 font-bold capitalize' 
                      : 'text-gray-700 hover:text-yellow-500 capitalize'
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Icon Section */}
        <div className="flex items-center gap-4">
          <MagnifyingGlassIcon className="h-4 w-4 text-gray-700 hover:text-yellow-500 cursor-pointer" />
          <UserIcon className="h-4 w-4 text-gray-700 hover:text-yellow-500 cursor-pointer" />
          <HeartIcon className="h-4 w-4 text-gray-700 hover:text-yellow-500 cursor-pointer" />
          <ShoppingBagIcon className="h-4 w-4 text-gray-700 hover:text-yellow-500 cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
