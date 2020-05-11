import React from "react";
import { connect } from "react-redux";

const Total = (props) => {
  console.log("props from total", props);
  return (
    <div className="content">
      <h4>Total Amount: ${props.additionalPrice + props.car.price}</h4>
    </div>
  );
};
const mapStatetoProps = (state) => {
  console.log("mapstate props", state);
  return {
    car: state.car,
    additionalPrice: state.additionalPrice,
  };
};

export default connect(mapStatetoProps, {})(Total);
