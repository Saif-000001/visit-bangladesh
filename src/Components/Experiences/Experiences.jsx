import React from 'react'
import { HERO } from '../../Constants';

function Experiences() {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Experiences</h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        {HERO.map((hero, index) => (
          <div
            key={index}
            id={`slide${hero.id}`}
            className={`relative m-2 w-full h-96`}
          >
            <img
              src={hero.img}
              className="w-full h-full object-cover"
              alt={`Slide ${hero.id}`}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-center text-white">
              <h1 className="text-xl font-bold text-red-600 mb-2">
                {hero.famous}
              </h1>
              <button className="btn btn-primary border-t-pink-800">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiences
