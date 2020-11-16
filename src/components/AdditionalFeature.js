import React from "react";

const AdditionalFeature = (props) => {
  console.log(props.car.features);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className='button'
        onClick={() => props.addFeature(props.feature.id)}
        disabled={
          props.car.features.find((item) => item.id === props.feature.id)
            ? true
            : false
        }
      >
        {props.car.features.find((item) => item.id === props.feature.id)
          ? "Feature Added"
          : "Add"}
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
