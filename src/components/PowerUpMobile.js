import React, { useEffect, useState } from 'react';
import getPowerUpInfo from './PowerUpInfo';
const PowerUpMobile = (props) => {
    const [info, setInfo] = useState();
    useEffect(() => {
        setInfo(getPowerUpInfo(props.id));
    }, [props.id, setInfo]);
  return (
      <div className="w-1/2 bg-gray-600">
      <img src={props.image} alt="powerup image"/>
    </div>
  )
}

export default PowerUpMobile