import React from 'react'

const Upgrade = (props) => {
  return (
    <div className="w-[90%] h-[8vh]  bg-[#D9D9D9] mt-6 border-8 border-[#988D94] flex items-center px-3 justify-between">
        <img
          src={props.image}
          alt="doggo"
          className="h-4/5 bg-[#988D94] border-2 border-black p-1"
        />
      <div>{ props.text}</div>
        <div>0</div>
      </div> 
  )
}

export default Upgrade