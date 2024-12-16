import React, { useState, useEffect } from "react";

import modular from "../assets/modular.jpg";
import home from "../assets/home.jpg";
import bedroom from "../assets/bedroom.jpg";
import living from "../assets/living.jpg";
import Gallery from "./Gallery";
import Slide from "./slide";
import Testimonial from "./Testimonial";
import Brands from "./Brands";
import Bannerslide from "./Bannerslide";
import Form from "./Form";
import Formimg from "./Formimg";
import Footer1 from "./Footer1";
import Footer from "./Footer";

export default function Home() {
  const [open, setOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cards = [
    {
      id: 1,
      image: modular,
      title: "Modular Interiors",
      description:
        "Pre-designed kitchen layouts with customizable cabinets, counters, and appliances.",
    },
    {
      id: 2,
      image: home,
      title: "Complete Home Interior",
      description:
        "Complete design solutions for new homes, including furniture, lighting, decor, and layout.",
    },
    {
      id: 3,
      image: bedroom,
      title: "Bedroom Design",
      description: "Focused design solutions for individual rooms.",
    },
    {
      id: 4,
      image: living,
      title: "Living Room",
      description:
        "A cozy living room with comfortable seating, accent lighting, and modern decor, creating a space perfect for relaxation and entertainment.",
    },
  ];
  
  const handleChange = () => {
    setOpen(true);
    console.log("clicked");
    // alert("Clicked");
  };
  return (
    <>
    <Bannerslide/>
    <Formimg/>
      {/* Remaining Content */}
      <div className="p-6 sm:p-10 bg-gray-100">
        <div className="text-center mb-10">
          <h1 className="text-xl sm:text-4xl lg:text-4xl font-bold mb-4 text-gray-800 font-serif">
            One-stop shop for all things interiors
          </h1>
          <p className="text-gray-800 text-md sm:text-xl font-serif">
            Be it end-to-end interiors, renovation, or modular solutions, we
            have it all for your home <br /> or office. With a wide range of
            furniture & decor, we have your back from start to finish.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out mx-auto max-w-xs sm:max-w-sm lg:max-w-none w-full">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h2 className="text-lg font-bold text-black mb-2 font-serif">
                  {card.title}
                </h2>
                <p className="text-gray-700 font-serif">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Slide />
      <Gallery />
      <Testimonial />
      <Brands />
      {/* <Form/> */}

      {
        isMobile ?  <Footer1/>: <Footer/>
      }
    </>
  );
}
