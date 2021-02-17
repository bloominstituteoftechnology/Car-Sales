import { ADD_FEATURES, DELETE_FEATURES } from '../actions/index';

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

export const reducer = (state = initialState, action ) => {
      switch(action.type){
          case ADD_FEATURES:
            const newFeature = state.additionalFeatures.find(
              (feature) => feature.id === action.payload)
                return{
                  ...state,
                    car: {
                        ...state.car,
                        features: [...state.car.features, newFeature]
                    },
                    additionalFeatures: state.additionalFeatures.filter(feature => action.payload !== feature.id),
                    additionalPrice: state.additionalPrice + newFeature.price
                }
              case DELETE_FEATURES:
                const removeFeature = state.car.features.find((feature) => feature.id === action.payload)
                  return{
                    ...state, 
                    additionalPrice: state.additionalPrice - removeFeature.price,
                    additionalFeatures: [...state.additionalFeatures, removeFeature],
                    car: {
                      ...state.car, 
                      features: state.car.features.filter((feature) => feature.id !== action.payload)
                    }
                }
          default:
              return state;
      }
  }

  