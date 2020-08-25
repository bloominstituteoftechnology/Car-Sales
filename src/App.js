import React from 'react';
// import {useSelector} from 'react-redux'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {connect} from 'react-redux';
import {addFeature, removeFeature} from './actions/featuresActions'


const App = (props) => {
      
      // const additionalFeatures = useSelector(state=> state.featuresReducer.additionalFeatures)
      // const car = useSelector(state => state.featuresReducer.car)
      // const additionalPrice = useSelector(state => state.featuresReducer.additionalPrice)
  // const buyItem = item => {
  //  props.addFeature(item);
  // }

  // const removeItem = item => {
  //   props.removeFeature(item);
  // }

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};
const mapStateToProps = state => {

  return { 
    additionalPrices : state.additionalPrice,
    car : state.car,
    additionalFeatures : state.additionalFeatures

  }
}

export default connect(mapStateToProps, {addFeature, removeFeature}) (App);
