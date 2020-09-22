import React from 'react';

const AddedFeature = props => {
  const removeFeature = e => {
    e.preventDefault();
    props.removeFeature(props.feature)
  }
  return (
    <li>
      <button className="button" onClick = {removeFeature}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
