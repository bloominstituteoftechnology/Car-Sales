import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addFeatures } from './actions';

const App = props => {
  console.log(addFeatures)
  const dispatch = useDispatch();

  const state = useSelector(state => state);

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = (item, e) => {
    e.preventDefault();
    dispatch(addFeatures(item, e))
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

// const mapStateToProps = state => {
//   console.log(state)
//   return {
//     car: state.car,
//     additionalFeatures: state.additionalFeatures, 
//     additionalPrice: state.additionalPrice
//   }
// }

// export default connect(
//   mapStateToProps, {addFeatures}
// )(App);

export default App;