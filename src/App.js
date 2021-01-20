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
        <Header car={this.state.car} />
        <AddedFeatures car={this.state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={this.state.additionalFeatures} />
        <Total car={this.state.car} additionalPrice={this.state.additionalPrice} />
      </div>
    </div>
  );
};




const mapStateToProps = state =>{
  return  {
    car: state.car,
    price: state.price,
    name:  state.name,
    image: state.image,
    features:state.features,
    additionalPrice: state.additionalPrice,
    additionalFeatures:state.additionalFeatures
  
}
}
export default connect(mapStateToProps,{},)(App)
