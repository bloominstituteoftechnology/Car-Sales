import { act } from 'react-dom/test-utils';
import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/carSaleAction';

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
    ]}
export const carSaleReducer = (state = initialState, action) => {
switch (action.type){
    case ADD_FEATURE:
        const addingFeatures = state.additionalFeatures.filter(feature => {
         return feature.id !== action.payload.id
        })
        return{ ...state, 
                car:{ ...state.car, 
                        price: state.car.price + action.payload.price,
                        feature: [...state.car.features, action.payload]
                    },
                additionalFeatures: addingFeatures
            }
    case REMOVE_FEATURE:
        const removingFeatures = state.car.features.filter(feature => {
         return feature.id !== action.payload.id
        })
        return{ ...state,
                car:{ ...state.car,
                        price: state.car.price - action.payload.price,
                        feature: removingFeatures
                    },
                additionalFeatures: [...state.additionalFeatures, action.payload]
            }
    default: return state;
}
  };