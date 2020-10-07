import React from "react";

const AddedFeature = (props) => {
  console.log("props:", props.feature);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() => props.removeFeature(props.feature)}
        className="button"
      >
        X
      </button>
      {props.feature.name} ${props.feature.price}
    </li>
  );
};

export default AddedFeature;
