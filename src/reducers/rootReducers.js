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
  if (state.car.features.includes(action.payload) && action.type === ADD_FEATURE) {
    console.log('If statement')
    action.type = ''
  }
  switch (action.type) {
    case ADD_FEATURE:
      console.log('Add case: ', state.additionalPrice, action.payload.price)
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.payload.price,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload]
        }
      }
    case DELETE_FEATURE:
      // console.log('Delete case: ', action)
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.payload.price,
        car: {
          ...state.car,
          features: [...state.car.features.splice(0, action.payload), ...state.car.features.splice(1)]
        }
      }
    default:
      console.log('Default case')
      return state
  }
}