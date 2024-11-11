import React, { useState, useEffect } from "react";
import { IoTimerOutline } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

function Conditions() {
  const [date, setDate] = useState(new Date());

  const formattedTime = formatTime(date);
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  function formatTime(date) {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const strMinutes = minutes < 10 ? "0" + minutes : minutes;
    const strSeconds = seconds < 10 ? "0" + seconds : seconds;
    return `${hours}:${strMinutes}:${strSeconds} ${ampm}`;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="m-6 md:m-12 lg:m-24 flex flex-col md:flex-row justify-center gap-6 md:gap-12">
      <div className="text-red-500 flex items-center">
        <CiLocationOn className="h-8 w-8 md:h-12 md:w-12 mx-2 md:mx-3" />
        <span className="text-xl md:text-2xl lg:text-3xl">Bangladesh</span>
      </div>
      <div className="flex items-center text-blue-500">
        <IoTimerOutline className="h-8 w-8 md:h-12 md:w-12 mx-2 md:mx-3" />
        <span className="text-xl md:text-2xl lg:text-3xl">{formattedTime}</span>
      </div>
      <div className="flex items-center text-green-500">
        <FaCalendarAlt className="w-8 h-8 md:w-12 md:h-12 mx-2 md:mx-3" />
        <span className="text-xl md:text-2xl lg:text-3xl">{formattedDate}</span>
      </div>
    </div>
  );
}

export default Conditions;
