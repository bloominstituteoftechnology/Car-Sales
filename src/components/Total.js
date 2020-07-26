import React from 'react';
import { connect } from 'react-redux';

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500, removed: false },
      { id: 2, name: 'Racing detail package', price: 1500, removed: false },
      { id: 3, name: 'Premium sound system', price: 500, removed: false },
      { id: 4, name: 'Rear spoiler', price: 250, removed: false }
    ]
  }
}

export default connect(
  mapStateToProps
)(Total);
