import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      <button className="button" onClick={() => props.removeFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
