import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

// import { addFeature, removeFeature } from './actions/appActions'
import { connect } from 'react-redux'

const App = (props) => {

  const state = {
    additionalPrice: 0,
    
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };
  
   
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
        <Total car={props.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state)
  return{
    car: state.car,
  }
}

// const mapDispatchToProps = (dispatch) => {
//  return{
//    addFeature: (feature) => dispatch(addFeature(feature)),
//    removeFeature: (feature) => dispatch(removeFeature(feature)),
//  }
// }

export default connect(mapStateToProps)(App);
