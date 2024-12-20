import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <footer className="bg-red-800 text-white py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          <p className="text-xl">©2024. NAIMS INTERIOR. All Rights Reserved.

          </p>
          <div className="flex space-x-4">
            <Link to="/privacy" className="text-lg hover:underline">Privacy Policy</Link>
            <span className="text-sm text-white">|</span>
            <Link to="/terms" className="text-lg hover:underline">Terms and Conditions</Link>
            {/* <span className="text-sm text-white">|</span>
          <Link to="/disclaimer" className="text-sm hover:underline">Disclaimer</Link> */}
          </div>
        </div>

      </footer>
      <div className='text-center flex items-center justify-center bg-white p-2'>
        <p>Powered by </p>
        <Link className='text-center ' to='https://techxpert.in/'>
          <span className="text-red-800 font-semibold">TechXpert</span>
        </Link>
      </div>
    </div>
  );
}
