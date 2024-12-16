import React from "react";
import gallery from "../assets/gallery 1.png";
import gallery1 from "../assets/gallery 2.png";
import gallery2 from "../assets/gallery 3.png";
import gallery3 from "../assets/gallery 4.png";
import gallery4 from "../assets/gallery 6.png";
import gallery6 from "../assets/gallery 7.png";
import gallery7 from "../assets/gallery 8.png";

export default function Gallery() {
  const images = [
    { id: 1, src: gallery,  size: "big" },
    { id: 2, src: gallery1, size: "small" },
    { id: 3, src: gallery2,  size: "big" },
    { id: 4, src: gallery3,  size: "small" },
    { id: 5, src: gallery4,  size: "small" },
    { id: 6, src: gallery6,  size: "big" },
    { id: 7, src: gallery7,  size: "big" },

  ];
  
  return (
    
    <div className="p-6 sm:p-10 bg-gray-100">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 text-black font-serif">
          Explore Our Gallery
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl font-serif">
          Discover the beauty of our work and projects through this collection of captivating images.
        </p>
      </div>
      {/* Gallery Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300
              ${image.size === "big" ? "row-span-2" : "row-span-1"}`}>
            <img
              src={image.src}
              alt={image.alt}
              className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out
                ${image.id === 1 || image.id === 3 ? 'sm:h-64 lg:h-80' : 'sm:h-48 lg:h-60'} 
                rounded-lg`} // Custom height and zoom effect
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-medium text-lg sm:text-xl transition-opacity duration-300 transform scale-95 group-hover:scale-105">
              {image.alt}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
