import React, { useEffect, useState } from "react";

import { HERO } from "../../Constants";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 8;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === totalSlides ? 1 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const renderButtons = () => (
    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((slide) => (
        <a
          key={slide}
          href={`#slide${slide}`}
          className={`w-4 h-4 rounded-full transition-all duration-300 ${
            currentSlide === slide
              ? "bg-gradient-to-br from-gray-800 to-gray-600"
              : "bg-gradient-to-br from-gray-500 to-gray-300"
          } hover:bg-gray-400`}
          onClick={() => setCurrentSlide(slide)}
        ></a>
      ))}
    </div>
  );

  return (
    <div className="carousel w-full">
      {HERO.map((hero, index) => (
        <div
          key={index}
          id={`slide${hero.id}`}
          className={`carousel-item relative w-full ${currentSlide === index + 1 ? "block" : "hidden"}`}
        >
          <img
            src={hero.img}
            className="w-full h-5px object-cover"
            alt={`Slide ${hero.id}`}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-center text-white">
            <h1 className="text-3xl font-bold text-red-600 mb-4">
              {hero.famous}
            </h1>
            <button className="btn btn-primary border-t-pink-800">
              Read more
            </button>
          </div>
          {renderButtons()}
        </div>
      ))}
    </div>
  );
}

export default Hero;
