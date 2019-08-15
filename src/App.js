import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';
import {addItem,deleteItem} from './action/index'

const App = (props) => {
  console.log(props)
  

  const removeFeature = item => {
    props.deleteItem(item)
  };

  const buyItem = item => {
    
    props.addItem(item)
  };

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
  console.log("state: ", state);
  return {
    ...state
  };
};

export default connect(
  mapStateToProps, 
  {addItem,deleteItem}
)(App);


