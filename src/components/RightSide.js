import React, { useState, useEffect } from "react";
import mouseBoothImage from "../images/upgrade art/mouse_booth.png";
import doggoUpgradeImage from "../images/upgrade art/goledenDoggoUpgrade.png";
import dobermanUpgradeImage from "../images/upgrade art/dobermanUpgrade.png";
import brownDoggoUpgradeImage from "../images/upgrade art/brownDoggoUpgrade.png";
import goldenDogAnimation from "../images/upgrade art/Dog_Idle_Animation.gif";
import brownWhiteDogAnimation from "../images/upgrade art/Dog_Idle_brown_white.gif";
import dobermanDogWalkAnimation from "../images/upgrade art/Dog_2_Walk.gif";
import PowerUp from "./PowerUp";
import Upgrade from "./Upgrade";
const RightSide = (props) => {
  const [powerUpOpacity, setPowerUpOpacity] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [upgradeMultipler, setUpgradeMultpler] = useState([1, 1, 1, 1]);
  const [powerUpCost, setPowerUpCost] = useState([10, 100, 1000, 11000]);
  const [upgradeCost, setUpgradeCost] = useState([10, 100, 1100]);
  const [upgradeCps, setUpgradeCps] = useState([0.1, 0.3, 0.5]);
  const [ownedUpgrades, setOwnedUpgrades] = useState([0, 0, 0]);

  useEffect(() => {
    for (let i = 0; i < powerUpCost.length; i++) {
      if (props.doggosNumber >= powerUpCost[i]) {
        let newOpacity = powerUpOpacity;
        newOpacity[i] = true;
        setPowerUpOpacity(newOpacity);
      } else {
        let newOpacity = powerUpOpacity;
        newOpacity[i] = false;
        setPowerUpOpacity(newOpacity);
      }
    }
  });

  const buyPowerUp = (id) => {
    if (id === 0) {
      if (props.doggosNumber >= powerUpCost[id]) {
        props.betterClick();
        props.deleteDoggos(powerUpCost[id]);

        let powerUpsCostUpdated = powerUpCost;
        powerUpsCostUpdated[id] = powerUpsCostUpdated[id] * 4;
        setPowerUpCost(powerUpsCostUpdated);
      }
    } else {
      if (props.doggosNumber >= powerUpCost[id]) {
        props.deleteDoggos(powerUpCost[id]);
        let powerUpsCostUpdated = powerUpCost;
        powerUpsCostUpdated[id] = powerUpsCostUpdated[id] * 4;
        setPowerUpCost(powerUpsCostUpdated);
        props.onUpgradeBuy(ownedUpgrades[id] * 0.1 * upgradeMultipler[id]);
      }
    }
  };

  const buyUpgrade = (id) => {
    if (props.doggosNumber >= Math.floor(upgradeCost[id])) {
      props.deleteDoggos(Math.floor(upgradeCost[id]));
      props.onUpgradeBuy(upgradeCps[id] * upgradeMultipler[id]);
      let upgradeCostUpdated = upgradeCost;
      upgradeCostUpdated[id] = upgradeCostUpdated[id] * 1.15;
      setUpgradeCost(upgradeCostUpdated);
      let ownedUpdatesUpdated = ownedUpgrades;
      ownedUpdatesUpdated[id] += 1;
      setOwnedUpgrades(ownedUpdatesUpdated);
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
          show={powerUpOpacity[0]}
          image={mouseBoothImage}
          id={0}
          cost={powerUpCost[0]}
          onClick={() => {
            buyPowerUp(0);
          }}
        />
        <PowerUp
          show={powerUpOpacity[1]}
          image={doggoUpgradeImage}
          id={1}
          cost={powerUpCost[1]}
          onClick={() => {
            buyPowerUp(1);
          }}
        />
        <PowerUp
          show={powerUpOpacity[2]}
          image={dobermanUpgradeImage}
          id={2}
          cost={powerUpCost[2]}
        />
        <PowerUp
          show={powerUpOpacity[3]}
          image={brownDoggoUpgradeImage}
          id={3}
          cost={powerUpCost[3]}
        />
      </div>
      <Upgrade
        image={goldenDogAnimation}
        text={"Golden Dog"}
        cost={Math.floor(upgradeCost[0])}
        number={ownedUpgrades[0]}
        onClick={() => {
          buyUpgrade(0);
        }}
      />
      <Upgrade
        image={dobermanDogWalkAnimation}
        text={"Doberman"}
        cost={Math.floor(upgradeCost[1])}
        number={ownedUpgrades[1]}
        onClick={() => {
          buyUpgrade(1);
        }}
      />
      <Upgrade
        image={brownWhiteDogAnimation}
        text={"Brown Dog"}
        cost={Math.floor(upgradeCost[2])}
        number={ownedUpgrades[2]}
      />
    </div>
  );
};

export default RightSide;
