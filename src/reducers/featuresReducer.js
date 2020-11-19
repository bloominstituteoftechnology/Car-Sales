import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/actions'

const initialState = {
  additionalPrice: 0,
  car: {
    Price: 1200000,
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

export const featureReducer = (state = initialState,)