import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon from react-icons

export default function Whatsapp() {
  return (
    <div>
      {/* WhatsApp Button for Mobile: Bottom-Right */}
      <a
        href="https://wa.me/1234567890?text=Hello%20there!%20I%20need%20assistance."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 ease-in-out md:hidden"
        aria-label="Contact us on WhatsApp" >
        <FaWhatsapp size={32} />
      </a>
      {/* Desktop View: Center Right Side */}
      <a
        href="https://wa.me/8449446389?text=Hi, NAIMS INTERIOR Team, I need assistance regarding your services. Ref: #INQ-7845,%20NAIMS%20INTERIOR%20Team,%20I%20need%20assistance%20regarding%20your%20services.%20Ref:%20#INQ-7845"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed right-4 top-1/2 transform -translate-y-1/2 z-50 items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 ease-in-out"
        aria-label="Contact us on WhatsApp">
        <FaWhatsapp size={32} />
      </a>
    </div>
  );
}
