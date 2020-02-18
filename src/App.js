import React from 'react';
import { addFeature } from './actions';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';

const App = props => {
  const {state, addFeature } = props 
  console.log('state!', state);

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.carReducer.car} />
        <AddedFeatures car={state.carReducer.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.carReducer.additionalFeatures} addFeature={addFeature} />
        <Total car={state.carReducer.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps, {addFeature})(App);





  // const removeFeature = item => {
  //   // dispatch an action here to remove an item
  // };

  // const buyItem = item => {
  //   // dipsatch an action here to add an item
  // };