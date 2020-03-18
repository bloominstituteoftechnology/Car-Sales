import React from 'react';
import { connect } from "react-redux";
import { updatePrice, removeFeature, addFeature } from "./actions/Action"
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


const App = props => {
  const removeFeature = item =>{
    props.removeFeature(item)
    props.updatePrice(-item.price)
  };
  const buyItem = item =>{
    props.addFeature(item)
    props.updatePrice(item.price)
  };
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures 
        additionalFeatures={props.additionalFeatures} 
        buyItem={buyItem}
        />
        <Total 
        car={props.car} 
        additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice,
    car: state.car
  };
};

export default connect(mapStateToProps, {addFeature,
   removeFeature, updatePrice})(App);
