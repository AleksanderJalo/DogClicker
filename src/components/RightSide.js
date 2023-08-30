import React, { useState } from "react";
import mouseBooth from "../images/upgrade art/mouse_booth.png";
import goldenDogAnimation from "../images/upgrade art/Dog_Idle_Animation.gif";
import brownWhiteDogAnimation from "../images/upgrade art/Dog_Idle_brown_white.gif";
import dobermanDogWalkAnimation from "../images/upgrade art/Dog_2_Walk.gif";
import Upgrade from "./Upgrade";
const RightSide = () => {
  const [goldenDogPrice, setGoldenDogPrice] = useState(15);

  return (
    <div className="w-1/3 bg-[#90CCF4] border-l-8 border-black flex flex-col  items-center">
      <div className="h-[10vh] w-full flex items-center justify-center">
        <div className="w-1/2 h-3/5 bg-black bg-opacity-25 text-white rounded-xl p-3 text-xl xl:text-3xl flex items-center justify-center">
          Shop
        </div>
      </div>

      <div className="w-full bg-black bg-opacity-50 border-t-4 border-b-4 border-black flex justify-between items-center px-4 h-[8vh] overflow-hidden flex-wrap">
        <img src={mouseBooth} alt="powerup" className="h-3/4" />
        <img src={mouseBooth} alt="powerup" className="h-3/4" />
        <img src={mouseBooth} alt="powerup" className="h-3/4" />
        <img src={mouseBooth} alt="powerup" className="h-3/4" />
        <img src={mouseBooth} alt="powerup" className="h-3/4" />
        <img src={mouseBooth} alt="powerup" className="h-3/4" />
      </div>
      <Upgrade
        image={goldenDogAnimation}
        text={"Golden Dog"}
        initialCost={15}
      />
      <Upgrade
        image={dobermanDogWalkAnimation}
        text={"Doberman"}
        initialCost={100}
      />
      <Upgrade
        image={brownWhiteDogAnimation}
        text={"Brown Dog"}
        initialCost={1100}
      />
    </div>
  );
};

export default RightSide;
