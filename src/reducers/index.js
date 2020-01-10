import { combineReducers } from 'redux';
import priceReducer from './priceReducer';
import carSalesReducer from './carSalesReducer';
import storeReducer from './storeReducer';

export default combineReducers({ priceReducer, carSalesReducer, storeReducer });