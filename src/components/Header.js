import React from 'react';
import { connect } from 'react-redux';

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

// function that takes in entire state object & returns object with properties that will be added to props
// essentially redirecting the props to point to redux store
const mapStateToProps = (state) => {
  console.log(state);
  return {
    car: state.car
  }
}

// Q: why empty curly braces again? use if need to bring action creators to file
export default connect(mapStateToProps, {})(Header);
