import React, { useReducer } from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
// import {carReducer,initialState} from './reducers/index';
import { connect} from 'react-redux';
import { removeFeature, buyItem} from './actions/carActions';

// export const ADD_FEATURE= 'ADD_FEATURE';
// export const REMOVE_FEATURE= 'REMOVE_FEATURE';

const App = (props) => {
    // const [state,dispatch]=useReducer(carReducer, initialState)
  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: '2019 Ford Mustang',
  //     image:
  //       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  //     features: []
  //   },
  //   additionalFeatures: [
  //     { id: 1, name: 'V-6 engine', price: 1500 },
  //     { id: 2, name: 'Racing detail package', price: 1500 },
  //     { id: 3, name: 'Premium sound system', price: 500 },
  //     { id: 4, name: 'Rear spoiler', price: 250 }
  //   ]
  // };

  // const removeFeature =feature=>{
  //   dispatch({type:REMOVE_FEATURE,payload:feature})

  // }

  // const buyItem =feature=>{
  //   dispatch({type:ADD_FEATURE,payload:feature})  
  // }

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures removeFeature={props.removeFeature} car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={props.buyItem} additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps= state => {
  return state
}

const mapDispatchToProps={
  removeFeature,
  buyItem
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
