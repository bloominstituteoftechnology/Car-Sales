import React from 'react';
import { connect } from 'react-redux';

const Total = props => {
  console.log("Total component", props)
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

//* update price from additionalPrice when feature is added
const mapStateToProps = state => {
  return {
    price: state.price
  }
}

export default connect(mapStateToProps, {})(Total);
