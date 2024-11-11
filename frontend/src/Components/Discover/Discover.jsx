import React, { useState } from "react";
import { DISCOVER } from "../../Constants";
import { Link } from "react-router-dom";

function Discover() {
  const [discoverLength, setDiscoverLength] = useState(4);

  return (
    <div className="p-4 mx-4 sm:mx-16 md:mx-32">
      <h2 className="my-20 text-center text-4xl">Discover Bangladesh</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {DISCOVER.slice(0, discoverLength).map((discover, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <figure className="overflow-hidden">
              <Link to={`/describe-discovers/${discover.id}`}>
                <img
                  src={discover.img}
                  alt={discover.name}
                  className="object-cover h-80 w-full"
                />
              </Link>
            </figure>
            <div className="card-body">
              <a
                href={`/describe-discovers/${discover.id}`}
                className="hover:underline text-blue-500 transition duration-200 text-3xl"
              >
                {discover.name}
              </a>
              <p className="text-gray-600">
                {discover.description.slice(0, 70)}...
              </p>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`text-center m-5 ${discoverLength === DISCOVER.length ? "hidden" : ""}`}
      >
        <Link to="/all-discovers">
          <button
            onClick={() => setDiscoverLength(DISCOVER.length)}
            type="button"
            className="text-white bg-green-800 hover:bg-green-500 focus:ring-4 font-medium rounded-lg text-sm px-6 py-4 me-2 mb-2"
          >
            See All Discovers
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Discover;
