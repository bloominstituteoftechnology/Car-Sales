import React from 'react';

const AdditionalFeature = props => {
	//console.log("tl: additioanl feature (single) props:", props);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.buy(props.feature)} className="button"><i className="fas fa-plus-circle"></i></button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


export default AdditionalFeature
