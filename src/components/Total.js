import React from 'react';
import { connect } from 'react-redux'

const Total = state => {
  let totalPrice = state.checkoutReducer.car.price
  totalPrice += state.featureReducer.features.reduce((a,v) => v.added ? a + v.cost : a, 0)
  return (
    <div className="content">
      <h4>Total Amount: ${totalPrice}</h4>
    </div>
  );
};

export default connect(state => state,{})(Total);
