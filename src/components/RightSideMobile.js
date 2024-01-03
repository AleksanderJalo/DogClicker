import React, { useState, useEffect } from "react";
import mouseBuffImage from "../images/upgrade art/mouse_booth.png";
import doggoUpgradeImage from "../images/upgrade art/goledenDoggoUpgrade.png";
import dobermanUpgradeImage from "../images/upgrade art/dobermanUpgrade.png";
import brownDoggoUpgradeImage from "../images/upgrade art/brownDoggoUpgrade.png";
import goldenDogAnimation from "../images/upgrade art/Dog_Idle_Animation.gif";
import brownWhiteDogAnimation from "../images/upgrade art/Dog_Idle_brown_white.gif";
import dobermanDogWalkAnimation from "../images/upgrade art/Dog_2_Walk.gif";
import catAnimation from "../images/upgrade art/Catanimation.gif";
import BirdAnimation from "../images/upgrade art/Bird_animation.gif";
import catUpgrade from "../images/upgrade art/cat_upgrade.png";
import birdUpgrade from "../images/upgrade art/birdUpgrade.png";
import PowerUpMobile from "./PowerUpMobile";

const RightSideMobile = (props) => {
  const [powerUpOpacity, setPowerUpOpacity] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [upgradesOpacity, setUpgradesOpacity] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const powerUpCost = props.powerUpCost;

  const upgradeCost = props.upgradeCost;

  const ownedUpgrades = props.upgradesQuantities;

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
    for (let i = 0; i < upgradeCost.length; i++) {
      let newOpacity = upgradesOpacity;
      if (props.doggosNumber >= upgradeCost[i]) {
        newOpacity[i] = true;
        setUpgradesOpacity(newOpacity);
      } else {
        let newOpacity = upgradesOpacity;
        newOpacity[i] = false;
        setUpgradesOpacity(newOpacity);
      }
    }
  }, [
    powerUpCost,
    props.doggosNumber,
    powerUpOpacity,
    upgradeCost,
    upgradesOpacity,
    props.onPowerUpBuy,
    setPowerUpOpacity,
  ]);

  const buyPowerUp = (id) => {
    if (id === 0) {
      if (props.doggosNumber >= powerUpCost[id]) {
        props.betterClick();
        props.deleteDoggos(powerUpCost[id]);
      }
    } else {
      if (props.doggosNumber >= powerUpCost[id]) {
        props.deleteDoggos(powerUpCost[id]);
        props.onPowerUpBuy(id - 1);
      }
    }
  };

  const buyUpgrade = (id) => {
    if (props.doggosNumber >= Math.floor(upgradeCost[id])) {
      props.deleteDoggos(Math.floor(upgradeCost[id]));
      props.onUpgradeBuy(id);
    }
  };

  return (
    <div className="h-[80svh] bg-[#90CCF4] pt-[1rem]">
      <div className="h-[8svh] w-full bg-black bg-opacity-40 text-white text-[1rem] flex items-center justify-center">
        Shop
      </div>
      <div className="h-[12svh] mt-[1rem] bg-black bg-opacity-50 w-full flex flex-col items-center gap-[1rem]">
        <div className="text-white mt-[0.6rem] text-[0.8rem]">Upgrades your workers x2</div>
        <div className="flex justify-center gap-[2rem]">  <PowerUpMobile image={mouseBuffImage} />
        <PowerUpMobile image={doggoUpgradeImage} />
        <PowerUpMobile image={dobermanUpgradeImage} />
        <PowerUpMobile image={brownDoggoUpgradeImage} />
        <PowerUpMobile image={catUpgrade} />
        <PowerUpMobile image={ birdUpgrade } /></div>
      
      </div>
    </div>
  );
};

export default RightSideMobile;
