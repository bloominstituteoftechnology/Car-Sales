import { combineReducers } from 'redux';
import priceReducer from './priceReducer';
import carReducer from './carReducer';
import storeReducer from './storeReducer';

export default combineReducers({ priceReducer, carReducer, storeReducer });