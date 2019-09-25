import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';
import { removeFeature } from './actions'

const App = (props) => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature()
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log('mSTP state:', state);
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    store: state.store
  }
}

export default connect(mapStateToProps, { removeFeature })(App);
