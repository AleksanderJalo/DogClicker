import React, { useState } from "react";
import mouseBooth from "../images/upgrade art/mouse_booth.png";
import goldenDogAnimation from "../images/upgrade art/Dog_Idle_Animation.gif";
import brownWhiteDogAnimation from "../images/upgrade art/Dog_Idle_brown_white.gif";
import dobermanDogWalkAnimation from "../images/upgrade art/Dog_2_Walk.gif";
import PowerUp from "./PowerUp";
import Upgrade from "./Upgrade";
const RightSide = (props) => {
  const [powerUpCost, setPowerUpCost] = useState([10, 100, 1000, 11000]);
  const [upgradeCost, setUpgradeCost] = useState([10, 100, 1100]);
  const buyPowerUp = (id) => {
    if (props.doggosNumber >= powerUpCost[id]) {
      props.deleteDoggos(powerUpCost[id]);
      props.betterClick();
      let powerUpsCostUpdated = powerUpCost;
      powerUpsCostUpdated[id] = powerUpsCostUpdated[id] * 4;
      setPowerUpCost(powerUpsCostUpdated);
    }
  };
  return (
    <div className="w-1/3 bg-[#90CCF4] border-l-8 border-black flex flex-col  items-center">
      <div className="h-[10vh] w-full flex items-center justify-center">
        <div className="w-1/2 h-3/5 bg-black bg-opacity-25 text-white rounded-xl p-3 text-xl xl:text-3xl flex items-center justify-center">
          Shop
        </div>
      </div>

      <div className="w-full bg-black bg-opacity-50 border-t-4 border-b-4 border-black flex justify-between items-center px-4 h-[8vh] flex-wrap">
        <PowerUp
          image={mouseBooth}
          id={0}
          cost={powerUpCost[0]}
          onClick={() => {
            buyPowerUp(0);
          }}
        />
        <PowerUp image={mouseBooth} id={1} cost={powerUpCost[1]} />
        <PowerUp image={mouseBooth} id={2} cost={powerUpCost[2]} />
        <PowerUp image={mouseBooth} id={3} cost={powerUpCost[3]} />
      </div>
      <Upgrade
        image={goldenDogAnimation}
        text={"Golden Dog"}
        cost={upgradeCost[0]}
      />
      <Upgrade
        image={dobermanDogWalkAnimation}
        text={"Doberman"}
        cost={upgradeCost[1]}
      />
      <Upgrade
        image={brownWhiteDogAnimation}
        text={"Brown Dog"}
        cost={upgradeCost[2]}
      />
    </div>
  );
};

export default RightSide;
