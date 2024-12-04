import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import {
  MagnifyingGlassIcon,
  HeartIcon,
  UserIcon,
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline'; // Import all icons together
import { useAuth } from '../contexts/AuthContext';
import { useShop } from '../contexts/ShopContext'; // Import useShop context

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logout, user } = useAuth();
  const { getCartCount } = useShop(); // Get cart count from ShopContext
  const navigate = useNavigate();

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
      title: 'contact us',
      link: '/contactus',
    },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const cartCount = getCartCount(); // Get the cart count

  return (
    <>
      <div className="fixed w-[100%] bg-black flex items-center justify-between px-4 py-2 shadow-md z-50">
        {/* Logo Section */}
        <Link to={"/"}>
          <div>
            <img src={logo} alt="arewaxtra-logo" className="h-20" />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navList.map((item) => (
            <NavLink
              key={item.title}
              to={item.link}
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-600 font-bold capitalize'
                  : 'text-gray-100 hover:text-yellow-600 capitalize'
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>

        {/* Icon Section - Always Visible */}
        <div className="flex items-center gap-2 md:gap-4 mr-5">
          <MagnifyingGlassIcon className="h-6 w-6 md:h-7 md:w-7 text-gray-100 hover:text-yellow-600 cursor-pointer" />
          {user ? (
            <ArrowRightOnRectangleIcon
              className="h-6 w-6 md:h-7 md:w-7 text-gray-100 hover:text-yellow-600 cursor-pointer"
              onClick={handleLogout} // Handle logout action
            />
          ) : (
            <Link to="/login">
              <UserIcon className="h-6 w-6 md:h-7 md:w-7 text-gray-100 hover:text-yellow-600 cursor-pointer" />
            </Link>
          )}
          <Link to="/wishlist">
            <HeartIcon className="h-6 w-6 md:h-7 md:w-7 text-gray-100 hover:text-yellow-600 cursor-pointer" />
          </Link>

          {/* Cart Icon with Badge */}
          <Link to="/cart" className="relative">
            <ShoppingBagIcon className="h-6 w-6 md:h-7 md:w-7 text-gray-100 hover:text-yellow-600 cursor-pointer" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-yellow-600 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
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
        className={`fixed top-0 right-0 h-full w-3/4 bg-black shadow-lg transform ${
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
