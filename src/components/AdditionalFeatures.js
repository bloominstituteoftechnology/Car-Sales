import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { buyItem } from '../actions/addAction';
import { connect } from "react-redux";

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.AdditionalFeature.car,
    price: state.AdditionalFeature.price
  };
};

export default connect(
  mapStateToProps,
  { buyItem }
)(AdditionalFeatures);
