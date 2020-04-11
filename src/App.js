import React from 'react';
import { connect } from "react-redux";

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import AddedFeature from "./components/AddedFeature";
import Total from './components/Total';
import { removeFeature, buyItem } from "./actions";

const App = props => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    const featureExists = props.car.features.find(feature => feature.id === item.id)
    if (!featureExists) {
      props.buyItem(item)
    }
  };
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures removeFeature={removeFeature} car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem}  additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { additionalFeatures, additionalPrice, car } = state
  return {
    additionalFeatures,
    additionalPrice,
    car
  }
}

export default connect(
  mapStateToProps,
  {
    removeFeature,
    buyItem
  }
)(App);
