import React, { useEffect, useState } from "react";

const DoggoClickText = () => {
  const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
      console.log("aaa")
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  },[]);
  return (
    <React.Fragment>{isVisible ? <div className="bg-white text-8xl" >+1</div> : null}</React.Fragment>
  );
};

export default DoggoClickText;
