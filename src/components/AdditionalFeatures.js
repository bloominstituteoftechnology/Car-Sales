import React from 'react';
import AdditionalFeature from './AdditionalFeature';

import { addFeatureAction } from '../actions/addFeatureAction'
import { connect } from 'react-redux'

const AdditionalFeatures = ({ buyItem, additionalFeatures }) => {
  // console.log('AdditionalFeatures.js: ', addFeatureAction)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {additionalFeatures.length ? (
        <ol type="1">
          {additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} buyItem={buyItem} />
          ))}
        </ol>
      ) : (
          <p>Nice looking car!</p>
        )}
    </div>
  );
};

const mapStateToProps = state => {
  // console.log('AdditionalFeatures.js mapStateToProps', state, addFeatureAction)
  return {
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, { addFeatureAction })(AdditionalFeatures);
