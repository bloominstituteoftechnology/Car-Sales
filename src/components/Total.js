import React from 'react';
import {connect} from 'react-redux'
import {initialState} from '../reducers/reducer'

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};
const mapStateToProps = (state=initialState) => {
  return {
    car:state.car,
    additionalPrice:state.additionalPrice
  }
}
export default connect(mapStateToProps, {})(Total) ;

