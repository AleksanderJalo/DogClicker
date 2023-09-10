import React from "react";
const PowerUp = (props) => {
  return (
    <div
      className="relative h-[100%] flex justify-center items-center "
      onMouseEnter={() => {
        props.onPowerUpHover(props.id);
      }}
      onMouseLeave={() => {
        props.offPowerUpHover(props.id);
      }}
    >
      <img className="h-[80%]" src={props.image} />
    </div>
  );
};

export default PowerUp;
