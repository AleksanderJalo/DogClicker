import React, { useEffect, useState } from "react";
import dog from "../images/doggo.svg";
const PowerUp = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    if (props.name === "Double Click") {
      setPrice(100)
    }
  },[])
  return (
    <div
      className="relative h-[100%] flex justify-center items-center "
      onMouseEnter={() => {
        setShowInfo(true);
      }}
      onMouseLeave={() => {
        setShowInfo(false);
      }}
    >
      {showInfo && (
        <div className="absolute bottom-16 flex right-10  text-white bg-black border-[#955D09] border-8 px-3 pr-6">
          <div className="flex flex-col">
            <div className="flex justify-between items-center gap-8 pt-2 h-[50%]">
              <div className="text-2xl whitespace-nowrap">{props.name}</div>
              <div className="flex items-center justify-center gap-2  pb-1">
                <img src={dog} className="h-[80%]" /> {price}
              </div>
            </div>
            <div className="border-t-4 border-[#555454] flex justify-center items-center py-4 p-2 text-sm lg:text-lg h-[50%]">
              {props.description}
            </div>
          </div>
        </div>
      )}
      <img className="h-[80%]" src={props.image} />
    </div>
  );
};

export default PowerUp;
