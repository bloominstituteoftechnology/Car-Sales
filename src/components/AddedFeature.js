import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../state/actionCreators';

const AddedFeature = props => {
  return (
    <li>
      <button className="button" onClick={e => props.removeFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(
  state => state,
  actions,
)(AddedFeature);
