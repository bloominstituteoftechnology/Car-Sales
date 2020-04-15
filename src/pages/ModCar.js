import React, {useCallback} from 'react';
import { connect, useSelector, useDispatch } from "react-redux";

import Header from '../components/Header';
import AddedFeatures from '../components/AddedFeatures';
import AdditionalFeatures from '../components/AdditionalFeatures';
import Total from '../components/Total';


const ModCar = () => {

  const props = useSelector(state => state)
  const dispatch = useDispatch()
  const dispatchRemoveFeature = useCallback((item) => dispatch({ type: 'REMOVE_FEATURE', payload: item }), [dispatch])
  const dispatchBuyItem = useCallback((item) => dispatch({ type: 'BUY_ITEM', payload: item }), [dispatch])

  const handleRemoveFeature = item => {
    dispatchRemoveFeature(item)
  };

  const handleBuyItem = item => {
    const featureExists = props.car.features.find(feature => feature.id === item.id)
    if (!featureExists) {
      dispatchBuyItem(item)
    }
  };
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures removeFeature={handleRemoveFeature} car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={handleBuyItem}  additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

export default ModCar;
