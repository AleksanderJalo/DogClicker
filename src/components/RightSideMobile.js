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
import UpgradeMobile from "./UpgradeMobile";

const RightSideMobile = (props) => {
  const [windowHeight] = useState(window.innerHeight);
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
    <div className="h-[83svh] bg-[#90CCF4] pt-[1rem]">
      <div className="h-[8svh] w-full bg-black bg-opacity-40 text-white text-[1rem] flex items-center justify-center">
        Shop
      </div>
      <div className="h-[14svh] mt-[1rem] bg-black bg-opacity-50 w-full flex flex-col items-center gap-[0.9rem]">
        <div className="text-white mt-[0.4rem] text-[0.85rem]">
          Upgrades your workers x2
        </div>
        <div className="flex justify-center gap-[2rem] mb-[0.6rem]">
          {" "}
          <PowerUpMobile
            image={mouseBuffImage}
            show={powerUpOpacity[0]}
            cost={powerUpCost[0]}
            onClick={() => {
              buyPowerUp(0);
            }}
          />
          <PowerUpMobile
            image={doggoUpgradeImage}
            show={powerUpOpacity[1]}
            cost={powerUpCost[1]}
            onClick={() => {
              buyPowerUp(1);
            }}
          />
          <PowerUpMobile
            image={dobermanUpgradeImage}
            show={powerUpOpacity[2]}
            cost={powerUpCost[2]}
            onClick={() => {
              buyPowerUp(2);
            }}
          />
          <PowerUpMobile
            image={brownDoggoUpgradeImage}
            show={powerUpOpacity[3]}
            cost={powerUpCost[3]}
            onClick={() => {
              buyPowerUp(3);
            }}
          />
          <PowerUpMobile
            image={catUpgrade}
            show={powerUpOpacity[4]}
            cost={powerUpCost[4]}
            onClick={() => {
              buyPowerUp(4);
            }}
          />
          <PowerUpMobile
            image={birdUpgrade}
            show={powerUpOpacity[5]}
            cost={powerUpCost[5]}
            onClick={() => {
              buyPowerUp(5);
            }}
          />
        </div>
      </div>
      <div
        className={`h-[61svh] flex flex-col items-center ${
          windowHeight > 750 ? "gap-[1rem]" : "gap-[0.8rem]"
        }  mt-[0.6rem] `}
      >
        <div className="text-white text-[0.8rem] w-1/2 bg-black bg-opacity-50 p-2 border-4 border-black">
          {Math.floor(props.doggosNumber)} doggos
        </div>
        <UpgradeMobile
          show={upgradesOpacity[0]}
          image={goldenDogAnimation}
          text={"Golden Dog"}
          cost={Math.floor(upgradeCost[0])}
          number={ownedUpgrades[0]}
          onClick={() => {
            buyUpgrade(0);
          }}
        />
        <UpgradeMobile
          show={upgradesOpacity[1]}
          image={dobermanDogWalkAnimation}
          text={"Doberman"}
          cost={Math.floor(upgradeCost[1])}
          number={ownedUpgrades[1]}
          onClick={() => {
            buyUpgrade(1);
          }}
        />
        <UpgradeMobile
          show={upgradesOpacity[2]}
          image={brownWhiteDogAnimation}
          text={"Brown Dog"}
          cost={Math.floor(upgradeCost[2])}
          number={ownedUpgrades[2]}
          onClick={() => {
            buyUpgrade(2);
          }}
        />
        <UpgradeMobile
          show={upgradesOpacity[3]}
          image={catAnimation}
          text={"Cat"}
          cost={Math.floor(upgradeCost[3])}
          number={ownedUpgrades[3]}
          onClick={() => {
            buyUpgrade(3);
          }}
        />
        <UpgradeMobile
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

export default RightSideMobile;
