import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { buyItem } from '../actions/addAction';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    features: state.additionalFeatures
  };
};

const AdditionalFeatures = props => {
  console.log('Feature: ', props.features);
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};


export default connect(
  mapStateToProps,
  { buyItem }
)(AdditionalFeatures);
