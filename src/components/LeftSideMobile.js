import React from "react";

const LeftSideMobile = () => {
  return (
    <div className="h-[80svh] bg-[#F3D250]">
      <div className="h-[10svh] w-full flex justify-center">
        <div className="bg-black bg-opacity-25 text-white rounded-xl h-3/5 px-[1rem] mt-[1rem] flex items-center justify-center flex-nowrap">
          Your Doggo Farm
        </div>
      </div>
      <div className="w-full h-[8svh] bg-black bg-opacity-40 text-white flex flex-col justify-center items-center">
              <div className="text-[1rem]"> 0 DOGGOS</div>
              <div className="text-[0.7rem]">CLICK - 1 DOG</div>
      </div>
    </div>
  );
};

export default LeftSideMobile;
