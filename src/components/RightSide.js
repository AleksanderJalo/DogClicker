import React from "react";
import mouseBooth from "../images/upgrade art/mouse_booth.png";
import goldenDogAnimation from "../images/upgrade art/Dog_Idle_Animation.gif";
import brownWhiteDogAnimation from "../images/upgrade art/Dog_Idle_brown_white.gif";
import dobermanDogWalkAnimation from "../images/upgrade art/Dog_2_Walk.gif";
const RightSide = () => {
  return (
    <div className="w-1/3 bg-[#90CCF4] border-l-8 border-black flex flex-col  items-center">
      <div className="h-[10vh] w-full flex items-center justify-center">
        <div className="w-1/2 h-3/5 bg-black bg-opacity-25 text-white rounded-xl p-3 text-xl xl:text-3xl flex items-center justify-center">
          Shop
        </div>
      </div>

      <div className="w-full bg-black bg-opacity-50 border-t-4 border-b-4 border-black flex justify-between items-center px-4 h-[8vh] overflow-hidden flex-wrap">
        <img src={mouseBooth} alt="powerup" className="h-3/4" />
        <img src={mouseBooth} alt="powerup" className="h-3/4" />
        <img src={mouseBooth} alt="powerup" className="h-3/4" />
        <img src={mouseBooth} alt="powerup" className="h-3/4" />
        <img src={mouseBooth} alt="powerup" className="h-3/4" />
        <img src={mouseBooth} alt="powerup" className="h-3/4" />
      </div>
      <div className="w-[90%] h-[8vh]  bg-[#D9D9D9] mt-6 border-8 border-[#988D94] flex items-center px-3 justify-between">
        <img
          src={goldenDogAnimation}
          alt="doggo"
          className="h-4/5 bg-[#988D94] border-2 border-black p-1"
        />
        <div>Golden Dog</div>
        <div>0</div>
      </div>
      <div className="w-[90%] h-[8vh]  bg-[#D9D9D9] mt-6 border-8 border-[#988D94] flex items-center px-3 justify-between">
        <img
          src={dobermanDogWalkAnimation}
          alt="doggo"
          className="h-4/5 bg-[#988D94] border-2 border-black p-1"
        />
        <div>Doberman</div>
        <div>0</div>
      </div>
      <div className="w-[90%] h-[8vh]  bg-[#D9D9D9] mt-6 border-8 border-[#988D94] flex items-center px-3 justify-between">
        <img
          src={brownWhiteDogAnimation}
          alt="doggo"
          className="h-4/5 bg-[#988D94] border-2 border-black p-1"
        />
        <div>Brown Dog</div>
        <div>0</div>
      </div>

      <div className="w-[90%] h-[8vh]  bg-[#D9D9D9] mt-6 border-8 border-[#988D94] flex items-center px-3 justify-between">
        <img
          src={goldenDogAnimation}
          alt="doggo"
          className="h-4/5 bg-[#988D94] border-2 border-black p-1"
        />
        <div>Golden Dog</div>
        <div>0</div>
      </div>
      <div className="w-[90%] h-[8vh]  bg-[#D9D9D9] mt-6 border-8 border-[#988D94] flex items-center px-3 justify-between">
        <img
          src={goldenDogAnimation}
          alt="doggo"
          className="h-4/5 bg-[#988D94] border-2 border-black p-1"
        />
        <div>Golden Dog</div>
        <div>0</div>
      </div>
      <div className="w-[90%] h-[8vh]  bg-[#D9D9D9] mt-6 border-8 border-[#988D94] flex items-center px-3 justify-between">
        <img
          src={goldenDogAnimation}
          alt="doggo"
          className="h-4/5 bg-[#988D94] border-2 border-black p-1"
        />
        <div>Golden Dog</div>
        <div>0</div>
      </div>
    </div>
  );
};

export default RightSide;
