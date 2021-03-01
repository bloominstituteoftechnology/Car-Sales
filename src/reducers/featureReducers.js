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
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500, },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

export const featureReducer = (state = initialState, action) => {

    console.log('reducer state', state)

    switch(action.type) {

      case ADD_FEATURE:

        const removeSelectedFromAdditional = state.additionalFeatures.filter(feature => 
          feature.id !== action.payload.id)

        return {
          ...state,
          car: {
            ...state.car, 
            price: state.car.price + action.payload.price,
            features: [...state.car.features, action.payload]
          },
          additionalFeatures: removeSelectedFromAdditional,
          additionalPrice: state.additionalPrice + action.payload.price
        }
      case REMOVE_FEATURE:

        const removeSelectedFromFeatures = state.car.features.filter(feature => 
          feature.id !== action.payload.id);

        return {
          ...state,
          car: {
            ...state.car, 
            price: state.car.price - action.payload.price,
            features: removeSelectedFromFeatures,
          },
          additionalFeatures: [...state.additionalFeatures, action.payload],
          additionalPrice: state.additionalPrice - action.payload.price
        } 
      default:
        return state
    }
}