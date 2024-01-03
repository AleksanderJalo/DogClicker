import React from "react";
import grass from "../images/trawa.png";
import dirt from "../images/ziemia2.png";
import dirt2 from "../images/ground3.png";
import GoldenDogAnimation from "../images/upgrade art/Dog_Idle_Animation.gif";
import DobermanAnimation from "../images/upgrade art/Dog_2_Walk.gif";
import BrownDogAnimation from "../images/upgrade art/Dog_Idle_brown_white.gif";
import CatAnimation from "../images/upgrade art/Catanimation.gif";
import BirdAnimation from "../images/upgrade art/Bird_animation.gif";
const MiddleSideMobile = (props) => {
  return (
    <div className="h-[83svh] bg-[#F78888] pt-[1rem]">
      <div className="w-full h-[10svh] bg-black bg-opacity-40 text-white flex flex-col justify-center items-center">
        <div className="text-[1.2rem] ">
          {" "}
          {Math.round(props.doggosPerSecond * 10) / 10} DOGGOS per Second
        </div>
      </div>
      <div className="h-[69svh] flex flex-col justify-between ">
        <div className="relative w-full flex overflow-hidden mt-[0.8rem]  h-[10svh]">
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
        <div className="relative w-full flex overflow-hidden h-[10svh]">
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
        <div className=" w-full flex overflow-hidden  h-[10svh]  relative">
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
        <div className="w-full flex overflow-hidden  h-[10svh]  relative">
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
        <div className=" w-full flex overflow-hidden  h-[10svh]  mb-[0.8rem] lg:mb-[1.5rem] relative">
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

export default MiddleSideMobile;
