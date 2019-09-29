import React from 'react';
import {connect} from 'react-redux'

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {addFeatureAction} from './actions/actionsIndex'
import {removeFeatureAction} from './actions/actionsIndex'

const App = (props) => {

  const removeFeature = item => {
    props.removeFeatureAction(item)
  };

  const buyItem = item => {
    props.addFeatureAction(item)
  };

  console.log(props.car.features)

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} buyItem={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return{
    car: state.car,
    store: state.store,
    additionalPrice: state.additionalPrice
  }
}

export default connect(
  mapStateToProps, 
  {addFeatureAction, removeFeatureAction})
  (App);
