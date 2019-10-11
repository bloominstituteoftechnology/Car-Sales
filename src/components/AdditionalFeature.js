import React from 'react';

import { connect } from 'react-redux'; //access to redux store
import { add_feature } from '../actions/index';

const AdditionalFeature = props => {
  console.log(`additional feature props`,props)

  // onClick={e => {
  //   e.preventDefault();
  //   props.dispatch({ type: "COMPLETED" });
  // }}
  
  
  return (
    <>
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={()=> {props.add_feature(props.feature)}}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
    </>
  );
};

// const mapStateToProps = state => {
//   console.log(state)
//   //what props I want available in the component
//   //will need to pass in props above to get access
//   return{
//     store: state.store.map(e => e.name)
//     //add: state.reducer
//   }
// }

//connection
export default connect(
  null,
  { add_feature  }
)(AdditionalFeature);
