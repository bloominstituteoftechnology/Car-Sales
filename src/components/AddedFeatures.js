import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../actions/addAction';

import AddedFeature from './AddedFeature';

const mapStateToProps = state => ({
    features: state.car.features
});

const AddedFeatures = props => {
  console.log("", props);
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default connect(
  mapStateToProps,
  {removeItem}
)(AddedFeatures);
