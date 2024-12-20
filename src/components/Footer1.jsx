import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // WhatsApp icon from react-icons
import img1 from "../assets/logo.png"; // Your logo
import formIcon from "../assets/form.jpg"; // Replace with your form image path
import { Link } from 'react-router-dom';

export default function Footer1() {
  return (
    <div>

      <div className="fixed bottom-0 left-0 right-0 w-full bg-white text-white py-4 shadow-md">
        <div className="flex justify-between items-center px-6 sm:px-10 md:px-16">
          {/* Form Button (Left Side) with Image Icon */}
          <div>
            <Link to='/form'>
              <button
                onClick={() => alert('Form Button Clicked')}
                className="flex items-center  text-white px-4 py-2 rounded-md font-semibold focus:outline-none transition-all">
                {/* Form Image Icon */}
                <img
                  src={formIcon} // Replace with your image path
                  alt="Form Icon"
                  className="w-12 h-12 mr-2" />

              </button>
            </Link>
          </div>

          {/* Centered Logo */}
          <div className="flex justify-center items-center flex-1 mr-20">
            <img
              src={img1} // Replace with your logo path
              alt="Logo"
              className="h-16"
            />
          </div>

          {/* WhatsApp Button (Right Side) with WhatsApp Icon */}
          {/* <div>
          <a
            href="https://wa.me/yourwhatsappphone?text=Hi,%20NAIMS%20INTERIOR%20Team,%20I%20need%20assistance.%20Ref:%20#INQ-7845"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-md font-semibold focus:outline-none transition-all"
          >
            <FaWhatsapp className="w-6 h-6 mr-2" />
          </a>
        </div> */}
        </div>
        <div className="text-center flex items-center justify-center p-4 bg-red-800 mt-2 text-white text-sm">
          <p>Powered by </p>
          <Link className='text-center' to='https://techxpert.in/'>
            <span className="font-semibold ml-2">TechXpert</span>
          </Link>

        </div>
      </div>

    </div >

  );
}
