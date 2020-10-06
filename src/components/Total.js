import React from "react";
import { useSelector } from 'react-redux';

const Total = props => {
  const price = useSelector(state => state.car.price)

  return (
    <div className="content">
      <h4>Total Amount: ${price}</h4>
    </div>
  );
};

export default Total;
