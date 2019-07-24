import React from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux'

import { ADD_FEATURE, REMOVE_FEATURE } from './actions'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = () => {
    const [car, store, additionalPrice] = useSelector(state => [state.car, state.store, state.additionalPrice], shallowEqual)
   
    const dispatch = useDispatch()

    const removeFeature = item => {
        dispatch({type: REMOVE_FEATURE, payload: item})
    };

    const buyItem = item => {
        dispatch({ type: ADD_FEATURE, payload: item})
    };

    return (
        <div className="boxes">
            <div className="box">
                <Header car={car} />
                <AddedFeatures car={car} removeFeature={removeFeature} />
            </div>
            <div className="box">
                <AdditionalFeatures store={store} addFeature={buyItem} />
                <Total car={car} additionalPrice={additionalPrice} />
            </div>
        </div>
    );
};

//replaced by useSelector and removed connect() HOC
// const mapStateToProps = (state) => ({
//     additionalPrice: state.additionalPrice,
//     car: state.car,
//     store: state.store
// })




export default App;
