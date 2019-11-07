import React from 'react';
import { connect } from 'react-redux';

const Header = props => {

  console.log(props,"props header")
  return (
    <>
      <figure className="image is-128x128">
        {/* <img src={props.car.image} alt={props.car.name} /> */}
      </figure>
      <h2>{props.car.name}</h2>
      {/* <p>Amount: ${props.car.price}</p> */}
    </>
  );
};
// const mapDispatchToProps = state => {
//   return{
//     additionalPrice: state.additionalPrice,
//     name: state.car.name,
//     price: state.car.price,
//     additionalFeatures: state.additionalFeatures
//   };
// };



export default 
connect( state => ({name: state.car.name}),)
(Header);

