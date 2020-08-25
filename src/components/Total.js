import React from 'react';
import { connect } from 'react-redux'

const Total = props => {
  return (
    <div className='columns'>
      <h4 className='subtitle column is-offset-4'>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
  }
}

export default connect(mapStateToProps, {})(Total);

