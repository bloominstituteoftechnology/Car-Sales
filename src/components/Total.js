import React from 'react';
import {connect} from 'react-redux'

const Total = props => {
  console.log('props in total : ',props)
  return (
    <div className="content">
      <h4>Total Amount: ${props.price + props.additionalPrice}</h4>
    </div>
  );
};

// export default Total

const mapStateToProps = state => {
  return {
    
    additionalPrice: state.additionalPrice,
    price: state.car.price
  };
};

export default connect(mapStateToProps, {})(Total);
