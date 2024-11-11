import React from "react";
import { DISCOVER } from "../../Constants";
import { Link } from "react-router-dom";

function AllDiscover() {
  return (
    <div className="pb-4 mx-4 sm:mx-16 md:mx-32">
      <h2 className="my-20 text-center text-4xl font-bold">All Discovers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {DISCOVER.map((discover) => (
          <div
            key={discover.id}
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
                className="hover:underline transition duration-200 text-3xl text-blue-600"
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
    </div>
  );
}

export default AllDiscover;
