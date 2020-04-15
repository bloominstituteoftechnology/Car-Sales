import React from 'react';

import { connect } from 'react-redux'; 
import * as actionCreators from '../state/actionCreators'; 

export const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

export default connect(state => state, actionCreators)(Total);
