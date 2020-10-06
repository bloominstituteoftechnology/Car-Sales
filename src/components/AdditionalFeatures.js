//import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react';
import { useSelector } from 'react-redux';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  const additionalFeatures = useSelector(state => state.additionalFeatures)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {!additionalFeatures.length ? (
        <p>Nice looking car!</p>
        ) : (
            <ol type="1">
              <AdditionalFeature />
            </ol>
          )}
      </div>
    );
  };

  export default AdditionalFeatures;