import React from 'react';
import {connect} from "react-redux"

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

//actioncreator
import {addFeatures, removeFeatures} from "./actions"

const App = (props) => {


  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeatures(item)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeatures(item)
  };

  console.log(props)
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} buyItem={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  
})
export default connect(mapStateToProps, {addFeatures, removeFeatures})(App);
