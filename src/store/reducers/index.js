import { combineReducers } from "redux";
import { additionalFeaturesReducer } from "./additionaFeaturesReducer";
import { carReducer } from "./carReducer";

export default combineReducers({ additionalFeaturesReducer, carReducer });
