import React from 'react';
import { connect } from "react-redux";
import { totalup } from "../actions/totalupAction"

function Header(props ) {
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

const mapStateToProps = (state) => {
  console.log("MSTP", state);
  return {
    total: state.TR.total,
    car: state.TR.car
  };
};

export default connect(mapStateToProps, { totalup })(Header);

