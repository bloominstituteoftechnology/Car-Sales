import React from "react";
import { connect } from "react-redux";

const Total = ({ car, additionalPrice }) => {
  return (
    <div className="content">
      <h4>Total Amount: ${car.price + additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = store => {
  return {
    car: store.car,
    additionalPrice: store.additionalPrice
  };
};
export default connect(mapStateToProps)(Total);
