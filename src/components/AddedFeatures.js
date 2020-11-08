import React from 'react';
import { connect } from 'react-redux';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  {console.log('AddedFeatures',props.car)}
  return (
    
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(a => {
            console.log('map', a);
            return(<AddedFeature feature={a} key={a.id}/> )
})}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
return{
  car: state.car,
  additionalPrice: state.additionalPrice
}
}
export default connect(mapStateToProps, {})(AddedFeatures)

