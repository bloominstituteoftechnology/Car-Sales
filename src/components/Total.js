import React from 'react';
import { connect } from 'react-redux';

export const Total = ({ state }) => {
  return (
    <div className="content">
      <h4>Total Amount: ${state.car.price + state.additionalPrice}</h4>
    </div>
  );
};

export default connect(state => state)(Total);