import React from 'react';
import {connect} from 'react-redux'
import AdditionalFeature from './AdditionalFeature';
import { addFeatureAction } from '../actions/actionsIndex';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} buyItem={props.buyItem} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
