import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={()=> props.removePart(props.feature)}>
        remove</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
