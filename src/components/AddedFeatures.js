import React from 'react';
import { connect } from 'react-redux';

import AddedFeature from './AddedFeature';


const AddedFeatures = props => {
  console.log(`Added Features`, props.features.length)
  console.log(`Added Features`, props.features)
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


const mapStateToProps = state => {
  //what props I want available in the component
  //will need to pass in props above to get access
  return{
    features: state.car.features
  }
}

//connection
export default connect(
  mapStateToProps,
)(AddedFeatures);