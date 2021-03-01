import { REMOVE_FEATURE, ADD_FEATURE } from '../actions/appActions'

// Initial state grabbed from App.js originally, State will be housed here then connected to store.
const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
}

//Reducer for App.js

export const appReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case REMOVE_FEATURE:
            console.log(action.payload)
            return {
                ...state, // feature.id - 1 !== {...} || feature.id !== action.payload.id
                additionalPrice: state.additionalPrice - action.payload.price,
                car: {...state.car, features: state.car.features.filter((feature) => feature[0].id !== action.payload.id)}
            };
            //create a variable that stores addtionalFeatures
        case ADD_FEATURE:
          console.log('Addfeature action is working ', action.payload)
            const newFeatureAdded = state.additionalFeatures.filter((feature) => feature.id === action.payload)
            return {
              ...state,
              additionalPrice: state.additionalPrice + newFeatureAdded[0].price,
              // additionalFeatures: state.additionalFeatures.filter((feature) => 
              // feature.id === action.payload)
              car: {...state.car, features: [...state.car.features, newFeatureAdded]}
            }
        default:
            return state;
    };
};