import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/actions'

const initialState = {
  additionalPrice: 0,
  car: {
    price: 1200000,
    name: 'Buggati',
    image: 'https://car-pictures-download.com/wp-content/uploads/Bugatti-super-car-pictures.jpg',
    features: []
  },
  additionalFeatures: [
    {
      id: 1,
      name: 'W-12 Engine',
      price: 145800
    },
    {
      id: 2,
      name: 'wrapping',
      price: 2450
    },
    {
      id: 3,
      name: 'Two Sets Spare Tire',
      price: 12450
    },
  ]
}

export const featureReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      return {
        ...state,
        car: {
          ...state.car,
          features: [
            ...state.car.features,
            action.payload
          ],
          price: state.car.price + action.payload.price
        }
      }
    case REMOVE_FEATURE:
      return {
        ...state,
        car: {
          ...state.car,
          features: [
            ...state.car.features.filter((feature) => {
              console.log('from feature reducer remove feature', feature);
              return feature.id !== action.payload.id
            })
          ],
          price: state.car.price - action.payload.price
        }
      }
    default:
      return state;
  }
}