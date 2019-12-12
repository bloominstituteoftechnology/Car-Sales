import React from 'react';
import {connect} from 'react-redux';
import {removeItem} from '../action/addactions';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  const removeFeature = feature => {
    props.removeItem(feature)
  };

  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} {...item} remove={removeFeature} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    car: state.car
  }
}
export default connect(
  mapStateToProps,
  {removeItem}) (AddedFeatures);
