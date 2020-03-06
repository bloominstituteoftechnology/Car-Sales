import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from "react-redux";
import { buyItem } from "./actions";
import { removeFeature } from "./actions";

const App = (props) => {
   
  const { buyItem, removeFeature, state } = props; 

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures 
        car={state.car} 
        removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures 
        additionalFeatures={state.additionalFeatures} 
        buyItem={buyItem}/>
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {state};
}

export default connect(mapStateToProps,{ buyItem, removeFeature })(App);