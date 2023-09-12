import React, { useEffect, useState } from "react";
import dog from "../images/doggo.svg";
import getPowerUpInfo from "./PowerUpInfo";
const PowerUp = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  const [info, setInfo] = useState()
  useEffect(() => {
    setInfo(getPowerUpInfo(props.id));
  }, []);
  return (
    <div
      onClick={props.onClick}
      className="relative h-[100%] flex justify-center items-center "
      onMouseEnter={() => {
        setShowInfo(true);
      }}
      onMouseLeave={() => {
        setShowInfo(false);
      }}
    >
      {showInfo && (
        <div className="absolute bottom-16 flex right-10  text-white bg-green-900 w-[15vw] px-3 pt-1 pb-2 border-white border-4 font-barlow">
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-center gap-8 h-[50%] w-full">
              <div className="text-md whitespace-nowrap font-rowdies">{info.name}</div>
              <div className="flex items-center justify-center gap-2  pb-1 h-[50%]">
                <img src={dog} alt="dog" className="h-[100%]"/>{props.cost}
              </div>
            </div>
            <div className="border-t-2 border-white flex justify-center items-center pt-3 p-2 text-xl h-[50%] w-full">
              {info.description}
            </div>
          </div>
        </div>
      )}
      <img className="h-[80%]" src={props.image} />
    </div>
  );
};

export default PowerUp;
