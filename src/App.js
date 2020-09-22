import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from "react-redux"

const App = (props) => {
  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total />
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return{
//     car:state.car,
//     additionalFeatures:state.additionalFeatures,
//     additionalPrice:state.additionalPrice,
//   }
// }


export default App;
