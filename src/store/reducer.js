import { ADD_ITEM, 
         REMOVE 
    } from './actions'


const initialState = {
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

  export const carInfoReducer = (state = initialState, action) => {
      console.log(action)
    
    switch (action.type) {

        case ADD_ITEM:
            return {
                ...state,
                car: {
                    ...state.car, 
                    features: [ ...state.car.features,
                        {
                        name: action.payload.name
                        }
                    ]},
                additionalPrice: state.additionalPrice + action.payload.price
            }

        case REMOVE:
            let newArray = state.car.features.filter(feature => feature.name !== action.payload)
            let index = state.store.findIndex(element => element.name === action.payload)
            
            return {
                ...state,
                car: { ...state.car, features: newArray},
                additionalPrice: state.additionalPrice - state.store[index].price
            }

        default: 
            return state

    }
  }