import React from "react";
import theo from "../images/dog1.png";
import pegi from "../images/dog2.png"
import { useState } from "react";
import tosia from "../images/dog4.png";
import DoggoClickText from "./DoggoClickText";
import { motion } from "framer-motion";
const LeftSide = (props) => {
  const [index, setIndex] = useState(0);
  const [clickTexts, setClickTexts] = useState([]);
  const onDogClick = (event) => {
    props.onDogClick();

    const containerBounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - containerBounds.left;
    const y = event.clientY - containerBounds.top;
    const textIndex = index;
    setIndex((prev) => prev + 1);
    const newText = { x, y, textIndex };
    setClickTexts((prevTexts) => [...prevTexts.slice(-30), newText]);
  };

  return (
    <div className="w-1/3 bg-[#F3D250] border-r-8 border-black flex flex-col items-center relative">
      <div className="h-[10svh] w-full flex items-center justify-center">
        <div className="w-1/2 h-3/5  bg-black bg-opacity-25 text-white rounded-xl text-[1rem]  xl:text-[1.5rem]  flex items-center justify-center flex-nowrap">
          Your Doggo Farm
        </div>
      </div>

      <div className="w-full h-[8svh] bg-black bg-opacity-40 text-white py-3 flex flex-col justify-center items-center">
        <div className="text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem]">
          {Math.floor(props.doggosNumber)} DOGGOS
        </div>
        <div className="text-[0.8rem] lg:text-[1rem] xl:text-[1rem]">
          CLICK - {props.clickAdd} DOG
        </div>
      </div>

      <div
        className="flex flex-col h-[65vh] justify-center relative"
        onClick={onDogClick}
      >
        {clickTexts.map((event) => {
          return (
            <motion.div
              animate={{ y: -250, opacity: [1, 0.8, 0.6, 0.3, 0] }}
              transition={{ duration: 1 }}
              key={event.textIndex}
              className="absolute"
              style={{ left: `${event.x}px`, top: `${event.y}px` }}
            >
              <DoggoClickText clickAdd={props.clickAdd} />
            </motion.div>
          );
        })}
        {!props.pegiClicked ? <img src={theo} alt="Theo" className="mr-8 h-full p-2" />: <img src={pegi} alt="Pegi" className="h-[85%]"/>}
      </div>
      <img
        src={tosia}
        alt="Tosia"
        className="absolute bottom-4 right-8 h-[10vh]"
      />
    </div>
  );
};

export default LeftSide;
