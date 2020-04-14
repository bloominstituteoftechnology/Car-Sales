import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from 'react-redux';
import {Add_Features} from './actions/appActions'

const App = (props) => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    console.log("item",item)
    props.Add_Features(item)
  };
  // console.log(props)
  return ( 
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures 
        car={props.car}  
          
        />
      </div>
      <div className="box">
        <AdditionalFeatures 
        add_features={buyItem} 
        additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div> 
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    // id: state.additionalFeatures.id
  };
};



export default connect(mapStateToProps,{Add_Features})(App);
