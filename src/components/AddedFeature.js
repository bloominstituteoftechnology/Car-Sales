import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      {/* <button onClick={removeFeature} className="button">X</button> */}
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;


//figure out how to get removeFeature here, don't pass through props?