import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
        <div className="flex-shrink-0 cursor-pointer">
          <h1 className="text-3xl font-bold text-purple-800">Campus<span className="text-purple-600">Connect</span></h1>
        </div>
        </Link>
        

        {/* Search bar (visible on all screens) */}
        <div className="flex-grow max-w-lg mx-4 hidden sm:block">
          <div className="relative flex items-center w-full">
            <input
              type="text"
              placeholder="Search for events, workshops, and more..."
              className="w-full px-4 py-2 pl-10 text-gray-700 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {/* Hamburger Menu Button (only visible on mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <a href="/about" className="hover:text-purple-600">About</a>
          <div className="relative group">
            <a href="#" className="flex items-center hover:text-purple-600">
              Events
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform transform group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg hidden group-hover:block z-20">
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Upcoming Events</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Past Events</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Workshops</a>
            </div>
          </div>
          <Link to="/login">
          <button className="px-6 py-2 text-white bg-purple-700 rounded-full hover:bg-purple-800 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500">
            Login / Sign Up
          </button>
          </Link>
          
          <span><a href="/helpCenter" className="pl-5 hover:text-purple-600">Help Center</a></span>
        </div>
      </div>

      {/* Mobile Menu (shows when isMenuOpen is true) */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-center py-4 space-y-4 bg-white shadow-inner">
          <a href="/about" className="w-full text-center py-2 hover:bg-gray-100">About</a>
          <a href="#" className="w-full text-center py-2 hover:bg-gray-100">Events</a>
          <a href="/helpCenter" className="w-full text-center py-2 hover:bg-gray-100">Help Center</a>
          <button className=" px-6 py-2 text-white bg-purple-700 rounded-full hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500">
            Login / Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;