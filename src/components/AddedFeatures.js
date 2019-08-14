import React from 'react';
import { connect } from "react-redux";
import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  // console.log('addedfeaturesprops', props)
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.carFeatures.length ? (
        <ol type="1">
          {props.carFeatures.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  // console.log('AddedFeaturesState', state);
  return {
    carFeatures: state.store,
  };
};

export default connect(
  mapStateToProps,
  {}
)(AddedFeatures);
