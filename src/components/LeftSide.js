import React from "react";
import theo from "../images/dog1.png";
import { useState } from "react";
import tosia from "../images/dog4.png";
import DoggoClickText from "./DoggoClickText";
import { motion } from "framer-motion";
const LeftSide = (props) => {
  const [clickTexts, setClickTexts] = useState([]);
  const onDogClick = (event) => {
    props.onDogClick();

    const containerBounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - containerBounds.left;
    const y = event.clientY - containerBounds.top;
    const newText = { x, y };

    setClickTexts((prevTexts) => [...prevTexts, newText]);
  };

  return (
    <div className="w-1/3 bg-[#F3D250] border-r-8 border-black flex flex-col items-center relative">
      <div className="h-[10vh] w-full flex items-center justify-center">
        <div className="w-1/2 h-3/5  bg-black bg-opacity-25 text-white rounded-xl  text-xl xl:text-3xl flex items-center justify-center">
          Your Doggo Farm
        </div>
      </div>

      <div className="w-full h-[8vh] bg-black bg-opacity-40 text-white py-3 flex flex-col justify-center items-center">
        <div className=" text-3xl">{Math.floor(props.doggosNumber)} DOGGOS</div>
        <div className=" text-xl">CLICK - {props.clickAdd} DOG</div>
      </div>

      <div
        className="flex flex-col h-[65vh] justify-center relative"
        onClick={onDogClick}
      >
        {clickTexts.map((event, index) => {
          return (
            <motion.div
              animate={{ y: -250, opacity:[1, 0.8, 0.6 ,0.3, 0] }} 
              transition={{duration: 1}}
              key={index}
              className="absolute"
              style={{ left: `${event.x}px`, top: `${event.y}px` }} 
            >
              <DoggoClickText clickAdd={props.clickAdd} />
            </motion.div>
          ); 
        })}
        <img src={theo} alt="Theo" className="mr-8 h-full p-2" s />
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
