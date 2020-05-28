import React from 'react';
import {useSelector} from 'react-redux';


const Total = props => {

  const carState = useSelector(state => state.car)

  return (
    <div className="content">
      <h4>Total Amount: ${carState.price + carState.additionalPrice}</h4>
    </div>
  );
};

export default Total;
