// Import Dependencies
import React from "react";
import { connect } from "react-redux";

const Total = (props) => {
  return (
    <div className='content'>
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

// Variable to connect the props into the component
const mapStateToProps = (state) => {
  return {
    car: state.carReducer.car,
    additionalFeatures: state.carReducer.additionalFeatures,
    additionalPrice: state.carReducer.additionalPrice,
  };
};

export default connect(mapStateToProps)(Total);
