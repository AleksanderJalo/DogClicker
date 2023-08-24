import React, { useEffect, useState } from "react";

const DoggoClickText = () => {
  const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  },[]);
  return (
    <React.Fragment>{isVisible ? <div className="text-4xl text-white" >+1</div> : null}</React.Fragment>
  );
};

export default DoggoClickText;
