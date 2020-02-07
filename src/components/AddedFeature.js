import React from 'react';

const AddedFeature = props => {
//   const removeFeatureHandler = () => {
//     props.removeFeatureHandler(props.feature);
// }
  
  return (
    <li>
      <button
        className="button"
        onClick={() => props.removeFeature(props.feature)}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
