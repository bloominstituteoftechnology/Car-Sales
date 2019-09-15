import React from 'react';
import AdditionalFeature from './AdditionalFeature';

import {useSelector} from 'react-redux';

const AdditionalFeatures = () => {

const addState = useSelector(state => state);

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {addState.store.length ? (
        <ol type="1">
          {addState.store.map(feature => (
            <AdditionalFeature key={feature.id} feature={feature} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
