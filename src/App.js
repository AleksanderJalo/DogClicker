import { useState } from "react";
import "./App.css";
import LeftSide from "./components/LeftSide";
import MiddleSide from "./components/MiddleSide";
import RightSide from "./components/RightSide";
import pegi from "./images/dog2.png";
import rubi from "./images/dog3.png";
function App() {
  const [doggos, setDoggos] = useState(0);
  const onDoggoClick = () => {
    setDoggos((prev) => prev + 1);
  }
  return (
    <div className="h-screen w-full flex flex-col font-lalezar text-center select-none">
      <div className="h-[15vh] w-full flex text-6xl text-white bg-black justify-center items-center gap-3 relative">
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
        <LeftSide doggosNumber={doggos} onDogClick={ onDoggoClick } />
        <MiddleSide />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
