import React, { useEffect, useState } from "react";
import { HERO } from "../../Constants";
import { Link } from "react-router-dom";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = HERO.length; // Use dynamic length based on HERO data

  // Automatically change the slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === totalSlides ? 1 : prev + 1));
    }, 5000);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [currentSlide, totalSlides]);

  // Render the carousel navigation buttons
  const renderButtons = () => (
    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {HERO.map((_, index) => (
        <a
          key={index}
          className={`w-4 h-4 rounded-full transition-all duration-300 ${
            currentSlide === index + 1
              ? "bg-gradient-to-br from-gray-800 to-gray-600"
              : "bg-gradient-to-br from-gray-500 to-gray-300"
          } hover:bg-gray-400`}
          onClick={() => setCurrentSlide(index + 1)} // Update slide index
        ></a>
      ))}
    </div>
  );

  return (
    <div className="carousel w-full relative">
      {HERO.map((hero, index) => (
        <div
          key={index}
          className={`carousel-item relative w-full ${currentSlide === index + 1 ? "block" : "hidden"}`}
        >
          <img
            src={hero.img}
            className="w-full h-[400px] object-cover"
            alt={hero.famous}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-center text-white">
            <h1 className="text-3xl font-bold text-white mb-4">
              {hero.famous}
            </h1>
            <Link to={`/districts/${hero.id}`}>
              <button className="btn btn-primary">Explore</button>
            </Link>
          </div>
          {renderButtons()}
        </div>
      ))}
    </div>
  );
}

export default Hero;
