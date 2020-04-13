import React from 'react';




const AdditionalFeature = props => {
  const handleClick = e =>{
    // e.preventDefault();
    props.addFeature(e);
  
  }
  
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button"
      onClick = {()=>handleClick(props.feature.id)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
