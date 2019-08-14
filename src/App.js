import React, {Component} from 'react';
import  {connect} from "react-redux";
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {
  ADD_FEATURE, REMOVE_FEATURE
} from "./reducers/actions.js";

const mapStateToProps = (state) => {
  return {...state}
}
const addFeature = feature => {
  
  return {
    type:ADD_FEATURE,
    payload: feature
  }
}
const removeFeature = feature => {
  console.log("engine is trying to remove ",feature, "but your logic is in the way");
  return{
    type:REMOVE_FEATURE,
    payload:feature 
  }
}


class App extends Component {
  
  render(){
    const {car, store, additionalPrice, addFeature, removeFeature} = this.props;
    return (
      <div className="boxes">
        <div className="box">
          <Header car={car} />
          <AddedFeatures removeFeature={removeFeature} car={car} />
        </div>
        <div className="box">
          <AdditionalFeatures addFeature={addFeature} store={store} />
          <Total car={car} additionalPrice={additionalPrice} />
        </div>
      </div>
    );
  };
  }

export default connect(mapStateToProps,{
 addFeature,
 removeFeature,
})(App);
