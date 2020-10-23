import React from 'react';
import {connect} from 'react-redux'
import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  console.log('props.features',props.features)
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(feature => {
            return <AddedFeature key={feature.id} feature={feature} />
          })}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};
const mapStateToProps = state=>{

  return {
    features: state.car.features
  }
  
}

export default connect(mapStateToProps,null)(AddedFeatures);
