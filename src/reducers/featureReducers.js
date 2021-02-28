import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/featuresActions';

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
      { id: 1, name: 'V-6 engine', price: 1500, selected: false },
      { id: 2, name: 'Racing detail package', price: 1500, selected: false  },
      { id: 3, name: 'Premium sound system', price: 500, selected: false  },
      { id: 4, name: 'Rear spoiler', price: 250, selected: false  }
    ]
  };

export const featureReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FEATURE:
            //if additional feature id === action.payload, return the action.payload in the features array
            return {
                ...state,
                features: state.additionalFeatures.id === action.payload.id ? action.payload : state.features
            }
        case REMOVE_FEATURE:
            //if additional feature id === action payload id, return everything but that
            //what if there's more than one selected?
            return {
                ...state,
                features: state.features.filter(feature => feature.id !== action.payload.id && feature)
            } 
        default:
            return state
    }
}