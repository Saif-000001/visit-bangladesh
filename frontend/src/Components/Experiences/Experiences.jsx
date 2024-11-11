import React, { useState } from "react";
import { EXPERIENCES } from "../../Constants";
import { Link } from "react-router-dom";

function Experiences() {
  const [experienceLength, setExperienceLength] = useState(4);

  return (
    <div className="p-4 mx-4 sm:mx-16 md:mx-32">
      <h2 className="my-10 text-center text-3xl md:text-4xl">Experiences</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {EXPERIENCES.slice(0, experienceLength).map((experience, index) => (
          <Link to={`/describe-experiences/${experience.id}`} key={index}>
            <div
              id={experience.id}
              className="relative m-2 w-full h-72 md:h-80"
            >
              <img
                src={experience.img}
                className="w-full h-full object-cover rounded-lg shadow-lg"
                alt={experience.id}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-center text-white">
                <h1 className="pb-8 text-lg md:text-xl font-bold text-white mb-2">
                  {experience.name}
                </h1>
                <p className="text-sm md:text-base">{experience.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div
        className={`text-center mt-5 ${experienceLength === EXPERIENCES.length ? "hidden" : ""}`}
      >
        <Link to="/all-experiences">
          <button
            onClick={() => setExperienceLength(EXPERIENCES.length)}
            type="button"
            className="text-white bg-green-800 hover:bg-green-500 focus:ring-4 font-medium rounded-lg text-sm px-6 py-4 me-2 mb-2"
          >
            See All Experiences
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Experiences;
