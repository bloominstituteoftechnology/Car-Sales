import {ADD_NEW_FEATURE, DELETE_FEATURE} from '../actions/addFeatureAction';
import { bindActionCreators } from 'redux';

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
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}

export const featureReducer = (state = initialState, action) => {
  console.log(state)
    switch(action.type) {
        case ADD_NEW_FEATURE:
            return {
               ...state,
               additionalPrice: state.additionalPrice + action.price,
               car: {...state.car, features: [...state.car.features, state.additionalFeatures.filter(feature=>{
                return feature.id === action.payload})]}
            };
          case DELETE_FEATURE: 
            return {
              ...state,
              car: {...state.car, features: [state.car.features.filter(feature=>!feature.id === bindActionCreators.payload)]}
            }
        default:
            return state;
    }
}