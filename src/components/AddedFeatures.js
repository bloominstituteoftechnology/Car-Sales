import React from 'react';
import {connect} from "react-redux"; 

import AddedFeature from './AddedFeature';
// list added features here leftÍxcxxc
const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} removeItem = {props.removeItem}/>
          ))}
        </ol>
      ) : (
        <p>Select features on right</p>
      )}
    </div>
  );
};


const mapStateToProps = state => {
return{ 
  car:{
    features: state.featuresReducer.car.features 
  }
}
}

export default connect(mapStateToProps,{})(AddedFeatures)