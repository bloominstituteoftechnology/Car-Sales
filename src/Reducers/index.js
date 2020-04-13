import {combineReducers} from "redux";
import {addedFeatureReducer} from "./addedFeatureReducer"
import {additionalFeatureReducer} from "./additionalFeatureReducer"

 const rootReducer = combineReducers({rootReducer: addedFeatureReducer, additionalFeatureReducer});

 export default rootReducer