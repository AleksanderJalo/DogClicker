import React from "react";

const PowerUpMobile = (props) => {

  return (
    <div className="flex flex-col items-center" onClick={props.onClick}>
      <img className={`${props.show ? "opacity-100" : "opacity-50"}`} src={props.image} alt="PowerUp" />
      <div className="text-white text-[0.5rem] mt-[0.3rem]">{props.cost}</div>
    </div>
  )
}

export default PowerUpMobile