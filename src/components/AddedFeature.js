import React from 'react';

const AddedFeature = ({ feature, removeFeature }) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => removeFeature(feature)} className="button">X</button>
      {feature.name}
    </li>
  );
};

export default AddedFeature;
