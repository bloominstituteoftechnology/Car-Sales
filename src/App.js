import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

// MARK: redux
import { connect } from "react-redux";

// MARK: Action
import { addFeature, removeFeature } from "./actions/featureAction";


const App = (props) => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item)
    //console.log("remove item", item)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature(item)
    //console.log("add item", item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header/>
        <AddedFeatures remove={props.removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures buy={buyItem}/>
        <Total />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, { addFeature, removeFeature })(App);