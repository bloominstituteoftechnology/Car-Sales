import React from 'react';
import { connect } from "react-redux";
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {addFeature, removeFeature, updateTotal} from "./actions/featuresActions";

const App = (props) => {
  

  const removeFeature = item => {
    
  };

  const addFeature = item => {
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} addFeature={addFeature}/>
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};


const mapStateToProps = state => {
  return{
    car: state.car,
  additionalFeatures: state.additionalFeatures,
  additionalPrice: state.additionalPrice
  }
}



export default connect(mapStateToProps, {addFeature, removeFeature, updateTotal})(App);
