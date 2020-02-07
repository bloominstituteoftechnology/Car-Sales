import React from 'react';

const AddedFeature = props => {
  const removeFeatureHandler = () => {
    props.removeFeatureHandler(props.feature);
  }
  
  return (
    <li>
      <button onClick={removeFeatureHandler} className="button">
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
