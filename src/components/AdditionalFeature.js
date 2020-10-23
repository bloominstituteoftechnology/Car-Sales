import React from 'react';
import {addFeature} from './actions/featureAction'
import {connect} from 'react-redux'

const AdditionalFeature = props => {
  console.log('props from additionalFeature',props)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={()=>props.addFeature(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
const mapStateToProps = state=>{

}
// export default AdditionalFeature
export default connect(mapStateToProps,{addFeature})(AdditionalFeature);
