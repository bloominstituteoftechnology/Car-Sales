import { combineReducers } from "redux";
import {featuresReducer} from './featuresReducer'; 
import {priceReducer}from './priceReducer'

export default combineReducers({featuresReducer,priceReducer})