import React from 'react';
import {connect} from 'react-redux';
import {removeFeature} from '../actions';
import {useState} from 'react';


const [removeFeat, setRemoveFeat] = useState();

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {

}

export default  connect(mapStateToProps, {removeFeature})(AddedFeature);
