import React from 'react';
import { connect } from 'react-redux'

const Header = ({ price, name, image }) => {
  // console.log('Header.js props', state)

  return (
    <>
      <figure className="image is-128x128">
        <img src={image} alt={name} />
      </figure>
      <h2>{name}</h2>
      <p>Amount: ${price}</p>
    </>
  );
};

const mapStateToProps = state => {
  // console.log('Header.js mapStateToProps', state)
  return {
    price: state.car.price,
    name: state.car.name,
    image: state.car.image
  }
}

export default connect(mapStateToProps,
  // this is where our actions are dispatched
  {})
  // connect runs a second time and takes in the component and applies 
  //  the value from the first run to it
  (Header)
