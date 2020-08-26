import React from 'react';
import { useSelector } from 'react-redux';


const Total = props => {

  const car = useSelector(state => state.car);
  const additionalPrice = useSelector(state => state.additionalPrice);


  return (
    <div className="content">
      <h4>Total Amount: ${car.price + additionalPrice}</h4>
    </div>
  );
};

export default Total;
