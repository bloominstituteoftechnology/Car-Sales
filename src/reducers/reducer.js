import { ADD_FEATURE, REMOVE_FEATURE } from '../actions'

export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  store: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};

export const reducer = (state = initialState, action) => {
  console.log(action)
  switch(action.type) {
    case ADD_FEATURE:
      return {
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload]
        },
        store: state.store.filter(addOn => addOn.id !== action.payload.id),
        additionaPrice: (state.additionalPrice += action.payload.price)
      } 
      
    case REMOVE_FEATURE:
      return {
        ...state,
        car: {
          ...state.car,
          features: state.car.features.filter( addOn => addOn.id !== action.payload.id)
        },
        store: [...state.store, action.payload],
        additionalPrice: (state.additionalPrice -= action.payload.price)
      }
    default:
      return state;
  }
}