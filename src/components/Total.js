import React from "react";

const Total = ({ car, additionalPrice }) => {
  return (
    <div className="content">
      <h4>Total Amount: ${car.price + additionalPrice}</h4>
    </div>
  );
};

export default Total;