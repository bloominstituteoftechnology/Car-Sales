import React from 'react';
import {connect} from 'react-redux'


const Total = state => {
  return (
    <div className="content">
      <h4>Total Amount: ${state.car.price + state.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps =state => {
  return({
    car: state.car,
    additionalPrice: state.additionalPrice
  })
}

export default connect(mapStateToProps)(Total);
