import React from 'react';
import { BUY_ITEM } from '../actions/actions'
import { REMOVE_FEATURE } from '../actions/actions'

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

const CarReducer = (state = initialState, action) => {
  // console.log(action)
    switch(action.type){
        case BUY_ITEM:
          console.log("fired")
          console.log(action)
          console.log(state.additionalPrice)
            const item = state.additionalFeatures.find(i => i.id === action.payload)
            const newAdditionalPrice = state.additionalPrice += item.price
            return {
                ...state, car: {...state.car, additionalPrice: newAdditionalPrice , features: [...state.car.features,item] }
            };
        case REMOVE_FEATURE:
            const item2 = state.additionalFeatures.find(i => i.id === action.payload)
            const newAdditionalPrice2 = state.additionalPrice -= item2.price 
            const newFeatures = state.car.features.filter(i => {
                return i.id !== action.payload
            })
            return {...state, car: {...state.car, additionalPrice: newAdditionalPrice2, features: newFeatures }}
        default:
            return state;
    }
}
 
export default CarReducer;
