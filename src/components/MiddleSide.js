import React from "react";
import grass from "../images/trawa.png";
import dirt from "../images/ziemia2.png";
import dirt2 from "../images/ground3.png";
import GoldenDogAnimation from "../images/upgrade art/Dog_Idle_Animation.gif";
import DobermanAnimation from "../images/upgrade art/Dog_2_Walk.gif";
import BrownDogAnimation from "../images/upgrade art/Dog_Idle_brown_white.gif";
import CatAnimation from "../images/upgrade art/Catanimation.gif";
import BirdAnimation from "../images/upgrade art/Bird_animation.gif";
const MiddleSide = (props) => {
  return (
    <div className="w-1/3 bg-[#F78888]  flex flex-col  items-center">
      <div className="h-[10svh] w-full flex items-center justify-center">
        <div className="w-1/2 h-3/5 bg-black bg-opacity-25 text-white rounded-xl p-3 text-xl xl:text-3xl flex items-center justify-center">
          Your Workers
        </div>
      </div>

      <div className="h-[8svh] w-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className=" text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem] text-white flex gap-2">
          <div>{Math.round(props.doggosPerSecond * 10) / 10}</div> per Seconds
        </div>
        </div>
        <div className="h-[67svh] flex flex-col justify-between items-center w-full">
          <div className="relative w-full flex overflow-hidden mt-[0.8rem] lg:mt-[1.5rem] h-[9svh]">
            {Array(props.upgradesQuantities[0])
              .fill(0)
              .map((x, idx) => (
                <div
                  key={idx}
                  className={`absolute h-[2svh] ${
                    idx % 2 === 0 ? "bottom-1/2" : "bottom-1/3"
                  }`}
                  style={{ left: `${20 + idx * 40}px` }}
                >
                  <img src={GoldenDogAnimation} alt="Golden Dog" />
                </div>
              ))}
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
          <div className="relative w-full flex overflow-hidden mt-[0.8rem] lg:mt-[1.5rem] h-[9svh]">
            {Array(props.upgradesQuantities[1])
              .fill(0)
              .map((x, idx) => (
                <div
                  key={idx}
                  className={`absolute h-[2svh] ${
                    idx % 2 === 0 ? "bottom-1/2" : "bottom-1/3"
                  }`}
                  style={{ left: `${20 + idx * 40}px` }}
                >
                  <img src={DobermanAnimation} alt="Doberman" />
                </div>
              ))}{" "}
            <img
              src={dirt}
              alt="grass"
              className="border-t-4 border-b-4 border-black"
            />
            <img
              src={dirt}
              alt="grass"
              className="border-t-4 border-b-4 border-black"
            />
            <img
              src={dirt}
              alt="grass"
              className="border-t-4 border-b-4 border-black"
            />
            <img
              src={dirt}
              alt="grass"
              className="border-t-4 border-b-4 border-black"
            />
          </div>
          <div className=" w-full flex overflow-hidden  h-[9svh] mt-[0.8rem] lg:mt-[1.5rem] relative">
            {Array(props.upgradesQuantities[2])
              .fill(0)
              .map((x, idx) => (
                <div
                  key={idx}
                  className={`absolute h-[2svh] ${
                    idx % 2 === 0 ? "bottom-1/2" : "bottom-1/3"
                  }`}
                  style={{ left: `${20 + idx * 40}px` }}
                >
                  <img src={BrownDogAnimation} alt="Brown  Dog" />
                </div>
              ))}
            <img
              src={dirt2}
              alt="grass"
              className="border-t-4 border-b-4 border-black"
            />
            <img
              src={dirt2}
              alt="grass"
              className="border-t-4 border-b-4 border-black"
            />
            <img
              src={dirt2}
              alt="grass"
              className="border-t-4 border-b-4 border-black"
            />
            <img
              src={dirt2}
              alt="grass"
              className="border-t-4 border-b-4 border-black"
            />
          </div>
          <div className="w-full flex overflow-hidden  h-[9svh] mt-[0.8rem] lg:mt-[1.5rem] relative">
            {Array(props.upgradesQuantities[3])
              .fill(0)
              .map((x, idx) => (
                <div
                  key={idx}
                  className={`absolute h-[2svh] ${
                    idx % 2 === 0 ? "bottom-1/2" : "bottom-1/3"
                  }`}
                  style={{ left: `${20 + idx * 40}px` }}
                >
                  <img src={CatAnimation} alt="Cat" />
                </div>
              ))}{" "}
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
          <div className=" w-full flex overflow-hidden  h-[9svh] mt-[0.8rem] lg:mt-[1.5rem] mb-[0.8rem] lg:mb-[1.5rem] relative">
            {Array(props.upgradesQuantities[4])
              .fill(0)
              .map((x, idx) => (
                <div
                  key={idx}
                  className={`absolute h-[2svh] ${
                    idx % 2 === 0 ? "bottom-1/2" : "bottom-1/3"
                  }`}
                  style={{ left: `${20 + idx * 40}px` }}
                >
                  <img src={BirdAnimation} alt="Bird" />
                </div>
              ))}
            <img
              src={dirt}
              alt="grass"
              className="border-t-4 border-b-4 border-black"
            />
            <img
              src={dirt}
              alt="grass"
              className="border-t-4 border-b-4 border-black"
            />
            <img
              src={dirt}
              alt="grass"
              className="border-t-4 border-b-4 border-black"
            />
            <img
              src={dirt}
              alt="grass"
              className="border-t-4 border-b-4 border-black"
            />
          </div>
        </div>
    </div>
  );
};

export default MiddleSide;
