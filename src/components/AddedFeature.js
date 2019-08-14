import React from "react";

const AddedFeature = props => {
  console.log("remove test:", props);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() => props.removeItem(props.feature)}
        className="button"
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
