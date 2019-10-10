import React from 'react';

import { connect } from 'react-redux'; //access to redux store
import { ADD_FEATURE } from '../components/actions/index';

const AdditionalFeature = props => {
  console.log(props)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.ADD_FEATURE(props.id)}>Add</button>
      {props.name} (+{props.price})
    </li>
  );
};

const mapStateToProps = state => {
  //what props I want available in the component
  //will need to pass in props above to get access
  return{
    name: state.car.name,
    price: state.car.price,
    id: state.car.id
  }
}

//connection
export default connect(
  mapStateToProps,
  { ADD_FEATURE  }
)(AdditionalFeature);;
