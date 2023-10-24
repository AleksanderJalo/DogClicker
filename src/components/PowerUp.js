import React from "react";
const PowerUp = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="h-[100%] flex flex-col justify-center items-center gap-3"
    >
      <img
        className={`h-[100%] ${props.show ? "opacity-100" : "opacity-50"}`}
        src={props.image}
        alt="Power Up"
      />
      <div className="text-white font-barlow text-[0.5rem] xl:text-[0.8rem]">{props.cost}</div>
    </div>
  );
};

export default PowerUp;
