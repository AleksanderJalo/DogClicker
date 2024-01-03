import React from "react";
const Upgrade = (props) => {
  return (
    <div
      className={`w-[90%] h-[9svh]  bg-[#D9D9D9] mt-[0.8rem] lg:mt-[1.5rem] border-8 border-[#988D94] flex items-center px-3 justify-between ${
        props.text === "Bird" ? "mb-[0.8rem] lg:mb-[1.5rem]" : ""
      } ${props.show ? "opacity-100" : "opacity-75"}`}
      onClick={props.onClick}
    >
      <img
        src={props.image}
        alt="doggo"
        className="h-4/5 bg-[#988D94] border-2 border-black p-[0.3rem]"
      />
      <div className="flex flex-col gap-[0.01rem]">
        <div className="text-[0.5rem] lg:text-[0.8rem] xl:text-[1rem]">
          {props.text}
        </div>
        <div className="text-[0.3rem] lg:text-[0.5rem] xl:text-[0.8rem] font-barlow mb-1">
          {props.cost} doggos
        </div>
      </div>
      <div className="text-[0.8rem] lg:text-[1rem] xl:text-[1.5rem] text-gray-700 text-opacity-80">
        {props.number}
      </div>
    </div>
  );
};

export default Upgrade;
