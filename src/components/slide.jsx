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
            <div
              key={index}
              className="flex flex-col items-center px-4 py-6 bg-white rounded-lg"
            >
              <img
                src={client.logo}
                alt={`Client logo ${index + 1}`}
                className="w-36 h-24 mb-4"
              />
              <p className="text-xl text-gray-800 font-serif">
                {client.description}
              </p>
            </div>
          ))}
        </Slider>
      </div>


      <div className="flex justify-center mb-8">
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
            <Form />
          </div>
        </div>
      )}
    </>
  );
}
