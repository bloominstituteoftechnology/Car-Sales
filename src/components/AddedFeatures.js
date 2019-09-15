import React from 'react';

import { useSelector} from 'react-redux';

import AddedFeature from './AddedFeature';

const AddedFeatures = () => {

const carState = useSelector(state => state);

  return (
    <div className="content">
      <h6>Added features:</h6>
      {carState.car.features.length ? (
        <ol type="1">
          {carState.car.features.map(feature => (
            <AddedFeature key={feature.id} feature={feature} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
