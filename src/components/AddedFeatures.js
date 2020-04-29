import React from 'react';
import AddedFeature from './AddedFeature';

import { connect } from 'react-redux'

const AddedFeatures = ({ car }) => {
  // console.log('AddedFeatures.js props: ', car)
  return (
    <div className="content">
      <h6>Added features:</h6>
      {car.features.length ? (
        <ol type="1">
          {car.features.map(item => (
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
  return {
    car: state.car
  }
}

export default connect(mapStateToProps, {})(AddedFeatures);
