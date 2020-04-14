import React from 'react';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  console.log("AddedFeatures, props",props)
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => {
            console.log("props.car.features",item) 
            return(   
              <AddedFeature car={props.car} key={item.id} feature={item}  />)
            })} 
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
