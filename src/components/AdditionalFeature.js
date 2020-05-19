import React from "react";

const AdditionalFeature = (props) => {
  const addNewFeature = () => {
    let feature = {
      id: props.feature.id,
      name: props.feature.name,
      price: props.feature.price,
    };
    props.addFeature(feature);
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addNewFeature}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
