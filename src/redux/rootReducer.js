import { combineReducers } from 'reux';

import useReducer from './car-features/carFeaturesReducer';

export default combineReducers({

    car: useReducer

})