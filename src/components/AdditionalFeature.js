import React from 'react';

import { addFeature, addPrice } from './actions/featureActions';

const AdditionalFeature = props => {
  console.log('from AdditionalFeature', props);
  const handleChanges = (e => {
    e.preventDefault();
    addFeature(props.feature);
    addPrice()
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
