import React from "react";
import { DIVISION } from "../../Constants";
import { Link } from "react-router-dom";

function Places() {
  return (
    <div className="p-4 mx-4 sm:mx-16 md:mx-32">
      <h2 className="my-12 text-center text-4xl sm:text-5xl">Place</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {DIVISION.map((division, index) => (
          <Link to={`/districts/${division.id}`} key={index}>
            <div
              id={division.id}
              className="relative m-2 w-full h-48 sm:h-60 md:h-64 lg:h-72 xl:h-80"
            >
              <img
                src={division.img}
                className="w-full h-full object-cover rounded-lg"
                alt={division.name}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-center text-white">
                <h1 className="text-lg sm:text-xl font-bold mb-2">
                  {division.name}
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Places;
