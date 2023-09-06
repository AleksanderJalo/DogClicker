import React, { Fragment, useState } from "react";

const PowerUp = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  <div ></div>
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
        <div className="absolute bottom-16  right-10 text-2xl text-white bg-black border-brown border-2 z-10">{props.name}</div>
      )}
      <img className="h-[80%]" src={props.image} />
    </div>
  );
};

export default PowerUp;
