import { ADD_FEATURE } from '../actions/addFeatureAction'
import { DELETE_FEATURE } from '../actions/deleteFeatureAction'

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

export const rootReducers = (state = initialState, action) => {
  // console.log('rootReducer state:', action)
  switch (action.type) {
    case ADD_FEATURE:
      console.log('Add feature case', action)
      return {
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload]
        },
        additionalPrice: state.additionalPrice + state.car.features.price
      }
    case DELETE_FEATURE:
      console.log('Delete feature case')
      return {
        ...state
      }
    default:
      console.log('Default case')
      return state
  }
}