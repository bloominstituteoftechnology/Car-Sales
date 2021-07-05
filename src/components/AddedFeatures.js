import React from 'react';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6 class="has-text-centered">Added Features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} removeFeature = {props.removeFeature} />
          ))}
        </ol>
      ) : (
        <p class="has-text-centered">You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
