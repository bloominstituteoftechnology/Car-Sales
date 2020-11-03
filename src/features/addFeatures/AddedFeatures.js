import React from 'react';
import { useSelector } from "react-redux";
import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
	const currentFeatures = useSelector(state => state.features.added)
  return (
    <div className="content">
      <h6>Added features:</h6>
      {currentFeatures.length ? (
        <ol type="1">
          {currentFeatures.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
