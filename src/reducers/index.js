import { ADD_FEATURE } from '../actions';
import { DELETE_FEATURE } from '../actions';

// initial states
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
// helper functions
function updatedAdditionalPrice(features) {
  let sum = 0;
  features.forEach(feature => {
    sum += feature.price;
  });
  return sum;
}

export const reducer = (state = initialState, action) => {
  let updatedFeatures = [];

  switch (action.type) {
    case "ADD_FEATURE":

      // This logic adds the feature to features:
      const selectedId = action.payload;
      const selectedFeature = state.additionalFeatures.find(feature => feature.id === selectedId);
      if (!selectedFeature) {
        return state; // handle edge case
      }

      // This logic removes the feature from additionalFeatures:
      const updatedAdditionalFeatures = state.additionalFeatures.filter(feature => {
        return feature.id !== selectedId
      }); 

      updatedFeatures =  [...state.car.features, selectedFeature]

      return {
        ...state,
        car: {
          ...state.car,
          features: updatedFeatures,
        },
        additionalFeatures: updatedAdditionalFeatures,
        additionalPrice: updatedAdditionalPrice(updatedFeatures),
      };

      //   car[features]: [...state.car.features, selectedFeature]
      // }; // QUESTION:  why didn't this work?

    case "DELETE_FEATURE":
      console.log("delete feature reducer case called");

      // This logic removes the feature from features.
      const deletedId = action.payload;
      // get the feature from the features array
      const deletedFeature = state.car.features.find(feature => feature.id === deletedId);
      if (!deletedFeature) {
        return state; // handle edge case
      }
      // update features, remove selectedFeature:
      updatedFeatures = state.car.features.filter(feature => {
        return feature.id !== deletedId
      });

      return {
        ...state,
        car: {
          ...state.car,
          features: updatedFeatures,
        },
        additionalFeatures: [...state.additionalFeatures, deletedFeature],
        additionalPrice: updatedAdditionalPrice(updatedFeatures),
      }


    default:
      return state
  };

}
