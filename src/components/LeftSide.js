import React from "react";
import theo from "../images/dog1.png";
import { useState } from "react";
const LeftSide = () => {
  const [doggos, setDoggos] = useState(0);
  const doggoClickHandler = () => {
    setDoggos((prev) => prev + 1);
  };
  return (
    <div className="w-1/3 bg-[#F3D250] border-r-8 border-black flex flex-col items-center">
      <div className="h-[10vh] w-full flex items-center justify-center">
        <div className="w-1/2 h-3/5  bg-black bg-opacity-25 text-white rounded-xl  text-xl xl:text-3xl flex items-center justify-center">
          Your Doggo Farm
        </div>
      </div>

      <div className="w-full h-[8vh] bg-black bg-opacity-40 text-white py-3">
        <div className=" text-3xl">{doggos} Doggos</div>
        <div className=" text-xl">per second: 0.0 </div>
      </div>

      <div className="flex flex-col h-[68vh] justify-center pb-12">
        <img
          src={theo}
          alt="Theo"
          className="mr-8 h-4/5"
          onClick={doggoClickHandler}
        />
      </div>
    </div>
  );
};

export default LeftSide;
