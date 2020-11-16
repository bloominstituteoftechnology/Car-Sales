import React from 'react';
import {connect} from 'react-redux';


const AdditionalFeature = props => {
  return (
    <li>
      <button className="button" onClick={()=>{props.addItem(props.feature)}}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    item: state.item
  }
}

export default connect(() => {}, {})  (AdditionalFeature);


/* Add an onClick that will let you add a feature to your car */

