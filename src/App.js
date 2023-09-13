import { useState } from "react";
import "./App.css";
import LeftSide from "./components/LeftSide";
import MiddleSide from "./components/MiddleSide";
import RightSide from "./components/RightSide";
import pegi from "./images/dog2.png";
import rubi from "./images/dog3.png";
import { useEffect } from "react";
function App() {
  const [doggos, setDoggos] = useState(0);
  const [clickAdd, setClickAdd] = useState(1);
  const [doggosPerSecond, setDoggosPerSecond] = useState(0);
  const [powerUpMultiplyer, setPowerUpMultiplyer] = useState([1, 1, 1]);
  const upgradesPowers = [0.1, 0.3, 0.5];
  const [upgradesQuantities, setUpgradesQuantities] = useState([0, 0, 0]);
  useEffect(() => {
    const interval = setInterval(() => {
      setDoggos((prev) => prev + doggosPerSecond);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [doggos, upgradesQuantities]);
  const onDoggoClick = () => {
    setDoggos((prev) => prev + clickAdd);
  };
  const betterClick = () => {
    setClickAdd((prev) => prev * 2);
  };

  const deleteDoggos = (howMany) => {
    setDoggos((prev) => prev - howMany);
  };
  const onPowerUpBuy = (id) => {
    let newPowerUpMultiplyer = powerUpMultiplyer;
    newPowerUpMultiplyer[id] = newPowerUpMultiplyer[id] * 2;
    setPowerUpMultiplyer(newPowerUpMultiplyer);
    refreshDoggosPerSecond();
  };

  const refreshDoggosPerSecond = () => {
    let i = 0;
    let newDoggosPerSecond = 0;
    for (const upgrade of upgradesPowers) {
      newDoggosPerSecond +=
        powerUpMultiplyer[i] * upgradesQuantities[i] * upgrade;
      i++;
    }
    setDoggosPerSecond(newDoggosPerSecond);
  };

  const onUpgradeBuy = (id) => {
    let newUpgradesQuantities = upgradesQuantities;
    newUpgradesQuantities[id] += 1;
    setUpgradesQuantities(newUpgradesQuantities);
    refreshDoggosPerSecond();
  };

  return (
    <div className="min-h-screen w-full flex flex-col font-lalezar text-center select-none max-h-screen">
      <div className="h-[15svh] w-full flex text-6xl text-white bg-black justify-center items-center gap-3 relative">
        <img
          className="absolute left-12 bottom-0 h-4/5"
          src={pegi}
          alt="pegi"
        />
        <img
          className="absolute right-12 bottom-1 h-4/5"
          src={rubi}
          alt="rubi"
        />
        DOGGO{" "}
        <div>
          <span className="text-slate-400"> C</span>LICKER
        </div>
      </div>
      <div className="h-[85vh] flex">
        <LeftSide
          doggosNumber={doggos}
          onDogClick={onDoggoClick}
          clickAdd={clickAdd}
        />
        <MiddleSide doggosPerSecond={doggosPerSecond} />
        <RightSide
          doggosNumber={doggos}
          deleteDoggos={deleteDoggos}
          betterClick={betterClick}
          onUpgradeBuy={onUpgradeBuy}
          onPowerUpBuy={onPowerUpBuy}
        />
      </div>
    </div>
  );
}

export default App;
