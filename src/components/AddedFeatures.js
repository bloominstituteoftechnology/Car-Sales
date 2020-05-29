import React from 'react';
import {useSelector} from "react-redux";
import AddedFeature from './RemoveFeature';

const AddedFeatures = props => {
console.log(props)
  const features = useSelector(state => state.car.features)

  return (
    <div className="content">
      <h6>Added features:</h6>
      {features.length ? (
        <ol type="1">
          {props.car.additionalFeatures.map((item, index) => (
            <AddedFeature key={item.id} feature={item} index = {index} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
