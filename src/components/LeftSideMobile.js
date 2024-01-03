import React, { useState } from "react";
import theo from "../images/dog1.png";
import DoggoClickText from "./DoggoClickText";
import { motion } from "framer-motion";

const LeftSideMobile = (props) => {
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
    <div className="h-[83svh] bg-[#F3D250]">
      <div className="h-[10svh] w-full flex justify-center">
        <div className="bg-black bg-opacity-25 text-white rounded-xl h-3/5 px-[1rem] mt-[1rem] flex items-center justify-center flex-nowrap">
          Your Doggo Farm
        </div>
      </div>
      <div className="w-full h-[8svh] bg-black bg-opacity-40 text-white flex flex-col justify-center items-center">
        <div className="text-[1rem]">
          {" "}
          {Math.floor(props.doggosNumber)} DOGGOS
        </div>
        <div className="text-[0.7rem]">
          CLICK - {props.clickAdd} {props.clickAdd === 1 ? "DOG" : "DOGS"}
        </div>
      </div>
      <div
        className="h-[60svh] flex justify-center items-center relative"
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
        <img src={theo} alt="Theo" className="h-[90%] mr-6" />
      </div>
    </div>
  );
};

export default LeftSideMobile;
