import React from 'react';

const AdditionalFeature = props => {

  const addFeature = e =>{
    e.preventDefault();
    props.addFeature(props.feature)
  }

  return (
    <li>
      <button className="button" onClick = {addFeature}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
