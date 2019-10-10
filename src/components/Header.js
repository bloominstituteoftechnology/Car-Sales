import React from 'react';
import { connect } from 'react-redux';

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.image} alt={props.name} />
      </figure>
      <h2>{props.name}</h2>
      <p>Amount: ${props.price}</p>
    </>
  );
};
const mapStateToProps = state => {
  //what props I want available in the component
  //will need to pass in props above to get access
  return{
    name: state.car.name,
    price: state.car.price,
    image: state.car.image
  }
}

export default connect(
  mapStateToProps,
)(Header);