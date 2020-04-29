import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { rootReducers } from './reducers/rootReducers'
import { addFeatureAction } from './actions/addFeatureAction'
import { connect } from 'react-redux'

const App = () => {

  // const removeFeature = item => {
  //   // dispatch an action here to remove an item
  // };

  const buyItem = item => {
    // dipsatch an action here to add an item
    console.log('Buy item function: ', item)
    addFeatureAction(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} />
        <Total />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, { addFeatureAction })(App);
