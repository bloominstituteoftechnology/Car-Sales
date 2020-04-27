import React from 'react';

const AddedFeature = ({butItem, feature}) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
        onClick={() => {butItem(feature)}}
        className="button">X</button>
      {feature.name}
    </li>
  );
};

export default AddedFeature;
