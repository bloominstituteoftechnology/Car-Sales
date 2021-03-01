import {ActionTypes} from '../actions';

const initialAdditionalFeatures = [
  { id: 1, name: 'V-6 engine', price: 1500 },
  { id: 2, name: 'Racing detail package', price: 1500 },
  { id: 3, name: 'Premium sound system', price: 500 },
  { id: 4, name: 'Rear spoiler', price: 250 }
];

export const additionalFeaturesReducer = (additionalFeatures = initialAdditionalFeatures, action) => {
  switch(action.type){
    case ActionTypes.ADD_FEATURE: {
      return additionalFeatures.filter(feature => feature.id !== action.payload.id);
    }
    case ActionTypes.REMOVE_FEATURE: {
      return [...additionalFeatures, action.payload]
    }
    default: {
      return additionalFeatures;
    }
  }
}