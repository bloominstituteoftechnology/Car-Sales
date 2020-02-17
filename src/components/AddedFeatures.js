import React from 'react';

import { connect } from 'react-redux';
import { removeFeature } from '../actions';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
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

// export default AddedFeatures;
const mapStateToProps = state => {
  return {
    carFeatures: state.car.features,
  }
}

export default connect(
  mapStateToProps,
  { removeFeature }
)(AddedFeatures);