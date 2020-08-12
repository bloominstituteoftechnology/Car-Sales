import React from 'react';
import { connect } from 'react-redux'
import AdditionalFeature from './AdditionalFeature';

let key = 0
const AdditionalFeatures = state => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {state.featureReducer.features.reduce((a,v) => !v.added ? ++a : a, 0) ? (
        <ol type="1">
          {state.featureReducer.features.map(item => {
            if (!item.added) {
              return (<AdditionalFeature key={++key} feature={item} />)
            } else {
              return null
            }
          })}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default connect(state => state, {})(AdditionalFeatures);
