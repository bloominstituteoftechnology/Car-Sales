import React from 'react';

const AdditionalFeature = props => {
  const handleAddFeature=(e)=>{
    e.preventDefault();
    console.log("click")
  }
  
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleAddFeature}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
