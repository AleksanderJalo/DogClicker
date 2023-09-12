import React, {useEffect} from "react";
import grass from "../images/trawa.png";
import dirt from "../images/ziemia2.png";
import dirt2 from "../images/ground3.png";
const MiddleSide = (props) => {
  return (
    <div className="w-1/3 bg-[#F78888]  flex flex-col  items-center">
      <div className="h-[10vh] w-full flex items-center justify-center">
        <div className="w-1/2 h-3/5 bg-black bg-opacity-25 text-white rounded-xl p-3 text-xl xl:text-3xl flex items-center justify-center">
          Your Workers
        </div>
      </div>
      <div className="h-[60vh]">
        <div className="h-[8vh] w-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className=" text-3xl text-white flex gap-2"><div>{Math.round(props.doggosPerSecond * 10) / 10}</div> per Seconds</div>
        </div>
        <div className=" w-full flex overflow-hidden mt-6 h-[8vh]">
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
        <div className="w-full flex overflow-hidden  h-[8vh] mt-6">
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
        <div className=" w-full flex overflow-hidden  h-[8vh] mt-6">
          <img
            src={dirt2}
            alt="grass"
            className="border-t-4 border-b-4 border-black"
          />
          <img
            src={dirt2}
            alt="grass"
            className="border-t-4 border-b-4 border-black"
          />
          <img
            src={dirt2}
            alt="grass"
            className="border-t-4 border-b-4 border-black"
          />
          <img
            src={dirt2}
            alt="grass"
            className="border-t-4 border-b-4 border-black"
          />
        </div>
        <div className="w-full flex overflow-hidden  h-[8vh] mt-6">
          {" "}
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
        <div className=" w-full flex overflow-hidden  h-[8vh] mt-6">
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
        <div className="w-full flex overflow-hidden  h-[8vh] mt-6">
          {" "}
          <img
            src={dirt2}
            alt="grass"
            className="border-t-4 border-b-4 border-black"
          />
          <img
            src={dirt2}
            alt="grass"
            className="border-t-4 border-b-4 border-black"
          />
          <img
            src={dirt2}
            alt="grass"
            className="border-t-4 border-b-4 border-black"
          />
          <img
            src={dirt2}
            alt="grass"
            className="border-t-4 border-b-4 border-black"
          />
        </div>
      </div>
    </div>
  );
};

export default MiddleSide;
