import React from 'react';
import {useSelector} from 'react-redux';


const Total = props => {

  const carState = useSelector(state => state[props.carIndex])

  return (
    <div className="content">
      <h4>Total Amount: ${carState.car.price + carState.additionalPrice}</h4>
    </div>
  );
};

export default Total;
