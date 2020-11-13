import {combineReducers} from 'redux';
import {featureReducer} from "./featureReducer"
import {carReducer} from "./carReducer"


export default combineReducers({ carState: featureReducer, carReducer });
