import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { removeFeature, addItem } from './actions/action'

const App = (props) => {

  // const removeFeature = item => {
  //   // props.dispatch({ type: REMOVE_FEATURE});
  //   props.removeFeature();
  // };

  // const buyItem = item => {
  //   // props.dispatch({ type: ADD_ITEM })
  //   props.addItem()
  // };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={props.removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} addItem={props.addItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};


function mapStateToProps(state) {
  return {
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice,
    car: state.car
  }
}

// when key:value are the same, can just call the key.
const mapDispatchToProps = {
    addItem,
    removeFeature
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);
