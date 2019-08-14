import React from 'react';
import AddedFeature from './AddedFeature';
import { connect } from 'react-redux';
import { mainReducer } from '../reducers/reducers'


const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.featuresOnProps.length ? (
        <ol type="1">
          {props.featuresOnProps.map(item => (
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
  console.log('state from mapState in AddedFeature', state);
  return {
      featuresOnProps: state.car.features
  };
};

export default connect(
  mapStateToProps,
  { mainReducer }
)(AddedFeatures);

