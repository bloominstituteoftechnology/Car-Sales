import React from 'react';
import { connect } from 'react-redux';

const Total = props => {
  console.log(`total`, props.car.price)
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  //what props I want available in the component
  //will need to pass in props above to get access
  return{
    car: state.car,
    additionalPrice: state.additionalPrice
  }
}

export default connect(
  mapStateToProps,
)(Total);
