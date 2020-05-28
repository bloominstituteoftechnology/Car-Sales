import React from 'react';
import AdditionalFeature from './AdditionalFeature';

import {useSelector} from 'react-redux';


const AdditionalFeatures = props => {

  const additionalFeatures = useSelector(state => state.additionalFeatures)

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {additionalFeatures.length ? (
        <ol type="1">
          {additionalFeatures.map((item, index) => (
            <AdditionalFeature key={item.id} feature={item} index={index} addFeature={props.addFeature} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
