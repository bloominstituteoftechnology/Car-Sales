import { ADD_FEATURE } from '../actions/actions';
import { REMOVE_FEATURE } from '../actions/actions'; 

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
  }

  function reducer(state = initialState, action) {
    switch(action.type) {
      case ADD_FEATURE:
        return {...state, car:{...state.car, features: [...state.car.features, action.payload], price: state.car.price + action.payload.price}, additionalFeatures: state.additionalFeatures.filter(a => a.id !== action.payload.id)}
      case REMOVE_FEATURE: 
        return {...state, car:{...state.car, features: state.car.features.filter(a => a.id !== action.payload.id), price: state.car.price - action.payload.price}, additionalFeatures:[...state.additionalFeatures, action.payload]}
      default: 
        return state;
    }
  }
  
  export default reducer;