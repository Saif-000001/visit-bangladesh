import React from "react";
import { EXPERIENCES } from "../../Constants";
import { Link } from "react-router-dom";

function AllExperiences() {
  return (
    <div className="pb-4 mx-4 md:mx-16 lg:mx-32 xl:mx-48">
      <h2 className="my-10 text-center text-3xl md:text-4xl">
        All Experiences
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {EXPERIENCES.map((experience, index) => (
          <Link to={`/describe-experiences/${experience.id}`} key={index}>
            <div
              id={experience.id}
              className="relative m-2 w-full h-72 sm:h-80 md:h-96"
            >
              <img
                src={experience.img}
                className="w-full h-full object-cover rounded-lg shadow-lg"
                alt={experience.name}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-center text-white">
                <h1 className="pb-8 text-lg sm:text-xl font-bold text-white mb-2">
                  {experience.name}
                </h1>
                <p className="text-sm sm:text-base">{experience.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AllExperiences;
