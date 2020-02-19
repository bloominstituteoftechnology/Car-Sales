import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions/actions';

const AddedFeature = props => {

const onClickFeature = e => {
  e.preventDefault();
  props.removeFeature(props.feature);
}

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={onClickFeature}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return { props: state}
}

export default connect(mapStateToProps, { removeFeature })(AddedFeature);
