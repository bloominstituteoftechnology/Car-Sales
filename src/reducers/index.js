import { combineReducers } from "redux";
import carReducer from "./carReducer";
import priceReducer from "./priceReducer";
import storeReducer from "./storeReducer";

export default combineReducers({ carReducer, priceReducer, storeReducer });