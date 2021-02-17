import React from 'react';
import {connect} from "react-redux"

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addFeature } from "./actions/featureActions"
//import an adding feature

//reminder to change state calls to prop state calls
const App = (props) => {

  return (
    <div className="boxes">
      <div className="box">

        <Header car={props.state.car} />
        <AddedFeatures car={props.state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.state.additionalFeatures} />
        <Total car={props.state.car} additionalPrice={props.state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    state: state
  }
}
//change default export call to be app with connector. Remember currying.
export default connect(mapStateToProps)(App)
