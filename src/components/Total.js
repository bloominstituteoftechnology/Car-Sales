import React from 'react';

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.additionalPrice + props.car.price}</h4>
    </div>
  );
};

export default Total;
