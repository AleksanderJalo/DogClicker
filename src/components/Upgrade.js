import React from "react";
const Upgrade = (props) => {
  return (
    <div
      className={`w-[90%] h-[8vh]  bg-[#D9D9D9] mt-6 border-8 border-[#988D94] flex items-center px-3 justify-between ${props.show ? "opacity-100" : "opacity-75"}`}
      onClick={props.onClick}
    >
      <img
        src={props.image}
        alt="doggo"
        className="h-4/5 bg-[#988D94] border-2 border-black p-1"
      />
      <div className="flex flex-col justify-center">
        <div className="text-2xl">{props.text}</div>
        <div className="text-lg font-barlow">{props.cost} doggos</div>
      </div>
      <div className="text-2xl text-gray-700 text-opacity-80">
        {props.number}
      </div>
    </div>
  );
};

export default Upgrade;
