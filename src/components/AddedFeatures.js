import React from "react";

import AddedFeature from "./AddedFeature";

const AddedFeatures = ({ car, remove }) => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {car.features.length ? (
        <ol type="1">
          {car.features.map(item => (
            <AddedFeature key={item.id} feature={item} remove={remove} />
          ))}
        </ol>
      ) : (
        <p>Buy Standard or order additional features </p>
      )}
    </div>
  );
};

export default AddedFeatures;