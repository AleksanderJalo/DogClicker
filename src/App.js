import { useState } from "react";
import "./App.css";
import LeftSide from "./components/LeftSide";
import MiddleSide from "./components/MiddleSide";
import RightSide from "./components/RightSide";
import LeftSideMobile from "./components/LeftSideMobile";
import MiddleSideMobile from "./components/MiddleSideMobile";
import RightSideMobile from "./components/RightSideMobile";
import theo from "./images/dog1.png";
import pegi from "./images/dog2.png";
import rubi from "./images/dog3.png";
import { useEffect } from "react";
import dogMenu from "./images/dogMenu.svg";
import farmMenu from "./images/farm.svg";
import coinMenu from "./images/coin.svg";
function App() {
  const [mobileMenu, setMobileMenu] = useState("Dog");
  const [pegiClicked, setPegiClicked] = useState(false);

  const savedPowerUpMultiplier = JSON.parse(
    localStorage.getItem("POWER_UP_MULTIPLIER")
  );
  const [powerUpMultiplier, setPowerUpMultiplier] = useState(
    savedPowerUpMultiplier || [1, 1, 1, 1, 1, 1]
  );
  const upgradesPowers = [0.1, 1, 8, 47, 260];

  const savedUpgradesQuantities = JSON.parse(
    localStorage.getItem("UPGRADES_QUANTITIES")
  );
  const [upgradesQuantities, setUpgradesQuantities] = useState(
    savedUpgradesQuantities || [0, 0, 0, 0, 0]
  );

  const savedDogs = JSON.parse(localStorage.getItem("DOGGO_NUMBER"));
  const [doggos, setDoggos] = useState(savedDogs || 0);

  const savedClickAdd = JSON.parse(localStorage.getItem("DOGS_FOR_CLICK"));

  const [clickAdd, setClickAdd] = useState(savedClickAdd || 1);
  const [doggosPerSecond, setDoggosPerSecond] = useState(0.000000001);

  const refreshDoggosPerSecond = () => {
    let i = 0;
    let newDoggosPerSecond = 0;
    for (const upgrade of upgradesPowers) {
      newDoggosPerSecond +=
        powerUpMultiplier[i] * upgradesQuantities[i] * upgrade;
      i++;
    }
    setDoggosPerSecond(newDoggosPerSecond);
  };

  useEffect(() => {
    localStorage.setItem("DOGGO_NUMBER", JSON.stringify(doggos));
  }, [doggos]);

  useEffect(() => {
    localStorage.setItem("DOGS_FOR_CLICK", JSON.stringify(clickAdd));
  }, [clickAdd]);

  useEffect(() => {
    localStorage.setItem(
      "UPGRADES_QUANTITIES",
      JSON.stringify(upgradesQuantities)
    );
  }, [upgradesQuantities]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDoggos((prev) => prev + doggosPerSecond / 10);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, [doggos, upgradesQuantities, doggosPerSecond]);

  const mobileMenuHandler = (page) => {
    setMobileMenu(page);
  };

  const onDoggoClick = () => {
    setDoggos((prev) => prev + clickAdd);
  };
  const betterClick = () => {
    setClickAdd((prev) => prev * 2);
  };

  const deleteDoggos = (howMany) => {
    setDoggos((prev) => prev - howMany);
  };

  const onPegiClick = () => {
    setPegiClicked((prev) => !prev);
  };

  const onPowerUpBuy = (id) => {
    let newPowerUpMultiplyer = [...powerUpMultiplier];
    newPowerUpMultiplyer[id] = newPowerUpMultiplyer[id] * 2;
    setPowerUpMultiplier(newPowerUpMultiplyer);
    console.log(powerUpMultiplier);
  };

  const onUpgradeBuy = (id) => {
    setUpgradesQuantities((prevUpgradesQuantitnies) => {
      let newUpgradesQuantities = [...prevUpgradesQuantitnies];
      newUpgradesQuantities[id] += 1;
      return newUpgradesQuantities;
    });
  };
  useEffect(() => {
    localStorage.setItem(
      "POWER_UP_MULTIPLIER",
      JSON.stringify(powerUpMultiplier)
    );
  }, [powerUpMultiplier]);
  useEffect(() => {
    refreshDoggosPerSecond();
  },[upgradesQuantities,powerUpMultiplier, refreshDoggosPerSecond])

  return (
    <div className="min-h-screen w-full flex flex-col font-lalezar text-center select-none max-h-screen">
      <div className="portrait:hidden">
        <div className=" h-[15svh] w-full flex text-[2rem] lg:text-[3.5rem]  text-white bg-black justify-center items-center gap-3 relative">
          {!pegiClicked ? (
            <img
              className="absolute left-12 bottom-0 h-4/5"
              src={pegi}
              alt="pegi"
              onClick={onPegiClick}
            />
          ) : (
            <img
              className="absolute left-12 bottom-2 h-4/5"
              src={theo}
              alt="theo"
              onClick={onPegiClick}
            />
          )}
          <img
            className="absolute right-12 bottom-1 h-4/5"
            src={rubi}
            alt="rubi"
          />
          DOGGO{" "}
          <div>
            <span className="text-red-600"> C</span>LICKER
          </div>
        </div>
        <div className="h-[85vh] flex">
          <LeftSide
            doggosNumber={doggos}
            onDogClick={onDoggoClick}
            clickAdd={clickAdd}
            pegiClicked={pegiClicked}
          />
          <MiddleSide
            doggosPerSecond={doggosPerSecond}
            upgradesQuantities={upgradesQuantities}
          />
          <RightSide
            doggosNumber={doggos}
            deleteDoggos={deleteDoggos}
            betterClick={betterClick}
            onUpgradeBuy={onUpgradeBuy}
            onPowerUpBuy={onPowerUpBuy}
            upgradesQuantities={upgradesQuantities}
          />
        </div>
      </div>
      <div className="landscape:hidden">
        <div className="h-[10svh] bg-black text-white text-[2rem] flex justify-center items-center gap-2">
          <div> DOGGO</div>{" "}
          <div>
            <span className="text-slate-400"> C</span>LICKER
          </div>
        </div>
        <div className={`${mobileMenu === "Dog" ? "visible" : "hidden"}`}>
          <LeftSideMobile
            clickAdd={clickAdd}
            onDogClick={onDoggoClick}
            doggosNumber={doggos}
          />
        </div>
        <div className={`${mobileMenu === "Farm" ? "visible" : "hidden"}`}>
          <MiddleSideMobile
            doggosPerSecond={doggosPerSecond}
            upgradesQuantities={upgradesQuantities}
          />
        </div>
        <div className={`${mobileMenu === "Shop" ? "visible" : "hidden"}`}>
          <RightSideMobile />
        </div>
      </div>
      <div className="landscape:hidden h-[10svh]  w-full text-white flex ">
        <div
          className={`border-r-2 border-white flex justify-center items-center w-1/3 bg-black ${
            mobileMenu === "Dog" ? "bg-opacity-80" : ""
          }`}
          onClick={() => {
            mobileMenuHandler("Dog");
          }}
        >
          <img src={dogMenu} alt="DogMenu" className="h-1/2" />
        </div>
        <div
          className={`border-r-2 border-white flex items-center justify-center w-1/3 bg-black ${
            mobileMenu === "Farm" ? "bg-opacity-80" : ""
          }`}
          onClick={() => {
            mobileMenuHandler("Farm");
          }}
        >
          <img src={farmMenu} alt="FarmMenu" className="h-1/2" />
        </div>
        <div
          className={`w-1/3 flex items-center justify-center bg-black ${
            mobileMenu === "Shop" ? "bg-opacity-80" : ""
          }`}
          onClick={() => {
            mobileMenuHandler("Shop");
          }}
        >
          <img src={coinMenu} alt="CoinMenu" className="h-1/2" />
        </div>
      </div>
    </div>
  );
}

export default App;
