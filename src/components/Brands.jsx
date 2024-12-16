import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo1 from '../assets/icon1.png';
import logo2 from '../assets/icon2.png';
import logo3 from '../assets/icon3.png';
import logo4 from '../assets/icon4.png';
import logo5 from '../assets/icon5.png';
import logo6 from '../assets/icon6.png';
import logo7 from '../assets/icon7.png';

export default function Brands() {
  const settings = {
    dots: false,
    infinite: true, // Looping enabled
    speed: 6000, // Slower sliding speed for a professional feel
    slidesToShow: 5, // Number of visible slides on large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Continuous autoplay
    cssEase: 'linear', // Smooth linear scrolling
    responsive: [
      {
        breakpoint: 1024, // Medium screens
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // Small screens
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const clients = [
    { logo: logo1 },
    { logo: logo2 },
    { logo: logo3 },
    { logo: logo4 },
    { logo: logo5 },
    { logo: logo6 },
    { logo: logo7 },
  ];

  // Duplicate for seamless looping
  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="py-16 px-6 md:px-20 bg-gray-50">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-black tracking-wide hover:text-red-700 transition-colors duration-300">
      The Best Brands associate partners

      </h2>
      <Slider {...settings} className="mx-4">
        {duplicatedClients.map((client, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-4 py-6 hover:scale-105 transition-transform duration-500">
            <img
              src={client.logo}
              alt={`Brand logo ${index + 1}`}
              className="w-36 h-24 sm:w-40 sm:h-28 md:w-48 md:h-32 lg:w-56 lg:h-36 xl:w-64 xl:h-40 object-contain rounded-lg  transform hover:scale-110 transition-transform duration-700 ease-in-out"/>
          </div>
        ))}
      </Slider>
    </div>
  );
}
