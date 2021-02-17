import React from 'react';
import {connect} from "react-redux"

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
//import an adding feature
import {addFeature} from "./actions"

//reminder to change state calls to prop state calls
const App = (props) => {

  return (
    <div className="boxes">
      <div className="box">

        <Header car={props.state.car} />
        <AddedFeatures car={props.state.car} />
        <p>Let's Boogie.</p>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.state.additionalFeatures} />
        <Total car={props.state.car} additionalPrice={props.state.additionalPrice} />
      </div>
    </div>
  );
};

//change default export call to be app with connector
export default App;
