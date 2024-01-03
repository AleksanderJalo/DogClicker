import React from "react";
const PowerUp = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="h-[10.5svh] flex flex-col justify-center items-center gap-2"
    >
      <img
        className={`h-[35%] sm:h-[45%] md:h-[80%] lg:h-[100%] ${props.show ? "opacity-100" : "opacity-50"}`}
        src={props.image}
        alt="Power Up"
      />
      <div className="text-white font-barlow text-[0.4rem] lg:text-[0.6rem] xl:text-[0.8rem] mb-[0.7rem]">{props.cost}</div>
    </div>
  );
};

export default PowerUp;
