import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

// connect state to app, pass it down to each component
import { connect } from 'react-redux'

//import actions
import {addFeature, deleteFeature} from './actions/appActions'

const App = (props) => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
    // onClick gets as props

  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    // onClick gets as props
    props.addFeature(item)
  };
  return (
    <div className="boxes">
      <div className="box">
        test
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} buyItem={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps,{addFeature, deleteFeature})(App);
