import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from "react-redux";
import { addFeature, removeFeature, updateAdditional } from './actions/featuresActions';

const App = (props) => {

  console.log("****** props from App.js: ",props)
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures removeFeature={props.removeFeature} car={props.car} updateAdditional={props.updateAdditional}/>
      </div>
      <div className="box">
        <AdditionalFeatures addFeature={props.addFeature} additionalFeatures={props.additionalFeatures} updateAdditional={props.updateAdditional}/>
        <Total car={props.car} additionalPrice={props.additionalPrice}  />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("state from mapStatetoProps",state)
  return{
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures,
  }
}

export default connect(mapStateToProps, {addFeature, removeFeature, updateAdditional})(App)