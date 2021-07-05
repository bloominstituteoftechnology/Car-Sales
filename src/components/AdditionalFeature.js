import React from 'react';

const AdditionalFeature = props => {
  // console.log('from AdditionalFeature', props);
  const handleChanges = (e => {
    e.preventDefault();
    props.addFeature(props.feature);
  })
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button"
        onClick={(e) => handleChanges(e)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};



export default AdditionalFeature;
