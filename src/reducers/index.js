import { combineReducers } from "redux";
import { featuresReducer } from "./featuresReducer";

export const rootReducer = combineReducers({
  featuresReducer: featuresReducer,
});
