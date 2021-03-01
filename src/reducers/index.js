import {combineReducers} from 'redux';
import {carReducer} from './carReducer';
import {additionalFeaturesReducer} from "./additionalFeaturesReducer";
import {additionalPriceReducer} from './additionalPriceReducer';


export const rootReducer = combineReducers({
  car: carReducer,
  additionalFeatures: additionalFeaturesReducer,
  additionalPrice: additionalPriceReducer
});