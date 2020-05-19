import React from "react";

const AddedFeature = (props) => {
  const removeCurFeature = () => {
    let id = props.feature.id;
    props.removeFeature(id);
    props.updatePrice("subtract", props.feature.price);
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={removeCurFeature}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
