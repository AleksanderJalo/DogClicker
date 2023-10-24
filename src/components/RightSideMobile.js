import React from "react";
import mouseBuffImage from "../images/upgrade art/mouse_booth.png";
import PowerUpMobile from "./PowerUpMobile";
const RightSideMobile = () => {
  return (
    <div className="h-[80svh] bg-[#90CCF4] pt-[1rem]">
      <div className="h-[8svh] w-full bg-black bg-opacity-40 text-white text-[1.2rem] flex items-center justify-center">
        Shop
      </div>
      <div className="h-[65svh] grid grid-cols-2">
        <PowerUpMobile />
        
      </div>
    </div>
  );
};

export default RightSideMobile;
