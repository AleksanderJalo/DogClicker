import React, { useEffect, useState } from 'react';
import getPowerUpInfo from './PowerUpInfo';
const PowerUpMobile = (props) => {
    const [info, setInfo] = useState();
    useEffect(() => {
        setInfo(getPowerUpInfo(props.id));
    }, [props.id, setInfo]);
  return (
    <div>
      <img src={props.image} alt="PowerUp"/>
    </div>
  )
}

export default PowerUpMobile