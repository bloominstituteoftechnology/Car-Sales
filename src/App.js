import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';
import { addItem, removeItem} from './components/action/action'

const App = props => {

  const removeFeature = item => {
    props.removeItem(item)
  };

  const buyItem = item => {
props.addItem(item) 
 };
  

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} buyItem={buyItem}/>
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
  };

  const mapState = state => {
    return {
      car: state.car,
      additionalFeatures: state.additionalFeatures,
      additionalPrice: state.additionalPrice
    };
  };

  export default connect(mapState, {addItem, removeItem})(App);
