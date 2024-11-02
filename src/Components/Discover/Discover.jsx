import React from "react";
import { HERO } from "../../Constants";

function Discover() {
  return (
    <div className="p-4">
      <h2 className="my-20 text-center text-4xl">Discover Bangladesh</h2>
      <div className="grid grid-cols-2 gap-4">
        {HERO.map((hero, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <figure className="overflow-hidden">
              <img
                src={hero.img}
                alt={hero.id}
                className="object-cover h-80 w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title flex justify-between items-center">
                {hero.famous}
                {/* <div className="badge badge-secondary">NEW</div> */}
              </h2>
              {/* <p className="text-gray-600">
                If a dog chews shoes whose shoes does he choose?
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Discover;
