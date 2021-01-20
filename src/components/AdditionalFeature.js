import React from 'react';
import { connect } from 'react-redux';
import addFeature from '../Redux/actions';


const AdditionalFeature = props => {

 //onClick will:update state.additionalPrice, push a feature with given id into the features array
 const handleOnClick=(e)=>{
    addFeature(props.feature.id)
 }
//  console.log(props)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleOnClick}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
const mapStateToProps=(state)=>{
  return state;
}


export default connect(mapStateToProps,{ addFeature })(AdditionalFeature);
