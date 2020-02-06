import React, {useState} from 'react';
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import { buyItem, removeItem } from './actions/index';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';





const App = (props) => {

  console.log(props.car);

  const handleRemoveItem = item => {
    // dispatch an action here to remove an item
    props.removeItem(item);
  };

  const handleBuyItem = item => {
    // dipsatch an action here to add an item
    props.buyItem(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} handleRemoveItem={handleRemoveItem} />
      </div>
      <div className="box">
        <AdditionalFeatures
          handleBuyItem={handleBuyItem}
          additionalFeatures={props.additionalFeatures}
        />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  };
};


export default connect(mapStateToProps, { buyItem, removeItem })(App);
