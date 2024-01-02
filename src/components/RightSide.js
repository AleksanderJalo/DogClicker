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
import PowerUp from "./PowerUp";
import Upgrade from "./Upgrade";
const RightSide = (props) => {
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
    setPowerUpOpacity
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
    <div className="w-1/3 bg-[#90CCF4] border-l-8 border-black flex flex-col  items-center">
      <div className="w-full bg-black bg-opacity-50  border-b-4 border-black h-[18vh] flex flex-col items-center justify-between">
        <div className="text-white py-0.6rem lg:py-1rem  xl:py-3 border-4 border-yellow-700 px-6 rounded-lg bg-opacity-60 bg-black mt-[0.2rem] lg:mt-[0.4rem] text-[0.6rem] lg:[text-0.8rem] xl:text-[1rem] h-[6svh] flex justify-center items-center">
          Power Ups
        </div>
        <div className=" flex flex-nowrap justify-between items-center px-4 w-full h-[9svh] mt-[0.3rem] md:my-0.5rem lg:mt-[0.8rem]">
          <PowerUp
            show={powerUpOpacity[0]}
            image={mouseBuffImage}
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
            onClick={() => {
              buyPowerUp(2);
            }}
          />
          <PowerUp
            show={powerUpOpacity[3]}
            image={brownDoggoUpgradeImage}
            id={3}
            cost={powerUpCost[3]}
            onClick={() => {
              buyPowerUp(3);
            }}
          />
          <PowerUp
            show={powerUpOpacity[4]}
            image={catUpgrade}
            id={4}
            cost={powerUpCost[4]}
            onClick={() => {
              buyPowerUp(4);
            }}
          />
          <PowerUp
            show={powerUpOpacity[5]}
            image={birdUpgrade}
            id={5}
            cost={powerUpCost[5]}
            onClick={() => {
              buyPowerUp(5);
            }}
          />
        </div>
      </div>
      <div className="flex flex-col justify-between items-center w-full h-[67svh]">
        <Upgrade
          show={upgradesOpacity[0]}
          image={goldenDogAnimation}
          text={"Golden Dog"}
          cost={Math.floor(upgradeCost[0])}
          number={ownedUpgrades[0]}
          onClick={() => {
            buyUpgrade(0);
          }}
        />
        <Upgrade
          show={upgradesOpacity[1]}
          image={dobermanDogWalkAnimation}
          text={"Doberman"}
          cost={Math.floor(upgradeCost[1])}
          number={ownedUpgrades[1]}
          onClick={() => {
            buyUpgrade(1);
          }}
        />
        <Upgrade
          show={upgradesOpacity[2]}
          image={brownWhiteDogAnimation}
          text={"Brown Dog"}
          cost={Math.floor(upgradeCost[2])}
          number={ownedUpgrades[2]}
          onClick={() => {
            buyUpgrade(2);
          }}
        />
        <Upgrade
          show={upgradesOpacity[3]}
          image={catAnimation}
          text={"Cat"}
          cost={Math.floor(upgradeCost[3])}
          number={ownedUpgrades[3]}
          onClick={() => {
            buyUpgrade(3);
          }}
        />
        <Upgrade
          show={upgradesOpacity[4]}
          image={BirdAnimation}
          text={"Bird"}
          cost={Math.floor(upgradeCost[4])}
          number={ownedUpgrades[4]}
          onClick={() => {
            buyUpgrade(4);
          }}
        />
      </div>
    </div>
  );
};

export default RightSide;
