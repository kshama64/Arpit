import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from 'react-router-dom';

// Importing images dynamically
import logo1 from '../assets/tenyear.png';
import logo2 from '../assets/6week.png';
import logo3 from '../assets/happyclient.png';
import logo4 from '../assets/1yearmaintenance.png';
import Form from './Form';

export default function Slide({ open, setOpen }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+91");
  const [homeType, setHomeType] = useState("");
  const [propertyName, setPropertyName] = useState("");
  const [address, setAddress] = useState("");
  const [agreeToUpdates, setAgreeToUpdates] = useState(true);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const clients = [
    { logo: logo1, description: "Flat 10 Year Warranty" },
    { logo: logo2, description: "6 Week Move-In Guarantee" },
    { logo: logo3, description: "5000+ Happy Clients" },
    { logo: logo4, description: "One Year Maintenance" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
    ],
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    if (!name || !email || !phone || !homeType || !propertyName || !address) {
      setError("Please fill out all fields.");
      setSuccessMessage("");
      return;
    }

    // Form data
    const formData = {
      name,
      email,
      phone,
      homeType,
      propertyName,
      address,
      agreeToUpdates,
    };

    // Logging form data to console
    console.log("Form Data Submitted:", formData);

    // Reset form
    setName("");
    setEmail("");
    setPhone("+91");
    setHomeType("");
    setPropertyName("");
    setAddress("");
    setAgreeToUpdates(true);
    setSuccessMessage("Form submitted successfully!");
    setError("");
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="py-8 px-4 md:px-20 bg-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-8 text-black">
          Why Choose Us
        </h2>
        <Slider {...settings}>
          {clients.map((client, index) => (
            <div key={index} className="flex flex-col items-center px-4 py-6 bg-white rounded-lg shadow-lg">
              <img src={client.logo} alt={`Client logo ${index + 1}`} className="w-36 h-24 mb-4" />
              <p className="text-xl text-gray-800 font-serif">{client.description}</p>
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={openModal}
          className="bg-red-800 text-white py-2 px-6 rounded-lg text-lg hover:bg-red-700 transition-all"
        >
          Talk To Designer
        </button>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div className=" p-6 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-1/2" onClick={(e) => e.stopPropagation()}>
            {/* <h3 className="text-2xl font-bold mb-4 text-center">Talk to Designer</h3> */}
            {/* <form onSubmit={handleSubmit} className="mt-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <PhoneInput
                country="in"
                value={phone}
                onChange={setPhone}
                inputClass="w-full mb-4 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                value={propertyName}
                onChange={(e) => setPropertyName(e.target.value)}
                placeholder="Enter property name"
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              
              <select
                value={homeType}
                onChange={(e) => setHomeType(e.target.value)}
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Your Home Type</option>
                <option value="villa">Independent Houses/Villa</option>
                <option value="studio">RK/Studio</option>
                <option value="1bhk">1BHK</option>
                <option value="2bhk">2BHK</option>
                <option value="3bhk">3BHK</option>
                <option value="4bhk">4+BHK/Duplex</option>
              </select>
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  checked={agreeToUpdates}
                  onChange={(e) => setAgreeToUpdates(e.target.checked)}
                  className="mr-2"
                />
                <label>Send me updates on WhatsApp</label>
              </div>
              {error && <p className="text-red-500 mb-4">{error}</p>}
              {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
              <button
                type="submit"
                className="w-full bg-red-900 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Quote
              </button>
            </form> */}
            <Form/>
          </div>
        </div>
      )}
    </>
  );
}
