import React from 'react';
import { connect } from "react-redux";

const Total = props => {
  // console.log('totalprops', props);
  // console.log('price', props.carPrice, 'additionalprice', props.additionalPrice)

  return (
    <div className="content">
      <h4>Total Amount: ${props.carPrice + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  // console.log('totalstate', state);
  return {
    carPrice: state.car.price,
    additionalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps, {})(Total);