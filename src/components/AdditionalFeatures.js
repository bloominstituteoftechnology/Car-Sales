import React from 'react';
import { connect } from 'react-redux';
import { buyItem } from '../actions/actions'
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature buyItem={props.buyItem} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default connect(null, {buyItem})(AdditionalFeatures)
