import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addItem, removeItem } from "./actions/actions.js"
import { connect } from 'react-redux';

const App = (props) => {

  const removeFeature = item => {
    props.removeItem(item);
  };

  const buyItem = item => {
    props.addItem(item);
  };

  return (
    <div className="boxes">
      {buyItem()}
      <div className="box">
        <Header/>
        <AddedFeatures/>
      </div>
      <div className="box">
        <AdditionalFeatures/>
        <Total/>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("State app", state);
  return {
  }
}

export default connect(
  mapStateToProps,
  { addItem, removeItem }  // same as { updateTitle: updateTitle }
)(App);