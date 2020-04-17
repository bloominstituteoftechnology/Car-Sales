import React from "react";
import { useSelector } from "react-redux";

const Total = () => {
  const additionalPrice = useSelector((state) => state.additionalPrice);
  const car = useSelector((state) => state.car);

  return (
    <div className="content">
      <h4>Total Amount: ${car.price + additionalPrice}</h4>
    </div>
  );
};

export default Total;
