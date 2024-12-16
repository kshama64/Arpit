import React from 'react';
import logo from '../assets/logo.png'; // Replace with your actual logo image path
import { FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-50 border-b border-gray-200 py-2 md:py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/">
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="Naims Interior"
              className="h-12 sm:h-16 md:h-20 object-contain transition-all"
            />
          </div>
        </Link>

        {/* Call Button */}
        <div>
          <Link
            to="tel:18001208230"
            className="flex items-center bg-red-900 text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-8 lg:px-10 py-1 sm:py-2 rounded-lg shadow hover:bg-red-700 transition-all" >
            <FaPhoneAlt className="mr-1 sm:mr-2" />
            <span>1800-120-8230</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
