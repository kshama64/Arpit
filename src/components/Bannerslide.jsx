import React, { useState, useEffect } from "react";
import img from "../assets/img.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import Form from "./Form"; // Import Form component
import { DialogDefault } from "./Modal";

export default function Bannerslide() {
  const slides = [
    {
      id: 1,
      image: img,
      heading: "The home should be the treasure chest of living",
    },
    {
      id: 2,
      image: img2,
      heading: "Colors are the smiles of nature",
    },
    {
      id: 3,
      image: img3,
      heading: "Design is thinking made visual",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // Start at the first real slide
  const [isTransitioning, setIsTransitioning] = useState(true); // Handle smooth transitions
  const [open, setOpen] = useState(false); // State for modal form visibility

  const slideCount = slides.length;

  const extendedSlides = [
    slides[slides.length - 1], // Clone last slide for seamless transition
    ...slides,
    slides[0], // Clone first slide for seamless transition
  ];

  useEffect(() => {
    if (!open) {
      const timer = setInterval(() => {
        nextSlide();
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [currentIndex, open]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleTransitionEnd = () => {
    // Loop back to the real first/last slide without transition
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(slideCount);
    } else if (currentIndex === slideCount + 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    }
  };

  return (
    <>
      <div className="relative font-sans">
        {/* Slider Section */}
        <div className="overflow-hidden">
          <div
            className={`flex transition-transform ease-out duration-500 ${isTransitioning ? "" : "transition-none"
              }`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedSlides.map((slide, index) => (
              <div className="relative min-w-full" key={index}>
                <img
                  src={slide.image}
                  alt={slide.heading}
                  className="w-full h-screen sm:h-[80vh] lg:h-[90vh] object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
                  <h1 className="text-white font-playfair text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                    {slide.heading}
                  </h1>
                  <DialogDefault>
                    <Form />
                  </DialogDefault>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(index + 1); // Adjust for extendedSlides
              }}
              className={`w-3 h-3 rounded-full ${index + 1 === currentIndex
                ? "bg-red-800"
                : "bg-gray-300 hover:bg-gray-500"
                }`}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
}
