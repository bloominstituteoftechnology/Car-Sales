import React from 'react';
import { connect } from 'react-redux'; 

//need state.car.price & state.additionalPrice

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

export default Total;
