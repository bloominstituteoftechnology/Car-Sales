import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
//import actions 
import { addFeature, removeFeature, addTotal }from './actions/index'
//import connecting something to something
import { connect } from 'react-redux'

const App = props => {

  // THIS IS ALL MOVED TO INITIAL STATE IN REDUCER
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

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item)
    props.addTotal(-item.price)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature(item)
    props.addTotal(item.price)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} additionalPrice={props.additionalPrice} />
        <AddedFeatures 
        addFeature={props.addFeature}
        removeFeature={removeFeature}
        car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures 
          buyItem = {buyItem}
        additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

//something important is happening here.  LEARN IT!!
function mapStateToProps(state) {
  return{
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice,
  }
}

//This is connecting some stuff.  LEARN MORE ABOUT THIS TOO!!
export default connect(mapStateToProps, {
  addFeature,
  removeFeature,
  addTotal
})(App);


