import React from 'react';
import { connect } from 'react-redux'

import AddedFeature from './AddedFeature';

let key = 0
const AddedFeatures = state => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      <ol type='1'>
        {state.featureReducer.features.map(v => v.added ? <AddedFeature key={++key} feature={v} /> : null)}
      </ol>
    </div>
  );
};

export default connect(state => state,{})(AddedFeatures);
