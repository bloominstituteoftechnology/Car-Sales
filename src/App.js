import React from 'react';
import { connect } from 'react-redux'

import { addFeature, removeFeature } from './actions'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {
  const removeFeature = item => {
    props.removeFeature(item)
  };

  const buyItem = item => {
    props.addFeature(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} addFeature={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
    additionalPrice: state.total.additionalPrice,
    car: state.total.car,
    store: state.total.store
})

const mapDispatchToProps = {
    addFeature,
    removeFeature
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
