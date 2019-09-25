import React from 'react';
import { connect } from 'react-redux';
import AddedFeature from './AddedFeature';
import { removeCarPart } from '../actions'

const AddedFeatures = props => {
  const removePart = item => {
    props.removeCarPart(item);
  };
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature 
            key={item.id} 
            feature={item}
            removePart={removePart} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car 
  };
};

export default connect(
  mapStateToProps,
  { removeCarPart },
)(AddedFeatures);
