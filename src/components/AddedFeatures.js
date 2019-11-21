import React from 'react';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  return (
    
    <div className="container">
      <h6 className ="title is-size-5">Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">{
          
        }
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item}removeFeatures={props.removeFeatures} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
