import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {connect} from 'react-redux';

import { buyItem, removeFeature } from './actions' //once imported from actions, must be added to connect function

const App = (props) => {
  // console.log(props,'inside app')

  const removeFeature = feature => {
    props.removeFeature(feature)
  };

  const buyItem = item => {
      props.buyItem(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} buyItem={buyItem}/>
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

export default connect(mapStateToProps, {buyItem, removeFeature})(App);//added buyItem after it was imported from actions directory
