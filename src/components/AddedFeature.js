import React from 'react';

const AddedFeature = props => {
  console.log("ADDED FEATURE PROPS", props)
  const handleClick = e =>{
    // e.preventDefault();
    props.removeFeature(e);
  
  }
  return (
    
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      
      <button className="button"
      onClick = {()=>handleClick(props.feature.id)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
