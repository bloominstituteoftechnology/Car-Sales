import { combineReducers } from 'redux';
import priceReducer from './priceReducer';
import carReducer from './carReducer';

export default combineReducers({ priceReducer, carReducer, storeReducer })