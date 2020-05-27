import React from 'react';
import {useSelector} from "react-redux";
import AddedFeature from './AddedFeature';

const AddedFeatures = props => {

  const features = useSelector(state => state[props.carIndex].car.features)

  return (
    <div className="content">
      <h6>Added features:</h6>
      {features.length ? (
        <ol type="1">
          {props.car.features.map((item, index) => (
            <AddedFeature key={item.id} feature={item} index = {props.carIndex} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
