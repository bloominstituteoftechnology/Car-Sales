import React from 'react';
import { connect } from "react-redux";

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import AddedFeature from "./components/AddedFeature";
import Total from './components/Total';
import { removeFeature } from "./actions";

const App = props => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        {props.car.features && props.car.features.map(feature => <AddedFeature removeFeature={removeFeature} feature={feature}/>)}
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
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
    removeFeature
  }
)(App);
