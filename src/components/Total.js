import React from 'react';
import {connect} from 'react-redux'

const Total = props => {
  console.log(props)
  console.log(props.additionalFeatures)
  console.log(props.car.price)
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};


const mapStateToProps= state =>{
  return{
    car:state.car,
    additionalFeatures:state.additionalFeatures,
    additionalPrice:state.additionalPrice
  }
}

export default connect(mapStateToProps)(Total);
