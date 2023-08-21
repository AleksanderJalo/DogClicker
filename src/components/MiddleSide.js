import React from "react";
import grass from "../images/trawa.png";
import dirt from "../images/ziemia2.png";
const MiddleSide = () => {
  return (
    <div className="w-1/3 bg-[#F78888]  flex flex-col  items-center">
      <div className="h-[10vh] w-full flex items-center justify-center">
        <div className="w-1/2 h-3/5 bg-black bg-opacity-25 text-white rounded-xl p-3 text-xl xl:text-3xl flex items-center justify-center">
          Your Workers
        </div>
      </div>
      <div className="h-1/4 w-full flex flex-col items-center gap-4">
        <div className=" w-full flex overflow-hidden  h-[8vh]">
          <img
            src={grass}
            alt="grass"
            className="border-t-4 border-b-4 border-black"
          />
          <img
            src={grass}
            alt="grass"
            className="border-t-4 border-b-4 border-black"
          />
          <img
            src={grass}
            alt="grass"
            className="border-t-4 border-b-4 border-black"
          />
          <img
            src={grass}
            alt="grass"
            className="border-t-4 border-b-4 border-black"
          />
        </div>
      </div>
      <div className="w-full flex overflow-hidden  h-[8vh]">
        {" "}
        <img
          src={dirt}
          alt="grass"
          className="border-t-4 border-b-4 border-black"
        />
        <img
          src={dirt}
          alt="grass"
          className="border-t-4 border-b-4 border-black"
        />
        <img
          src={dirt}
          alt="grass"
          className="border-t-4 border-b-4 border-black"
        />
        <img
          src={dirt}
          alt="grass"
          className="border-t-4 border-b-4 border-black"
        />
      </div>
    </div>
  );
};

export default MiddleSide;
