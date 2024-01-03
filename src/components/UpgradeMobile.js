import React from "react";

const UpgradeMobile = (props) => {
  return (
    <div
      className={`w-[90%] h-[7svh] bg-[#D9D9D9] border-8 border-[#988D94] flex items-center px-3 justify-between ${
        props.show ? "opacity-100" : "opacity-75"
      }`}
      onClick={props.onClick}
    >
      <img
        src={props.image}
        alt="doggo"
        className="h-4/5 bg-[#988D94] border-2 border-black p-[0.2rem]"
      />
      <div className="flex flex-col gap-[0.01rem]">
        <div className="text-[0.9rem]">{props.text}</div>
        <div className="text-[0.7rem] text-gray-600">{props.cost} doggos</div>
      </div>
      <div className="text-gray-700 text-opacity-80">{props.number}</div>
    </div>
  );
};

export default UpgradeMobile;
