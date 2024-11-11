import React from "react";
import { useParams } from "react-router-dom";
import { DISCOVER } from "../../Constants";

function DescribeDiscover() {
  const { id } = useParams();
  const discover = DISCOVER.find((exp) => exp.id === parseInt(id, 10));

  if (!discover) {
    return (
      <div className="text-center mt-20 mx-4 sm:mx-16 md:mx-32">
        <h1 className="text-4xl text-red-600">Discover not found</h1>
        <p>
          <a href="/all-discovers" className="text-blue-600 underline">
            Go back to all discovers
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="py-20 max-w-4xl mx-auto px-4 sm:px-8">
      {/* Title Section */}
      <h1 className="text-5xl font-extrabold text-center text-black mb-6">
        {discover.name}
      </h1>

      {/* Image Section */}
      <div className="flex justify-center mb-8">
        <img
          src={discover.img}
          alt={discover.name}
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Description Section */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        {discover.description}
      </p>

      {/* Placeholder Text */}
      <p className="text-lg text-gray-700 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis at
        nam sunt suscipit mollitia odit tempora ducimus nihil consequuntur
        earum! Dicta quas odio dignissimos praesentium fugiat dolore, sapiente
        aliquam voluptas. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Aut nobis fugit blanditiis. Unde doloribus magni doloremque a
        suscipit voluptatem rerum facilis nemo, incidunt ad qui ipsum? Ducimus
        placeat sit saepe?
      </p>
    </div>
  );
}

export default DescribeDiscover;
