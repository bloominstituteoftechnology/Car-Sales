import React from 'react';
import { connect } from 'react-redux';
import { addFeature, removeFeature } from './actions/index';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = props => {
// MVP REQUIREMENTS:
// x Move the given state to the reducer as the initial state for the Redux store.
// Set up the Redux flow
// User should be able to add features to their car
// User should be able to remove added features from their car
// Total should update as user adds and removes features from their car

// DUSTIN'S PREFERRED FLOW:
// 👉 x Set up "empty" reducer and initial state 
// 👉 x Set up store and Provider 
// 👉 Connect components 
// 👉 Add events and event handlers in UI 
// 👉 Build action creators 
// 👉 write the reducer logic for the actions 
// 👉 Rinse and repeat

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item);
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures removeFeature={removeFeature} car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} buyItem={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    store: state.store
  }
}

export default connect(
  mapStateToProps,
  { addFeature, removeFeature }
  //Shou this be buyItem instead of addFeature?
)(App);