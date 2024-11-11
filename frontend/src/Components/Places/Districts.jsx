import React from "react";
import { useParams } from "react-router-dom";
import { DIVISION } from "../../Constants";

function Districts() {
  const { id } = useParams(); // Get the division id from URL parameters
  const division = DIVISION.find((div) => div.id === parseInt(id, 10));

  return (
    <div className="p-4 mx-4 sm:mx-16 md:mx-32">
      <h2 className="my-12 text-center text-4xl sm:text-5xl">
        Districts of {division ? division.name : "Unknown"}
      </h2>
      {division ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {division.districts.map((district) => (
            <div
              key={district.id}
              className="relative m-2 w-full h-48 sm:h-60 md:h-64 lg:h-72 xl:h-80"
            >
              <img
                src={district.img}
                className="w-full h-full object-cover rounded-lg"
                alt={district.name}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-center text-white">
                <h1 className="text-lg sm:text-xl font-bold mb-2">
                  {district.name}
                </h1>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-xl mt-8 text-gray-500">
          Division not found.
        </p>
      )}
    </div>
  );
}

export default Districts;
