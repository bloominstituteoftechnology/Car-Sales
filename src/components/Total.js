import React from 'react';
import { connect } from 'react-redux';

import { mainReducer } from '../reducers/reducers'


const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.priceOnProps + props.additionalPriceOnProps}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  console.log('state from mapState in header', state);
  return {
    priceOnProps: state.car.price,
    additionalPriceOnProps: state.additionalPrice
  };
};

export default connect(
  mapStateToProps,
  { mainReducer }
)(Total);

// export default Total;
