import { useState } from "react";
import "./App.css";
import theo from "./images/dog1.png";
import grass from "./images/trawa.png";
function App() {
  const [doggos, setDoggos] = useState(0);
  const doggoClickHandler = () => {
    setDoggos((prev) => prev + 1);
  };
  return (
    <div className="h-screen w-full flex flex-col font-lalezar text-center">
      <div className="h-[10vh] w-full flex text-4xl text-white bg-black justify-center items-center">
        DOGGO CLICKER
      </div>
      <div className="h-[90vh] flex">
        <div className="w-1/3 bg-[#F3D250] border-r-8 border-black flex flex-col items-center">
          <div className="h-1/4 w-full flex-col flex gap-4 items-center">
            <div className="w-1/2 bg-black bg-opacity-25 text-white rounded-xl p-3 mt-6 text-xl xl:text-3xl">
              Your Doggo Farm
            </div>
            <div className="w-full bg-black bg-opacity-40 text-white py-3">
              <div className=" text-2xl">{doggos} Dogs</div>
              <div className=" text-xl">per second: 0.0 </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 h-1/2">
            <div className="text-3xl text-white">Theo</div>
            <img
              src={theo}
              alt="Theo"
              className="mr-8 h-full"
              onClick={doggoClickHandler}
            />
          </div>
          <div className="h-1/4 flex items-end pb-6">
            <div className="text-6xl text-white flex gap-1">
              <div className="transform rotate-[20deg]">C</div>
              <div className="transform rotate-[10deg] ">L</div>
              <div className="">I</div>
              <div className="transform -rotate-[10deg]">C</div>
              <div className="transform -rotate-[20deg]">K</div>
            </div>
          </div>
        </div>

        <div className="w-1/3 bg-[#90CCF4] border-r-8 border-black flex flex-col gap-6 items-center">
          <div className="h-1/4 w-full flex flex-col items-center gap-4">
            <div className="w-1/2 rounded-xl bg-black bg-opacity-25 text-white text-xl xl:text-3xl p-3 mt-6">
              Your Workers
            </div>
            <div className=" w-full flex overflow-hidden  h-[8vh]">
              <img
                src={grass}
                alt="grass"
                className="border-t-4 border-b-4 border-black"
              />
              <img
                src={grass}
                alt="grass"
                className="border-t-4 border-b-4 border-black"
              />
              <img
                src={grass}
                alt="grass"
                className="border-t-4 border-b-4 border-black"
              />
              <img
                src={grass}
                alt="grass"
                className="border-t-4 border-b-4 border-black"
              />
            </div>
          </div>
        </div>

        <div className="w-1/3 bg-[#F78888]">
          <div className="h-1/4 w-full flex flex-col items-center gap-4">
          <div className="w-1/2 rounded-xl bg-black bg-opacity-25 text-white text-xl xl:text-3xl p-3 mt-6">
              Shop
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
