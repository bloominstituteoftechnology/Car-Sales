import React, {useState, useReducer} from 'react';
import {initialState, todoReducer} from '../reducers/todoReducer'
import { connect } from 'react-redux'
import {buyFeature} from '../actions'
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};


const mapStateToProps = state => {
  console.log('header state',state)
  return {
    store: state.store,
  }
}
export default connect(
mapStateToProps,
{buyFeature}
)(AdditionalFeatures);
