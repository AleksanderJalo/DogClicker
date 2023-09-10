import React, { useEffect, useState } from "react";

const DoggoClickText = (props) => {
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
    <React.Fragment>{isVisible ? <div className="text-4xl text-white" >+{props.clickAdd}</div> : null}</React.Fragment>
  );
};

export default DoggoClickText;
