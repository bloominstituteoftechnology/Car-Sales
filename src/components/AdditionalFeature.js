import React from 'react';

const AdditionalFeature = ({ feature, buyItem }) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => buyItem(feature)} className="button">Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default AdditionalFeature;
