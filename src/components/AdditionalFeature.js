import React from 'react';
import {connect} from "react-redux"
import {add} from "../actions/actions"


const AdditionalFeature = props => {

  const addFeat = (e) => {
    add(e.target.value);
  };
  console.log(addFeat)

  return (
    <li>
      <button className="button" onClick={addFeat} type='button'>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapDispatchToProps = {
  add

}

export default connect( state => state, mapDispatchToProps)(AdditionalFeature)
