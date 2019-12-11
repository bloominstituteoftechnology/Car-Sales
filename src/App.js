import React from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { addFeature, removeFeature } from "./actions"
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {

  const {car, additionalFeatures, additionalPrice } = useSelector((state) => ({
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice,
  }), shallowEqual);
  
  const dispatch = useDispatch();

  const removeItem = item => {
    console.log('remove click')
    dispatch(removeFeature(item));
  };

  const addItem = item => {
    console.log('add click')
    dispatch(addFeature(item));    
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} removeItem={removeItem} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={additionalFeatures} addFeature={addItem} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

export default App;

// const mapStateToProps = state => {
//   // console.log ('state', state)
//   return {...state};
// };

// export default connect(
//   mapStateToProps,
//   {addFeature, removeFeature}
//   )(App);
