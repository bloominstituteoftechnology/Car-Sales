import {useState, useEffect, useReducer} from 'react';
//import { removeFeature } from './featureActions';
import {v4 as uuid} from 'uuid';
import { removeFeature } from './featureActions';

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: uuid(), name: 'V-6 engine', price: 1500 },
      { id: uuid(), name: 'Racing detail package', price: 1500 },
      { id: uuid(), name: 'Premium sound system', price: 500 },
      { id: uuid(), name: 'Rear spoiler', price: 250 }
    ]
  };
  const remove = (items,index) => {
    return [...items.slice(0,index),
            ...items.slice(index+1,items.length)];
  };

  export function reducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_FEATURE':
        const newFeature = {...action.payload}
        const newFeatureIndex = state.additionalFeatures.findIndex((feature)=>feature.id === newFeature.id)

        return{
           ...state,
           additionalPrice: (state.additionalPrice+newFeature.price),
           car: {
                ...state.car,
                features: [...state.car.features, newFeature ]
                },
            additionalFeatures: remove(state.additionalFeatures, newFeatureIndex)
       }
       //return state
      case 'REMOVE_FEATURE':
        const removedFeature = {...action.payload}
        const removedFeatureIndex = state.car.features.findIndex((feature)=>feature.id === removedFeature.id)

        return {
            ...state,
            additionalPrice: (state.additionalPrice - removedFeature.price),
            car: {
                ...state.car,
                features: remove(state.car.features,removedFeatureIndex)
            },
            additionalFeatures: [...state.additionalFeatures, removedFeature]
        }
        //return state;
      default:
        return state
    }
  }