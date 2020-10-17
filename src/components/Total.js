import React from 'react';
import { connect } from 'react-redux';

const Total = (props) => {

  const additionalPrice = props.features.reduce((acc, i) => {
    return acc + i.price;
  }, 0);

  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    features: state.car.features
  };
};

export default connect(mapStateToProps)(Total);
